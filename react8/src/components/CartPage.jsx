import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';
import CartCard from './CartCard';

const CartPage = () => {
    const {cartProduct} = useContext(MyStore);
    console.log(cartProduct)

    let backHome = () => {
        setToggle(true)
    };
    return (
        <div className="min-h-screen bg-gray-950 px-4 py-8 text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row static">
                {/* Cart Items */}
                <div className="min-h-150 w-full rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl lg:w-2/3">
                    {/* Heading */}
                    <div className="mb-6 flex items-center justify-between border-b border-gray-700 pb-4">
                        <h1 className="text-2xl font-bold">
                            Shopping Cart
                        </h1>
                        <span className="rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300">
                            {cartProduct.length} Items
                        </span>
                    </div>
                    {
                        cartProduct.length > 0 ? (
                            <div className='flex flex-col gap-2'>
                                {
                                    cartProduct.map((ele, ind) => <CartCard key={ind} ele={ele} />)
                                }
                            </div>
                        ) : (
                            <div className="flex h-100 flex-col items-center justify-center text-center">
                                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-800 text-4xl">
                                    🛒
                                </div>
                                <h2 className="text-xl font-semibold">
                                    Cart is Empty
                                </h2>
                                <p className="mt-2 text-gray-400">
                                    Add some items to your cart to continue shopping.
                                </p>
                                <button onClick={backHome} className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
                                    Continue Shopping
                                </button>
                            </div>
                        )
                    }
                </div>
                <div className="h-fit w-full rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl lg:w-1/3 sticky right-10">
                    <h2 className="mb-6 border-b border-gray-700 pb-4 text-xl font-bold">
                        Order Summary
                    </h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Total Items
                            </span>
                            <span className="font-medium">
                                {cartProduct.length}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Price
                            </span>
                            <span className="font-medium">
                                {/* $ {total.toFixed(2)} */}00
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">
                                Discount
                            </span>
                            <span className="font-medium text-green-400">
                                10% OFF
                            </span>
                        </div>
                    </div>
                    <div className="my-6 border-t border-gray-700"></div>
                    <div className="flex justify-between text-lg font-bold">
                        <span>
                            Final Price
                        </span>
                        <span>
                            {/* $ {total > 0 ? (discountPrice) : ('0.00')} */}00
                        </span>
                    </div>
                    <button
                        className="mt-6 w-full cursor-pointer rounded-xl bg-purple-600 py-3 text-white font-semibold hover:bg-purple-700"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage
