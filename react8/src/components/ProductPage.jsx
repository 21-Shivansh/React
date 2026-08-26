import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { MyStore } from '../context/MyContext'

const ProductPage = () => {
    let {products} = useContext(MyStore);
  return (
    <div className='flex flex-col lg:flex-row flex-wrap  mt-2 pb-5 '>
        {
            products.map((product,idx)=>
                <ProductCard key={idx} product={product} />
            )
        }
    </div>
  )
}

export default ProductPage;
