
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import quad from '@/public/accessories/Quad_Lock.webp'
import cmf from '@/public/accessories/cmf.webp'
import bmp from '@/public/accessories/bmp.webp'
import adapter  from '@/public/accessories/UniAdaptor.webp'
import brooks from '@/public/accessories/brooks-pannier.webp'
import rack from '@/public/accessories/rear rack.webp'
import hamax from '@/public/accessories/hamax-child-seat.webp'
import light from '@/public/accessories/knog-front-light_512x@2x.webp'


const ComSection = () => {
  return (
    <div>
    <div id='commute' className="py-9 max-w-7xl mx-auto px-4 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  lg:gap-x-10 lg:gap-y-10">

    <div className='flex flex-col gap-4 items-center justify-center'>
    <p className='font-sand text-[19px] font-[500]'>Commute</p>    
   
    <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>Come and go well-equipped</h1>
    <ArrowRightIcon className='w-8 h-8'/>
    
    </div>

    <div>
    <div className='accessories  '>
    <Image className='w-[40%]' src={quad} alt='quad'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Quad Lock Phone Case</h3>    
    <p className='font-sand font-[500]'>$40</p>
    </div>
    </div>
 
    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={cmf} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Kickstand</h3>    
    <p className='font-sand font-[500]'>$29</p>
    </div>
    </div>

    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={adapter} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Quad Lock Universal Adapter</h3>    
    <p className='font-sand font-[500]'>$20</p>
    </div>
    </div>

    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={bmp} alt='bmp'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Quad Lock Phone Mount</h3>    
    <p className='font-sand font-[500]'>$30</p>
    </div>
    </div>
    
    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={brooks} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Brooks Scape Pannier</h3>    
    <p className='font-sand font-[500]'>$125</p>
    </div>
    </div>

    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={rack} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Rear rack</h3>    
    <p className='font-sand font-[500]'>$49</p>
    </div>
    </div>

    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={light} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Knog Plug Front Light</h3>    
    <p className='font-sand font-[500]'>$30</p>
    </div>
    </div>

    <div>
    <div className='accessories '>
    <Image className='w-[40%] ' src={hamax} alt='cmf'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Hamax Child Seat</h3>    
    <p className='font-sand font-[500]'>$149</p>
    </div>
    </div>


    </div>
    <hr className='bg-black my-12 w-full h-[2px] '/>
    </div>    
    </div>
  )
}

export default ComSection