import React from 'react'
import { NavLink } from 'react-router'
import { LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-1 border rounded-lg bg-black text-white w-full'>
      <div className='text-3xl font-bold cursor-pointer'>SkyMart</div>
      <div className='flex gap-8 text-lg'>
        <NavLink to="/home" className={({isActive})=>{
          return isActive ? 'text-yellow-500 border-b-2 border-yellow-500 ' : 'hover:text-yellow-800 '
        }}>Home</NavLink>
        <NavLink to="/counter" className={({isActive})=>{
          return isActive ? 'text-yellow-500 border-b-2 border-yellow-500 ' : 'hover:text-yellow-800 '
        }}>Counter</NavLink>
        <NavLink to="/contact" className={({isActive})=>{
          return isActive ? 'text-yellow-500 border-b-2 border-yellow-500 ' : 'hover:text-yellow-800 '
        }}>Contact</NavLink>
        <NavLink to="/about" className={({isActive})=>{
          return isActive ? 'text-yellow-500 border-b-2 border-yellow-500 ' : 'hover:text-yellow-800 '
        }}>About</NavLink>
      </div>
      <div className='flex gap-2 text-lg cursor-pointer'>LogOut <LogOut /></div>
    </div>
  )
}

export default Navbar