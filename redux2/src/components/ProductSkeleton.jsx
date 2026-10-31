
import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="bg-[#1A1A1A] border border-[#303030] rounded-2xl overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="relative bg-[#252525] h-64 flex items-center justify-center p-5">

        <div className="w-full h-full bg-[#303030] rounded-xl"></div>

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 w-16 h-6 bg-[#3A3A3A] rounded-full"></div>

        {/* Wishlist */}
        <div className="absolute top-3 right-3 w-9 h-9 bg-[#3A3A3A] rounded-full"></div>

      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Brand and Category */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-3 w-20 bg-[#383838] rounded"></div>
          <div className="h-3 w-16 bg-[#383838] rounded"></div>
        </div>

        {/* Title */}
        <div className="h-5 w-3/4 bg-[#383838] rounded mb-3"></div>

        {/* Description */}
        <div className="space-y-2 mb-5">
          <div className="h-3 w-full bg-[#303030] rounded"></div>
          <div className="h-3 w-4/5 bg-[#303030] rounded"></div>
        </div>

        {/* Rating and Stock */}
        <div className="flex justify-between items-center mb-5">
          <div className="h-4 w-12 bg-[#383838] rounded"></div>
          <div className="h-4 w-20 bg-[#383838] rounded"></div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center border-t border-[#303030] pt-4">

          <div className="space-y-2">
            <div className="h-3 w-12 bg-[#303030] rounded"></div>
            <div className="h-6 w-20 bg-[#383838] rounded"></div>
          </div>

          <div className="h-10 w-24 bg-[#383838] rounded-lg"></div>

        </div>

      </div>

    </div>
  )
}

export default ProductSkeleton
