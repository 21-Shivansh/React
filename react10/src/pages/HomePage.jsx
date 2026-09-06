import React, { use, useContext } from 'react'
import { MyStore } from '../context/MyContext';
import ProductCard from '../component/ProductCard';

const HomePage = () => {

    const { products,setProducts } = useContext(MyStore);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1'>
            {
                products.map((ele)=>{
                    return <ProductCard key={ele.id} product={ele} />
                })
            }
        </div>
    )
}

export default HomePage
