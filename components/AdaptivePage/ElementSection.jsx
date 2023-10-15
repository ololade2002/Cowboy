
import React from 'react'
import BikeSection from './BikeSection'
import PaceSection from './PaceSection'
import HeadwindSection from './HeadwindSection'
import GravitySection from './GravitySection'
import PickSection from './PickSection'
import Footer from '../Footer/Footer'

const ElementSection = () => {
 
    
  return (
    <div>
    <div  className='bg-[#1d1d1d] relative top-[89vh] xl:top-[165vh] z-50'>
    <BikeSection/>    
    <PaceSection/>
    <HeadwindSection/>
    <GravitySection/>
    <PickSection/>
    <Footer/>
    </div>    
    </div>
  )
}

export default ElementSection