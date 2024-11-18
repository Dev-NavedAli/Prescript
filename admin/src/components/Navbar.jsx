import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

    const {aToken ,setAToken} = useContext(AdminContext)

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xss '> 
            <img  src={assets.admin_logo} className='w-36 sm:w-40 cursor-pointer'  />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
      <button className='bg-[#5F65FF] text-white text-sm px-10 py-2 rounded-full'>Log out</button>
    </div>
  )
}

export default Navbar
