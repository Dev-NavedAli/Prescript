import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'


const SideBar = () => {

  const { aToken } = useContext(AdminContext)

  return (
     <div className='min-h-screen bg-white border-r'>    {/*  because of this class jo sidebar hai side se aara or baaki saara contnt right me */}
      {
        aToken && <ul className='text-[#515151] mt-5 '>

          <NavLink to='/admin-dashboard' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F65FF]': ''}` }>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to='/all-appointments' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F65FF]': ''}` }>
            <img src={assets.appointment_icon} alt="" />
            <p> Appoitments</p>
          </NavLink>

          <NavLink to='/add-doctor' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F65FF]': ''}` }  >
            <img src={assets.add_icon} alt=""  />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink to='/doctor-list' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F65FF]': ''}` }>
            <img src={assets.people_icon} alt="" />
            <p>Doctor List</p>
          </NavLink>
          
        </ul>
      }


    </div>
  )
}

export default SideBar
