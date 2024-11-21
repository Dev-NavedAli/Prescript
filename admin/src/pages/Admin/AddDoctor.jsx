import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='m-5 w-full' >

      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} className='w-16 bg-gray-100 rounded-full cursor-pointer' alt="" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>Upload doctor <br /> picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1 '>
              <p>Doctor name</p>
              <input type="text" placeholder='Name' className='border rounded px-3 py-2' required />
            </div>

            <div className='flex-1 flex flex-col gap-1 '>
              <p>Doctor Email</p>
              <input type="email" placeholder='email' className='border  rounded px-3 py-2' required />
            </div>

            <div className='flex-1 flex flex-col gap-1 ' >
              <p>Doctor password</p>
              <input type="password" placeholder='Password' className='border  rounded px-3 py-2' required />
            </div>

            <div className='flex-1 flex flex-col gap-1 '>
              <p>Experience</p>
              <select className='border  rounded px-3 py-2'>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1 ' >
              <p> Fees</p>
              <input type="number" className='border  rounded px-3 py-2' placeholder='fee' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1 '>
              <p>Speciality</p>
              <select className='border  rounded px-3 py-2' >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1 '>
              <p> Education</p>
              <input type="text" placeholder='fee' className='border  rounded px-3 py-2' required />
            </div>

            <div className='flex-1 flex flex-col gap-1 '>
              <p>Address</p>
              <input type="text" placeholder='Address 1' className='border  rounded px-3 py-2' required />
              <input type="text" placeholder='Address 2' className='border  rounded px-3 py-2' required />
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'> About Doctor </p>
          <textarea className='w-full px-4 pt-2 border rounded' placeholder='write about doctor' rows={5} required />
        </div>
        <button className='bg-[#5F65FF] text-white text-sm px-10 py-2 rounded-full'>Add Doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor
