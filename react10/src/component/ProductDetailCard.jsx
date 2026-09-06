import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetailCard = ({productDetailCard}) => {

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-400">
          Home / {productDetailCard.category} / Product
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-gray-900 p-6 md:grid-cols-2 lg:p-10">

          {/* Product Image */}
          <div className="flex min-h-112.5 items-center justify-center rounded-xl bg-white p-10">
            <img
              src={productDetailCard.image}
              alt={productDetailCard.title}
              className="max-h-100 w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col">

            {/* Category */}
            <span className="mb-3 w-fit rounded-full bg-blue-500/10 px-3 py-1 text-sm capitalize text-blue-400">
              {productDetailCard.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
              {productDetailCard.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-yellow-700 px-2 py-1 text-sm font-semibold text-white">
                ⭐ {productDetailCard.rating?.rate}
              </div>

              <span className="text-sm text-gray-400">
                {productDetailCard.rating?.count} ratings & reviews
              </span>
            </div>

            <div className="my-6 h-px bg-gray-800" />

            {/* Price */}
            <div>
              <span className="text-4xl font-bold">
                ${productDetailCard.price}
              </span>
              <span className="ml-3 text-sm text-green-400">
                Free Delivery
              </span>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="mb-2 text-lg font-semibold">
                Product Description
              </h2>

              <p className="leading-7 text-gray-400">
                {productDetailCard.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <h3 className="mb-3 font-semibold">Quantity</h3>

              <div className="flex w-fit items-center rounded-lg border border-gray-700">
                <button>
                  −
                </button>
                <span className="px-5">
                  {/* {quantity} */}1
                </span>
                <button>
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-xl border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white">
                Add to Cart
              </button>
            </div>

            {/* Extra Information */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-gray-800 pt-6">
              <div className="text-center">
                <div className="text-xl">🚚</div>
                <p className="mt-1 text-xs text-gray-400">
                  Fast Delivery
                </p>
              </div>

              <div className="text-center">
                <div className="text-xl">↩️</div>
                <p className="mt-1 text-xs text-gray-400">
                  Easy Returns
                </p>
              </div>

              <div className="text-center">
                <div className="text-xl">🔒</div>
                <p className="mt-1 text-xs text-gray-400">
                  Secure Payment
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard
