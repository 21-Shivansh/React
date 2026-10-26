import React from 'react'
import { useAuth } from '../hooks/useAuth'

const RegisterPage = () => {

    const {navigate,register,handleSubmit,handleRegister,watch,errors} = useAuth();

    const password = watch("password")

    return (
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md">

                {/* Register Card */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 shadow-2xl">

                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Create Account
                    </h2>

                    <p className="text-sm text-[#94A3B8] mb-7">
                        Fill in your details to get started
                    </p>


                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className="space-y-5"
                    >

                        {/* Name */}
                        <div>

                            <label className="block text-sm text-[#CBD5E1] mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className="w-full bg-[#0B1120] border border-[#334155] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6] transition"
                            />

                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}

                        </div>


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
                                placeholder="Create a password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                className="w-full bg-[#0B1120] border border-[#334155] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6] transition"
                            />

                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}

                        </div>


                        {/* Confirm Password */}
                        <div>

                            <label className="block text-sm text-[#CBD5E1] mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password || "Passwords do not match"
                                })}
                                className="w-full bg-[#0B1120] border border-[#334155] rounded-lg px-4 py-3 text-white outline-none focus:border-[#3B82F6] transition"
                            />

                            {errors.confirmPassword && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}

                        </div>


                        {/* Terms */}
                        <label className="flex items-start gap-3 text-sm text-[#94A3B8] cursor-pointer">

                            <input
                                type="checkbox"
                                className="mt-1 accent-[#3B82F6]"
                                {...register("terms", {
                                    required: "You must accept the terms"
                                })}
                            />

                            <span>
                                I agree to the Terms of Service and Privacy Policy.
                            </span>

                        </label>

                        {errors.terms && (
                            <p className="text-red-400 text-sm -mt-3">
                                {errors.terms.message}
                            </p>
                        )}


                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-lg transition duration-200"
                        >
                            Create Account
                        </button>

                    </form>


                    {/* Login */}
                    <div className="text-center mt-7 pt-6 border-t border-[#1E293B]">

                        <p className="text-sm text-[#94A3B8]">

                            Already have an account?{" "}

                            <button
                                onClick={()=>navigate('/')}
                                className="text-[#60A5FA] font-medium hover:text-[#3B82F6]"
                            >
                                Sign in
                            </button>

                        </p>

                    </div>

                </div>


                {/* Bottom */}
                <p className="text-center text-xs text-[#64748B] mt-6">
                    © 2026 NOVA. All rights reserved.
                </p>

            </div>

        </div>
    )
}

export default RegisterPage