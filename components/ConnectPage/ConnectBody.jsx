
import React from 'react'
import Potential from './Potential'
import Insurance from './TheftInsurance'
import ShareRide from './ShareRide'
import Fitness from './Fitness'
import Footer from '../Footer/Footer'

const ConnectBody = () => {
  return (
    
    <div className='relative top-[88vh] sm:top-[84vh] bg-[#fdf8f2] z-20 '>
    <Potential/>    
    <Insurance/>
    <ShareRide/>
    <Fitness/>
    <Footer/>   
    </div>
  )
}

export default ConnectBody