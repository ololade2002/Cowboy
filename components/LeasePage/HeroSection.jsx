
import Image from 'next/image'
import React from 'react'
import lease from '../../public/leasing-partners1.jpg'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
      <div className=' absolute top-0  z-0 object-cover w-[100%] h-[100vh]'>
      <Image className='w-[100%]  h-[100vh] object-cover' src={lease} alt='lease'/> 
      </div>
      <div className="leaseText z-20">
      <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="120" className='flex flex-col '>
      <p  className='text-white font-sand font-[500] text-[21px] '>From only €54/month</p>  
      <h1  className=' tracking-tight font-rale text-[40px] sm:text-[55px] lg:text-[100px] font-[500]  text-white py-6 md:py-0 '>Lease a Cowboy</h1>  
      <button  className='bg-white mx-auto text-[#1d1d1d] px-8 font-[600] text-[19px] mt-4 py-2.5 font-sand rounded-full'>Get Started</button>
      <div className='' >
      <Link  href='#provider' className='bg-[#fff] hover:bg-[#000]  h-12 w-12 mt-40 xl:mt-24  flex items-center justify-center text-center rounded-full mx-auto'>
      <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#fff] text-[#1d1d1d]'/>
      </Link>
      </div>
      </div>
      </div>  
    </div>
  )
}

export default HeroSection