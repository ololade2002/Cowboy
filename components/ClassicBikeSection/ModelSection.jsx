"use client"

import React from 'react'
import { modelData } from '../../utils/utilsData'
import Image from 'next/image'
import classic from '@/public/classic-black-bike.webp'
import cruiser from '@/public/cruiser-sand2.webp'
import cruiserst from '@/public/cruiser-st-lavender1.webp'

const ModelSection = () => {
  return (
   <section>
    <div className="body py-12 xl:py-20">
    <h1 className='font-rale text-[50px] sm:text-[65px] lg:text-[90px] xl:text-[110px] text-[#1d1d1d] font-[500]'>Our models</h1>
    
     <div className=' relative overflow-x-scroll xl:overflow-x-hidden '> 
     <table className=' table-fixed  border-collapse border-spacing-8  w-[220vw] sm:w-[150%] lg:w-[100%]'>
       <thead className='border-b '>
        <tr className='model-image '>

        <th></th>    

        <th>
        <Image className='w-[260px] object-contain pr-6 xl:pr-0' src={classic} alt='classic'/>    
        </th>

        <th>
        <Image className='w-[260px] object-contain pr-6 xl:pr-0' src={cruiser} alt='cruiser'/>    
        </th>

        <th>
        <Image className='w-[260px] object-contain pr-6 xl:pr-0' src={cruiserst} alt='cruiser-st'/>    
        </th>
        </tr>

        <tr className='model-title  '>
        <th></th>
        <th className='bike-title '>Classic</th>
        <th className='bike-title '>Cruiser</th>
        <th className='bike-title '>Cruiser ST</th>
        </tr>

        <tr className='model-desc '>
        <th></th>
        <th className='bike-desc '>The iconic frame with a new performance standard for a sporty, active ride.</th>
        <th className='bike-desc '>A raised handlebar and higher gear ratio on the original frame for a more comfortable ride.</th>
        <th className='bike-desc '>An open frame with an upright riding position for a relaxed,active and accessible ride.</th>    

        </tr>
       </thead>  

       <tbody>
       {modelData.map((models) => (
        <tr className="model-preview border-b " key={models.id}>
        <td className='py-5 px-1 font-sand text-[18px] font-[500]'>{models.col1}</td>
        <td className='bike-text py-4 pr-6'>{models.col2}</td>
        <td className='bike-text py-4 pr-6'>{models.col3}</td>
        <td className='bike-text py-4 pr-6'>{models.col4}</td> 
        </tr>
        ))}    
       </tbody>

     
     </table>
    </div>

  
     
    </div>
   </section>
  )
}

export default ModelSection

