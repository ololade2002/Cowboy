
"use client"

import React, { useEffect, useState } from 'react'
import logo from '@/public/cowboy-logo.png'
import Image from 'next/image'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {BsBag} from 'react-icons/bs'
import Collection from '@/components/General/Collection'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
useEffect(() => {
AOS.init()
},[])  
const [mobile,setMobile] = useState(false)
  
  return (
   <div className='relative z-40'>
   <div className='max-w-7xl mx-auto '>

   <nav  className='flex  justify-between py-[20px] md:py-[16px] px-3 xl:px-2 items-center  bg-transparent'>
   <Link href='/' className='left relative z-50'>
   <Image className='w-[10rem] sm:w-[10.5rem]  invert-[100%] ' src={logo} alt='Cowboy'/>
   </Link>

   <div className={mobile ? 'mobileNav z-50' :'webNav  right flex  items-center gap-6 xl:gap-[12px] 2xl:gap-20'} onClick={() => setMobile(false)} >
   <div className='center pb-6 xl:py-0 xl:uppercase'>
   <ul className='flex flex-col  xl:items-center xl:flex-row font-mont gap-4 2xl:gap-6'>

    <li className=''>
    <Collection/>  
    </li>

    <li className='bikes mobilenav-text'>
     <Link href='/e-bike/cruiser'>Cruiser</Link>
     </li>

     <li className='bikes mobilenav-text'>
     <Link href='/e-bike/cruiser-st'>Cruiser ST</Link>
     </li>

     <li className='bikes mobilenav-text'>
      <Link href='/e-bike/classic'>Classic</Link>
     </li>
 
    <li  className='mobilenav-text'>
     <Link href='/connect'>Connect</Link>   
    </li>

    <li  className='mobilenav-text'>
     <Link href='/accessories'>Accessories</Link>   
    </li>

    <li className='mobilenav-text'>
     <Link href='/adaptive-power'>Circular</Link> 
    </li>

    <li className='mobilenav-text'>
    <Link href='/leasing'>Leasing</Link>    
    </li>

   </ul>
   </div>

    <div className='flex xs:flex-row flex-col items-center justify-between gap-6  '>
    <Link href='/test-ride' className='mobilenav-text'>Book A Test Ride</Link>
    <button className='uppercase text-[18px] xl:text-[15px] font-mont font-[500] px-7 xl:px-5 py-4 xl:py-3 hover:opacity-80 bg-[#1d1d1d] text-[#fff] xl:text-[#000] xl:bg-white rounded-full '>Order Now</button>
    <BsBag className='icon xl:visible text-[#1d1d1d] xl:text-white w-6 h-6'/>
    </div>
   </div>

   {/*Mobile Nav */}
   <button className='menu flex items-center gap-4 xs:gap-6' onClick={() =>setMobile(!mobile)}>
   <BsBag className='text-white w-7 h-7'/>
   {mobile ? <XMarkIcon className='  w-9 h-9 text-white'/> : <Bars3BottomRightIcon className='w-8 h-8 text-white'/>  }  
   </button>
   </nav>

   </div>
   </div>
  )
}

export default Navbar

