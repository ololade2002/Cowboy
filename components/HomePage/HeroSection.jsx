"use client"

import { ArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
 
  return (
    <div>
    <div>
    <video autoPlay muted loop playsInline disablePictureInPicture  controls={false}  className='object-cover absolute top-0 z-0 w-[100%] h-[105vh]'>
    <source src="https://cowboy.com/cdn/shop/t/27/assets/cruiser-launch--9s-16_9_no_titles.h264.mp4?v=35615708937683684951690478180" type="video/mp4"/>    
    </video>    
    </div> 
    
    <div  className="heroText z-20">
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='flex flex-col gap-[2.5rem] sm:gap-[3rem] '>
    <h3 data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='text-[#fff] text-[20px] font-[500]  font-rale '>A new ride</h3> 
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="120" className='main-text text-[55px] lg:text-[100px] text-white  flex flex-col gap-y-[2rem] lg:gap-y-[4.57rem] font-[500]  font-rale '>
    <h1>Introducing</h1>   
    <h1>Cruiser</h1>
    </div> 
    
    <Link href='/e-bike/cruiser' className='bg-[#f2ebe3] px-6  font-sand font-[500] py-2.5 mt-6 hover:opacity-80   rounded-full text-[#000] text-[18px]  mx-auto'>Discover Cruiser</Link>
    <Link href='#cruiser'  className='bg-[#1d1d1d] hover:bg-[#fff] h-12 w-12 mt-4 flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#000] text-white'/>
    </Link>
    </div>
 
    </div>  
   
    </div>
  )
}

export default HeroSection