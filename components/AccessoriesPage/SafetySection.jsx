
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import lock from '@/public/accessories/kryptonite-u-lock.webp'
import helmet1 from '@/public/accessories/Helmet.webp'
import helmet2 from '../../public/accessories/helmet2.webp'
import Image from 'next/image'

const SafetySection = () => {
  return (
    <div id='safety'>
    
    <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-10 gap-y-10">

    <div className='flex flex-col gap-4 items-center justify-center'>
    <p className='font-sand text-[19px] font-[500]'>Safety</p>    
    <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>Ride safe and sound</h1>
    <ArrowRightIcon className='w-8 h-8'/>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={lock} alt='lock'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Kryptonite U-Lock</h3>    
    <p className='font-sand font-[500]'>$89</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={helmet1} alt='helmet1'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>POC Omne Air MIPS Helmet</h3>    
    <p className='font-sand font-[500]'>$160</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={helmet2} alt='helmet2'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Closca Helmet</h3>    
    <p className='font-sand font-[500]'>$119</p>
    </div>
    </div>

    </div>
    <hr className='bg-black my-12 w-full h-[2px] '/>
    </div>

    </div>
  )
}

export default SafetySection