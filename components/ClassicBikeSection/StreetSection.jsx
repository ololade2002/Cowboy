
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/Classic/standard_resolution1.jpg'
import img2 from '../../public/Classic/standard_resolution2.jpg'
import img3 from '../../public/Classic/standard_resolution3.jpg'
import img4 from '../../public/Classic/standard_resolution4.jpg'
import img5 from '../../public/Classic/standard_resolution5.jpg'
import { BsInstagram } from 'react-icons/bs'


const StreetSection = () => {
  return (
    <section >
    <ul className="body flex flex-col xl:flex-row gap-6 py-9 xl:py-12">
     <li className='w-full xl:w-4/12 flex flex-col justify-between'>
     <h1 className='font-rale text-[25px] md:text-[32px] font-[500]  text-[#000] leading-10'>See the Classic on the streets</h1> 
     <div className='web-bike flex items-center pb-3 gap-2 xl:border-b'>
     <div className='w-9 h-9 bg-black flex items-center justify-center rounded-full'>
     <BsInstagram className='w-4 h-4 text-white'/>  
     </div>
     <p className='font-sand font-[500] text-[18px] '>Follow on Instagram</p>  
     </div>
     
     </li>

     <li className='w-full xl:w-8/12 grid grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-4'>
     
     <div className='col-span-2 row-span-2 relative overflow-hidden'><Image className='object-cover h-[59vh] hover:scale-110 transition duration-[0.9s]' src={img5} alt='Classic'/></div>
     <div className='relative overflow-hidden'><Image className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]' src={img4} alt='Classic'/></div>
     <div className='relative overflow-hidden'><Image className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]' src={img3} alt='Classic'/></div>
     <div className='relative overflow-hidden'><Image className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]' src={img2} alt='Classic'/></div>
     <div className='relative overflow-hidden'><Image className='object-cover h-[28vh] hover:scale-110 transition duration-[0.9s]' src={img1} alt='Classic'/></div>
     </li>

     <li className='mobile-bike'>
     <div className=' flex flex-row items-center pb-3 gap-2 xl:border-b'>
     <div className='w-9 h-9 bg-black flex items-center justify-center rounded-full'>
     <BsInstagram className='w-4 h-4 text-white'/>  
     </div>
     <p className='font-sand font-[500] text-[18px] '>Follow on Instagram</p>  
     </div>
     </li>
    
    </ul>    

    </section>
  )
}

export default StreetSection


