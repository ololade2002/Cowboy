"use client"
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const MapSection = () => {
  return (
   <div className='relative'>
    <div>
    <iframe  className='h-[105vh] w-[100%] z-20 relative' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15854.898338857762!2d3.3691251500000003!3d6.556411099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1696237913979!5m2!1sen!2sng" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <article className="mapText flex flex-col rounded-md z-50 bg-black h-auto  lg:w-[30%]">
    <div className='px-4 lg:px-8 pt-8' >
    <p className='text-[#9a9a9a] font-sand text-[18px]'>Book a free test ride</p>
     <h1 className='text-[30px] font-sand py-3 font-[500] text-white'>Where are you ?</h1>
    
    <div className="mt-2.5 mb-8 ">
    <input
    type="text"
    name="address"
    placeholder='Type an address or city'
    className="block w-full m placeholder:text-[18px] placeholder:font-sand  border-0 px-3.5 py-3 rounded-md font-sand text-[18px] text-gray-900 shadow-sm sm:text-sm sm:leading-6"/>
    </div>
    </div>

     <div className='bg-white py-8 rounded-t-md web-bike'>
      <ul className='px-8 flex flex-col gap-2'>
        <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>Belgium</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li>
        <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>France</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li>
        <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>Denmark</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li>
        <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>London South</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li>
        <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>UAE</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li> <li className='flex justify-between items-center'>
        <p className='font-sand font-[500] text-[#1d1d1d] text-[18px]'>London West</p> 
        <AiOutlineArrowRight className='w-5 h-5'/> 
        </li>
      </ul>
     </div>
    
    </article>
   </div>
  )
}

export default MapSection