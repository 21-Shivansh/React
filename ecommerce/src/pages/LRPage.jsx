import React, { useContext } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import { MyStore } from '../context/MyContext'

const LRPage = () => {

    const {toggle} = useContext(MyStore);



    return (
        <div className="h-screen bg-[#0D0D0D] text-[#F5F5F7] flex">

            {/* LEFT SIDE - BRAND */}
            <div className="hidden lg:flex w-1/2 h-screen border-r border-[#2A2A2A] items-center justify-center relative overflow-hidden">

                {/* Decorative Gold Circle */}
                <div className="absolute w-125 h-125 rounded-full border border-[#D4AF37]/10" />

                <div className="absolute w-87.5 h-87.5 rounded-full border border-[#D4AF37]/10" />


                {/* Brand Content */}
                <div className="relative z-10 max-w-md px-10">

                    {/* Logo */}
                    <div className="flex justify-center mb-8">

                        <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center">
                            <span className="text-2xl text-[#D4AF37] font-semibold">
                                L
                            </span>
                        </div>

                    </div>


                    {/* Brand Name */}
                    <div className="text-center">

                        <h1 className="text-4xl tracking-[0.4em] font-semibold">
                            LUXE
                        </h1>

                        <p className="text-xs tracking-[0.55em] text-[#A1A1A6] mt-3">
                            COLLECTION
                        </p>

                    </div>


                    {/* Divider */}
                    <div className="flex items-center gap-4 my-10">

                        <div className="h-px flex-1 bg-[#D4AF37]/40" />

                        <div className="w-2 h-2 rotate-45 border border-[#D4AF37]" />

                        <div className="h-px flex-1 bg-[#D4AF37]/40" />

                    </div>


                    {/* Quote */}
                    <p className="text-center text-[#A1A1A6] leading-7 text-sm italic">
                        "Timeless style, crafted for those
                        who appreciate the extraordinary."
                    </p>


                    {/* Bottom Features */}
                    <div className="flex justify-center gap-6 mt-10 text-[10px] tracking-[0.2em] text-[#666]">

                        <span>ELEVATE</span>

                        <span className="text-[#D4AF37]">•</span>

                        <span>DEFINE</span>

                        <span className="text-[#D4AF37]">•</span>

                        <span>DISTINGUISH</span>

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE - LOGIN / REGISTER */}
            <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 py-10">

                {
                    toggle ? <Login/> : <Register/>
                }

            </div>

        </div>
    )
}


export default LRPage
