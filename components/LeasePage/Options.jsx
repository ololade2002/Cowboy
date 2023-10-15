
import Image from 'next/image'
import React from 'react'
import options from '../../public/leasing-partners--options.webp'

const Options = () => {
  return (
    <div className=' '>
    <div className="body">
    <div className="flex lg:flex-row flex-col items-center gap-4  ">
        
    <div className='w-full xl:w-5/12 px-0 xl:px-4 flex flex-col gap-3 xl:gap-6' >
    <p className='font-sand text-[#1d1d1d] text-[18px] font-[500] '>Flexible leasing options</p>  
     <h2 className='text-[35px] sm:text-[40px] md:text-[55px] leading-10 xl:leading-[3.8rem] text-[#000] font-rale '>An option for every rider</h2>
     <ul className='flex flex-col gap-6'>
     <li className='font-sand text-[#1d1d1d] text-[18px] font-[500] xl:font-[600] '>We work with multiple leasing providers and types. This can take 
     various forms: part from your gross monthly salary, gross end-of-year
     bonus or gross bonus. Some companies work with a cafeteria plan, on
     the basis of which the lease is established.
    </li>   
    <li className='font-sand font-[500] xl:font-[600] text-[#1d1d1d] text-[18px] '>After the lease period, you can usually exchange or take over your 
    bicycle at a predetermined residual value, free of charge.
    </li>
     </ul>
    </div>

    <div className='w-full xl:w-7/12'>
    <Image className='h-[100vh] object-cover' src={options} alt='Flexible Leasing Options'/>    
    </div>

    </div> 
    </div>    
    </div>
  )
}

export default Options