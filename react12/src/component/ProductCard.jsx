import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

              {/* Product Image */}
              <div className="h-64 bg-slate-50 flex items-center justify-center p-6 relative">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-105 transition duration-300"
                />

                {/* Product ID */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 border border-slate-200">
                  #{product.id}
                </span>

              </div>


              {/* Product Content */}
              <div className="p-5">

                {/* Category */}
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full capitalize mb-3">
                  {product.category}
                </span>


                {/* Title */}
                <h2 className="font-semibold text-slate-900 leading-6 line-clamp-2 min-h-12">
                  {product.title}
                </h2>


                {/* Description */}
                <p className="text-sm text-slate-500 mt-3 line-clamp-2">
                  {product.description}
                </p>


                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">

                  <div className="flex items-center gap-1">

                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {product.rating.rate}
                    </span>

                  </div>

                  <span className="text-xs text-slate-400">
                    ({product.rating.count} reviews)
                  </span>

                </div>


                {/* Price + Button */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">

                  <div>
                    <p className="text-xs text-slate-400">
                      Price
                    </p>

                    <p className="text-xl font-bold text-slate-900">
                      ${product.price}
                    </p>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition">
                    View Details
                  </button>

                </div>

              </div>

            </div>
  )
}

export default ProductCard
