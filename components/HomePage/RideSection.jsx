"use client"

import { PlayIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useState } from 'react';

const RideSection = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
   <div className=''>
    <div className={`video-container  ${isFullScreen ? 'full-screen' : ''}`}>
    
    {!isFullScreen ? (
    <div>
    <video autoPlay muted loop playsInline disablePictureInPicture  controls={false}  className='object-cover top-0 z-0 w-[100%] h-[110vh]'>
    <source src="https://cdn.shopify.com/videos/c/o/v/c5609adcb6334fdfbe92dba0b95b70b0.mp4" type="video/mp4"/>    
    </video>
    <div className='filmBtn z-50 bg-white rounded-full hover:opacity-75 '>
    <button onClick={handleFullScreenToggle} className='flex items-center text-[18px] font-sand px-6 py-3 gap-2  font-[500] '>Watch Film <PlayIcon className='w-5 h-5 '/> </button>   
    </div>
    </div>
      ) : (
    <div>
    <video autoPlay  loop playsInline disablePictureInPicture  controls={true}  className='object-cover absolute top-0 z-0 w-[100%] h-[100vh]'>
    <source src="https://cdn.shopify.com/videos/c/o/v/c5609adcb6334fdfbe92dba0b95b70b0.mp4" type="video/mp4"/>    
    </video>
    <XMarkIcon  className='c-btn text-white w-10 h-10 absolute top-4 right-4' onClick={closeFullScreen}>Close Fullscreen</XMarkIcon>
    </div>
      )}
   
    </div>

   

   </div>

    
  )
}

export default RideSection


