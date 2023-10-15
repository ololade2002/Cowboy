
"use client"

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FaqSection = () => {
  return (
    <div className='bg-[#f6f6f6]'>
    <div className='body pb-12 '> 
    <h1 className='font-rale text-[110px] font-[500] text-end pt-20'>FAQ</h1>    
    <div className="w-full px-0 xl:px-4 pt-6">
      <div className=" w-full  rounded-2xl ">
        <hr />
        <Disclosure as="div" className='py-4'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  w-full justify-between rounded-lg  xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>What is the advantage of leasing  ?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7   text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase.
                 The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className='' />
        <Disclosure as="div" className="py-4">
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>How long is the leasing period?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7  text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase.
                 The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className='' />
        <Disclosure as="div" className="py-4">
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>What happens if I leave my employer?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase.
                 The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className='' />
        <Disclosure as="div" className="py-4">
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>Can I add  insurance to my leasing order?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>No, it&apos;s usually not possible to add our theft insurance to the offer. Most of our leasing partners have their own insurance against theft, accidents, and damages, included in the leasing package. It is of course 
              possible to purchase our insurance privately as an addition to the insurance included in the leasing package.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className='' />
        <Disclosure as="div" className="py-4">
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>Can I add accessories to my order?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>Yes, you can add both the bike and accessories to your order. Please note that some partners don&apos;t consider smartphone mounts* as well as matching phone cases as leasable.
              Please get in touch with your local partner to get more information on this topic.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className='' />
        <Disclosure as="div" className="py-4">
        {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  xl:px-4 py-2 text-left text-[#1d1d1d] font-sand text-[20px] sm:text-[25px] tracking-tight font-[500] focus:outline-none focus-visible:ring ">
                <span>What happens if I want to return my Cowboy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="xl:px-4 pt-4 pb-2 text-sm text-gray-500">
              <p className='font-sand text-[19px] text-[#1d1d1d] leading-7'>Leasing through your employer is fiscally very interesting, since the monthly leasing instalments are taken from your gross salary. Leasing through your employer is on average 40% cheaper than a private purchase.
                 The net deduction from your salary starts from as low as €54 a month spread over a period of 36 months.</p>  
              <p  className='font-sand text-[19px] text-[#1d1d1d] leading-7 py-5'>After the lease period, you can usually exchange or take over your bicycle at a predetermined residual value, free of charge.</p>   
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>



    </div>
    </div>
  )
}

export default FaqSection