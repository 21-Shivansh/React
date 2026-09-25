import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import {useForm} from 'react-hook-form'
import { Auth } from '../context/MyContext'


const RegisterPage = () => {

//   const navigate = useNavigate();

//   const { registeredUser,setRegisteredUser} = useContext(Auth);

//   const {register,handleSubmit,watch,reset,formState:{errors}} = useForm({
//     mode:'onBlur'
//   })

//   const password = watch("password")

//   const handleRegister = (data) => {
//     console.log(data)
//     setRegisteredUser([...registeredUser,data]);
//     navigate('/')
//     reset();
//   }

     const {handleRegister,navigate,register,handleSubmit,errors} = useAuth();
    



    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create an account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign up to get started with us.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            {...register('name', {
                                required: 'Name is required',
                                pattern: {
                                    value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                                    message: 'Enter a valid name'
                                }
                            })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            {...register('email',{
                                required:'Email is required',
                                pattern:{
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message:'Enter a valid Email'
                                }
                            })}
                        />
                        {errors.email && <p className='text-red-500'> {errors.email.message} </p> }
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            {...register('password',{
                                required:"Password is required",
                                pattern:{
                                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:'Enter a valid password'
                                }
                            })}
                        />
                        { errors.password && <p className='text-red-500'> {errors.password.message} </p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            {...register('cpassword',{
                                required:"Confirm Password is required",
                                validate: (value) => value === password || "Password doesn't match"
                            })}
                        />
                        {errors.cpassword && <p className='text-red-500'> {errors.cpassword.message} </p>}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>

                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?
                    <span className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline" onClick={()=>navigate('/')}>
                        Login
                    </span>
                </p>

            </div>

        </div>
    )
}

export default RegisterPage

