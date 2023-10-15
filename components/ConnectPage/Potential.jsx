

import Image from 'next/image'
import React from 'react'
import updates from '@/public/connect--app-updates.webp'
import control from '@/public/connect--app-control-cockpit.webp'
import power from '@/public/connect--app-adaptive-power-modes.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Potential = () => {
  return (
    <div>
     <div className=''>
     <div className='body pt-14 xl:pt-24'>
     
     <div className='w-full xl:w-6/12'>
     <h3 className='connectSubText'>Unleash the true potential of your ride with Connect. You&apos;ll experience a newfound force with 
     AdaptivePower, enjoy turn-by-turn Google Maps navigation and rest easy with GPS tracking and theft
     alerts. Connect with friends, compete on leaderboards, and sync with Strava and Apple Health. It&apos;s the ultimate connected e-bike.</h3>   
     <p className='pt-4 text-[#747474] font-[500] font-sand text-[18px] md:text-[20px]'>Available for all riders on <span className='underline'>iOS</span> and <span className='underline'>Android</span> </p>
     </div>

     <section className="properties flex flex-col py-12 xl:py-24 xl:flex-row items-end gap-8 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
     <div  className='media-wrapper rounded-md flex justify-center items-center w-[100%] py-10 xl:py-0 h-auto lg:h-[100vh] '>
     <Image   className='w-full md:w-[95%] object-cover ' src={updates} alt='connect-app-updates'/>  
     </div>
     <div className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Over-the-air updates</h2>
     <hr />
     <p className='connectpText'>
     Your Cowboy bike will always be up-to-date with the latest 
     features and advancements for a future-proof riding experience.</p>
     </div>
     </div>

     <div className='w-full xl:w-5/12 -mb-[26px]'>
     <div className="media-wrapper relative overflow-hidden rounded-md w-[100%]  h-[80vh]  flex items-end justify-center  ">
     <Image  className='xl:w-[60%] sm:w-[55vw]' src={control} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Fully controlled via your cockpit</h2>
      <hr/>
      <p className='connectpText'>Manage the connected features of your bike directly from the 
      integrated cockpit, ensuring a seamless and intuitive riding experience.</p>
     </div>
     </div>
     </section>
     
     <section className='pt-8 xl:pt-12'>
     <hr />
     <div  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className='w-full xl:w-6/12 flex flex-col gap-3 xl:gap-2 pt-8 xl:pt-16 '>
      <h1  className='connectMainText'>AdaptivePower</h1>
      <h3 className='connectSubText'>Feel the latest ride technology built into an electric
      motor as it adapts to any change in condition or terrain for extra power when you need it.</h3>
      <Link href='/adaptive-power' className='flex items-center text-[20px] hover:underline sm:text-[18px] font-sand font-[500]'>See the tech <ChevronRightIcon className='w-6 h-6 mt-0.5'/> </Link>
     </div>
     </section>

     <section className="properties flex flex-col pt-12 xl:pt-24 pb-16 xl:pb-20 xl:flex-row items-end gap-10 xl:gap-6">
     <div className='w-full xl:w-7/12 '>
     <div className='media-wrap  rounded-md flex justify-center items-center w-[100%] h-[100vh] '>
     <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='object-cover rounded-md w-[100%] h-[100%] xl:h-[90vh]'>
     <source src="https://cowboy.com/cdn/shop/t/27/assets/earth-is-flat--15s-16_9.h264.mp4?v=129860025706359318321689166995" type="video/mp4"/>    
     </video>  
      </div>
      <div className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
      <h2  className='connectHeadingText'>Cowboy AdaptivePower™</h2>
      <hr />
      <p className='connectpText'>With AdaptivePower Technology, this bike thinks for itself. Encounter
       any resistance on the road, and it instantly adapts to what's around you. Gain extra power when you need it most and you'll feel
        nothing but a smooth path ahead.</p>
     </div>
     </div>

     <div className='w-full xl:w-5/12 '>
     <div className="media-wrapper rounded-md w-[100%] relative overflow-hidden xl:h-[80vh]  flex items-end justify-center  ">
     <Image  className='sm:w-[45vw] lg:w-[25vw] ' src={power} alt='connect-app-control'/>
     </div>
     <div  className='pt-4 xl:pt-8 flex flex-col gap-3 xl:gap-5'>
     <h2 className='connectHeadingText'>Eco Power</h2>
      <hr/>
      <p className='connectpText'>Whether you want to go the distance
       on a single charge or squeeze every last drop of power from a low battery, Eco Power lets you conserve 
       energy with less motor assistance.</p>
     </div>
     </div>
     </section>

    </div> 
    </div>   
    </div>
  )
}

export default Potential