
import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import battery from '@/public/accessories/battery-side_512x@2x.webp'
import belt from '@/public/accessories/Belt.webp'
import charger from '@/public/accessories/Battery-charger.webp'
import wheel from '@/public/accessories/FullrearWheel.webp'
import pedal from '@/public/accessories/Pedalset.webp'
import wheel2 from '@/public/accessories/FullRearWheel2.webp'

const SparepartSection = () => {
  return (
    <div id='spareparts' >

    <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-10 gap-y-10">

    <div className='flex flex-col gap-4 items-center justify-center'>
    <p className='font-sand text-[19px] font-[500]'>Spare parts</p>    
    <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>Source cowboy specified extras</h1>
    <ArrowRightIcon className='w-8 h-8'/>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={battery} alt='battery'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Cowboy Battery</h3>    
    <p className='font-sand font-[500]'>$490</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={belt} alt='belt'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Drive belt - C1,C2</h3>    
    <p className='font-sand font-[500]'>$30</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={charger} alt='charger'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Standard battery charger</h3>    
    <p className='font-sand font-[500]'>$119</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={wheel} alt='wheel'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Full rear wheel - C2</h3>    
    <p className='font-sand font-[500]'>$459</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={pedal} alt='pedal'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Pedal set - C1,C2,C3</h3>    
    <p className='font-sand font-[500]'>$13</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={wheel2} alt='wheel2'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Full rear wheel - Classic, Cruiser ST</h3>    
    <p className='font-sand font-[500]'>$310</p>
    </div>
    </div>
 

    </div>
    <hr className='bg-black my-12 w-full h-[2px] '/>
    </div>
    </div>
  )
}

export default SparepartSection


