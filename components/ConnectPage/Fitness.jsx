"use client"

import React from 'react'
import updates from '@/public/connect--apple-watch-app.webp'
import control from '@/public/connect--trips-sync_427x@2x.webp'
import Image from 'next/image'
import { Parallax } from 'react-parallax'

const Fitness = () => {
  return (
    <div>

    <Parallax bgImage='./connect--lifestyle-3.webp' strength={270}>
    <div className='h-[112vh]'>
    </div>
    </Parallax>

    <div className="body">   
    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className='w-full xl:w-6/12 flex flex-col xl:gap-4 pt-8 xl:pt-16 '>
    <h1  className='connectMainText'>Social Fitness</h1>
    <h3 className='connectSubText'>Join the Cowboy community
     and discover a world of rider groups to connect and compete. The embedded sensors in your 
     bike provide detailed tracking of all your activity.</h3>
    </div>

    <section className="properties flex flex-col py-12 xl:py-24 xl:flex-row-reverse items-start gap-8 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
     <div className='media-wrapper relative overflow-hidden rounded-md flex justify-center items-center w-[100%] h-auto xl:h-[120vh] '>
     <Image  className='w-full xl:w-[95%]' src={updates} alt='connect-app-updates'/>  
     </div>
    
     </div>

     <div className='w-full xl:w-5/12 -mb-[26px]'>
     <div className="media-wrapper rounded-md w-[100%] relative overflow-hidden h-auto xl:h-[80vh]  flex items-end justify-center  ">
     <Image  className='w-[70vw] sm:w-[45%] md:w-[60%] ' src={control} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Statistics</h2>
      <hr/>
      <p className='connectpText'>Track all your 
      activities in detail including moving time, speed, elevation, power delivered,
       calories burned and more.</p>
     </div>
     </div>
     </section>

     <div className='w-full xl:w-6/12 flex flex-col gap-4 pt-16 '>
    <h3 className='connectSubText'>With Apple Health and Strava 
    integration, automatically sync your rides and get credit for all your activities. 
    Complement your ride with the Apple Watch App and see your movements stack up.
    </h3>
    </div> 

    <section className="properties flex flex-col pt-24 pb-24 xl:flex-row items-end gap-8 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
      <div className='media-wrapper  rounded-md relative overflow-hidden flex justify-center items-center w-[100%] h-auto xl:h-[100vh] '>
      <Image  className='w-[95%]' src={updates} alt='connect-app-updates'/>  
      </div>
     <div className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Apple Watch app</h2>
      <hr />
      <p className='connectpText'>With your ride essentials 
      at hand, simply lock and unlock your bike, check your stats and track all that effort
       with the Cowboy Apple Watch app.</p>
     </div>
     </div>

     <div className='w-full xl:w-5/12 mb-[0px]'>
     <div className="media-wrapper rounded-md w-[100%] relative overflow-hidden h-auto xl:h-[80vh]  flex items-end justify-center  ">
     <Image src={control} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Trips Sync</h2>
      <hr/>
      <p className='connectpText'>Automatically synchronize your rides
       on Apple Health and Strava, and get credit for all your activities.</p>
     </div>
     </div>
     </section>

    </div>    
    </div>
  )
}

export default Fitness