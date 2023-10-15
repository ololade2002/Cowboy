import React from 'react'
import Image from 'next/image'
import connect from '../../public/circular--hero.webp'
import portraitConnect from '@/public/circular--hero_portrait.webp'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const HeroPage = () => {
  return (
    <section id='intro' className=''>
   
    <aside className='media '>
     <div className="render ">
     <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='web-bike object-cover absolute top-0 z-0 h-[100vh] w-[100%] sm:w-[80%]'>
    <source className='' src="https://cowboy.com/cdn/shop/t/27/assets/connect--hero.webm?v=135320951610200723611689697287" type="video/webm"/>    
    </video>
    
    <div className='mobile-bike object-cover absolute top-0 z-0 h-[100vh] w-[100%] '>
    <Image className=' h-[100vh] object-cover' src={connect} alt='connect'/>  
    </div>

    <div className='portrait-bike object-cover absolute top-0 z-0 h-[100vh] w-[100%] '>
    <Image className=' h-[100vh] object-cover' src={portraitConnect} alt='connect'/>  
    </div>
     </div>
    </aside>
     
   <div className="connectText z-20">
   <h1 className='font-mont font-[500] text-[22px] pb-3 sm:pb-0 sm:-mb-1 text-[#1d1d1d]'>Cowboy Connect</h1>
    <p className='main-text text-[40px] sm:text-[55px] font-[500] lg:text-[95px] text-[#000] font-rale'>Unlock your ride</p>
    <Link href='#filters' className='bg-[#fff] hover:bg-[#000] portrait-bike  h-12 w-12 mt-24  flex items-center justify-center text-center rounded-full mx-auto'>
    <ArrowDownIcon className='animate-customAnimation mx-auto w-5 h-12 hover:text-[#fff] text-[#1d1d1d]'/>
    </Link>
   </div>  
   </section>
  )
}

export default HeroPage

