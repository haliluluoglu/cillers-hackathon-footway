import React from 'react';
import Demo from './demos/rest/Demo';
import Body from './demos/rest/Body';
import { ProductContext } from 'src/context/MessageContext';
import { ProductType } from 'src/types';

const Main: React.FC = () => {
  const [products, setProducts] = React.useState<ProductType[]>([])
  const component: React.ReactElement = (() => {
    return (
      <ProductContext.Provider value={products}>
        <main className="h-screen flex flex-row bg-neutral text-neutral-content">
          <div className='bg-gray-100 flex-[2] h-full overflow-auto'>
            <Body updateGlobalProducts={(product) => {
              setProducts(items => {
                if (items.map(item => item.id).includes(product.id)) {
                  return items.filter(item => item.id !== product.id)
                }
                return [...items, product]
              })
            }} />
          </div>
          <div className='flex-1'>
            <Demo />
          </div>
        </main>
      </ProductContext.Provider>
    )
  })();
  return component;
}

export default Main;
