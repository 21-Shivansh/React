import React from 'react'
import { useNavigate } from 'react-router'

const HomePage = () => {

  const navigate = useNavigate(); 



  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= HERO ================= */}
      <section className="relative h-full flex items-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-50 right-[-150px] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Hero Content */}
          <div className="relative z-10">

            <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase mb-6">
              The Art Of Elegance
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
              Crafted For
              <span className="block text-[#D4AF37] mt-2">
                Those Who
              </span>
              <span className="block">
                Stand Apart.
              </span>
            </h1>

            <p className="text-[#A1A1A6] max-w-lg mt-7 text-base md:text-lg leading-relaxed">
              Discover a curated collection of timeless pieces,
              designed for those who appreciate exceptional
              craftsmanship and refined style.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-9">

              <button onClick={()=>navigate('/collection')} className="px-6 py-4 bg-[#D4AF37] text-[#0D0D0D] font-semibold text-sm tracking-wide hover:bg-[#F5F5F7] transition-all duration-300">
                EXPLORE COLLECTION
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-[#1A1A1A]">

              <div>
                <p className="text-2xl font-light text-[#D4AF37]">
                  10K+
                </p>
                <p className="text-xs text-[#A1A1A6] mt-1 tracking-wide">
                  HAPPY CLIENTS
                </p>
              </div>

              <div>
                <p className="text-2xl font-light text-[#D4AF37]">
                  25+
                </p>
                <p className="text-xs text-[#A1A1A6] mt-1 tracking-wide">
                  COLLECTIONS
                </p>
              </div>

              <div>
                <p className="text-2xl font-light text-[#D4AF37]">
                  4.9
                </p>
                <p className="text-xs text-[#A1A1A6] mt-1 tracking-wide">
                  CUSTOMER RATING
                </p>
              </div>

            </div>

          </div>


          {/* Hero Visual */}
          <div className="relative h-[500px] lg:h-[620px]">

            {/* Main Card */}
            <div className="absolute inset-8 bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">

              {/* Replace this with your product/image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#222] via-[#141414] to-[#0D0D0D]">

                <img src="https://img.chrono24.com/images/uhren/bcrxr2t8rz2j-r0wrx2pvz6ajjbt0tq8oezq5-ExtraLarge.jpg" alt="" />

              </div>

            </div>

            {/* Floating Gold Card */}
            <div className="absolute top-4 right-0 bg-[#D4AF37] text-[#0D0D0D] px-6 py-5">

              <p className="text-[10px] tracking-[0.3em]">
                NEW
              </p>

              <p className="text-lg font-semibold mt-1">
                2026
              </p>

            </div>

            {/* Floating Quote */}
            <div className="absolute bottom-4 left-0 bg-[#1A1A1A] border border-[#2A2A2A] px-6 py-5 max-w-[220px]">

              <p className="text-sm text-[#F5F5F7] leading-relaxed">
                "Luxury is not about having more.
                It's about having the extraordinary."
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BRAND STRIP ================= */}
      <section className="border-y border-[#1A1A1A] bg-[#0D0D0D]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-wrap justify-between items-center gap-6">

          <span className="text-xs tracking-[0.3em] text-[#666]">
            BESPOKE CRAFTSMANSHIP
          </span>

          <span className="hidden md:block h-px bg-[#2A2A2A] flex-1 max-w-[150px]" />

          <span className="text-xs tracking-[0.3em] text-[#666]">
            TIMELESS DESIGN
          </span>

          <span className="hidden md:block h-px bg-[#2A2A2A] flex-1 max-w-[150px]" />

          <span className="text-xs tracking-[0.3em] text-[#666]">
            PREMIUM QUALITY
          </span>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="flex justify-between items-end mb-12">

          <div>
            <p className="text-[#D4AF37] text-xs tracking-[0.35em] mb-3">
              CURATED FOR YOU
            </p>

            <h2 className="text-3xl md:text-4xl font-light">
              Explore Our Collections
            </h2>
          </div>

          <button onClick={()=>navigate('/collection')} className="hidden sm:block text-sm text-[#A1A1A6] hover:text-[#D4AF37] transition-colors">
            View All →
          </button>

        </div>


        <div className="grid md:grid-cols-3 gap-5">

          {/* Category 1 */}
          <div className="group relative h-[420px] bg-[#1A1A1A] border border-[#252525] overflow-hidden cursor-pointer">

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <img className='h-full object-cover ' src="https://addicfashion.com/wp-content/uploads/2019/06/cool-shoes-summer-ideas-for-men-that-looks-cool18.jpg" alt="" />
            </div>

            <div className="absolute bottom-0 left-0 z-20 p-7">

              <p className="text-[#D4AF37] text-xs tracking-[0.3em]">
                01
              </p>

              <h3 className="text-2xl font-light mt-2">
                Accessories
              </h3>

              <p className="text-[#A1A1A6] text-sm mt-2">
                Refined details for every occasion
              </p>

            </div>

          </div>


          {/* Category 2 */}
          <div className="group relative h-[420px] bg-[#1A1A1A] border border-[#252525] overflow-hidden cursor-pointer">

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

              <img className='h-full object-cover ' src="https://i.pinimg.com/originals/30/9d/15/309d15837404b81d44e620a243a28af1.png" alt="" />

            </div>

            <div className="absolute bottom-0 left-0 z-20 p-7">

              <p className="text-[#D4AF37] text-xs tracking-[0.3em]">
                02
              </p>

              <h3 className="text-2xl font-light mt-2">
                Essentials
              </h3>

              <p className="text-[#A1A1A6] text-sm mt-2">
                Everyday pieces, elevated
              </p>

            </div>

          </div>


          {/* Category 3 */}
          <div className="group relative h-[420px] bg-[#1A1A1A] border border-[#252525] overflow-hidden cursor-pointer">

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            <div className="absolute inset-0 flex items-center justify-center">

              <img className='h-full object-cover' src="https://xparfumclub.com/upload/1724325182-66c71d3edb98d.jpg" alt="" />

            </div>

            <div className="absolute bottom-0 left-0 z-20 p-7">

              <p className="text-[#D4AF37] text-xs tracking-[0.3em]">
                03
              </p>

              <h3 className="text-2xl font-light mt-2">
                Signature
              </h3>

              <p className="text-[#A1A1A6] text-sm mt-2">
                Pieces that make a statement
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURE ================= */}
      <section className="bg-[#1A1A1A] border-y border-[#252525]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <div className="h-[450px] border border-[#303030] relative flex items-center justify-center">

            <img className='w-full object-cover' src="https://cdn.wirelessgate.com/2026/02/auto-image-1771325798.png" alt="" />

          </div>


          {/* Content */}
          <div>

            <p className="text-[#D4AF37] text-xs tracking-[0.35em]">
              WHY LUXE
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mt-4">
              Designed To
              <span className="block text-[#D4AF37]">
                Last Forever.
              </span>
            </h2>

            <p className="text-[#A1A1A6] leading-relaxed mt-6 max-w-lg">
              Every piece in our collection is carefully selected
              for its quality, character and timeless appeal.
              We believe true luxury isn't defined by trends —
              it's defined by craftsmanship.
            </p>


            <div className="grid grid-cols-2 gap-8 mt-10">

              <div>
                <div className="text-[#D4AF37] text-2xl mb-2">
                  ✦
                </div>

                <h4 className="text-sm font-medium">
                  Premium Quality
                </h4>

                <p className="text-xs text-[#777] mt-2 leading-relaxed">
                  Carefully selected materials and exceptional
                  attention to detail.
                </p>
              </div>


              <div>
                <div className="text-[#D4AF37] text-2xl mb-2">
                  ◇
                </div>

                <h4 className="text-sm font-medium">
                  Timeless Style
                </h4>

                <p className="text-xs text-[#777] mt-2 leading-relaxed">
                  Designed beyond seasons and made to remain
                  effortlessly elegant.
                </p>
              </div>

            </div>


            <button onClick={()=>navigate('/about')} className="mt-10 px-7 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-wide hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300">
              OUR STORY
            </button>

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <p className="text-[#D4AF37] text-xs tracking-[0.4em]">
          STAY IN THE KNOW
        </p>

        <h2 className="text-3xl md:text-4xl font-light mt-4">
          Enter The World Of Luxe
        </h2>

        <p className="text-[#A1A1A6] text-sm mt-4 max-w-md mx-auto">
          Be the first to discover new collections,
          exclusive pieces and private offers.
        </p>

        <div className="flex max-w-lg mx-auto mt-8">

          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-12 px-5 bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37]"
          />

          <button className="px-6 bg-[#D4AF37] text-[#0D0D0D] text-sm font-semibold hover:bg-[#F5F5F7] transition-all duration-300">
            JOIN
          </button>

        </div>

      </section>

    </div>
  )
}

export default HomePage