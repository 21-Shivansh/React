import React from 'react'
import { NavLink, Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      About Page
      <NavLink to={'/about/nestedAbout'}>Nested component dikhao</NavLink>
      <Outlet />
    </div>
  )
}

export default About
