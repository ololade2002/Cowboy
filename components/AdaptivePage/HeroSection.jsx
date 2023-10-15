

import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import power from '../../public/adaptive-power.jpg'
import img from '../../public/adaptive-power--hero_portrait.jpg'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
    <div className='web-bike1 absolute top-0  z-0 object-cover  w-[100%] h-[100vh]'>
    <Image className='h-[180vh]  object-cover' src={power} alt='lease'/> 
    </div>

    <div className='mobile-bike1 absolute top-0  z-0 object-cover  w-[100%] h-[100vh]'>
    <Image className='  object-cover' src={img} alt='lease'/> 
    </div>

    <div className="powerText z-20">
    <div  data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" data-aos-easing="ease-in" className='flex flex-col '>
    <p className='text-white font-sand font-[500] pb-2 sm:pb-4 lg:pb-0 text-[18px] sm:text-[21px]'>Cowboy AdaptivePower™</p>  
    <h1 className=' tracking-tight font-rale main-text font-[600] text-[55px] sm:text-[80px] lg:text-[100px] text-white'>It&apos;s a feeling</h1>  
    <div className='' >
    <Link href='#provider' className='bg-[#fff] hover:bg-[#000]  h-12 w-12 mt-48 md:mt-40  flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#fff] text-[#1d1d1d]'/>
    </Link>
    </div>
    </div>
    </div>  
  </div>
  )
}

export default HeroSection