import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

    const navigate = useNavigate();

    const { setIsAuth } = useContext(MyStore);

    const handleLogOut = () => {
        setIsAuth(true);
        navigate('/')
    }


    return (
        <nav className="w-full bg-[#0D0D0D] border-b border-[#1A1A1A] text-[#F5F5F7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

                {/* Logo */}
                <div onClick={()=>navigate('/home')} className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm font-semibold">
                            L
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg tracking-[0.25em] font-semibold">
                            LUXE
                        </h1>
                        <p className="text-[9px] tracking-[0.35em] text-[#A1A1A6]">
                            COLLECTION
                        </p>
                    </div>
                </div>


                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <NavLink to={'/home'} className={({isActive})=> isActive ? 'text-[#D4AF37]' : 'text-sm tracking-wide text-[#A1A1A6] hover:text-[#D4AF37] transition-colors duration-300'}>Home</NavLink>
                    <NavLink to={'/collection'} className={({isActive})=> isActive ? 'text-[#D4AF37]' : 'text-sm tracking-wide text-[#A1A1A6] hover:text-[#D4AF37] transition-colors duration-300'}>Collection</NavLink>
                    <NavLink to={'/about'} className={({isActive})=> isActive ? 'text-[#D4AF37]' : 'text-sm tracking-wide text-[#A1A1A6] hover:text-[#D4AF37] transition-colors duration-300'}>About</NavLink>
                    <NavLink to={'/contact'} className={({isActive})=> isActive ? 'text-[#D4AF37]' : 'text-sm tracking-wide text-[#A1A1A6] hover:text-[#D4AF37] transition-colors duration-300'}> Contact </NavLink>
                </div>


                {/* Right Side */}
                <div className="flex items-center gap-5">         

                    {/* Cart */}
                    <button className="relative w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#A1A1A6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                        <NavLink to={'/cart'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.72 6.75m0 0h13.53c.668 0 1.157.62.996 1.268l-1.5 6A1 1 0 0 1 17.775 14H7.22a1 1 0 0 1-.97-.757L5.72 6.75Zm0 0L4.5 4.5M8.25 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            {/* Cart count */}
                            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D4AF37] text-[#0D0D0D] text-[9px] font-bold flex items-center justify-center">
                                0
                            </span>
                        </NavLink>
                    </button>


                    {/* LogOut */}
                    <button onClick={handleLogOut} className="hidden sm:block px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-wide hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300">Log Out</button>


                    {/* Mobile Menu */}
                    <button className="md:hidden text-[#F5F5F7]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar