"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {  RadioGroup } from '@headlessui/react'
import classicblack from '@/public/Classic/classic-black.webp'
import classiclavender from '@/public/Classic/classic-lavender.webp'
import classicfig from '@/public/Classic/classic-fig.webp'
import classicsand from '@/public/Classic/classic-sand.webp'
import classicclay from '@/public/Classic/classic-clay.webp'
import shadow from '@/public/Classic/shadow.webp'

const classicSection = [
  { img:classicblack , alt:'classic-black',  color:'bg-[#000]', selectedClass: 'ring-gray-400' },
  { img:classiclavender , alt:'classic-lavender', color:'bg-[#e6e1f9]' ,selectedClass: 'ring-gray-400'},
  { img:classicsand , alt:'classic-sand',color:'bg-[#e8dec8]',selectedClass: 'ring-gray-400'},  
  { img:classicfig , alt:'classic-fig',color:'bg-[#e8c4b8]',selectedClass: 'ring-gray-400' },
  { img:classicclay , alt:'classic-clay',color:'bg-[#c07e72]',selectedClass: 'ring-gray-400' },  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ShowSection = () => {
  const [currentImage, setCurrentImage] = useState(classicSection[0]);
  const [selectedColor, setSelectedColor] = useState(classicSection[0])

  const handleButtonClick = (image) => {
    setCurrentImage(image);
  };

 
  return (
    <section>
    <div className='xl:max-w-7xl xl:mx-auto xl:px-4 pt-20 xl:pt-14 flex  gap-y-8 flex-col xl:flex-row-reverse xl:justify-between items-center'>

    <div className='w-full xl:w-11/12 relative overflow-hidden flex items-center justify-center'>
    <Image className='xl:scale-[0.75] h-[40vh] sm:h-auto object-cover ' src={currentImage.img} alt={currentImage.alt} />
    <Image className='absolute web-bike bottom-0 xl:bottom-8 scale-100 xl:scale-[0.76]' src={shadow} alt='shadow'/>
    </div>


   <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4 pb-16 xl:pb-0 w-full xl:w-1/12 flex  justify-center xl:justify-start">
   <div className='flex flex-row xl:flex-col  f-btn px-3 py-3 rounded-full bg-white gap-3'>
    {classicSection.map((image) => (
    <div className="color-preview " key={image.id}>
    <RadioGroup.Option  onClick={() => handleButtonClick(image)}  value={image}  className={({ active, checked }) =>
    classNames(
    image.selectedClass,
    active && checked ? 'ring ring-offset-1' : '',
    !active && checked ? 'ring-2' : '',
    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
    )}>
    <RadioGroup.Label as="span" className="sr-only">{image.alt}</RadioGroup.Label>
    <span aria-hidden="true" className={classNames(image.color,
    'h-8 w-8 rounded-full border border-black border-opacity-10'
    )}/>
    </RadioGroup.Option>    

    </div>
    ))}
    </div>
   </RadioGroup>

  


    </div>
    </section>
  )
}

export default ShowSection
