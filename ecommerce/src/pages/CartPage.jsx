import React from 'react'
import {useNavigate} from 'react-router'

const CartPage = () => {

  const cartItems = [
    {
      id: 1,
      name: 'Noir Chronograph',
      category: 'Watches',
      price: 1240,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Aurelia Necklace',
      category: 'Jewelry',
      price: 890,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80'
    }
  ]

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= HERO ================= */}
      <section className="border-b border-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10
        py-16 md:py-20">

          <p className="text-[#D4AF37] text-xs tracking-[0.4em]
          uppercase mb-5">
            Your Selection
          </p>

          <div className="flex flex-col md:flex-row
          md:items-end justify-between gap-5">

            <h1 className="text-4xl md:text-5xl
            lg:text-6xl font-light">
              Shopping
              <span className="text-[#D4AF37]"> Bag.</span>
            </h1>

            <p className="text-sm text-[#777]">
              {cartItems.length} Items
            </p>

          </div>

        </div>

      </section>


      {/* ================= CART ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10
      py-16 md:py-24">

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">


          {/* ================= ITEMS ================= */}
          <div className="lg:col-span-2">

            {/* Header */}
            <div className="hidden md:grid grid-cols-12
            border-b border-[#292929] pb-4
            text-[10px] tracking-[0.25em] text-[#777] uppercase">

              <p className="col-span-6">
                Product
              </p>

              <p className="col-span-2">
                Price
              </p>

              <p className="col-span-3">
                Quantity
              </p>

              <p className="col-span-1">
                Total
              </p>

            </div>


            {/* Cart Items */}
            <div>

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12
                  gap-5 md:gap-0 py-7
                  border-b border-[#1A1A1A]"
                >

                  {/* Product */}
                  <div className="md:col-span-6 flex gap-5">

                    <div className="w-28 h-32 md:w-24 md:h-28
                    bg-[#1A1A1A] shrink-0 overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                    </div>


                    <div className="py-1">

                      <p className="text-[10px] tracking-[0.25em]
                      text-[#777] uppercase">
                        {item.category}
                      </p>

                      <h3 className="text-base font-light mt-2">
                        {item.name}
                      </h3>

                      <button
                        className="text-xs text-[#777]
                        hover:text-[#D4AF37]
                        transition mt-5"
                      >
                        Remove
                      </button>

                    </div>

                  </div>


                  {/* Price */}
                  <div className="md:col-span-2
                  flex md:items-center">

                    <span className="md:hidden text-xs
                    text-[#777] mr-3">
                      PRICE
                    </span>

                    <p className="text-sm text-[#D4AF37]">
                      ${item.price.toLocaleString()}
                    </p>

                  </div>


                  {/* Quantity */}
                  <div className="md:col-span-3
                  flex items-center">

                    <span className="md:hidden text-xs
                    text-[#777] mr-3">
                      QTY
                    </span>

                    <div className="flex items-center
                    border border-[#303030]">

                      <button
                        className="w-9 h-9 text-[#A1A1A6]
                        hover:text-[#D4AF37]
                        transition"
                      >
                        −
                      </button>

                      <span className="w-9 text-center
                      text-sm">
                        {item.quantity}
                      </span>

                      <button
                        className="w-9 h-9 text-[#A1A1A6]
                        hover:text-[#D4AF37]
                        transition"
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Total */}
                  <div className="md:col-span-1
                  flex md:items-center">

                    <span className="md:hidden text-xs
                    text-[#777] mr-3">
                      TOTAL
                    </span>

                    <p className="text-sm">
                      ${(item.price * item.quantity)
                        .toLocaleString()}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* Continue Shopping */}
            <div className="mt-8">

              <button
                onClick={()=>navigate('/collection')}
                className="text-xs tracking-[0.2em]
                text-[#A1A1A6]
                hover:text-[#D4AF37]
                transition"
              >
                ← CONTINUE SHOPPING
              </button>

            </div>

          </div>


          {/* ================= ORDER SUMMARY ================= */}
          <div>

            <div className="bg-[#1A1A1A]
            border border-[#292929] p-7 md:p-8
            sticky top-24">

              <p className="text-xs tracking-[0.3em]
              text-[#D4AF37] uppercase">
                Order Summary
              </p>

              <h2 className="text-2xl font-light mt-3">
                Your Order
              </h2>


              {/* Summary */}
              <div className="space-y-5 mt-8">

                <div className="flex justify-between
                text-sm">

                  <span className="text-[#777]">
                    Subtotal
                  </span>

                  <span>
                    $3,020
                  </span>

                </div>


                <div className="flex justify-between
                text-sm">

                  <span className="text-[#777]">
                    Shipping
                  </span>

                  <span className="text-[#D4AF37]">
                    Complimentary
                  </span>

                </div>


                <div className="flex justify-between
                text-sm">

                  <span className="text-[#777]">
                    Estimated Tax
                  </span>

                  <span>
                    $302
                  </span>

                </div>

              </div>


              {/* Divider */}
              <div className="border-t border-[#303030]
              my-7" />


              {/* Total */}
              <div className="flex justify-between
              items-center">

                <span className="text-sm">
                  Total
                </span>

                <span className="text-2xl font-light
                text-[#D4AF37]">
                  $3,322
                </span>

              </div>


              {/* Checkout */}
              <button
                className="w-full mt-8 py-4
                bg-[#D4AF37] text-[#0D0D0D]
                text-xs font-semibold
                tracking-[0.18em] uppercase
                hover:bg-[#F5F5F7]
                transition-all duration-300"
              >
                Proceed To Checkout
              </button>


              {/* Secure */}
              <div className="flex items-center
              justify-center gap-2 mt-5">

                <span className="text-[#D4AF37]">
                  ◈
                </span>

                <p className="text-[10px]
                tracking-[0.15em] text-[#666]">
                  SECURE CHECKOUT
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICE STRIP ================= */}
      <section className="border-y border-[#1A1A1A]
      bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10
        py-16">

          <div className="grid md:grid-cols-3 gap-10
          text-center">

            <div>

              <div className="text-[#D4AF37] text-xl">
                ◈
              </div>

              <h3 className="text-sm font-light mt-4">
                Complimentary Shipping
              </h3>

              <p className="text-xs text-[#666] mt-2">
                On all Luxe orders
              </p>

            </div>


            <div>

              <div className="text-[#D4AF37] text-xl">
                ↺
              </div>

              <h3 className="text-sm font-light mt-4">
                Easy Returns
              </h3>

              <p className="text-xs text-[#666] mt-2">
                Simple and effortless
              </p>

            </div>


            <div>

              <div className="text-[#D4AF37] text-xl">
                ✦
              </div>

              <h3 className="text-sm font-light mt-4">
                Personal Assistance
              </h3>

              <p className="text-xs text-[#666] mt-2">
                Our concierge team is here
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default CartPage
