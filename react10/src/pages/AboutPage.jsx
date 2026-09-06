import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Us
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Shopping made
            <span className="text-blue-500"> simple.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We believe online shopping should be simple, enjoyable, and
            accessible to everyone. Discover products you love, compare
            your options, and shop with confidence.
          </p>

        </div>
      </section>


      {/* Story Section */}
      <section className="border-y border-gray-800 bg-gray-900/50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Our Story
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Built for better shopping
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Our journey started with a simple idea — create an online
              shopping experience that puts customers first.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              From discovering new products to placing an order, every part
              of our platform is designed to be fast, convenient, and easy
              to use.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gray-800 p-8">
              <h3 className="text-3xl font-bold text-blue-400">10K+</h3>
              <p className="mt-2 text-gray-400">Happy Customers</p>
            </div>

            <div className="rounded-2xl bg-gray-800 p-8">
              <h3 className="text-3xl font-bold text-blue-400">500+</h3>
              <p className="mt-2 text-gray-400">Products</p>
            </div>

            <div className="rounded-2xl bg-gray-800 p-8">
              <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
              <p className="mt-2 text-gray-400">Customer Support</p>
            </div>

            <div className="rounded-2xl bg-gray-800 p-8">
              <h3 className="text-3xl font-bold text-blue-400">99%</h3>
              <p className="mt-2 text-gray-400">Positive Reviews</p>
            </div>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need in one place
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              We focus on making every step of your shopping experience
              better.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-1 hover:border-blue-500">
              <div className="text-4xl">🛍️</div>

              <h3 className="mt-6 text-xl font-semibold">
                Wide Selection
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Explore a growing collection of products across different
                categories, all in one convenient place.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-1 hover:border-blue-500">
              <div className="text-4xl">⚡</div>

              <h3 className="mt-6 text-xl font-semibold">
                Fast & Simple
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Browse products, find what you need, and complete your
                purchase with a smooth and simple experience.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-1 hover:border-blue-500">
              <div className="text-4xl">🔒</div>

              <h3 className="mt-6 text-xl font-semibold">
                Secure Shopping
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Your shopping experience matters to us, which is why we
                prioritize reliability, security, and transparency.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="bg-blue-600 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Our Mission
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Making online shopping better, one order at a time.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
            We are committed to creating a shopping platform that combines
            great products, simple technology, and an experience customers
            can trust.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to start shopping?
          </h2>

          <p className="mt-4 text-gray-400">
            Explore our products and find something you'll love.
          </p>

          <button className="mt-8 rounded-xl bg-blue-500 px-8 py-3 font-semibold transition hover:bg-blue-600">
            Explore Products
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;


