
import Image from 'next/image'
import React from 'react'
import img from '../../public/accessories--hero2.jpg'
import Link from 'next/link'
import { ArrowDownIcon } from '@heroicons/react/20/solid'


const HeroSection = () => {
  return (
    <div>
    <div className='absolute top-0 left-0 w-[100%] h-[100vh] object-cover'>
    <Image  className='w-[100%]  h-[104vh] object-cover' src={img} alt='accessories'/>    
    </div>   
    <div className="leaseText z-20">
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" data-aos-easing="ease-in" className='flex flex-col '>
    <p className='text-white font-sand font-[500] text-[21px] pb-4'>Accessories</p>  
    <h1 className=' tracking-tight font-rale main-text text-[40px] sm:text-[55px] lg:text-[100px] font-[500]  text-white '>Gear up for the road</h1>  
    <div className='' >
    <Link href='#filters' className='bg-[#fff] hover:bg-[#000]  h-12 w-12 mt-24  flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#fff] text-[#1d1d1d]'/>
    </Link>
    </div>
    </div>
    </div>  
    </div>
  )
}

export default HeroSection