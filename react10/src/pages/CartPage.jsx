import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image:
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-400">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        { true ? (

          /* Empty Cart */
          <div className="rounded-2xl border border-gray-800 bg-gray-900 px-6 py-20 text-center">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-6 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-400">
              Looks like you haven't added anything to your cart yet.
            </p>

            <button className="mt-7 rounded-xl bg-blue-500 px-7 py-3 font-semibold transition hover:bg-blue-600">
              Continue Shopping
            </button>
          </div>

        ) : (

          /* Cart */
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* Cart Items */}
            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-900 p-5 sm:flex-row sm:items-center"
                >

                  {/* Image */}
                  <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">

                    <h2 className="font-semibold leading-6">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-blue-400">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center justify-between">

                      <div className="flex items-center rounded-lg border border-gray-700">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-3 py-1.5 text-lg hover:bg-gray-800"
                        >
                          −
                        </button>

                        <span className="px-4">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-3 py-1.5 text-lg hover:bg-gray-800"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-400 transition hover:text-red-300"
                      >
                        Remove
                      </button>

                    </div>
                  </div>

                </div>
              ))}

            </div>


            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-6 lg:sticky lg:top-6">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="h-px bg-gray-800" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

              </div>

              <button className="mt-7 w-full rounded-xl bg-blue-500 py-3 font-semibold transition hover:bg-blue-600">
                Proceed to Checkout
              </button>

              <button className="mt-3 w-full rounded-xl border border-gray-700 py-3 font-medium text-gray-300 transition hover:bg-gray-800">
                Continue Shopping
              </button>

              <div className="mt-6 rounded-xl bg-gray-800/50 p-4 text-center text-sm text-gray-400">
                🔒 Secure checkout · Fast delivery · Easy returns
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;