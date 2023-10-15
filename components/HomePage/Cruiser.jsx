"use client"

import React from 'react'
import Image from 'next/image'
import cruiser from '@/public/cruiser-sand.webp'
import cruiserfull from '@/public/cruiser-sand2.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


const Cruiser = () => {
  return (

    <section id="cruiser" className=''>
    <div className='flexContainer pt-12 xl:pt-20 xl:max-w-7xl xl:mx-auto xl:px-4 relative overflow-hidden'>

    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-offset="100" className='w-full xl:w-8/12 pt-2 xl:pt-20 flex items-center justify-center '>
    <Image className='web-bike w-[60%]' src={cruiser} alt="cruiser"  />
    </div>

    <div className='homeSection'>
    <div className='flex flex-col gap-6  xl:gap-8'>
  
    <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className=' text-[22px] font-[500] font-sand '>Cruiser</p> 
    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className='homeMainText '>Rise up to ride in comfort</h1>
   
    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-offset="150" className='mobile-bike  scale-125 '>
    <Image  className='w-[120vw]' src={cruiserfull} alt='cruiser'/>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="120" className='homeButton'>
    <Link href='/e-bike/cruiser' className='homeBtn f-btn'>Explore</Link>
    <Link href='/test-ride' className='flex-center gap-1 xl:gap-2 font-sand font-[500]'>Book a test ride <ChevronRightIcon className='w-6 h-6 xl:mt-1'/> </Link>
    </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150" className='homeBottomText'>
    <div>
    <p className='eyebrow'>0% Finance</p>
    <strong className='h3'>From €2.490</strong>
    </div>

    <div className='relative'>
    <div className='line'>
    <p className='eyebrow'>Removable battery</p>
    <strong className='h3'>Range predicator</strong>
    </div>
    </div>

    <div className='relative'>
    <div className='line'>
    <p className='eyebrow'>Anti-theft</p>
    <strong className='h3'>GPS tracking</strong>
    </div> 
    </div>
            

    </div>

    </div>
    </div>
    </section>

 
  )
}

export default Cruiser