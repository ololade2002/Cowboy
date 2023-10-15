
import React from 'react'
import CommuteSection from './CommuteSection'
import SparepartSection from './SparepartSection'
import ComSection from './ComSection'
import SafetySection from './SafetySection'
import MaintenanceSection from './MaintenanceSection'
import ApparelSection from './ApparelSection'
import Footer from '../../components/Footer/Footer'

const CategorySection = () => {
  return (
    <div className='relative top-[91vh]  z-40'>
    <CommuteSection/>   
    <ComSection/> 
    <SparepartSection/>
    <SafetySection/>
    <MaintenanceSection/>
    <ApparelSection/>
    <Footer/>
    </div>
  )
}

export default CategorySection