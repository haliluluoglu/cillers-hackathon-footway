import json
import os
from fastapi import APIRouter, Query
from pydantic import BaseModel
from openai import OpenAI
from anthropic import Anthropic
from typing import List, Optional, Dict, Any

from api.src.services.wardrobe import WardrobeItem, WardrobeService
from clients.footway import FootwayClient, InventoryItem
from clients.postgres import PostgresVectorClient, PostgresWardrobeClient
from utils import log

logger = log.get_logger(__name__)

router = APIRouter()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

#### Models ####

## Wardrobe Models

class GetWardrobeResponse(BaseModel):
    wardrobeItems: List[WardrobeItem]

class GetWardrobeItemResponse(BaseModel):
    wardrobeItem: WardrobeItem

## Demo Endpoints ##

class DemoRequest(BaseModel):
    prompt: str

class DemoResponse(BaseModel):
    message: str

## Footway ##

class InventorySearchResponse(BaseModel):
    items: List[InventoryItem]
    total_items: int
    current_page: int
    total_pages: int

## Vector Search ##

class VectorSearchItem(BaseModel):
    id: str
    name: str
    description: str
    similarity_score: float
    metadata: Dict[str, Any]

class VectorSearchResponse(BaseModel):
    items: List[VectorSearchItem]

#### Routes ####

@router.get("/hello",
            response_model=DemoResponse,
            description="Returns a greeting message.")
async def hello() -> DemoResponse:
    return DemoResponse(message="Hello from the API!")

@router.post("/test/openai",
             response_model=DemoResponse,
             description="Makes a reqeust against OpenAI")
async def query_openai(request: DemoRequest) -> DemoResponse:
    completion = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": request.prompt},
        ]
    )
    return DemoResponse(message=completion.choices[0].message.content)

@router.post("/test/anthropic",
             response_model=DemoResponse,
             description="Makes a request against Anthropic")
async def query_claude(request: DemoRequest) -> DemoResponse:
    messages = [{"role": "user", "content": request.prompt}]

    response = anthropic_client.messages.create(
        system="You are a helpful assistant.",
        model="claude-3-5-haiku-20241022",
        messages=messages,
        max_tokens=300,
        temperature=0.7,
    )
    return DemoResponse(message=response.content[0].text)

@router.get("/test/footway",
            response_model=InventorySearchResponse,
            description="Search Footway inventory")
async def search_footway_inventory(
    merchant_id: Optional[List[str]] = Query(None),
    product_name: Optional[str] = None,
    vendor: Optional[List[str]] = Query(None),
    variant_ids: Optional[List[str]] = Query(None),
    page: int = 1,
    page_size: int = 20
) -> InventorySearchResponse:
    footway_client = FootwayClient(api_key=os.getenv("FOOTWAY_API_KEY"))
    try:
        response = await footway_client.search_inventory(
            merchant_id=merchant_id,
            product_name=product_name,
            vendor=vendor,
            variant_ids=variant_ids,
            page=page,
            page_size=page_size
        )
        return response
    finally:
        await footway_client.close()

@router.get("/test/vector",
            response_model=VectorSearchResponse,
            description="Search inventory using vector similarity")
async def search_vector_inventory(
    query: str,
    page_size: int = 20
) -> VectorSearchResponse:
    # Initialize clients
    vector_client = PostgresVectorClient()

    try:
        # Get embedding for query using OpenAI
        embedding_response = openai_client.embeddings.create(
            model="text-embedding-3-small",
            input=query
        )

        # Extract the embedding vector
        query_vector = embedding_response.data[0].embedding

        # Search vectors in PostgreSQL
        search_results = vector_client.search_vectors(
            query_vector=query_vector,
            limit=page_size
        )

        # Convert results to VectorSearchItems
        items = []
        for content, metadata, score in search_results:
            # Convert metadata from JSON string if needed
            if isinstance(metadata, str):
                metadata = json.loads(metadata)

            # Ensure id is converted to string
            item_id = str(metadata.get("id", ""))

            item = VectorSearchItem(
                id=item_id,  # Now guaranteed to be a string
                name=metadata.get("name", ""),
                description=content,
                similarity_score=float(score),  # Ensure score is float
                metadata=metadata
            )
            items.append(item)

        return VectorSearchResponse(
            items=items,
        )

    finally:
        vector_client.close()


@router.get("/wardrobe",
             response_model=GetWardrobeResponse,
             description="Fetches all wardrobe items")
async def get_wardrobe() -> GetWardrobeResponse:
    wardrobe_service = WardrobeService(PostgresWardrobeClient())

    try:
        response = wardrobe_service.get_all_items()

        return GetWardrobeResponse(
            wardrobeItems=response,
        )
    finally:
        wardrobe_service.db_client.close()

@router.get("/wardrobe/{item_id}",
                response_model=GetWardrobeItemResponse,
                description="Fetches a single wardrobe item by ID")
async def get_wardrobe_item(item_id: int) -> GetWardrobeItemResponse:
    wardrobe_service = WardrobeService(PostgresWardrobeClient())

    try:
        response = wardrobe_service.get_items_by_ids([item_id])[0]

        return GetWardrobeItemResponse(
            wardrobeItem=response,
        )
    finally:
        wardrobe_service.db_client.close()