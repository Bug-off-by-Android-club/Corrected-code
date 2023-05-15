import Image from 'next/image'
import React from 'react'
import Product from './Product'

function ProductFeed({ products}) {
  return (
    <div className="grid grid-flow-row-dense gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-5 mx-auto">

      
        {products.slice(0,products.length).map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
    </div>
  )
}

export default ProductFeed
