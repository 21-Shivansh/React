import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { MyStore } from '../context/MyContext'

const ProductPage = () => {
    let {products,cartProduct} = useContext(MyStore);
  return (
    <div className='flex flex-col lg:flex-row flex-wrap  mt-2 pb-5 '>
        {
            products.map((product,idx)=>{

                let init = cartProduct.find(ele => ele.id === product.id);

                return <ProductCard key={idx} product={product} init={init} />
            })
        }
    </div>
  )
}

export default ProductPage;
