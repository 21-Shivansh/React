import React, { useContext, useState } from 'react'
import { MyStore } from '../context/MyContext'
import ProductCard from '../components/ProductCard';

const CollectionPage = () => {

  const { products,setSelectedCategory,selectedCategory,filterProducts } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= COLLECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-18">

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center
        justify-between gap-6 mb-12">

          {/* Categories */}

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
        ${selectedCategory === 'all'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
            >
              ALL
            </button>

            <button
              onClick={() => setSelectedCategory("clothing")}
              className={`px-5 py-2.5 text-xs tracking-wider transition
        ${selectedCategory === "men's clothing"
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
            >
              CLOTHES
            </button>


            <button
              onClick={() => setSelectedCategory('jewelery')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
        ${selectedCategory === 'jewelery'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
            >
              JEWELRY
            </button>


            <button
              onClick={() => setSelectedCategory('electronics')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
        ${selectedCategory === 'electronics'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
            >
              ELECTRONICS
            </button>

          </div>



          {/* Sort */}
          <select
            className="bg-[#1A1A1A] border border-[#303030]
            px-5 py-2.5 text-xs text-[#A1A1A6]
            outline-none focus:border-[#D4AF37]"
          >
            <option>Sort By: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

        </div>


        {/* Product Count */}
        <div className="flex items-center justify-between
        border-b border-[#1A1A1A] pb-5 mb-8">

          <p className="text-xs tracking-[0.25em] text-[#777]">
            {filterProducts.length} PRODUCTS
          </p>

        </div>


        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-x-5 gap-y-12">

          {filterProducts.map((product) => { 
            return <ProductCard key={product.id} product={product} />
          })}

        </div>

      </section>


      {/* ================= BOTTOM BANNER ================= */}
      <section className="border-y border-[#1A1A1A] bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10
        py-20 text-center">

          <p className="text-[#D4AF37] text-xs tracking-[0.4em]">
            THE LUXE STANDARD
          </p>

          <h2 className="text-3xl md:text-4xl
          font-light mt-4">
            Made To Be Remembered.
          </h2>

          <p className="max-w-xl mx-auto mt-4
          text-sm text-[#777] leading-relaxed">
            Every piece is selected with an uncompromising
            eye for quality, character and timeless appeal.
          </p>

        </div>

      </section>

    </div>
  )
}

export default CollectionPage

