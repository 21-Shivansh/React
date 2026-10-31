
import React from 'react'
import { Star, ShoppingCart, Heart, ArrowUpRight } from 'lucide-react'

const ProductCard = ({ product }) => {

  return (
    <div className="bg-[#1A1A1A] border border-[#303030] rounded-2xl overflow-hidden group hover:border-yellow-500/60 transition-all duration-300">

      {/* Product Image */}
      <div className="relative bg-white h-64 flex items-center justify-center p-5 overflow-hidden">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {Math.round(product.discountPercentage)}% OFF
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-black/80 p-2 rounded-full text-white hover:text-red-500 transition">
          <Heart size={18} />
        </button>

      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Brand and Category */}
        <div className="flex justify-between items-center mb-3">

          <span className="text-yellow-500 text-xs uppercase tracking-wider">
            {product.brand || product.category}
          </span>

          <span className="text-gray-500 text-xs capitalize">
            {product.category}
          </span>

        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white truncate mb-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Rating and Stock */}
        <div className="flex justify-between items-center mb-4">

          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            <span className="text-white text-sm">
              {product.rating}
            </span>
          </div>

          <span className={`text-xs ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>

        </div>

        {/* Price and Cart */}
        <div className="flex justify-between items-center border-t border-[#303030] pt-4">

          <div>
            <p className="text-xs text-gray-500 mb-1">
              Price
            </p>

            <h3 className="text-xl font-bold text-yellow-500">
              ${product.price}
            </h3>
          </div>

          <button
            disabled={product.stock <= 0}
            className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={17} />
            Add
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard

