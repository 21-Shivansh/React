import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'

const Login = () => {

    const {navigate,register,reset,handleLogin,handleSubmit,errors} = useAuth();


    

    return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Login Card */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 shadow-2xl">

                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Sign In
                    </h2>

                    <p className="text-sm text-[#94A3B8] mb-7">
                        Enter your details to continue
                    </p>


                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-[#CBD5E1] mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                className="w-full bg-[#0B1120] border border-[#334155] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6] transition"
                            />

                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>


                        {/* Password */}
                        <div>
                            <label className="block text-sm text-[#CBD5E1] mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "Password is required"
                                })}
                                className="w-full bg-[#0B1120] border border-[#334155] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6] transition"
                            />

                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>


                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">

                            <label className="flex items-center gap-2 text-[#94A3B8] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-[#3B82F6]"
                                />
                                Remember me
                            </label>

                            <button
                                type="button"
                                className="text-[#60A5FA] hover:text-[#3B82F6]"
                            >
                                Forgot password?
                            </button>

                        </div>


                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-lg transition duration-200"
                        >
                            Sign In
                        </button>

                    </form>


                    {/* Register */}
                    <div className="text-center mt-7 pt-6 border-t border-[#1E293B]">

                        <p className="text-sm text-[#94A3B8]">
                            Don't have an account?{" "}

                            <button
                                onClick={()=>navigate('/register')}
                                className="text-[#60A5FA] font-medium hover:text-[#3B82F6]"
                            >
                                Create account
                            </button>
                        </p>

                    </div>

                </div>


                {/* Bottom text */}
                <p className="text-center text-xs text-[#64748B] mt-6">
                    © 2026 NOVA. All rights reserved.
                </p>

            </div>

        </div>
    )
}

export default Login
