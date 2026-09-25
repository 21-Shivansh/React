import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router'
import { Auth } from '../context/MyContext';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {

    // const {register,reset,handleSubmit,formState:{errors}} = useForm({
    //     mode:'onBlur'
    // })

    // const { registeredUser,setLoginedUser} = useContext(Auth);

    // const navigate = useNavigate();

    // const handleLogin = (data) => {
    //     console.log(data)
    //     const user = registeredUser.find( ele => ele.email === data.email && ele.password === data.password);
    //     if(!user){
    //         alert('Invalid Credentials')
    //         return
    //     }else{
    //         setLoginedUser(data)
    //         navigate('/home')
    //     }
    //     reset();
    // }

    const {handleLogin,navigate,register,handleSubmit,errors} = useAuth();

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to your account to continue.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

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
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                                Forgot password?
                            </span>
                        </div>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            {...register('password',{
                                required:"Password is required",
                                pattern:{
                                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:'Enter a valid password'
                                }
                            })}
                        />
                        {errors.password && <p className='text-red-500'> {errors.password.message} </p> }
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                </form>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?
                    <span className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline" onClick={()=>navigate('/register')}>
                        Create account
                    </span>
                </p>

            </div>

        </div>
    )
}

export default LoginPage