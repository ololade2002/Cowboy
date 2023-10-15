
import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import cap from '@/public/accessories/Cowboy_cap.webp'
import tshirt from '@/public/accessories/Front_.webp'
import bag from '@/public/accessories/BERNT-Black.webp'
import coco from '@/public/accessories/CocoCapitan_Product.webp'
import lo from '@/public/accessories/lo-black_512x@2x.webp'

const ApparelSection = () => {
  return (
    <div id='apparel'>

<div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">

    <div className='flex flex-col gap-4 items-center justify-center'>
    <p className='font-sand text-[19px] font-[500]'>Apparel</p>    
    <h1 className='text-[45px] font-rale leading-[2.9rem] pb-4 font-[500] text-center'>Get the Cowboy look</h1>
    <ArrowRightIcon className='w-8 h-8'/>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={cap} alt='cap'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Cowboy cap</h3>    
    <p className='font-sand font-[500]'>$20</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={tshirt} alt='tshirt'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Cowboy t-shirt</h3>    
    <p className='font-sand font-[500]'>$30</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={bag} alt='bag'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Sandqvist Bernt Backpack</h3>    
    <p className='font-sand font-[500]'>$156</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={coco} alt='coco'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Cowboy x Coco Capitán T-Shirt</h3>    
    <p className='font-sand font-[500]'>$45</p>
    </div>
    </div>

    <div>
    <div className='accessories h-[70vh] w-[100%] flex items-center justify-center'>
    <Image className='w-[40%] ' src={lo} alt='lo'/>    
    </div>
    <div className='flex flex-row justify-between py-2'>
    <h3 className='font-sand font-[500] text-[17px]'>Sandqvist Lo Bumbag</h3>    
    <p className='font-sand font-[500]'>$76</p>
    </div>
    </div>

    </div>
    <hr className='bg-black my-12 w-full h-[2px] '/>
    </div>

    </div>
  )
}

export default ApparelSection