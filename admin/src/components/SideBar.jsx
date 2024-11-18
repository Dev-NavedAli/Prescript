import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'


const SideBar = () => {

  const { aToken } = useContext(AdminContext)

  return (
    <div>
      {
        aToken && <ul>

          <NavLink to='/admin-dashboard'>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to='/all-appointments'>
            <img src={assets.appointment_icon} alt="" />
            <p> Appoitments</p>
          </NavLink>

          <NavLink to='/add-doctor'>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink to='/doctor-list'>
            <img src={assets.people_icon} alt="" />
            <p>Doctor List</p>
          </NavLink>
          
        </ul>
      }


    </div>
  )
}

export default SideBar
