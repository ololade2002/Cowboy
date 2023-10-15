"use client"

import React from 'react'
import Header from './Header'
import HeroPage from './HeroPage'
import ConnectBody from './ConnectBody'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Connect = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div className='' >
    <Header/>    
    <HeroPage/>
    <ConnectBody />
    </div>
  )
}

export default Connect