import React from 'react'

const CartCard = ({item}) => {
  return (
    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-0 py-7 border-b border-[#1A1A1A]">

      {/* Product */}
      <div className="md:col-span-6 flex gap-5">

        <div className="w-28 h-32 md:w-24 md:h-28 bg-[#1A1A1A] shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />

        </div>


        <div className="py-1">

          <p className="text-[10px] tracking-[0.25em] text-[#777] uppercase">
            {item.category}
          </p>

          <h3 className="text-base font-light mt-2">
            {item.name}
          </h3>

          <button className="text-xs text-[#777] hover:text-[#D4AF37] transition mt-5">
            Remove
          </button>

        </div>

      </div>


      {/* Price */}
      <div className="md:col-span-2 flex md:items-center">

        <span className="md:hidden text-xs text-[#777] mr-3">
          PRICE
        </span>

        <p className="text-sm text-[#D4AF37]">
          ${item.price.toLocaleString()}
        </p>

      </div>


      {/* Quantity */}
      <div className="md:col-span-3 flex items-center">

        <span className="md:hidden text-xs text-[#777] mr-3">
          QTY
        </span>

        <div className="flex items-center border border-[#303030]">

          <button
            className="w-9 h-9 text-[#A1A1A6] hover:text-[#D4AF37] transition"
          >
            −
          </button>

          <span className="w-9 text-center text-sm">
            {item.quantity}
          </span>

          <button className="w-9 h-9 text-[#A1A1A6] hover:text-[#D4AF37] transition">
            +
          </button>

        </div>

      </div>


      {/* Total */}
      <div className="md:col-span-1 flex md:items-center">

        <span className="md:hidden text-xs text-[#777] mr-3">
          TOTAL
        </span>

        <p className="text-sm">
          ${(item.price * item.quantity)
            .toLocaleString()}
        </p>

      </div>

    </div>
  )
}

export default CartCard
