"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import CategorySection from './CategorySection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Accessories = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div>
     <Navbar/>   
     <HeroSection/>   
     <CategorySection/>
    </div>
  )
}

export default Accessories