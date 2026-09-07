import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { MyStore } from '../context/MyContext';

const Register = () => {

    const navigate = useNavigate();

    const {setToggle, setIsAuth} = useContext(MyStore);
    
    const handleSwitch = () => {
        setToggle(prev => prev = !prev);
    }

    const handleRegister = () => {
        setIsAuth(true);
        navigate('/home');
    }




    return (
        <div className="h-screen  bg-[#0D0D0D] text-[#F5F5F7] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md">


                {/* Register Card */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-10 w-md">

                    {/* Heading */}
                    <div className="mb-7">

                        <h2 className="text-2xl font-medium">
                            Create Account
                        </h2>

                        <p className="text-sm text-[#A1A1A6] mt-2">
                            Join the world of refined style and luxury.
                        </p>

                    </div>


                    {/* Full Name */}
                    <div className="mb-5">

                        <label className="block text-sm text-[#A1A1A6] mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                        />

                    </div>


                    {/* Email */}
                    <div className="mb-5">

                        <label className="block text-sm text-[#A1A1A6] mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                        />

                    </div>


                    {/* Password */}
                    <div className="mb-5">

                        <label className="block text-sm text-[#A1A1A6] mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                        />

                    </div>


                    {/* Confirm Password */}
                    <div className="mb-6">

                        <label className="block text-sm text-[#A1A1A6] mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                        />

                    </div>


                    {/* Create Account */}
                    <button onClick={handleRegister} className="w-full h-12 bg-[#D4AF37] text-[#0D0D0D] rounded-lg font-semibold tracking-wide hover:bg-[#F5F5F7] transition-all duration-300" >CREATE ACCOUNT</button>


                    {/* Login */}
                    <p className="flex justify-center items-center gap-1 text-sm text-[#A1A1A6] mt-7">

                        Already have an account?

                        <p onClick={handleSwitch} className="ml-1 text-[#D4AF37] hover:text-[#F5F5F7] transition-colors">Sign In</p>

                    </p>

                </div>

            </div>

        </div>
    )
}

export default Register