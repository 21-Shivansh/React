import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { MyStore } from '../context/MyContext';
import {useForm} from 'react-hook-form'

const Register = () => {

    const navigate = useNavigate();

    const {setToggle, setIsAuth, setUsers} = useContext(MyStore);
    
    const handleSwitch = () => {
        setToggle(prev => prev = !prev);
    }

    const handleRegister = () => {
        setIsAuth(true);
        navigate('/home');
    }

    let defaultObj = {
        fullname:'',
        email:'',
        password:'',
        cpassword:''
    }

    let {register, handleSubmit, reset, formState:{errors}} = useForm({
        mode:'onBlur',
        defaultValues:defaultObj
    })

    const formData = (data) => {
        setUsers(prev => [...prev,data])
        console.log(data)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(formData)} className="h-screen  bg-[#0D0D0D] text-[#F5F5F7] flex items-center justify-center px-4 py-10">

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
                            {...register('fullname',{
                                required:'fullname missing'
                            })}
                        />
                        {errors.fullname && <p className='text-red-700'>{errors.fullname.message}</p>}

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
                            {...register('email',{
                                required:'email missing',
                                pattern:{
                                    value:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
                                    message:'Please enter the valid email'
                                }
                            })}
                        />
                        {errors.email && <p className='text-red-700'>{errors.email.message}</p>}

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
                            {...register('password',{
                                required:'password required',
                                pattern:{
                                    value:'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$',
                                    message:'Please enter the valid password'
                                },
                                minLength:{
                                    value:7,
                                    message:'Password must be atleast 7 digit'
                                }
                            })}
                        />
                        {errors.password && <p className='text-red-700'>{errors.password.message}</p>}

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
                            {...register('cpassword',{
                                required:'password required',
                                pattern:{
                                    value:'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$',
                                    message:'Please enter the valid password'
                                },
                                minLength:{
                                    value:7,
                                    message:'Password must be atleast 7 digit'
                                }
                            })}
                        />
                        {errors.cpassword && <p className='text-red-700'>{errors.cpassword.message}</p>}

                    </div>


                    {/* Create Account */}
                    <button onClick={handleRegister} className="w-full h-12 bg-[#D4AF37] text-[#0D0D0D] rounded-lg font-semibold tracking-wide hover:bg-[#F5F5F7] transition-all duration-300" >CREATE ACCOUNT</button>


                    {/* Login */}
                    <p className="flex justify-center items-center gap-1 text-sm text-[#A1A1A6] mt-7">

                        Already have an account?

                        <span onClick={handleSwitch} className="ml-1 text-[#D4AF37] hover:text-[#F5F5F7] transition-colors">Sign In</span>

                    </p>

                </div>

            </div>

        </form>
    )
}

export default Register