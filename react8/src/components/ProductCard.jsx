import React, { useContext, useState } from 'react'
import { MyStore } from '../context/MyContext'

const ProductCard = ({ product,init }) => {
  const { cartProduct, setCartProduct,handleInc,handleDec } = useContext(MyStore);

  const handleAdd = () => {
    if (init) return;

    alert('Added in Cart !!!')
    setCartProduct([...cartProduct, {...product,quantity : 1}]);
  };

  return (
    <div className='p-2 h-130 sm:w-full lg:w-1/4 rounded-lg'>
      <div className='p-1.5 h-full bg-[#101828] flex flex-col gap-1 text-white justify-between border border-gray-600  rounded-xl hover:-translate-y-2 hover:bg-olive-800 ease-in-out duration-200'>
        <div className='h-1/2 w-full flex justify-center items-center'>
          <img className='h-full object-cover' src={product.image} alt="" />
        </div>
        <p className='text-lg'>{product.title}</p>
        <div>
          <p className='text-green-500 text-2xl font-extrabold font-mono'>Price - ${product.price}</p>
          <p className='text-amber-500'>Rating - {product.rating.rate}⭐</p>
        </div>
        {
          init ? (
            <button className='bg-green-800 h-12 rounded-lg text-xl font-semibold flex justify-between items-center px-3'><span className='font-semibold text-lg bg-black px-3 rounded-lg flex justify-center items-center' onClick={()=>{handleDec(product.id)}}>-</span>{init.quantity}<span className='font-semibold text-lg bg-black px-3 rounded-lg flex justify-center items-center' onClick={()=>{handleInc(product.id)}}>+</span></button>
          ) : (
            <button onClick={handleAdd} className='bg-purple-600 h-12 rounded-lg text-xl font-semibold hover:bg-purple-700'>Cart ➡️</button>
          )
        }
      </div>
    </div>
  )
}

export default ProductCard;
