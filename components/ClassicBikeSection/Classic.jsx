 "use client"

import React from 'react'
import Header from '../ConnectPage/Header'
import HeroSection from './HeroSection'
import BodySection from './BodySection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Classic = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div id='item-classic' className=''>
    <Header/>    
    <HeroSection/>
    <BodySection/>
 
    </div>
  )
}

export default Classic