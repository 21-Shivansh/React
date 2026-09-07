import React from 'react'
import { useNavigate } from 'react-router'

const AboutPage = () => {

  const navigate = useNavigate();



  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[#1A1A1A]">

        {/* Gold glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36 text-center">

          <p className="text-[#D4AF37] text-xs tracking-[0.45em] uppercase mb-6">
            Our Story
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Beyond
            <span className="text-[#D4AF37]"> Ordinary.</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-[#A1A1A6] text-base md:text-lg leading-relaxed">
            We believe true luxury is not defined by excess.
            It is found in thoughtful design, exceptional
            craftsmanship, and details that stand the test of time.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <div className="relative h-[480px] bg-[#1A1A1A] border border-[#292929] overflow-hidden">
              <img className='h-full object-cover' src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/03/full/1691044067-0015.jpeg" alt="" />

            {/* Corner detail */}
            <div className="absolute top-6 left-6 w-5 h-5 border-l border-t border-[#D4AF37]" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-r border-b border-[#D4AF37]" />

          </div>


          {/* Content */}
          <div>

            <p className="text-[#D4AF37] text-xs tracking-[0.4em] mb-5">
              WHO WE ARE
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              A Different
              <span className="block text-[#D4AF37]">
                Kind Of Luxury.
              </span>
            </h2>

            <div className="space-y-5 mt-7 text-[#A1A1A6] leading-relaxed">

              <p>
                Luxe was created with a simple belief: the things
                we choose to surround ourselves with should feel
                meaningful.
              </p>

              <p>
                From the first sketch to the final detail, every
                piece is chosen with intention. We look beyond
                passing trends to discover designs that feel
                sophisticated today and timeless tomorrow.
              </p>

              <p>
                Our collections bring together refined aesthetics,
                premium quality, and understated elegance for
                people who appreciate the finer details.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-[#1A1A1A] border-y border-[#252525]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-[#D4AF37] text-xs tracking-[0.4em]">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-4xl md:text-5xl font-light mt-4">
              What We Believe
            </h2>

            <p className="text-[#A1A1A6] mt-5 leading-relaxed">
              Three principles guide everything we create.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-px bg-[#303030]">

            {/* Card 1 */}
            <div className="bg-[#1A1A1A] p-9 md:p-10 text-center">

              <div className="w-14 h-14 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center">

                <span className="text-[#D4AF37] text-xl">
                  I
                </span>

              </div>

              <h3 className="text-xl font-light mt-7">
                Intention
              </h3>

              <p className="text-sm text-[#A1A1A6] leading-relaxed mt-4">
                Every detail has a purpose. We believe thoughtful
                design creates lasting value.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-[#1A1A1A] p-9 md:p-10 text-center">

              <div className="w-14 h-14 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center">

                <span className="text-[#D4AF37] text-xl">
                  C
                </span>

              </div>

              <h3 className="text-xl font-light mt-7">
                Craftsmanship
              </h3>

              <p className="text-sm text-[#A1A1A6] leading-relaxed mt-4">
                Quality is never an afterthought. We seek
                excellence in every material and finish.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-[#1A1A1A] p-9 md:p-10 text-center">

              <div className="w-14 h-14 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center">

                <span className="text-[#D4AF37] text-xl">
                  T
                </span>

              </div>

              <h3 className="text-xl font-light mt-7">
                Timelessness
              </h3>

              <p className="text-sm text-[#A1A1A6] leading-relaxed mt-4">
                We design beyond seasons, creating pieces that
                remain relevant through time.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= NUMBERS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-[#D4AF37]">
              10K+
            </p>
            <p className="text-xs tracking-[0.25em] text-[#777] mt-3">
              CLIENTS
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-[#D4AF37]">
              25+
            </p>
            <p className="text-xs tracking-[0.25em] text-[#777] mt-3">
              COLLECTIONS
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-[#D4AF37]">
              15
            </p>
            <p className="text-xs tracking-[0.25em] text-[#777] mt-3">
              COUNTRIES
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-[#D4AF37]">
              4.9
            </p>
            <p className="text-xs tracking-[0.25em] text-[#777] mt-3">
              RATING
            </p>
          </div>

        </div>

      </section>


      {/* ================= QUOTE ================= */}
      <section className="border-y border-[#1A1A1A]">

        <div className="max-w-4xl mx-auto px-6 py-28 text-center">

          <div className="text-[#D4AF37] text-5xl font-serif">
            “
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mt-4">
            Luxury is not about
            <span className="text-[#D4AF37]"> having more.</span>
            <br />
            It's about having
            <span className="text-[#D4AF37]"> better.</span>
          </blockquote>

          <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-9" />

          <p className="text-xs tracking-[0.35em] text-[#777] mt-5">
            THE LUXE PHILOSOPHY
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="relative overflow-hidden bg-[#1A1A1A] border border-[#292929] px-8 md:px-16 py-16 md:py-20 text-center">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D4AF37]/10 blur-[100px]" />

          <div className="relative">

            <p className="text-[#D4AF37] text-xs tracking-[0.4em]">
              DISCOVER LUXE
            </p>

            <h2 className="text-3xl md:text-4xl font-light mt-4">
              Find Something Extraordinary.
            </h2>

            <p className="text-[#A1A1A6] text-sm max-w-lg mx-auto mt-4 leading-relaxed">
              Explore our latest collection and discover pieces
              created for those who choose to stand apart.
            </p>

            <button onClick={()=>navigate('/collection')} className="mt-8 px-8 py-3.5 bg-[#D4AF37] text-[#0D0D0D] text-sm font-semibold tracking-wide hover:bg-[#F5F5F7] transition-all duration-300">
              EXPLORE COLLECTION
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default AboutPage