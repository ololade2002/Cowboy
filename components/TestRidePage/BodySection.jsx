
import React from 'react'
import BookRideSection from './BookRideSection'
import ConnectSection from './ConnectSection'
import MapSection from './MapSection'
import Footer from '../Footer/Footer'

const BodySection = () => {
  return (
    <div  className='relative top-[91vh] bg-[#fafafa]  z-40'>
    <BookRideSection/>
    <MapSection/>
    <ConnectSection/>
    <Footer/>
    </div>
  )
}

export default BodySection