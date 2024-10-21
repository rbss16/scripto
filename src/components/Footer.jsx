import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
        <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.Doctor} alt="Logo" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify'>This app enables users to book doctor appointments based on medical specializations such as cardiology, dermatology, and pediatrics. Users can explore doctor profiles, view availability, and schedule appointments conveniently. The app also offers features like appointment reminders, prescription management, and telemedicine services for a seamless healthcare experience.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>1234567890</li>
            <li>prescriptodocs@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer