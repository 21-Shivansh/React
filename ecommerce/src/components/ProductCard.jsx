import React from 'react'

const ProductCard = ({ product }) => {

    console.log(product)

    return (
        <div className="group cursor-pointer">

            {/* Image */}
            <div className="relative h-[360px] bg-[#1A1A1A] overflow-hidden">

                {/* Product Image Area */}
                <div className="w-full h-full flex items-center justify-center p-8">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain
                        group-hover:scale-105
                        transition-transform
                        duration-700"
                    />

                </div>


                {/* Wishlist */}
                <button
                    className="absolute top-4 right-4 w-10 h-10
                    rounded-full bg-[#0D0D0D]/90
                    border border-[#444]
                    flex items-center justify-center
                    text-[#A1A1A6] text-lg
                    hover:text-[#D4AF37]
                    hover:border-[#D4AF37]
                    transition-all duration-300"
                >
                    ♡
                </button>


                {/* Category */}
                <div
                    className="absolute top-4 left-4
                    px-3 py-1
                    bg-[#0D0D0D]/80
                    text-[9px]
                    tracking-[0.2em]
                    uppercase
                    text-[#D4AF37]"
                >
                    {product.category}
                </div>


                {/* Quick Add */}
                <div
                    className="absolute bottom-0 left-0 right-0
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-500"
                >

                    <button
                        className="w-full py-4
                        bg-[#D4AF37]
                        text-[#0D0D0D]
                        text-xs font-semibold
                        tracking-[0.15em]
                        uppercase
                        hover:bg-[#E5C158]
                        transition"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>


            {/* Product Info */}
            <div className="pt-5">

                {/* Category */}
                <p
                    className="text-[10px]
                    tracking-[0.3em]
                    text-[#777]
                    uppercase"
                >
                    {product.category}
                </p>


                {/* Title + Price */}
                <div
                    className="flex items-start
                    justify-between
                    gap-4 mt-2"
                >

                    <h3
                        className="text-sm
                        font-light
                        leading-6
                        text-[#F5F5F7]
                        line-clamp-2
                        group-hover:text-[#D4AF37]
                        transition-colors"
                    >
                        {product.title}
                    </h3>

                    <p
                        className="text-sm
                        text-[#D4AF37]
                        whitespace-nowrap"
                    >
                        ${product.price}
                    </p>

                </div>


                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">

                    <div className="flex items-center gap-1">

                        <span className="text-[#D4AF37] text-sm">
                            ★
                        </span>

                        <span className="text-xs text-[#F5F5F7]">
                            {product.rating.rate}
                        </span>

                    </div>

                    <span className="text-xs text-[#666]">
                        ({product.rating.count})
                    </span>

                </div>

            </div>

        </div>
    )
}

export default ProductCard

