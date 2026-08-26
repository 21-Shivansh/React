import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = ({}) => {
    const {toggle,setToggle} = useContext(MyStore);
  return (
    <div className='p-2 sm:w-full md:w-full rounded-sm flex justify-between items-center bg-[#bebebe]'>
        <div className='text-amber-800 text-4xl font-bold'><p>ATC ❤️</p></div>
        <div className='flex gap-7 sm:gap-[40%] md:gap-[50%] text-2xl font-semibold text-black'>
            <p onClick={()=>setToggle(true)} className='cursor-pointer active:text-gray-600'>Prducts</p>
            <p onClick={()=>setToggle(false)} className='cursor-pointer active:text-gray-600'>Cart</p>
        </div>
        <div>
          Login
        </div>
    </div>
  )
}

export default Navbar

