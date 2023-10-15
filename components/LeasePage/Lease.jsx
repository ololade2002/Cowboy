"use client"

import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import LeaseBody from './LeaseBody'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Lease = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div>
     <Navbar/> 
     <HeroSection/>  
     <LeaseBody/>
    </div>
  )
}

export default Lease