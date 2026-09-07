import React from 'react'

const CollectionPage = () => {

  const products = [
    {
      id: 1,
      name: 'Noir Chronograph',
      category: 'Watches',
      price: '$1,240',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 2,
      name: 'Aurelia Necklace',
      category: 'Jewelry',
      price: '$890',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 3,
      name: 'Monarch Leather',
      category: 'Accessories',
      price: '$460',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 4,
      name: 'Obsidian Frame',
      category: 'Eyewear',
      price: '$320',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 5,
      name: 'Eclipse Bracelet',
      category: 'Jewelry',
      price: '$680',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 6,
      name: 'Regent Automatic',
      category: 'Watches',
      price: '$1,580',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 7,
      name: 'Crown Card Holder',
      category: 'Accessories',
      price: '$240',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 8,
      name: 'Lumière Pendant',
      category: 'Jewelry',
      price: '$760',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= COLLECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-18">

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center
        justify-between gap-6 mb-12">

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            <button className="px-5 py-2.5 bg-[#D4AF37]
            text-[#0D0D0D] text-xs tracking-wider">
              ALL
            </button>

            <button className="px-5 py-2.5 border border-[#303030]
            text-[#A1A1A6] text-xs tracking-wider
            hover:border-[#D4AF37] hover:text-[#D4AF37]
            transition">
              WATCHES
            </button>

            <button className="px-5 py-2.5 border border-[#303030]
            text-[#A1A1A6] text-xs tracking-wider
            hover:border-[#D4AF37] hover:text-[#D4AF37]
            transition">
              JEWELRY
            </button>

            <button className="px-5 py-2.5 border border-[#303030]
            text-[#A1A1A6] text-xs tracking-wider
            hover:border-[#D4AF37] hover:text-[#D4AF37]
            transition">
              ACCESSORIES
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
            08 PRODUCTS
          </p>

          <button className="text-xs text-[#A1A1A6]
          hover:text-[#D4AF37] transition">
            FILTER +
          </button>

        </div>


        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-x-5 gap-y-12">

          {products.map((product) => (

            <div
              key={product.id}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="relative aspect-[4/5]
              bg-[#1A1A1A] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform
                  duration-700"
                />

                {/* Wishlist */}
                <button
                  className="absolute top-4 right-4 w-9 h-9
                  rounded-full bg-[#0D0D0D]/80
                  border border-[#444]
                  flex items-center justify-center
                  text-[#A1A1A6]
                  hover:text-[#D4AF37]
                  hover:border-[#D4AF37]
                  transition"
                >
                  ♡
                </button>


                {/* Quick Add */}
                <div className="absolute bottom-0 left-0 right-0
                translate-y-full group-hover:translate-y-0
                transition-transform duration-500">

                  <button
                    className="w-full py-4 bg-[#D4AF37]
                    text-[#0D0D0D] text-xs font-semibold
                    tracking-[0.15em] uppercase"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>


              {/* Product Info */}
              <div className="pt-5">

                <p className="text-[10px] tracking-[0.3em]
                text-[#777] uppercase">
                  {product.category}
                </p>

                <div className="flex items-start
                justify-between gap-3 mt-2">

                  <h3 className="text-base font-light
                  group-hover:text-[#D4AF37]
                  transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[#D4AF37]">
                    {product.price}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= LOAD MORE ================= */}
        <div className="flex justify-center mt-20">

          <button
            className="px-10 py-4 border border-[#D4AF37]
            text-[#D4AF37] text-xs tracking-[0.2em]
            hover:bg-[#D4AF37] hover:text-[#0D0D0D]
            transition-all duration-300"
          >
            LOAD MORE
          </button>

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

