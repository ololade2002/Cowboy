
import React from 'react'
import Image from 'next/image'
import gravity from '@/public/adaptive-power-gravity--hero_1920x@2x.webp'
import gravity1 from '@/public/adaptive-power-gravity.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


const GravitySection = () => {
  return (
    <div>
    <div className="mt-16 mb-12">

    <section className='pt-8 lg:pt-12 '>
    <div className=' relative'>
    <Image className='h-[100vh] object-cover lg:h-auto' src={gravity} alt='Adaptive-power-gravity'/>    

    <div className=" absolute  top-4 left-4  xl:top-20 xl:left-[2.8rem] ">
    <div  className='paceText'>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">Feel weightless.</span>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" className='-mt-2 xl:mt-0'><i>Even</i> overloaded. </span>
    </div>
    </div>

    <main className="pace-subText  w-auto xl:w-4/12  ">
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className="flex flex-col gap-5 ">
    <p className='uppercase text-white font-sand text-[18px]'>GRAVITY DETECTED</p>
    <div className=' flex flex-row gap-3 text-white'>
    <p className='font-sand'>3</p>
    <h2 className='font-rale font-[500] text-[30px] xl:text-[45px] xl:leading-[50px]'>AdaptivePower senses extra weight</h2>
    </div>
    </div>
    </main>

    </div>     
    </section>  
    
    <section className="body pt-10 pb-10 xl:pt-24 xl:pb-16">
    <div className='flex flex-col gap-5 xl:flex-row'>
    <div className='w-full xl:w-8/12'>
    <video className='object-cover h-[100%] w-[100%]' controls={false} autoPlay loop  muted disablePictureInPicture>
    <source src='https://cowboy.com/cdn/shop/t/28/assets/classic--adaptive-power-wind.h264.mp4?v=95345725506026967721689508580' type='video/mp4'/>    
    </video>   
    </div>
    <div className='w-full xl:w-4/12 '>
    <Image className='w-[100%] object-cover rounded-md mobile-item' src={gravity1} alt='Adaptive-power-wind'/> 
    <div className='flex flex-col justify-start gap-2 md:gap-4 px-0 xl:px-6'>
    <h1 className='text-[30px] font-rale text-white xl:pt-12 '>Weight no more</h1>
    <p className='text-[#9a9a9a] font-sand text-[20px]'>With all this extra power talk,battery efficiency is our walk .
     Switch to power saving as you ride for more efficiency when you need it .</p>
    <Link href='/accessories' className='flex items-center gap-1 text-white font-sand text-[20px]'>View accessories <ChevronRightIcon className='h-6 w-6 mt-1 xl:mt-0.5'/></Link>
    </div>   
    </div>    
    </div>
    </section>


    </div>

    </div>
  )
}

export default GravitySection