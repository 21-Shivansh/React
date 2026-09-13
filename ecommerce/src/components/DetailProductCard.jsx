import React from 'react'

const DetailProductCard = ({detailProduct}) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= PRODUCT DETAIL ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">


          {/* ================= LEFT : IMAGE ================= */}
          <div>

            <div className="relative h-[550px] bg-[#1A1A1A] flex items-center justify-center">

              {/* Category */}
              <span
                className="absolute top-5 left-5
                bg-[#0D0D0D]/80
                px-4 py-2
                text-[10px]
                tracking-[0.2em]
                uppercase
                text-[#D4AF37]"
              >
                {detailProduct.category}
              </span>


              {/* Wishlist */}
              <button
                className="absolute top-5 right-5
                w-11 h-11
                rounded-full
                bg-[#0D0D0D]/80
                border border-[#303030]
                flex items-center justify-center
                text-[#A1A1A6]
                text-xl
                hover:text-[#D4AF37]
                hover:border-[#D4AF37]
                transition"
              >
                ♡
              </button>


              {/* Product Image */}
              <div className="w-full h-full p-12 flex items-center justify-center">

                <img
                  src={detailProduct.image}
                  alt={detailProduct.title}
                  className="w-full h-full
                  object-contain
                  hover:scale-105
                  transition-transform
                  duration-700"
                />

              </div>

            </div>


            {/* Image Indicators */}
            <div className="flex gap-3 mt-4">

              <div
                className="w-20 h-20
                bg-[#1A1A1A]
                border border-[#D4AF37]
                flex items-center justify-center
                p-2"
              >
                <img
                  src={detailProduct.image}
                  alt={detailProduct.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className="w-20 h-20
                bg-[#1A1A1A]
                border border-[#303030]
                flex items-center justify-center
                p-2"
              >
                <img
                  src={detailProduct.image}
                  alt={detailProduct.title}
                  className="w-full h-full object-contain opacity-50"
                />
              </div>

            </div>

          </div>


          {/* ================= RIGHT : PRODUCT INFO ================= */}
          <div className="flex flex-col justify-center">


            {/* Small Label */}
            <p
              className="text-[#D4AF37]
              text-[10px]
              tracking-[0.35em]
              uppercase"
            >
              THE LUXE COLLECTION
            </p>


            {/* Title */}
            <h1
              className="text-3xl md:text-4xl
              lg:text-5xl
              font-light
              leading-tight
              mt-5"
            >
              {detailProduct.title}
            </h1>


            {/* Rating */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] text-lg">
                  ★
                </span>
                <span className="text-sm">
                  {detailProduct.rating?.rate}
                </span>

              </div>

              <span className="text-[#666]">
                |
              </span>

              <span className="text-sm text-[#777]">
                {detailProduct.rating?.count} Reviews
              </span>

            </div>


            {/* Price */}
            <div
              className="text-2xl
              text-[#D4AF37]
              mt-7"
            >
              ${detailProduct.price}
            </div>


            {/* Divider */}
            <div className="border-t border-[#262626] my-8"></div>


            {/* Description */}
            <p
              className="text-sm
              text-[#A1A1A6]
              leading-7
              max-w-xl"
            >
              {detailProduct.description}
            </p>


            {/* Quantity */}
            <div className="mt-8">

              <p
                className="text-xs
                tracking-[0.2em]
                uppercase
                text-[#777]
                mb-3"
              >
                Quantity
              </p>


              <div
                className="flex items-center
                w-fit
                border border-[#303030]"
              >

                <button
                  className="w-11 h-11
                  text-[#A1A1A6]
                  hover:text-[#D4AF37]
                  transition"
                >
                  −
                </button>

                <span
                  className="w-12
                  text-center
                  text-sm"
                >
                  1
                </span>

                <button
                  className="w-11 h-11
                  text-[#A1A1A6]
                  hover:text-[#D4AF37]
                  transition"
                >
                  +
                </button>

              </div>

            </div>


            {/* Add To Cart */}
            <button
              className="w-full
              mt-8
              py-4
              bg-[#D4AF37]
              text-[#0D0D0D]
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              hover:bg-[#E5C158]
              transition"
            >
              Add To Cart
            </button>


            {/* Buy Now */}
            <button
              className="w-full
              mt-3
              py-4
              border border-[#D4AF37]
              text-[#D4AF37]
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              hover:bg-[#D4AF37]
              hover:text-[#0D0D0D]
              transition"
            >
              Buy Now
            </button>


            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="text-center">

                <div className="text-[#D4AF37] text-xl">
                  ◇
                </div>

                <p className="text-[10px] text-[#777] mt-2">
                  PREMIUM
                </p>

              </div>


              <div className="text-center">

                <div className="text-[#D4AF37] text-xl">
                  ♢
                </div>

                <p className="text-[10px] text-[#777] mt-2">
                  SECURE
                </p>

              </div>


              <div className="text-center">

                <div className="text-[#D4AF37] text-xl">
                  ◇
                </div>

                <p className="text-[10px] text-[#777] mt-2">
                  DELIVERY
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PRODUCT INFORMATION ================= */}
      <section className="border-t border-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>

              <p
                className="text-[#D4AF37]
                text-xs
                tracking-[0.25em]
                uppercase"
              >
                DETAILS
              </p>

              <p
                className="text-sm
                text-[#777]
                leading-7
                mt-4"
              >
                Carefully selected products designed
                around quality, functionality and timeless style.
              </p>

            </div>


            <div>

              <p
                className="text-[#D4AF37]
                text-xs
                tracking-[0.25em]
                uppercase"
              >
                CATEGORY
              </p>

              <p className="text-sm text-[#A1A1A6] mt-4 capitalize">
                {detailProduct.category}
              </p>

            </div>


            <div>

              <p
                className="text-[#D4AF37]
                text-xs
                tracking-[0.25em]
                uppercase"
              >
                SHIPPING
              </p>

              <p
                className="text-sm
                text-[#777]
                leading-7
                mt-4"
              >
                Complimentary shipping on selected
                orders. Carefully packed and delivered.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM BANNER ================= */}
      <section className="bg-[#1A1A1A] border-y border-[#252525]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">

          <p
            className="text-[#D4AF37]
            text-xs
            tracking-[0.4em]"
          >
            THE LUXE STANDARD
          </p>

          <h2
            className="text-3xl md:text-4xl
            font-light
            mt-4"
          >
            Designed To Stand Apart.
          </h2>

          <p
            className="max-w-xl
            mx-auto
            mt-4
            text-sm
            text-[#777]
            leading-relaxed"
          >
            Discover pieces selected for those who
            appreciate quality, character and timeless appeal.
          </p>

        </div>

      </section>

    </div>
  )
}

export default DetailProductCard
