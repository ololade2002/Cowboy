
"use client"

import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import img3 from '../../public/cruiser-sand2.webp'
import img2 from '../../public/classic-black-bike.webp'
import img4 from '../../public/cruiser-st-lavender1.webp'
import { useRouter } from 'next/navigation'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Collection = () => {
const router = useRouter()  
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <div>
    <div className=" inset-0  flex items-center justify-center">
    <button type="button" onClick={openModal} className="mobilenav-text m-view flex items-center gap-1">
    E-bikes <ChevronDownIcon className='w-6 h-6 opacity-90'/>
    </button>
    </div>

    <Transition appear show={isOpen} as={Fragment} className='ebikes-popup'>
    <Dialog as="div" className="relative z-50" onClose={closeModal}>
    <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0">
    <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 w-[95%] h-auto mx-auto px-8 md:px-3  bg-white rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[75%] overflow-y-hidden ">
    <div className="flex  items-center justify-center  text-center">
    <Transition.Child
    as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95" >
    <Dialog.Panel className="w-full max-w-full transform overflow-hidden   rounded-none   text-left align-middle  transition-all">
                
    <Dialog.Description>
    <div className='modal pt-2 justify-center grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-4 '>

     <div  onClick={() => router.push('/test-ride')}  className='relative flex flex-col c cursor-pointer py-4 px-4 '>
      <p className='uppercase text-[16px] font-rale font-[500] text-[#1d1d1d]'>our e-bikes</p>
      <h2 className='font-sand font-[500] text-[28px]  leading-8 pt-8 pb-28 '>Three models to choose from</h2>
      <Link href='/test-ride' className='flex-center h hover:underline font-sand text-[18px] text-[#1d1d1d] font-[500] gap-1'>Book a test ride <ChevronRightIcon className='w-6 h-6 mt-0.5'/> </Link>
     
     </div> 

     <div id='item-classic' onClick={() => router.push('/e-bike/classic')}   className='relative flex flex-col rounded-md  .cards-s ' >
   
      <div className='overflow-hidden bottom-0 relative h-full w-[95%] mx-auto mt-8'>
      <Image className='md:h-[360px]  sm:h-[400px]  w-full object-contain  cursor-pointer'  src={img2} alt='img'/>  
      </div>
      <div className='modal-text px-4 py-4'>
      <p className=' text-[18px] font-rale font-[500] text-[#1d1d1d]'>Delivered from 10 days</p>
      <h2 className='font-sand font-[500] text-[28px]  leading-8 pt-8 pb-28 '>Classic</h2>  
      </div>
     </div>

     <div id='item-cruiser' onClick={() => router.push('/e-bike/cruiser')}  className='relative rounded-md ' >
      <div className='overflow-hidden relative h-full   w-[95%] mx-auto mt-8  '>
      <Image className='md:h-[360px] sm:h-[400px] w-[100%] object-contain    cursor-pointer' src={img3} alt='img'/>  
      </div>
      <div className='modal-text px-4 py-4'>
      <p className=' text-[18px] font-rale font-[500] text-[#1d1d1d]'>Delivered from 10 days</p>
      <h2 className='font-sand font-[500] text-[28px]  leading-8 pt-8 pb-28 '>Cruiser</h2>  
      </div>
     </div>

     <div  id='item-cruiserst' onClick={() => router.push('/e-bike/cruiser-st')}  className='relative  rounded-md' >
      <div className='overflow-hidden relative h-full   w-[95%] mx-auto mt-8 '>
      <Image className='  md:h-[360px] sm:h-[400px] w-full object-contain  cursor-pointer'  src={img4} alt='img'/>  
      </div>
      <div className='modal-text px-4 py-4'>
      <p className=' text-[18px] font-rale font-[500] text-[#1d1d1d]'>Delivered from 10 days</p>
      <h2 className='font-sand font-[500] text-[28px]  leading-8 pt-8 pb-28 '>Cruiser ST</h2>  
      </div>
     </div>

  

    </div>
    </Dialog.Description>

    </Dialog.Panel>
    </Transition.Child>
    </div>
    </div>
    </Dialog>
    </Transition>
    </div>
  )
}

export default Collection

