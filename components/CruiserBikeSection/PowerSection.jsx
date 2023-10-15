
"use client"

import {  XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'


const PowerSection = () => {
    const [fullScreen , setFullScreen] = useState(false)

    const openFullScreen = () => {
      setFullScreen(!fullScreen)
    }
    
    const closeFullScreen = () => {
      setFullScreen(false)
    }
    

  return (
    <main>
    <div className="">

    <div className='w-full px-4 xl:px-0 xl:w-[75%] text-left xl:text-center mx-auto'>
    <h1 className='connectSubText pb-12 xl:pb-16'>
    Feel the power. The connected electric bike fits into
    how you live and adapts to how you ride. It's a new form
    of performance on the street.
    </h1>   
    </div>

    <section className="video-section  flex flex-col  gap-3 md:gap-5  ">
      
    <div className={` ${fullScreen ? 'full-screen' :'px-4'}`}>

    {!fullScreen ? (
    <div className='relative ' onClick={openFullScreen} id='page-cruiser' > 
    <video  autoPlay muted loop playsInline disablePictureInPicture  controls={false} className='w-[100%] h-[45vh] sm:h-[70vh] xl:h-[95vh] object-cover '>
    <source src='https://cowboy.com/cdn/shop/t/27/assets/cruiser--connected-ride.webm?v=144315724916258534981692383913' type='video/mp4'/>    
    </video>    
    <article className='absolute web-bike bottom-12 l left-12 flex flex-col gap-1 w-3/12 '>
    <h2 className='text-[22px] font-sand font-[500] text-[#1d1d1d]'>Connected Ride</h2>
    <p className='font-sand font-[500] text-[#747474]'>Get a good grip and a 
    sporty look with the streamlined handlebars
    that rise to meet the cockpit. Dock your phone 
    to charge it wirelessly and stay seamlessly connected</p>
    </article>
    </div>
    ) : (
    <div id='page-cruiser'>
    <video  autoPlay muted loop playsInline disablePictureInPicture  controls={false} className='w-[100%] h-[100vh] object-cover '>
    <source src='https://cowboy.com/cdn/shop/t/27/assets/cruiser--connected-ride.webm?v=144315724916258534981692383913' type='video/mp4'/>    
    </video>   
    <div className='w-12 h-12 bg-white absolute top-6 right-6 rounded-full flex items-center justify-center'>
    <XMarkIcon  className='c-btn  w-8 h-8 text-black ' onClick={closeFullScreen}>Close Fullscreen</XMarkIcon>
    </div>
    <article className='absolute web-bike top-4 left-12 flex flex-col gap-1 w-3/12 '>
    <h2 className='text-[22px] font-sand font-[500] text-[#1d1d1d]'>Integrated Cockpit</h2>
    <p className='font-sand font-[500] text-[#747474]'>Get a good grip and a 
    sporty look with the streamlined handlebars
    that rise to meet the cockpit. Dock your phone 
    to charge it wirelessly and stay seamlessly connected</p>
    </article>
    </div>
    )}

  
    </div>

    <ul className='flex  gap-3 md:gap-5 px-4'>
    <li className='w-6/12 '>
    <div id='page-cruiser' > 
    <video  autoPlay muted loop playsInline disablePictureInPicture  controls={false} className='object-cover h-[45vh] xl:h-auto'>
    <source src='https://cowboy.com/cdn/shop/t/27/assets/cruiser--assistance.webm?v=86982297396685394361689166562' type='video/mp4'/>    
    </video>    
    </div>
    <h2 className='font-rale text-[24px] font-[500] pt-4 text-left pl-6 web-bike'>Cowboy AdaptivePower™</h2>
    <h2 className='font-rale text-[16px] font-[500] pt-4 text-left  mobile-bike'> AdaptivePower™</h2>
    </li>

     <li className='w-6/12 '>
    <div id='page-cruiser' > 
    <video  autoPlay muted loop playsInline disablePictureInPicture  controls={false} className='object-cover h-[45vh] xl:h-auto'>
    <source src='https://cowboy.com/cdn/shop/t/27/assets/cruiser--battery.webm?v=165423790606378553131689166575' type='video/mp4'/>    
    </video>    
    </div>    
    <h2 className='font-rale text-[16px] sm:text-[24px] font-[500] pt-4 text-right xl:pr-6'>Removable Battery</h2>
    </li>   
    </ul>


    </section>

    <section>
    
    <div className="body pt-12 xl:pt-24">
    <div className='w-full xl:w-[80%] text-left xl:text-center mx-auto '>
    <h1 className='connectSubText'>
    With looks this sleek, you'll want to keep an eye on your
    Cowboy to check it's safe. Insure it, track it and ride with your mind at ease.
    </h1>   
    <hr className='my-6 xl:my-8 w-full xl:w-3/12 mx-auto ' />
   
    <div className='web-bike'>
    <p className='font-rale text-[18px] pb-5 text-[#000] '>Stay in the loop on how to ride safe and secure when you sign up to our newsletter</p>
    <button className='bg-[#1d1d1d] font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-white rounded-full'>Sign up</button>
    </div>
   
    <div className='bg-[#f4e9dd] px-4 py-4 rounded-md mobile-bike'>
    <p className='font-rale text-[18px] pb-5 text-[#000] '>Stay in the loop on how to ride safe and secure when you sign up to our newsletter</p>
    <button className='bg-[#1d1d1d] font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-white rounded-full'>Sign up</button>
    </div>

    </div>

    </div>

    </section>
    
    <hr className='my-10 sm:my-12 xl:my-20 body' />

    </div>    
    </main>
  )
}

export default PowerSection