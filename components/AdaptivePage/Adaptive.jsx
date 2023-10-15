"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import ElementSection from './ElementSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Adaptive = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div>
    <Navbar/>    
    <HeroSection/>
    <ElementSection/>
    </div>
  )
}

export default Adaptive