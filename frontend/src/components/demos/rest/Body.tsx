import React from 'react'
const products = [
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 1",
    brand: "Brand 1",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 2",
    brand: "Brand 2",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 3",
    brand: "Brand 1",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Prouct"
    },
    link: "#",
    name: "Product 4",
    brand: "Brand 2",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 5",
    brand: "Brand 2",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 6",
    brand: "Brand 3",
    description: "Blablabla"
  },
  {
    id: "",
    image: {
      src: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Product"
    },
    link: "#",
    name: "Product 7",
    brand: "Brand 3",
    description: "Blablabla"
  },
]
const Body: React.FC = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
        <h1 className="text-3xl" > Tailwind CSS</h1 >
      </div >
      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {
          products.length > 0 ? products.map((product, i) => {
            return (
              <div key={i} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href={product.link}>
                  <img src={product.image.src}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                    <div className="flex items-center">
                      <div className="ml-auto">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
            : <div>Nothing in the wardrobe yet...</div>
        }
      </section>
    </div >
  )
}

export default Body

