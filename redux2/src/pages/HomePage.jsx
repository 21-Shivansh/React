
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import axios from 'axios'
import { fetchProductsApi } from '../api/productApi'

const HomePage = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async() => {
    const data = await fetchProductsApi();
    setProducts(data)
    setLoading(false)
  }

  useEffect(()=>{
    getData();
  },[])

  
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">

      {/* Hero Section */}
      <div className="px-10 py-12 text-center">

        <p className="text-yellow-500 tracking-[5px] uppercase text-sm mb-3">
          Welcome to SkyMart
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Discover Something <span className="text-yellow-500">Amazing.</span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore our exclusive collection of premium products.
          Quality, style and elegance — all in one place.
        </p>

      </div>

      {/* Products Section */}
      <div className="px-10 pb-12">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-semibold">
              Our Collection
            </h2>
            <p className="text-gray-500 mt-1">
              Explore our latest products
            </p>
          </div>

          <p className="text-gray-400">
            Showing <span className="text-yellow-500">{products.length}</span> Products
          </p>

        </div>

        {loading ? (
          <p className="text-center text-yellow-500 py-20">
            <ProductSkeleton />
          </p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            No Products Found
          </p>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default HomePage
