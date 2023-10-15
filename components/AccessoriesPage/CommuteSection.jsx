"use client"

import React, { useState } from 'react'
import { categoryList, compatibilityList } from '../../utils/utilsData'
import Link from 'next/link'


const CommuteSection = () => {
const [selected,setSelected] = useState(0)    
const [active,setActive] = useState(0)    

  return (
    <div className='relative ' >
    <div className=' sticky  z-50 w-full '>
    <div id='filters' className='bg-white py-6  w-full top-0 z-50 '>
    <div className="max-w-7xl mx-auto px-4">  

    <div className="category flex justify-between ">

    <ul className='flex flex-wrap  items-center gap-3'>
    <p className='text-[#1d1d1d] text-[18px] font-sand font-[600]'>Category</p>
    {categoryList.map((category,index) => (
    <div className="category-preview" key={index}>
    <Link className={selected === index ? 'bg-[#ebeae4] py-2 px-4 rounded-full text-[#1d1d1d] text-[16px] font-sand font-[600]' : 'text-[#1d1d1d80] text-[17px] font-sand font-[500]'} onClick={() => setSelected(index)} href={category.href}>
    {category.name}
    </Link>
    </div>    
    ))}
    </ul>

    <ul className='comp-section flex  gap-4 items-center'>
    <p className='text-[#1d1d1d] text-[18px] font-sand font-[600]'>Compatibility</p>
    {compatibilityList.map((comp,index) => (
    <div className="comp-preview" key={index}>
    <p className={active === index ? 'bg-[#ebeae4] py-2 px-4 rounded-full text-[#1d1d1d] text-[16px] font-sand font-[500]' : 'text-[#1d1d1d80] cursor-pointer text-[17px] font-sand font-[500]'} onClick={() => setActive(index)} >
    {comp.name}
    </p>
    </div>    
    ))} 
    </ul>   
    </div>   

    </div>    
    </div>
    </div>
    </div>
  )
}

export default CommuteSection