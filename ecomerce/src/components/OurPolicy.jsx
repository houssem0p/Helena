import React from 'react'
import exchange_icon from '../assets/exchange_icon.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
          <div className=''>
            <img src={exchange_icon} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer Hassle Free Exchange Policy</p>
          </div>
    </div>
  )
}

export default OurPolicy