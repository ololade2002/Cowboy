"use client"

import React from 'react'
import Header from '@/components/ConnectPage/Header'
import HeroSection from './HeroSection'
import BodySection from  './BodySection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Cruiserst = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div id='page-cruiserst'>
    <Header/>    
    <HeroSection/>
    <BodySection/>
    </div>
  )
}

export default Cruiserst