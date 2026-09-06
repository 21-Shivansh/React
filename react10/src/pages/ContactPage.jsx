import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-16 text-white">

      {/* Header */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact Us
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          We'd love to hear from you
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Have a question about a product, your order, or anything else?
          Send us a message and our team will get back to you.
        </p>
      </div>

      {/* Main Section */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-2xl bg-gray-900 p-8 lg:p-10">

          <h2 className="text-2xl font-bold">
            Get in touch
          </h2>

          <p className="mt-3 leading-7 text-gray-400">
            Our support team is available to help you with your shopping
            experience.
          </p>

          <div className="mt-10 space-y-7">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                📧
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-gray-400">
                  support@shopstore.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                📞
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-gray-400">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                📍
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="mt-1 text-gray-400">
                  123 Market Street
                  <br />
                  Indore, Madhya Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                🕐
              </div>

              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="mt-1 text-gray-400">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-gray-900 p-8 lg:p-10">

          <h2 className="text-2xl font-bold">
            Send us a message
          </h2>

          <form className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="What is this regarding?"
                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 py-3 font-semibold transition hover:bg-blue-600"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* FAQ CTA */}
      <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">

        <h2 className="text-2xl font-bold">
          Need help with an order?
        </h2>

        <p className="mt-2 text-gray-400">
          Check your order details or reach out to our support team.
        </p>

        <button className="mt-5 rounded-xl border border-blue-500 px-6 py-2.5 font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white">
          View My Orders
        </button>

      </div>

    </div>
  );
};

export default Contact;
