import React from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
    const {handleLogOut} = useAuth();
    return (
        <div className='flex flex-col gap-2 p-2 border-r border-gray-500 justify-between pb-5'>
            <div>
                <div className='text-3xl mb-5'>E-Commerce</div>
                <div className='flex flex-col justify-center gap-4 p-3'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-red-900 font-semibold border-b border-gray-500 pb-2' : 'text-white font-semibold border-b border-gray-500 pb-2'}
                        end
                        to={'/home'}>
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-red-900 font-semibold border-b border-gray-500 pb-2' : 'text-white font-semibold border-b border-gray-500 pb-2'}
                        to={'/home/users'}>
                        Users
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-red-900 font-semibold border-b border-gray-500 pb-2' : 'text-white font-semibold border-b border-gray-500 pb-2'}
                        to={'/home/products'}>
                        Product
                    </NavLink>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button onClick={handleLogOut} className='px-4 py-2 border-none rounded-lg font-semibold text-2xl text-white bg-red-600 hover:bg-red-700'>LogOut</button>
            </div>

        </div>
    )
}

export default Navbar
