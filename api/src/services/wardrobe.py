from dataclasses import dataclass
from decimal import Decimal
from typing import List, Optional

from api.src.clients.postgres import PostgresWardrobeClient


@dataclass
class WardrobeItem:
    name: str
    size: str
    price: Decimal
    color: str
    type: str
    department: str
    image_url: Optional[str] = None
    id: Optional[int] = None
    created_at: Optional[str] = None

class WardrobeService:
    def __init__(self, db_client: PostgresWardrobeClient):
        self.db_client = db_client
        self.db_client.initialize_table()

    def get_all_items(self):
        """Get all wardrobe items"""
        return self.db_client.get_all_items()

    def get_items_by_ids(self, item_ids: List[int]) -> List[WardrobeItem]:
        """Get multiple wardrobe items by their IDs"""
        return self.db_client.get_items_for_ids(item_ids)

    def add_item(self, item: WardrobeItem) -> int:
        """Add a new wardrobe item"""
        return self.db_client.add_item(item)

    def delete_item(self, item_id: int) -> None:
        """Delete item by ID"""
        self.db_client.delete_item(item_id)