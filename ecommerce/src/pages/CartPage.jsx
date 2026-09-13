import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import CartCard from '../components/CartCard';
import { MyStore } from '../context/MyContext';

const CartPage = () => {

  const { cartItems } = useContext(MyStore);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= HERO ================= */}
      <section className="border-b border-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase mb-5">
            Your Selection
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">

        {
          cartItems.length === 0 ? (

            /* ================= EMPTY CART ================= */
            <div className="min-h-[500px] flex flex-col items-center justify-center text-center">

              <div className="w-24 h-24 rounded-full border border-[#303030] flex items-center justify-center">

                <span className="text-[#D4AF37] text-4xl">
                  ♡
                </span>

              </div>

              <p className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mt-8">
                Your Bag Is Empty
              </p>

              <h2 className="text-3xl md:text-4xl font-light mt-4">
                Nothing Here Yet.
              </h2>

              <p className="text-sm text-[#777] max-w-md leading-7 mt-4">
                Discover our carefully selected collection
                and find something made for you.
              </p>

              <button
                onClick={() => navigate('/collection')}
                className="mt-8 px-10 py-4
                bg-[#D4AF37] text-[#0D0D0D]
                text-xs font-semibold
                tracking-[0.2em] uppercase
                hover:bg-[#F5F5F7]
                transition-all duration-300"
              >
                Explore Collection
              </button>

            </div>

          ) : (

            /* ================= CART WITH ITEMS ================= */
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

              {/* ================= ITEMS ================= */}
              <div className="lg:col-span-2">

                {/* Header */}
                <div className="hidden md:grid grid-cols-12 border-b border-[#292929] pb-4 text-[10px] tracking-[0.25em] text-[#777] uppercase">

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
                  {
                    cartItems.map((item) => (
                      <CartCard key={item.id} item={item} />
                    ))
                  }
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">

                  <button
                    onClick={() => navigate('/collection')}
                    className="text-xs tracking-[0.2em] text-[#A1A1A6] hover:text-[#D4AF37] transition"
                  >
                    ← CONTINUE SHOPPING
                  </button>

                </div>

              </div>


              {/* ================= ORDER SUMMARY ================= */}
              <div>

                <div className="bg-[#1A1A1A] border border-[#292929] p-7 md:p-8 sticky top-24">

                  <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase">
                    Order Summary
                  </p>

                  <h2 className="text-2xl font-light mt-3">
                    Your Order
                  </h2>

                  <div className="space-y-5 mt-8">

                    <div className="flex justify-between text-sm">

                      <span className="text-[#777]">
                        Subtotal
                      </span>

                      <span>
                        $3,020
                      </span>

                    </div>

                    <div className="flex justify-between text-sm">

                      <span className="text-[#777]">
                        Shipping
                      </span>

                      <span className="text-[#D4AF37]">
                        Complimentary
                      </span>

                    </div>

                    <div className="flex justify-between text-sm">

                      <span className="text-[#777]">
                        Estimated Tax
                      </span>

                      <span>
                        $302
                      </span>

                    </div>

                  </div>

                  <div className="border-t border-[#303030] my-7" />

                  <div className="flex justify-between items-center">

                    <span className="text-sm">
                      Total
                    </span>

                    <span className="text-2xl font-light
              text-[#D4AF37]">
                      $3,322
                    </span>

                  </div>

                  <button
                    className="w-full mt-8 py-4 bg-[#D4AF37] text-[#0D0D0D]
                    text-xs font-semibold
                    tracking-[0.18em] uppercase
                    hover:bg-[#F5F5F7]
                    transition-all duration-300"
                  >
                    Proceed To Checkout
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-5">

                    <span className="text-[#D4AF37]">
                      ◈
                    </span>

                    <p className="text-[10px] tracking-[0.15em] text-[#666]">
                      SECURE CHECKOUT
                    </p>

                  </div>

                </div>

              </div>

            </div>
          )
        }

      </section>


      {/* ================= SERVICE STRIP ================= */}
      <section className="border-y border-[#1A1A1A] bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

          <div className="grid md:grid-cols-3 gap-10 text-center">

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
