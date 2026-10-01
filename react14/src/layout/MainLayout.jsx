import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </div>

      
      <Outlet/>
    </div>
  )
}

export default MainLayout
