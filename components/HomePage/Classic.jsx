
import React from 'react'
import classic from '@/public/classic-black-front.webp'
import classicfull from '@/public/classic-black1.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'  
import Link from 'next/link'

const Classic = () => {
  return (
 
  <section id="classic" className=''>
  <div className='flexContainer pt-16 xl:pt-20 xl:max-w-7xl xl:mx-auto xl:px-4 relative overflow-hidden'>

  <div data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="100" className='w-full xl:w-8/12 pt-4 xl:pt-20 flex items-center justify-center'>
  <Image className='web-bike w-[60%]' src={classic} alt="cruiser"  />
  </div>

  <div className='homeSection'>
  <div className='flex flex-col gap-6 xl:gap-8'>
  <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className=' text-[22px] font-[500] font-sand'>Classic</p> 
  <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className='homeMainText'>Step over to the agile ride</h1>
 
  <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-offset="100" className='mobile-bike scale-125'>
  <Image className='' src={classicfull} alt='Classic'/>
  </div> 
 
  <div className='homeButton' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="120">
  <Link href='/e-bike/classic' className='homeBtn f-btn'>Explore</Link>
  <Link href='/test-ride' className='flex-center gap-2 font-sand font-[500]'>Book a test ride <ChevronRightIcon className='w-6 h-6 mt-1'/> </Link>
  </div>
  </div>

  <div className='homeBottomText' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
  <div>
  <p className='eyebrow'>0% Finance</p>
  <strong className='h3'>From €2.490</strong>
  </div>

  <div className='relative'>
  <div className='line'>
  <p className='eyebrow'>Removable battery</p>
  <strong className='h3'>Range predicator</strong>
  </div>
  </div>

  <div className='relative'>
  <div className='line'>
  <p className='eyebrow'>Anti-theft</p>
  <strong className='h3'>GPS tracking</strong>
  </div> 
  </div>
            

  </div>

  </div>
  </div>
  </section>
      

 
  )
}

export default Classic