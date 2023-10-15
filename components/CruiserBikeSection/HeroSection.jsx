
import React from 'react'
import Image from 'next/image'
import img from '../../public/Classic/classic-black.webp'
import cruiser from '@/public/Cruiser/cruiser-sand_hero-cropped.webp'
import Link from 'next/link'
import { ArrowDownIcon } from '@heroicons/react/20/solid'

const HeroSection = () => {
  return (
    <div id=''  className='relative  xl:h-[95vh] pt-8  overflow-hidden '>
    <div className="flex flex-col justify-center items-center gap-14">
 
    <div>
    <p data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='text-black font-sand font-[500] text-[21px] text-center '>Cruiser</p>  
    <h1 data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='heroMainText'>Easy climb, easy go</h1>  
    <p data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='mobile-bike text-center pt-2 text-[#747474] font-sand '>Delivered from 10 days</p>  
    </div>

    <div  className='w-[130vw] web-bike1 '>
    <Image data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='w-full xl:w-[130vw]  object-cover' src={img} alt='Classic-Ebike'/>   
    </div>

    <div  className='mobile-bike1'>
    <Image data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='' src={cruiser} alt='Cruiser'/>
    </div>

    <div className='absolute web-bike bottom-[8%] md:bottom-[28%] z-40' >
    <Link href='#filters' className='bg-[#000] hover:bg-[#fff]  h-12 w-12 mt-24  flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#1d1d1d] text-[#fff]'/>
    </Link>
    </div>

    </div>
    </div>
  )
}

export default HeroSection