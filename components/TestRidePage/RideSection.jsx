"use client"

import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../Navbar/Navbar'
import BodySection from './BodySection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RideSection = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div>
    <Navbar/>    
    <HeroSection/>    
    <BodySection/>
    </div>
  )
}

export default RideSection