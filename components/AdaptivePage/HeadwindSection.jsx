
import React from 'react'
import Image from 'next/image'
import wind from '@/public/adaptive-power-wind.webp'
import eco from '@/public/adaptive-power-wind-2.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const HeadwindSection = () => {
  return (
    <div>
    <div className="mt-12 lg:mt-16">

    <section className='pt-6 md:pt-12'>
    <div className='relative'>
    <Image className='xl:h-auto h-[100vh] object-cover' src={wind} alt='Adaptive-power-wind'/>    

    <div className=" absolute top-4 left-4  xl:top-20 xl:left-[2.8rem] ">
    <div className='paceText'>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">Feel the rush.</span>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" className='-mt-2 xl:mt-0'><i>Even</i> in the wind. </span>
    </div>
    </div>

    <main className="pace-subText  w-auto xl:w-4/12 ">
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className="flex flex-col gap-5 ">
    <p className='uppercase text-white font-sand text-[18px]'>HEADWIND DETECTED</p>
    <div className=' flex flex-row gap-3 text-white'>
    <p className='font-sand'>2</p>
    <h2 className='font-rale font-[500] text-[30px] xl:text-[45px] xl:leading-[50px]'>Break free from the current</h2>
    </div>
    </div>
    </main>

    </div>     
    </section>     

    <section className='max-w-7xl px-3 sm:px-4 mx-auto'>
    <div className='w-full xl:w-6/12 py-12 xl:py-24'>
    <h3 className='font-sand text-[#fff] font-[500] text-[25px] sm:text-[30px]'>When you catch a headwind,
     the bike has already sensed the wind&apos;s strength to give you that extra might to cut right through it.
    </h3> 
    </div>

    <div className='flex flex-col gap-5 xl:flex-row-reverse'>
    <div className='w-full xl:w-8/12'>
    <video className='object-cover h-[100%] w-[100%]' controls={false} autoPlay loop  muted disablePictureInPicture>
    <source src='https://cowboy.com/cdn/shop/t/28/assets/classic--adaptive-power-wind.h264.mp4?v=95345725506026967721689508580' type='video/mp4'/>    
    </video>   
    </div>
    <div className='w-full xl:w-4/12'>
    <Image className='w-[100%] object-cover rounded-md mobile-item' src={eco} alt='Adaptive-power-wind'/> 
    <div className='flex flex-col justify-start gap-2 md:gap-4 xl:px-6 border-b  xl:border-0 pb-12'>
    <h1 className='text-[30px] font-rale text-white xl:pt-12 '>Force nothing</h1>
    <p className='text-[#9a9a9a] font-sand text-[20px]'>With all this extra power talk,battery efficiency is our walk .
     Switch to power saving as you ride for more efficiency when you need it .</p>
    <p className='flex items-center gap-1 text-white font-sand text-[20px]'>Learn more <ChevronRightIcon className='h-6 w-6 mt-0.5'/></p>
    </div>   
    </div>    
    </div>

    </section>

    <section className='max-w-7xl px-3 sm:px-4 mx-auto'>

    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200" className='w-full xl:w-6/12 py-12 xl:py-24'>
    <h3 className='circularSubText'>AdaptivePower is inside every Cowboy.
    The bike&apos;s motor adjusts in real time for a new prowess on the streets.
    </h3> 
    <div  className='flex text-white opacity-75 items-center pt-6 gap-2 font-sand text-[19px] '>
     <Link className='hover:underline' href='/e-bike/classic  '>Classic</Link> 
     <ChevronRightIcon className='w-6 h-6'/>
     <Link className='hover:underline' href='/e-bike/cruiser '>Cruiser</Link>
     <ChevronRightIcon className='w-6 h-6'/>
     <Link className='hover:underline' href='/e-bike/cruiser-st '>Cruiser ST</Link>
    </div>
    </div>

    <div className='relative'>
    <video className='object-cover h-[100vh] md:h-[100%] w-[100%] ' controls={false} autoPlay loop  muted disablePictureInPicture>
    <source src='https://cowboy.com/cdn/shop/t/28/assets/classic--assistance.webm?v=67356282726875004841689508614' type='video/mp4'/>    
    </video>    

    <aside data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='absolute w-full md:w-3/12 mobile-item bottom-4 left-4 xl:bottom-28 xl:left-14'>
    <div className='t-box px-6 py-6 flex rounded-md flex-col gap-1 items-center'>
    <h3 className='font-sand font-[500] text-[18px]  text-white'>Motor power active</h3>
    <p className='text-[#fff] opacity-75  text-[14px] font-sand'>64% of last ride</p>
    </div>
    </aside>

    <aside data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='absolute w-full md:w-4/12 pl-2 bottom-4 right-0 xl:bottom-28 xl:right-12'>
    <h2 className='font-rale text-[27px] sm:text-[35px] xl:text-[40px] font-[400] md:font-[500] font-white leading-10 md:leading-[2.9rem]  text-white '>Stay in the flow,never slowed</h2>
    <Link className='flex gap-1 items-center pt-1 xl:pt-4 text-white font-sand text-[18px] font-[300] sm:font-[500]' href='/connect'>How it works <ChevronRightIcon className='w-6 h-6 mt-1'/> </Link>
    </aside>
    </div>

    </section>
        
    </div>    
    </div>
  )
}

export default HeadwindSection