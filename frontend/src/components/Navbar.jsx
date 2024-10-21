import React, { useState } from 'react'
import { assets } from "../assets/assets.js"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img src={assets.profile_pic} className='w-8 rounded-full' alt="" />
              <img src={assets.dropdown_icon} className='w-2.5' alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 opacity-0 invisible transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=> navigate('/profile')} className='hover:text-black cursor-pointer '>My profile</p>
                  <p onClick={()=> navigate('/my-apointments')} className='hover:text-black cursor-pointer '>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer '>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate(`/login`)} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:scale-105 transition-all duration-300'>Create account</button>
        }
      </div>
    </div>
  )
}

export default Navbar
