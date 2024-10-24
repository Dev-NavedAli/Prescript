import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'


const Apointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    let docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlot = async () => {
    setDocSlots([])   // first clear all previous slot

    // getting current Date

    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //geting date with index  
      let currDate = new Date(today)
      currDate.setDate(today.getDate() + i)

      //setting and time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + 1)
      endTime.setHours(21, 0, 0, 0)

      //setting hours

      if (today.getDate === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currDate.setHours(10)
        currDate.setMinutes(0)
      }
      while(currDate < endTime){
        let formattedTime =  currDate.toLocaleTimeString
      }
    }

  }


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlot()
  }, [])

  return docInfo && (
    <div>
      {/* Docotor profile */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={docInfo.image} className='bg-primary w-full max-w-72 rounded-lg' alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* -----------Docinfo: name , degree , experience */}

          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img src={assets.verified_icon} className='w-5' alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0 px-2 border  text-xs rounded-full hover:border-blue-500 transform transition-all ease-in duration-100'>{docInfo.experience}</button>
          </div>

          {/*------------- Doctor About---------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-500 mt-3 '>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 mx-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee : <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Apointment
