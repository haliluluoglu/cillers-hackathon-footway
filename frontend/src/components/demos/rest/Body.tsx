import React from 'react'
import { productCategories, ProductCategoryTypes, ProductType } from 'src/types';

const products: ProductType[] = [
  {
    id: "123",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 1",
    brand: "Brand 1",
    description: "Blablabla",
    category: 'top'
  },
  {
    id: "124",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 2",
    brand: "Brand 2",
    description: "Blablabla",
    category: 'top'

  },
  {
    id: "125",
    image: {
      src: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 3",
    brand: "Brand 1",
    description: "Blablabla",
    category: 'bottom'
  },
  {
    id: "126",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Prouct"
    },
    link: "#",
    name: "Product 4",
    brand: "Brand 2",
    description: "Blablabla",
    category: 'foot'
  },
  {
    id: "127",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 5",
    brand: "Brand 2",
    description: "Blablabla",
    category: 'accessories'
  },
  {
    id: "128",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 6",
    brand: "Brand 3",
    description: "Blablabla",
    category: 'under'
  },
  {
    id: "129",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 7",
    brand: "Brand 3",
    description: "Blablabla",
    category: 'out'
  },
]

const Card: React.FC<{ product: ProductType, activeItems: string[]; updateItems: () => void }> = ({
  product,
  activeItems,
  updateItems
}: {
  product: ProductType,
  activeItems: string[];
  updateItems: (item: string) => void
}) => {
  const isActive = activeItems.includes(product.id)
  return (
    <div className={`w-64 2xl:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ${isActive ? "scale-105 shadow-xl border-4 border-primary duration-100" : ""}`}>
      <a href={product.link} onClick={() => updateItems(product.id)}>
        <img src={product.image.src}
          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-full">
          <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
          <div className="flex items-center">
            <div className="ml-auto">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
const Body: React.FC<{ updateGlobalProducts: (product: ProductType) => void }> = ({ updateGlobalProducts }: { updateGlobalProducts: (product: ProductType) => void }) => {
  const [activeItems, setActiveItems] = React.useState<string[]>([])
  const [activeCategory, setActiveCategory] = React.useState<ProductCategoryTypes | undefined>(undefined)

  return (
    <div>
      <div className="text-center p-10 text-gray-600">
        <h1 className="font-bold text-4xl mb-4">Smart Wardrobe</h1>
        <h3 className="text-3xl" >Here are your current items</h3 >
      </div >
      <section id="Projects" className="w-fit mx-auto flex flex-col gap-1">
        <select className="select select-bordered w-full max-w-xs self-end" onChange={(e) => {
          if (e.target.value === "all") {
            setActiveCategory(undefined)
            return
          }
          setActiveCategory(e.target.value as ProductCategoryTypes)
        }
        }>
          <option disabled selected>Do you want to pick a category?</option>
          {
            productCategories.map((cat, i) => {
              return (
                <option key={i} value={cat.value}>{cat.verbose}</option>
              )
            })
          }
          <option value={"all"}>All</option>
        </select>
        {products.filter(prod => activeCategory === undefined ? true : prod.category === activeCategory).length > 0 ?
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
            {
              products.filter(product => activeCategory === undefined ? true : product.category === activeCategory).map((product) => {
                return (
                  <Card
                    activeItems={activeItems}
                    key={product.id}
                    product={product}
                    updateItems={() => {
                      setActiveItems(items => {
                        if (items.includes(product.id)) {
                          return items.filter(item => item !== product.id)
                        }
                        return [...items, product.id]
                      })
                      updateGlobalProducts(product)
                    }} />
                )
              })
            }
          </div>
          : <div className='w-full mt-10 mb-5'>Nothing in the wardrobe yet...</div>

        }
      </section>
    </div >
  )
}

export default Body

