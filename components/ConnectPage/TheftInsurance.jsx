
"use client"

import React from 'react'
import antiTheft from '../../public/connect--anti-theft.webp'
import Image from 'next/image'
import { Parallax } from 'react-parallax'

const Insurance = () => {
  return (
    <div>
    
    <Parallax bgImage='./connect--lifestyle-1.webp' strength={270}>
    <div className='h-[112vh] object-cover'>
    </div>
    </Parallax>
       
    <div className="body">
    <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className='w-full xl:w-6/12 flex flex-col gap-4 pt-8 xl:pt-16 '>
    <h1  className='connectMainText'>Rest easy</h1>
    <h3 className='connectSubText'>With <span className='underline'>Theft Insurance</span> enabled, we&apos;ll alert you
    immediately if someone tries to snatch your bike. Plus, our GPS tracking ensures you can always locate your ride no matter where you are.</h3>
    </div>
    
    <section className="properties flex flex-col pt-12 pb-16 xl:py-24 xl:flex-row-reverse items-start gap-8 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
     <div className='media-wrapper web-bike rounded-md flex justify-center items-center w-[100%] xl:h-[120vh] '>
     <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='object-cover rounded-md h-[100vh] '>
     <source src="https://cowboy.com/cdn/shop/t/28/assets/connect--find-my-bike.webm?v=20162767268800190671689605069" type="video/mp4"/>    
     </video> 
     </div>
    
     </div>

     <div className='w-full xl:w-5/12 '>
     <div className="media-wrapper rounded-md w-[100%]  h-[80vh]  flex items-end justify-center   ">
     <Image  className='w-[100%] h-[100%] object-cover aspect-square  ' src={antiTheft} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Find My Bike</h2>
      <hr/>
      <p className='connectpText'>Whether near or far,
       you&apos;ll be able to locate your bike at all times with GPS tracking. Follow the signal
        to pinpoint its exact location.</p>
     </div>
     </div>
     </section>

    </div>     
    </div>
  )
}

export default Insurance