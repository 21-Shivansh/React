import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-950 p-4'>
      <div className='text-3xl font-bold'>Ecom 👕</div>
      <div className='flex w-[45%] justify-around'>
        <NavLink to={'/'} className='cursor-pointer font-medium active:text-gray-400  '>HOME</NavLink>
        <NavLink to={'/cart'} className='cursor-pointer font-medium active:text-gray-400'>CART</NavLink>
        <NavLink to={'/about'} className='cursor-pointer font-medium active:text-gray-400'>ABOUT</NavLink>
        <NavLink to={'/contact'} className='cursor-pointer font-medium active:text-gray-400'>CONTACT</NavLink>
      </div>
    </div>
  )
}

export default Navbar
