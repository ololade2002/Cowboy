
import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import black from '@/public/accessories/Black.webp'
import kit from '@/public/accessories/cleaning-kit.webp'
import hoto from '@/public/accessories/hoto-electric-tire-inflator.webp'

const MaintenanceSection = () => {
  return (
    <div id='maintenance'>

     <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-10 gap-y-10">

    <div className='flex flex-col gap-4 items-center justify-center'>
    <p className='font-sand text-[19px] font-[500]'>Maintenance</p>    
    <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>Keep your bike in shape</h1>
    <ArrowRightIcon className='w-8 h-8'/>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={black} alt='black'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Cowboy bike touch-up kit</h3>    
    <p className='font-sand font-[500]'>$30</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={kit} alt='kit'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Muc-Off Bike Cleaning Kit</h3>    
    <p className='font-sand font-[500]'>$45</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={hoto} alt='hoto'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>HOTO Electric Tire Inflator</h3>    
    <p className='font-sand font-[500]'>$72</p>
    </div>
    </div>

    </div>
    <hr className='bg-black my-12 w-full h-[2px] '/>
    </div>    

    </div>
  )
}

export default MaintenanceSection