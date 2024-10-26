import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctor from '../components/RelatedDoctor'


const Apointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT']

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
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours

      if (today.getDate === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currDate.setHours(10)
        currDate.setMinutes(0)
      }

      let timeSlots = []
      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        //add slot to array

        timeSlots.push({
          datetime: new Date(currDate),
          time: formattedTime
        })

        // increament current time with 30 minutes

        currDate.setMinutes(currDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }

  }


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlot()
  }, [])

  useEffect(() => {
    console.log(docSlots);

  }, [docSlots])
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

      {/* -----------------booking slots----------------- */}

      <div className='sm:ml-72  sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => {
                setSlotIndex(index)
              }} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}>{item.time.toLowerCase()}</p>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an apointment</button>
      </div>

      {/* Listing the Related Doctor */}
      <RelatedDoctor docId={docId} speciality={docInfo.speciality} />

    </div>
  )
}

export default Apointment
