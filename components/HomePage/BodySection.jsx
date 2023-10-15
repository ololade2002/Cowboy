
import React from 'react'
import Cruiser from '@/components/HomePage/Cruiser'
import Cruiserst from '@/components/HomePage/Cruiserst'
import Classic from '@/components/HomePage/Classic'


const BodySection = () => {
  return (
   <div>
    <div className='relative z-40 top-[89vh] '>

     <Cruiser/>
     <Cruiserst/>
     <Classic/>
    
    </div>
   </div>
  )
}

export default BodySection


