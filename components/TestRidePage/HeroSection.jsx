
import React from 'react'
import Image from 'next/image'
import img from '../../public/test-ride--hero.webp'
import Link from 'next/link'
import { ArrowDownIcon } from '@heroicons/react/20/solid'


const HeroSection = () => {
  return (
    <div>
    <div className='absolute top-0 left-0 w-[100%] h-[100vh] object-cover'>
    <Image  className='w-[100%]  h-[104vh] object-cover' src={img} alt='accessories'/>    
    </div>   
    <div className="leaseText z-20">
    <div className='flex flex-col '>
    <p data-aos="fade-up" data-aos-duration="600" data-aos-offset="120" className='text-white font-sand font-[500] text-[20px] sm:text-[22px] pb-4'>Cowboy test rides</p>  
    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className=' tracking-tight font-rale main-text text-[40px] sm:text-[55px] font-[500] lg:text-[100px] text-white '>We'll come to you</h1>  
    <div className='' >
    <Link href='#preview' className='bg-[#fff] hover:bg-[#000]  h-12 w-12 mt-40 sm:mt-24  flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#fff] text-[#1d1d1d]'/>
    </Link>
    </div>
    </div>
    </div>  
    </div>
  )
}

export default HeroSection