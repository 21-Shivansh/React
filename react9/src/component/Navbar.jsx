import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex h-20 p-3 bg-black justify-between items-center text-lg'>
        <div>Logo</div>
        <div className='flex w-[50%] justify-around'>
          <NavLink to={'/'}>
            <p>Home</p>
          </NavLink>
          <NavLink to={'/about'}>
            <p>About</p>
          </NavLink>
          <NavLink to={'/contact'}>
            <p>Contact</p>
          </NavLink>
          <NavLink to={'/help'}>
            <p>Help</p>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar
