
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const BikeSection = () => {
  return (
   <section>
    <div className="body pt-12 xl:pt-20">
    <div className='w-full xl:w-[80%] text-left xl:text-center mx-auto'>
     <h1 className='connectSubText pb-6 '>
     Meet the Cruiser for an elevated take on the classic Cowboy.
      A higher vantage gives you a comfortable advantage with an 
      electric bike that's built around you.
    </h1>   
    <Link href='/test-ride' className='bg-[#f2ebe3] web-bike hover:bg-white font-sand text-[18px] hover:opacity-90 font-[500] px-8 py-3 text-[#1d1d1d] rounded-full'>Book a free ride</Link>
    </div>

    <div className='mobile-bike'>
   <div className='flex flex-row gap-3 '>
    <Link href='/e-bike/classic' className='homeBtn f-btn'>Explore</Link>
    <Link href='/test-ride' className='flex-center gap-1 font-sand font-[500]'>Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0.5'/> </Link>
    </div>
   </div>

    </div>
   </section>
  )
}

export default BikeSection