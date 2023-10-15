
import React from 'react'
import BikeSection from './BikeSection'
import ShowSection from './ShowSection'
import PowerSection from './PowerSection'
import StyleSection from './StyleSection'
import ModelSection from './ModelSection'
import StreetSection from './StreetSection'
import Footer from '@/components/Footer/Footer'

const BodySection = () => {
  return (
    <div id='filters' className='bg-[#fdf8f2]'>
    <BikeSection/>
    <ShowSection/>
    <PowerSection/>
    <StyleSection/>
    <ModelSection/>
    <StreetSection/>
    <Footer/>
    </div>
  )
}

export default BodySection