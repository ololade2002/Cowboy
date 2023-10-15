"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import incline from '../../public/adaptive-power-incline.webp'
import incline2 from '../../public/adaptive-power-incline-2.webp'
import { ChevronRightIcon, PlayIcon, XMarkIcon } from '@heroicons/react/20/solid'
import app from '../../public/adaptive-power-app.webp'
import Link from 'next/link'


const PaceSection = () => {
const [isFullScreen,setIsFullScreen] = useState(false)

const openFullScreen = () => {
  setIsFullScreen(!isFullScreen)
}

const closeFullScreen = () => {
  setIsFullScreen(false)
}

  return (
    <div className='paceSection'>

    <section>

    <article className='body sm:px-4 pb-10 lg:pb-20  '>
    <div className='w-full xl:w-6/12'>
    <h3 className='circularSubText'>Here comes your second wind. The Cowboy 
    knows the power you need, no matter the hill, headwind or additional weight. Meet the elements with a newfound force.
    </h3>  
    </div> 
    </article>  

    <div className='pt-6 md:pt-12'>
    <div className='relative'>
    <Image className='h-[100vh]  object-cover xl:h-auto' src={incline} alt='incline'/> 
    

    <div className=" absolute top-4 left-4  xl:top-20 xl:left-[2.8rem] ">
    <main  data-aos-easing="ease-in" className='paceText '>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">Feel the pace.</span>
    <span data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" className='-mt-2 xl:mt-0'><i>Even</i> uphill. </span>
    </main>
    </div>

    <main className="pace-subText w-auto xl:w-4/12 ">
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" data-aos-easing="ease-in" className="flex flex-col gap-2 md:gap-5 ">
    <p className='uppercase text-white font-sand text-[18px] '>incline detected</p>
    <div className=' flex flex-row  gap-3  text-white '>
    <p className='font-sand'>1</p>
    <h2 className='font-rale font-[500] text-[30px] xl:text-[45px] leading-10 xl:leading-[50px]'> AdaptivePower
    senses elevation gain</h2>
    </div>
    </div>
    </main>

    </div>     
    </div> 
    </section>

    <section className='pt-12 lg:pt-16 xl:pt-28' >
    <div className='max-w-7xl  px-3 sm:px-4 mx-auto'>
    
    <ul className='flex flex-col gap-5 xl:flex-row'>
    
    <li className='w-full xl:w-8/12'>
    <video className='object-cover h-[100%] w-[100%]' controls={false} autoPlay loop  muted disablePictureInPicture>
    <source src='https://cowboy.com/cdn/shop/t/28/assets/cruiser-st--adaptive-power-incline.h264.mp4?v=100969412570119089141689510154' type='video/mp4'/>    
    </video>   
    </li>

    <li className='w-full xl:w-4/12 border-b  xl:border-0 '>
    <Image className='w-[100%] object-cover mobile-item' src={incline2} alt='incline'/> 
    <div className='flex flex-col justify-start gap-2 xl:gap-4 xl:px-6'>
    <h1 className='text-[30px] font-rale text-white lg:pt-12 '>Hit No Slope</h1>
    <p className='text-[#9a9a9a] font-sand text-[20px]'>As soon as you make contact with a change in slope inclination,
    the motor gives you extra power to fly right up the hill at
    the same speed as before.</p>
    
    <div className={` ${isFullScreen ? 'fullscreen' : ''}`}>
    {!isFullScreen ? (
    <div className=''>
    <button onClick={openFullScreen} className='flex it items-center hover:underline text-[18px] text-white font-sand pb-12  py-3 gap-2  font-[400] '>Watch how it feels <PlayIcon className='w-5 h-5 mt-1 xl:mt-0.5 '/> </button>   
    </div>
    ) : (
      <div>
      <video autoPlay  loop playsInline disablePictureInPicture  controls={true}  className='object-cover absolute top-0 z-0 w-[100%] h-[100vh]'>
      <source src="https://cdn.shopify.com/videos/c/o/v/49c35e511ff5480fac75911db2d6d100.mp4" type="video/mp4"/>    
      </video>
      <XMarkIcon  className='c-btn text-white w-10 h-10 absolute top-4 right-4' onClick={closeFullScreen}>Close Fullscreen</XMarkIcon>
      </div>
    )}
    </div>

    </div>   
    </li>    
    </ul>

    <div>
    <div className='w-full xl:w-6/12 py-12 xl:py-24'>
    <h3 className='circularSubText'>Even the steepest hill before you feels like the flat
    with AdaptivePower. Pull up the app, and we&apos;ll see you at the top.
    </h3> 
    </div>

    <div className='relative'>
    <div className=''>
    <Image className='w-[100%]  h-[100vh] md:h-[90vh] object-cover' src={app} alt='Adaptive-power-app '/> 
    </div>

    <aside className='absolute w-3/12 mobile-item bottom-28 right-2 '>
    <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='t-box px-6 py-6 flex rounded-md flex-col gap-1 items-center'>
    <h3 className='font-sand font-[500] text-[18px]  text-white'>Resistance detected</h3>
    <p className='text-[#fff] opacity-75  text-[14px] font-sand'>25 times during last ride</p>
    </div>
    </aside>

    <aside data-aos="fade-up" data-aos-duration="600" data-aos-offset="200" className='absolute  lg:w-4/12 xl:w-3/12 bottom-4 pl-2 xl:bottom-28 xl:left-24'>
    <h2 className='font-rale text-[27px] sm:text-[35px] xl:text-[40px] font-[400] md:font-[500] font-white leading-10 md:leading-[2.9rem]  text-white '>Keep top speed as you rise</h2>
    <Link className='flex gap-3 items-center pt-1 xl:pt-4 text-white font-sand text-[18px] font-[500]' href='/connect'>Track stats in app <ChevronRightIcon className='w-6 h-6'/> </Link>
    </aside>

    </div> 
    </div>

    </div>
    </section>

 </div>
  )
}

export default PaceSection