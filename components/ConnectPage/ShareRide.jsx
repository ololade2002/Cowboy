"use client"

import React from 'react'
import updates from '@/public/connect--app-updates.webp'
import control from '@/public/connect--ride-dashboard.webp'
import Image from 'next/image'
import { Parallax } from 'react-parallax'

const ShareRide = () => {
  return (
    <div>

    <Parallax bgImage='./connect--lifestyle-2.webp' strength={270}>
    <div className='h-[112vh]'>
    </div>
    </Parallax>

    <div className="body">
    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className='w-full xl:w-6/12 flex flex-col gap-4 pb-12 xl:pb-20 pt-8 xl:pt-16 '>
    <h1  className='connectMainText'>Stay on course</h1>
    <h3 className='connectSubText'>Enjoy turn-by-turn 
    navigation and stay connected on every ride with Cowboy&apos;s predictive technology. 
    Activate Share My Ride to let friends and loved ones follow your journey in realtime
     and you&apos;ll see their reactions along the way.</h3>
    </div>

   <div className='relative'>
   <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='object-cover media-wrapper h-[100vh] w-[100%]'>
    <source src="https://cowboy.com/cdn/shop/t/28/assets/cruiser--plan-your-route.webm?v=20347827663738573561689510074" type="video/mp4"/>    
    </video>
    <div className="rideText absolute mobile-item z-20">
    <h1 className='font-sand pb-2 font-[600] text-[24px]  text-[#1d1d1d]'>Navigate with Google Maps</h1>
    <p className='text-[16px] text-[#747474] font-[500] font-sand'>With Google Maps, experience on-ride navigation exclusive to the Cowboy rider community.
     Find the clear air, break free from congestion, be guided to your favorites, and even find bike parking spots.</p>
    </div> 

    <div className="mobile-bike">
    <h1 className='connectHeadingText pt-4 pb-2'>Navigate with Google Maps</h1>
    <p className='connectpText'>With Google Maps, experience on-ride navigation exclusive to the Cowboy rider community.
     Find the clear air, break free from congestion, be guided to your favorites, and even find bike parking spots.</p>
    </div> 
   </div>

    <section className="properties flex flex-col pt-12 xl:pt-24 pb-20 xl:pb-24 xl:flex-row-reverse items-start gap-8 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
     <div className='media-wrapper web-bike  rounded-md flex justify-center items-center w-[100%] h-[120vh] '>
     <Image  className='w-full xl:w-[95%]' src={updates} alt='connect-app-updates'/>  
     </div>
     </div>

     <div className='w-full xl:w-5/12  -mb-[26px]'>
     <div className="media-wrapper rounded-md w-[100%] relative overflow-hidden py-8 xl:py-0  xl:h-[80vh]  flex items-end justify-center  ">
     <Image  className='w-full  ' src={control} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-5'>
     <h2 className='connectHeadingText'>Ride Dashboard</h2>
      <hr/>
      <p className='connectpText'>Monitor your speed and 
      check your ride stats at a glance or in detail if you want to go deep.</p>
     </div>
     </div>
     </section>

    </div>   
    </div>
  )
}

export default ShareRide