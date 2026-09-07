import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[#1A1A1A]">

        {/* Gold Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36 text-center">

          <p className="text-[#D4AF37] text-xs tracking-[0.45em] uppercase mb-6">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Let's Start a
            <span className="text-[#D4AF37]"> Conversation.</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-[#A1A1A6] text-base md:text-lg leading-relaxed">
            Have a question, need assistance, or simply want to
            know more about Luxe? Our team is here to help.
          </p>

        </div>

      </section>


      {/* ================= CONTACT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

          {/* ================= LEFT INFO ================= */}
          <div className="lg:col-span-2">

            <p className="text-[#D4AF37] text-xs tracking-[0.4em] mb-5">
              CONTACT US
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              We're Here
              <span className="block text-[#D4AF37]">
                To Help.
              </span>
            </h2>

            <p className="text-[#A1A1A6] leading-relaxed mt-7 max-w-md">
              Whether you have a question about an order, need
              help choosing the perfect piece, or simply want to
              say hello, we'd love to hear from you.
            </p>


            {/* Contact Details */}
            <div className="mt-12 space-y-8">

              {/* Email */}
              <div className="flex items-start gap-5">

                <div className="w-11 h-11 shrink-0 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  ✉
                </div>

                <div>
                  <p className="text-xs tracking-[0.25em] text-[#777] uppercase">
                    Email
                  </p>

                  <p className="mt-2 text-sm">
                    concierge@luxe.com
                  </p>

                  <p className="text-xs text-[#777] mt-1">
                    We reply within 24 hours
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-5">

                <div className="w-11 h-11 shrink-0 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  ☎
                </div>

                <div>
                  <p className="text-xs tracking-[0.25em] text-[#777] uppercase">
                    Phone
                  </p>

                  <p className="mt-2 text-sm">
                    +1 (800) 555-LUXE
                  </p>

                  <p className="text-xs text-[#777] mt-1">
                    Mon — Fri · 9AM — 6PM
                  </p>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-start gap-5">

                <div className="w-11 h-11 shrink-0 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  ◇
                </div>

                <div>
                  <p className="text-xs tracking-[0.25em] text-[#777] uppercase">
                    Visit Us
                  </p>

                  <p className="mt-2 text-sm">
                    120 Madison Avenue
                  </p>

                  <p className="text-xs text-[#777] mt-1">
                    New York, NY 10016
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <div className="lg:col-span-3">

            <div className="bg-[#1A1A1A] border border-[#292929] p-7 md:p-10">

              <div className="mb-9">

                <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase">
                  Send A Message
                </p>

                <h3 className="text-2xl md:text-3xl font-light mt-3">
                  How Can We Assist?
                </h3>

              </div>


              <form className="space-y-6">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#A1A1A6] uppercase mb-3">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#0D0D0D] border border-[#303030] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder:text-[#555] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    />
                  </div>


                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#A1A1A6] uppercase mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#0D0D0D] border border-[#303030] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder:text-[#555] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                    />
                  </div>

                </div>


                {/* Subject */}
                <div>

                  <label className="block text-xs tracking-[0.2em] text-[#A1A1A6] uppercase mb-3">
                    Subject
                  </label>

                  <select
                    className="w-full bg-[#0D0D0D] border border-[#303030] px-4 py-3.5 text-sm text-[#A1A1A6] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  >
                    <option>General Inquiry</option>
                    <option>Order Assistance</option>
                    <option>Product Information</option>
                    <option>Shipping & Delivery</option>
                    <option>Returns & Exchanges</option>
                    <option>Other</option>
                  </select>

                </div>


                {/* Message */}
                <div>

                  <label className="block text-xs tracking-[0.2em] text-[#A1A1A6] uppercase mb-3">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none bg-[#0D0D0D] border border-[#303030] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder:text-[#555] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0D0D0D] py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#F5F5F7] transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SUPPORT STRIP ================= */}
      <section className="border-y border-[#1A1A1A] bg-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {/* Support */}
            <div>

              <div className="text-[#D4AF37] text-2xl">
                ✦
              </div>

              <h3 className="text-lg font-light mt-5">
                Personal Assistance
              </h3>

              <p className="text-sm text-[#777] mt-3 leading-relaxed">
                Our concierge team is ready to provide
                personalized assistance.
              </p>

            </div>


            {/* Response */}
            <div>

              <div className="text-[#D4AF37] text-2xl">
                ◷
              </div>

              <h3 className="text-lg font-light mt-5">
                Quick Response
              </h3>

              <p className="text-sm text-[#777] mt-3 leading-relaxed">
                Expect a thoughtful response from our
                team within 24 hours.
              </p>

            </div>


            {/* Secure */}
            <div>

              <div className="text-[#D4AF37] text-2xl">
                ◈
              </div>

              <h3 className="text-lg font-light mt-5">
                Dedicated Support
              </h3>

              <p className="text-sm text-[#777] mt-3 leading-relaxed">
                From orders to products, we're here whenever
                you need us.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="relative overflow-hidden border border-[#292929] bg-[#1A1A1A] px-8 md:px-16 py-16 text-center">

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D4AF37]/10 blur-[100px]" />

          <div className="relative">

            <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase">
              Need Answers?
            </p>

            <h2 className="text-3xl md:text-4xl font-light mt-4">
              Looking For Something Specific?
            </h2>

            <p className="max-w-xl mx-auto text-[#A1A1A6] text-sm mt-4 leading-relaxed">
              Before reaching out, you may find what you're
              looking for in our frequently asked questions.
            </p>

            <button className="mt-8 px-8 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-wide hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300">
              VIEW FAQ
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ContactPage
