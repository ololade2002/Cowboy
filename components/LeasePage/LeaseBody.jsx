
import React from 'react'
import ProviderSection from './ProviderSection'
import Options from './Options'
import FaqSection from './FaqSection'
import Footer from '../Footer/Footer'

const LeaseBody = () => {
  return (
    <div className='bg-[#f6f6f6]'>
    <div className='relative top-[100vh] '>
     <ProviderSection/>
     <Options/>   
     <FaqSection/>
     <Footer/>
    </div>
    </div>
  )
}

export default LeaseBody