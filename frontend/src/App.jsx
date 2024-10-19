import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import MyProfile from "./pages/MyProfile"
import MyApointments from "./pages/MyApointments"
import Apointment from './pages/Apointment'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-apointments' element={<MyApointments />} />
        <Route path='/apointment/:docId' element={<Apointment />} />
        
      </Routes>

    </div>
  )
}

export default App
