import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const CartCard = ({ele}) => {

    const { handleInc , handleDec, setCartProduct } = useContext(MyStore);

    let handleRemove = () => {
        setCartProduct( prev => 
            prev.filter( elem => 
                elem.id !== ele.id
            )
        )
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl bg-gray-800 p-4">
                <div className="h-20 w-20 rounded-lg">
                    <img
                        className='h-20 w-20'
                        src={ele.image}
                        alt=""
                    />
                </div>
                <div className="flex-1">
                    <h2 className="font-semibold">
                        {ele.title}
                    </h2>
                    <p className="mt-2 font-semibold">
                        ⭐{ele.rating.rate}
                    </p>
                    <p className="mt-2 font-bold text-xl text-green-600">
                        ${ele.price}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={()=>{handleDec(ele.id)}} className="h-8 w-8 rounded-lg bg-gray-700 text-xl hover:bg-gray-600">
                        -
                    </button>
                    <span className="text-lg font-semibold">
                        {ele.quantity}
                    </span>
                    <button onClick={()=>{handleInc(ele.id)}} className="h-8 w-8 rounded-lg bg-gray-700 text-xl hover:bg-gray-600">
                        +
                    </button>
                </div>
                <button
                    onClick={handleRemove}
                    className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                    Remove
                </button>

            </div>
        </div>
    )
}

export default CartCard

