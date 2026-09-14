import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* Header */}
      <section className="border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

          <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase">
            Secure Checkout
          </p>

          <h1 className="text-4xl md:text-5xl font-light mt-4">
            Complete Your Order.
          </h1>

          <p className="text-sm text-[#777] mt-4 max-w-xl">
            Enter your details below to complete your purchase.
            Your information is securely protected.
          </p>

        </div>
      </section>


      {/* Checkout Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


          {/* Left - Form */}
          <div className="lg:col-span-2 space-y-8">


            {/* Contact Information */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-7 md:p-8">

              <div className="mb-7">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">
                  01
                </p>

                <h2 className="text-xl font-light mt-2">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="md:col-span-2">
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

              </div>

            </div>


            {/* Shipping Address */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-7 md:p-8">

              <div className="mb-7">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">
                  02
                </p>

                <h2 className="text-xl font-light mt-2">
                  Shipping Address
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="md:col-span-2">
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street address"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    State
                  </label>

                  <input
                    type="text"
                    placeholder="State"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    Country
                  </label>

                  <select
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#A1A1A6] outline-none focus:border-[#D4AF37] transition"
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#A1A1A6] mb-2">
                    PIN Code
                  </label>

                  <input
                    type="text"
                    placeholder="000000"
                    className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#303030] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

              </div>

            </div>


            {/* Payment */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-7 md:p-8">

              <div className="mb-7">
                <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">
                  03
                </p>

                <h2 className="text-xl font-light mt-2">
                  Payment Method
                </h2>
              </div>


              {/* Payment Options */}
              <div className="space-y-3">

                <label className="flex items-center justify-between border border-[#D4AF37] bg-[#0D0D0D] p-5 cursor-pointer">

                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="accent-[#D4AF37]"
                    />

                    <div>
                      <p className="text-sm">
                        Credit / Debit Card
                      </p>

                      <p className="text-xs text-[#666] mt-1">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>
                  </div>

                  <span className="text-[#D4AF37] text-xs">
                    CARD
                  </span>

                </label>


                <label className="flex items-center justify-between border border-[#303030] bg-[#0D0D0D] p-5 cursor-pointer hover:border-[#D4AF37] transition">

                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#D4AF37]"
                    />

                    <div>
                      <p className="text-sm">
                        UPI
                      </p>

                      <p className="text-xs text-[#666] mt-1">
                        Google Pay, PhonePe, Paytm
                      </p>
                    </div>
                  </div>

                  <span className="text-[#D4AF37] text-xs">
                    UPI
                  </span>

                </label>


                <label className="flex items-center justify-between border border-[#303030] bg-[#0D0D0D] p-5 cursor-pointer hover:border-[#D4AF37] transition">

                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#D4AF37]"
                    />

                    <div>
                      <p className="text-sm">
                        Cash on Delivery
                      </p>

                      <p className="text-xs text-[#666] mt-1">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>

                  <span className="text-[#D4AF37] text-xs">
                    COD
                  </span>

                </label>

              </div>

            </div>

          </div>


          {/* Right - Order Summary */}
          <div className="lg:col-span-1">

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-7 sticky top-8">

              <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">
                Your Selection
              </p>

              <h2 className="text-2xl font-light mt-3 mb-8">
                Order Summary
              </h2>


              {/* Product */}
              <div className="flex gap-4 pb-6 border-b border-[#303030]">

                <div className="w-20 h-24 bg-[#0D0D0D] flex items-center justify-center">
                  <span className="text-[#444] text-xs">
                    IMAGE
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-[#777] uppercase tracking-wider">
                    Jewelry
                  </p>

                  <h3 className="text-sm mt-2 leading-5">
                    Luxury Collection Piece
                  </h3>

                  <p className="text-xs text-[#666] mt-2">
                    Qty: 1
                  </p>
                </div>

                <p className="text-sm text-[#D4AF37]">
                  $109.95
                </p>

              </div>


              {/* Price Details */}
              <div className="space-y-4 py-6 border-b border-[#303030]">

                <div className="flex justify-between text-sm">
                  <span className="text-[#777]">
                    Subtotal
                  </span>

                  <span>
                    $109.95
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#777]">
                    Shipping
                  </span>

                  <span className="text-[#D4AF37]">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#777]">
                    Tax
                  </span>

                  <span>
                    $10.99
                  </span>
                </div>

              </div>


              {/* Total */}
              <div className="flex items-center justify-between py-6">

                <span className="text-sm text-[#A1A1A6]">
                  Total
                </span>

                <span className="text-2xl font-light text-[#D4AF37]">
                  $120.94
                </span>

              </div>


              {/* Place Order */}
              <button className="w-full h-13 bg-[#D4AF37] text-[#0D0D0D] font-semibold text-sm tracking-[0.15em] hover:bg-[#F5F5F7] transition-all duration-300">
                PLACE ORDER
              </button>


              <p className="text-center text-[10px] text-[#666] leading-5 mt-5">
                By placing your order, you agree to our
                terms and conditions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom Trust Section */}
      <section className="border-t border-[#1A1A1A] bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div>
              <p className="text-[#D4AF37] text-xl">
                ◇
              </p>

              <h3 className="text-sm mt-3">
                Secure Checkout
              </h3>

              <p className="text-xs text-[#666] mt-2">
                Your information is protected.
              </p>
            </div>

            <div>
              <p className="text-[#D4AF37] text-xl">
                ♢
              </p>

              <h3 className="text-sm mt-3">
                Complimentary Shipping
              </h3>

              <p className="text-xs text-[#666] mt-2">
                Free delivery on every order.
              </p>
            </div>

            <div>
              <p className="text-[#D4AF37] text-xl">
                ✧
              </p>

              <h3 className="text-sm mt-3">
                Luxury, Delivered
              </h3>

              <p className="text-xs text-[#666] mt-2">
                Carefully packaged and delivered.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default CheckoutPage



