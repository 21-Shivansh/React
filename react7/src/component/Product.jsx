import React from 'react'

const Product = ({ product,setCartItem }) => {
  let handleAdd = () => {
    setCartItem(prev => [...prev,product])
  };
  return (
    <div className='p-2 h-130 sm:w-full md:w-1/4 lg:w-1/4 rounded-lg'>
      <div className='p-1.5 h-full flex flex-col gap-1 text-white justify-between border border-black rounded-xl hover:scale-x-108 hover:scale-y-110 hover:bg-olive-700 ease-in-out duration-200'>
        <div className='h-1/2 w-full flex justify-center items-center'>
          <img className='h-full object-cover' src={product.image} alt="" />
        </div>
        <p className='text-lg'>{product.title}</p>
        <div>
          <p className='text-green-500 text-2xl font-extrabold font-mono'>Price - ${product.price}</p>
          <p className='text-amber-500'>Rating - {product.rating.rate}⭐</p>
        </div>
        <button onClick={handleAdd} className='bg-purple-600 h-12 rounded-lg text-xl font-semibold hover:bg-purple-700'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;
