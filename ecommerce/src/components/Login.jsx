import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { MyStore } from '../context/MyContext'
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();

    const defaultObjLog = {
        email:'',
        password:''
    }

    const {register,handleSubmit,reset,formState:{errors}} = useForm({
        mode:'onBlur',
        defaultValues:defaultObjLog,
    })

    const { setToggle, setIsAuth, users } = useContext(MyStore);

    const handleSwitch = () => {
        setToggle(prev => prev = !prev);
    }

    const handleLogin = (data) => {
        
        let checkExists = users.some( ele => ele.email === data.email && ele.password === data.password);
        if(checkExists){ 
            setIsAuth(true)
            navigate('/home')
        }else{
            alert('User does not exists OR Worng credentials.')
        }

    }


    return (
        <form onSubmit={handleSubmit(handleLogin)} className="h-screen bg-[#0D0D0D] text-[#F5F5F7] flex items-center justify-center px-4">

            {/* Login Card */}
            <div className="w-full max-w-lg">

                {/* Card */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-10 w-md">

                    <div className="mb-8">
                        <h2 className="text-2xl font-medium">
                            Welcome Back
                        </h2>

                        <p className="text-sm text-[#A1A1A6] mt-2">
                            Sign in to continue to your account.
                        </p>
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
                                required:'Email required'
                            })}
                        />
                        {errors.email && <p className='text-red-700'>{errors.email.message}</p>}

                    </div>


                    {/* Password */}
                    <div className="mb-4">

                        <div className="flex justify-between items-center mb-2">

                            <label className="text-sm text-[#A1A1A6]">
                                Password
                            </label>

                            <button className="text-xs text-[#D4AF37] hover:text-[#F5F5F7] transition-colors">
                                Forgot Password?
                            </button>

                        </div>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-12 px-4 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg text-[#F5F5F7] placeholder:text-[#666] outline-none focus:border-[#D4AF37] transition-colors duration-300"
                            {...register('password',{
                                required:'Password required'
                            })}
                        />
                        { errors.password && <p className='text-red-700'>{errors.password.message}</p>}

                    </div>


                    {/* Remember Me */}
                    <div className="flex items-center gap-2 mb-7">

                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-[#D4AF37]"
                        />

                        <span className="text-sm text-[#A1A1A6]">
                            Remember me
                        </span>

                    </div>


                    {/* Login Button */}
                    <button className="w-full h-12 bg-[#D4AF37] text-[#0D0D0D] rounded-lg font-semibold tracking-wide hover:bg-[#F5F5F7] transition-all duration-300">SIGN IN</button>


                    {/* Register */}
                    <p className="flex justify-center items-center gap-1 text-sm text-[#A1A1A6] mt-7">

                        Don't have an account?

                        <span onClick={handleSwitch} className="ml-1 text-[#D4AF37] hover:text-[#F5F5F7] transition-colors">Create Account</span>
                    </p>

                </div>

            </div>

        </form>
    )
}

export default Login