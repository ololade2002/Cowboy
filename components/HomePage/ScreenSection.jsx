

import React from 'react'
import Image from 'next/image'
import setting from '@/public/Screens/app-card-settings_183x@2x.png'
import badge from '@/public/Screens/app-card-badge_183x@2x.png'
import theft from '@/public/Screens/app-card-theft_183x@2x.png'
import analysis from '@/public/Screens/app-card-analysis_183x@2x.png'
import summary from '@/public/Screens/app-card-summary_183x@2x.png'
import weather from '@/public/Screens/app-card-weather_183x@2x.png'
import homescreen from '@/public/Screens/index-app-homescreen_168x@3x.webp'
import air from '@/public/Screens/app-card-air-quality_183x@2x.png'
import battery from '@/public/Screens/app-card-battery_183x@2x.png'
import location from '@/public/Screens/app-card-air_183x@2x.png'
import calendar from '@/public/Screens/app-card-calendar_183x@2x.png'
import chart from '@/public/Screens/app-card-chart_183x@2x.png'
import chart1 from '@/public/Screens/app-card-analysis-chart_183x@2x.png'
import nav from '@/public/Screens/app-card-nav_183x@2x.png'
import board from '@/public/Screens/app-card-leaderboard_183x@2x.png'
import Link from 'next/link'

const ScreenSection = () => {
  return (
    <div className='  overflow-x-hidden z-50   bg-[#f6f6f6] '>
    <div  className='grid screens pt-8 xl:pt-20 w-[180vw] lg:w-[109vw] items-center gap-4'>

     <div data-aos="fade-down" data-aos-duration="3000" data-aos-offset='300'  className='grid gap-4'>
      <Image src={setting} alt='setting' />  
      <Image src={badge} alt='badge'/>
    </div>

    <div data-aos="fade-up" data-aos-duration="3000" data-aos-offset='300' className='grid gap-4'>
      <Image src={theft} alt='theft'/>  
      <Image src={analysis} alt='analysis'/>  
      <Image src={board} alt='board'/>  
    </div>

    <div data-aos="fade-down" data-aos-duration="3000" data-aos-offset='300' className='grid gap-4'>
      <Image src={summary} alt='summary'/>  
      <Image src={weather} alt='weather'/>  
    </div>

    <div data-aos="fade-up" data-aos-duration="3000"  data-aos-offset='300' >
      <Image src={homescreen} alt='homescreen'/>    
    </div>

    <div data-aos="fade-down" data-aos-duration="3000"  data-aos-offset='300' className='grid gap-4'>
      <Image src={air} alt='air'/>  
      <Image src={battery} alt='battery'/>  
    </div>

    <div data-aos="fade-up" data-aos-duration="3000"  data-aos-offset='300' className='grid gap-4'>
      <Image src={location} alt='location'/>  
      <Image src={calendar} alt='calendar'/>  
      <Image src={chart} alt='chart'/>  
    </div>

    <div data-aos="fade-down" data-aos-duration="3000" data-aos-offset='300' className='grid gap-4'>
      <Image src={chart1} alt='chart1'/>  
      <Image src={nav} alt='nav'/>  
    </div>

    </div>  

    <div className='flex flex-col items-center  w-[85%] xl:w-full  text-center mx-auto pt-0 pb-8 xl:py-24 gap-4 xl:gap-6 justify-center '>
    <h1 className='text-[#1d1d1d] text-[40px]  text-center sm:text-[55px] lg:text-[65px]  xl:tracking-tight leading-[3.5rem] xl:leading-[4rem] font-[500] font-rale'>It&apos;s a great day for a ride</h1>
    <p className='font-sand text-[20px] text-[#1d1d1d] opacity-90' >Connectivity is at the heart of your Cowboy.</p>
    <Link href='/connect' className='homeBtn mt-4'>Explore Connect</Link>
    </div>  
    </div>
  )
}

export default ScreenSection