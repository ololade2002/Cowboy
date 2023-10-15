"use client"

import React from 'react'
import {providersData} from '@/utils/utilsData'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const ProviderSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 ,
      partialVisibilityGutter: 0
      
    }
  };

    const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
    <div className="carousel-button-group mt-2 flex gap-2 absolute top-0 right-0 ">
    <ArrowLeftIcon className={currentSlide === 0 ? 'disable' : 'w-8 h-8'} onClick={() => previous()} />
    <ArrowRightIcon className='w-8 h-8' onClick={() => next()} />
    
    </div>
    );
  };

  return (
    <div>
     <div >
     <div className='body'>
    
     <div className='w-full xl:w-6/12 pb-12 xl:pb-24' id='provider'>
     <p className='connectSubText'>We partner with the best leasing providers to give you the 
      flexibility you need. So that you can focus on what 
      is really important, the ride .</p>   
     </div>

     <div className=' relative '>
     <h2 className='font-[500]  font-sand text-[#000] text-[32px] mb-8'>Our Providers </h2> 
       
     <Carousel responsive={responsive}
     customButtonGroup={<ButtonGroup />}
     renderButtonGroupOutside={true}
     arrows={false}
     autoPlaySpeed={3000}
     centerMode={false}
     className=""
     containerClass="container-with-dots"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     pauseOnHover
    renderArrowsWhenDisabled={false}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    renderDotsOutside={false}
    
    
      >
    {providersData.map((item) => (
    <div className='item-preview bg-white w-full min-h-[22vw] py-6' key={item.id}>
    <div className='px-4'>
    <Image className='h-[28px] w-auto' src={item.img} alt={item.country}/>  
    </div>  
    <p className='px-4 font-sand text-[#747474]  pt-1 pb-4'>{item.country}</p>
    <hr/>
    <h3 className='px-4 py-5 font-sand text-[18px]'>{item.desc}</h3>
    </div>
    ))}
   
    </Carousel>
    <button className='font-sand my-8 px-8 py-4 font-[500] bg-black rounded-full text-white'>Get Started</button>

     </div>
     
     
    </div>    
    </div>   
    </div>
  )
}

export default ProviderSection


/*
 swipeable={false}
     draggable={false}
     showDots={false}
     arrows={false}
     autoPlaySpeed={3000}
     ssr={true} 
     infinite={true}
     partialVisbile={false}
     keyBoardControl={true}
     customTransition="all .5"
     transitionDuration={500}
     slidesToSlide={1}
*/