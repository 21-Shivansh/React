import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'

const HomePage = () => {
  return (
    <div className='bg-gray-950 h-screen text-white grid grid-cols-[1fr_6.5fr]'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default HomePage
