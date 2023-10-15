"use client"

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import img from '@/public/cowboy-services-included_640x@2x.webp'
import care from '@/public/cowboy-services-care_520x@2x.webp'
import insurance from '@/public/cowboy-services-theft-insurance_640x@3x.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ServiceSection = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 992, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
    },
   
  };

  return (
    <div className=' z-50  pb-24 bg-[#f0f0ec] '>
    <div className='max-w-[80rem] px-4 mx-auto'>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset='200' className='py-12 flex flex-col gap-4 xl:gap-6 '>
    <h3 className='text-[18px] sm:text-[22px] font-sand  opacity-60 font-[500]'>Cowboy at your service</h3>    
    <h1 className='font-rale text-[25px] sm:text-[30px] leading-10 tracking-tight'>A network of support at <br /> the  ready and on the road .</h1>
    <p className='flex flex-row items-center  font-mont text-[17px] gap-1 -mt-2'>Learn more <ChevronRightIcon className='w-5 h-5 mt-0.5'/> </p>
    </div>

    <div>
    <Carousel className='gap-24' responsive={responsive}
     additionalTransfrom={0}
     arrows={false}
     centerMode={false}
     containerClass="container"
     dotListClass=""
     draggable
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     partialVisible
     pauseOnHover
     renderArrowsWhenDisabled={false}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
     rewindWithAnimation={false}
     rtl={false}
     shouldResetAutoplay
     showDots={false}
     sliderClass=""
     slidesToSlide={1}
     swipeable >

    
    <div className='serviceCard'>
    <Image className='h-[50vh] object-cover' src={img} alt='included'/>
    <div className="serviceCard-text">
    <h1 className='font-sand pb-2 font-[500] text-[27px] text-white '>All services</h1>  
    <p className='font-sand text-[18px] font-[400]  text-[white] '>Support at every turn .</p>
    </div>
    </div>

    <div className='serviceCard'>
    <Image className='h-[50vh] object-cover' src={care} alt='care'/>
    <div className="serviceCard-text">
    <h1  className='font-sand pb-2 font-[500] text-[27px] text-white'>Cowboy care</h1>  
    <p className='font-sand text-[18px] font-[400]  text-[white] '>Expert technical service .</p>
    </div>
    </div>

    <div className='serviceCard'>
    <Image className='h-[50vh] object-cover' src={insurance} alt='insurance'/>
    <div className="serviceCard-text">
    <h1 className='font-sand pb-2 font-[500] text-[27px] text-white'>Theft insurance</h1>  
    <p className='font-sand text-[18px] font-[400]  text-[white] '>Added protection on the road .</p>
    </div>
    </div>

  
    </Carousel>
    </div>

    </div>    
    </div>
  )
}

export default ServiceSection