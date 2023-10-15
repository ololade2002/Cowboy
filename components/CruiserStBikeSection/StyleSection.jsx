

import Image from 'next/image'
import React from 'react'
import classic from '../../public/Cruiser-st/cruiser-st-lavender-cropped.webp'
import img1 from '@/public/Classic/classic--detail.webp'
import img3 from '@/public/Classic/classic--detail-5.webp'
import img2 from '@/public/Classic/classic--detail-3.webp'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const StyleSection = () => {
  return (
    <div>
     
    <section className=' flex flex-col items-center justify-center'>
    <div className='w-full px-4 xl:px-0 xl:w-[77%] text-left xl:text-center mx-auto  '>
    <h1 className='connectSubText pb-16 xl:pb-20'>
    With a raised cockpit and curved handlebars, the Cruiser ST gives you an
     upright riding position. Step in from either side for a ride that&apos;s always easy to access.
    </h1>   
    </div>

    <div className='relative w-[100%]  flex items-center justify-center ' id='classic-ride'>
    <Image src={classic} className='w-full h-[50vh] sm:h-auto object-cover  xl:scale-100 xl:w-[65%]' alt='Classic-black'/>   
    <ul>

    <li className='web-bike'>    
    <p className='absolute top-5 left-[20%] font-sand  font-[500]'>Comfort Saddle</p> 
    <div className='h-[1.5px] bg-[#dcd6d6] absolute  top-12 left-[20%] w-[14%]' />
    </li>   

    <li className='web-bike'>
    <p className='absolute top-[29%] right-16 font-sand  font-[500]'>Streamlined cockpit and handlebars</p>
    <div className='h-[1px] bg-[#dcd6d6] absolute  top-[34%] right-16 w-3/12' />
    <hr />    
    </li>

    </ul> 
    </div>
    </section> 

    <section>
    <div className="py-8 xl:pt-20 xl:pb-16 w-full xl:w-[70%] mx-auto">
    <h1 className='web-bike font-rale text-[95px] font-[500] leading-[6.5rem] text-center'>Elevate your ride to meet your style</h1>    
    <p className='web-bike font-sand text-[27px] font-[500] text-[#747474] py-12'>A Cowboy bike is designed to be beautiful inside
    and out. Every detail integrates seamlessly into the frame, crafted to the highest standard.</p>
    <p className='mobile-bike connectSubText text-[#1d1d1d] py-7 px-4'>A Cowboy bike is designed to be beautiful inside
    and out. Every detail integrates seamlessly into the frame, crafted to the highest standard.</p>
    </div>

    <main className='relative flex flex-col gap-4 px-4'>

    <div id='item-classic' className='relative w-[100%] rounded-md object-cover'>
    <Image className='w-[100%] h-[50vh] sm:h-[70vh] xl:h-auto object-cover' src={img1} alt='Classic'/>    
    <article className='web-bike absolute top-12 left-12 flex flex-col gap-2 w-3/12'>
    <h1 className='font-sand text-[27px] font-[500] text-[#1d1d1d]'>Design details</h1>
    <p className='text-[#747474] font-sand font-[500]'>With every detail considered,its built to
    hold up to the elements on the long road 
    </p>
    </article>
    </div>   

    <ul className='flex flex-col-reverse xl:h-[100vh] xl:flex-row gap-4  '>
    <li id='item-classic' className='w-full xl:w-8/12 h-auto rounded-md relative overflow-y-hidden '>
    <Image className='object-contain scale-100 xl:scale-[70%]' src={img2} alt='classic-detail'/>
    <article className='web-bike absolute top-12 left-12 flex flex-col gap-2 w-3/12'>
    <h1 className='font-sand text-[27px] font-[500] text-[#1d1d1d]'>Craftmanship</h1>
    <p className='text-[#747474] font-sand font-[500]'>Engineering excellence gives Cowboy cred 
    with our riders and design critics.
    </p>
    </article>
    </li>

    <li  className='w-full xl:w-4/12 rounded-md flex flex-col '>
    <div id='item-classic' className='xl:h-[60vh] overflow-y-hidden '>
    <article className='web-bike pl-6 pt-4 flex flex-col gap-2 w-7/12'>
    <h1 className='font-sand text-[27px] font-[500] text-[#1d1d1d]'>Materials</h1>
    <p className='text-[#747474] font-sand font-[500]'>Engineering excellence gives Cowboy cred 
    with our riders and design critics.
    </p>
    </article>
    <Image className='xl:scale-[75%]' src={img3} alt='classic-detail'/>       
    </div> 
   
    <div className='pt-6 w-full xl:w-[80%] mx-auto'>
    <h2 className='font-sand text-[#1d1d1d] text-[24px] font-[500] '>You&apos;ve got the gear</h2>
    <p className='font-sand text-[#545353] font-[500] py-3'>Custom accessories fot stunning versatility on the road,
    along with spare parts when you need them.    
    </p>
    <Link href='/accessories' className='flex gap-1 items-center font-sand text-[18px] font-[600] text-[#1d1d1d]'>
    Explore accessories <ChevronRightIcon className='w-5 h-5 mt-1'/> 
    </Link>
    </div>
    </li>    
    </ul>

    </main>

    </section>

    </div>
  )
}

export default StyleSection