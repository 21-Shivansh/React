import React, { useContext, useState } from 'react'
import { MyStore } from '../context/MyContext'
import ProductCard from '../components/ProductCard'

const CollectionPage = () => {

  const {setSelectedCategory,selectedCategory,filterProducts,cartItems} = useContext(MyStore);

  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= COLLECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-18">

        {/* ================= SEARCH + CATEGORIES ================= */}
        <div
          className="flex flex-col lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6 mb-12"
        >

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
              ${
                selectedCategory === 'all'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              ALL
            </button>


            <button
              onClick={() => setSelectedCategory("clothing")}
              className={`px-5 py-2.5 text-xs tracking-wider transition
              ${
                selectedCategory === "clothing"
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              CLOTHES
            </button>


            <button
              onClick={() => setSelectedCategory('jewelery')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
              ${
                selectedCategory === 'jewelery'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              JEWELRY
            </button>


            <button
              onClick={() => setSelectedCategory('electronics')}
              className={`px-5 py-2.5 text-xs tracking-wider transition
              ${
                selectedCategory === 'electronics'
                  ? 'bg-[#D4AF37] text-[#0D0D0D]'
                  : 'border border-[#303030] text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              ELECTRONICS
            </button>

          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:max-w-xl">

            {/* Search Icon */}
            <span
              className="absolute left-4 top-1/2
              -translate-y-1/2
              text-[#777]
              text-lg"
            >
              ⌕
            </span>


            {/* Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-[#1A1A1A] border border-[#303030] px-12 py-2.5 text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
            />

          </div>

        </div>


        {/* ================= PRODUCT COUNT + SORT ================= */}
        <div
          className="flex items-center justify-between
          border-b border-[#1A1A1A]
          pb-5 mb-8"
        >

          {/* Product Count */}
          <p className="text-xs tracking-[0.25em] text-[#777]">
            {filterProducts.length} PRODUCTS
          </p>


          {/* Sort */}
          <select
            onChange={(e) => console.log(e.target.value)}
            className="bg-[#1A1A1A]
            border border-[#303030]
            px-5 py-2.5
            text-xs
            text-[#A1A1A6]
            outline-none
            focus:border-[#D4AF37]"
          >
            <option>Sort By: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

        </div>


        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">

          {filterProducts
          .filter((product) =>
              product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((product) => {
              let init = cartItems.find(ele => ele.id === product.id)

              return <ProductCard key={product.id} product={product} init={init}/>
          })
          }

        </div>
      </section>


      {/* ================= BOTTOM BANNER ================= */}
      <section className="border-y border-[#1A1A1A] bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-[#D4AF37] text-xs tracking-[0.4em]">
            THE LUXE STANDARD
          </p>
          <h2 className="text-3xl md:text-4xl font-light mt-4">
            Made To Be Remembered.
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm text-[#777] leading-relaxed">
            Every piece is selected with an uncompromising
            eye for quality, character and timeless appeal.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CollectionPage

