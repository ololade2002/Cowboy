
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import cruiser from '@/public/cruiser-st-lavender1.webp'
import classic from '@/public/classic-black-bike.webp'
import Link from 'next/link'

const PickSection = () => {
  return (
    <div className='bg-[#e5e5e1]'>
    <div className="body pt-12 xl:pt-16 pb-12">

    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='text-[45px] leading-[3.3rem] sm:text-[70px] lg:text-[85px] xl:text-[110px] pb-6 xl:pb-12 font-rale font-[500] text-[#1d1d1d]'>Pick your side</h1>    

    <ul className='flex flex-col gap-12 xl:gap-0 xl:flex-row relative overflow-x-hidden '>

    <li className='w-full xl:w-6/12 flex flex-col gap-2 border-r-0 xl:border-r border-[rgba(29,29,29,0.1)]'>
    <h3 className='font-sand text-[22px] font-[500]  text-[#1d1d1d]'>Cruiser ST</h3>   
    <h2 className='text-[30px] sm:text-[35px] md:text-[50px] xl:text-[65px] leading-10 lg:leading-[4.2rem] pb-2 lg:pb-0 lg:py-6 text-[#1d1d1d] font-rale font-[500] w-full xl:w-[77%] '>New colors, fresh spin</h2>
    <div className='flex flex-row gap-3 flex-wrap sm:gap-8'>
    <Link href='/e-bike/cruiser-st' className='homeBtn hover:opacity-95'>Explore</Link>
    <Link href='/test-ride' className='flex-center font-sand text-[18px] text-[#1d1d1d] font-[500] gap-2'>Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0'/> </Link>
    </div>
    <div className='pt-8 xl:pt-12'>
    <Image className=' object-cover w-full xl:w-[90%] h-[100%]' src={cruiser} alt='Cruiser-ST'/>  
    
    </div>
    </li>   
 
    <li className='w-full xl:w-6/12 flex flex-col gap-2 translate-x-0 xl:translate-x-10 2xl:translate-x-16'>
    <h3 className='font-sand text-[22px] font-[500]  text-[#1d1d1d]'>Classic</h3>   
    <h2 className='text-[30px] sm:text-[35px] md:text-[50px] xl:text-[65px] leading-10  lg:leading-[4.2rem] pb-2 lg:pb-0 lg:py-6 text-[#1d1d1d] font-rale font-[500] w-full xl:w-[77%] '>Stealth looks,
pure agility</h2>
    <div className='flex flex-row gap-3 flex-wrap sm:gap-8'>
    <Link href='/e-bike/classic' className='homeBtn hover:opacity-95'>Explore</Link>
    <Link href='/test-ride' className='flex-center font-sand text-[18px] text-[#1d1d1d] font-[500] gap-2'>Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0'/> </Link>
    </div>
    <div className='pt-8 xl:pt-12 mt-0 xl:mt-[25px]'>
    <Image className=' object-cover w-full xl:w-[90%] h-[100%]' src={classic} alt='Classic'/>  
    </div>
    </li>   
    </ul>

    </div>
    </div>
  )
}

export default PickSection