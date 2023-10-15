
"use client"

import React, { useState } from 'react'
import logo from '@/public/cowboy-logo.png'
import Image from 'next/image'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {BsBag} from 'react-icons/bs'
import Ebikes from '@/components/General/Ebikes'


const Header = () => {
  const [mobile,setMobile] = useState(false)

  return (
    <div className='relative z-40'>
    <div className='max-w-7xl mx-auto '>
 
    <nav className='flex  justify-between pt-[20px] pb-[28px] px-1 xl:px-2 items-center  bg-transparent'>
    <Link href='/' className='left relative z-50'>
    <Image className='w-[10.5rem]  invert-[0%] ' src={logo} alt='Cowboy'/>
    </Link>
 
    <div className={mobile ? 'connect-mobileNav z-50' :'webNav  right flex  items-center  gap-6 xl:gap-[12px] 2xl:gap-20'} onClick={() => setMobile(false)} >
    <div className='center pb-6 xl:py-0 xl:uppercase'>
    <ul className='flex flex-col xl:items-center xl:flex-row font-mont gap-4 2xl:gap-6'>
 
    <li className=''>
    <Ebikes/> 
    </li>
 
     <li className='bikes mobilenav-textb'>
     <Link href='/e-bike/cruiser'>Cruiser</Link>
     </li>

     <li className='bikes mobilenav-textb'>
     <Link href='/e-bike/cruiser-st'>Cruiser ST</Link>
     </li>

     <li className='bikes mobilenav-textb'>
      <Link href='/e-bike/classic'>Classic</Link>
     </li>
 
     <li  className='mobilenav-textb'>
      <Link href='/connect'>Connect</Link>   
     </li>
 
     <li  className='mobilenav-textb'>
      <Link href='/accessories'>Accessories</Link>   
     </li>
 
     <li className='mobilenav-textb'>
     <Link href='/adaptive-power'>Circular</Link>
     </li>
 
     <li className='mobilenav-textb'>
     <Link href='/leasing'>Leasing</Link>    
     </li>
 
    </ul>
    </div>
 
     <div className='flex xs:flex-row flex-col items-center justify-between gap-6  '>
     <Link href='/test-ride' className='mobilenav-textb'>Book A Test Ride</Link>
     <button className='uppercase text-[18px] xl:text-[15px] font-mont font-[400] px-7 xl:px-5 py-4 xl:py-3 hover:opacity-80 bg-[#1d1d1d] text-[#fff] xl:text-[#fff] xl:bg-[#1d1d1d] rounded-full '>Order Now</button>
     <BsBag className='icon xl:visible text-[#1d1d1d] xl:text-black w-6 h-6'/>
     </div>
    </div>
 
    {/*Mobile Nav */}
    <button className='menu flex items-center gap-4 xs:gap-6' onClick={() =>setMobile(!mobile)}>
    <BsBag className='text-black w-7 h-7'/>
    {mobile ? <XMarkIcon className='  w-9 h-9 text-black'/> : <Bars3BottomRightIcon className='w-8 h-8 text-black'/>  }  
    </button>
    </nav>
 
    </div>
    </div>
  )
}

export default Header


