"use client"


import React from 'react'
import {TbTriangleInverted} from 'react-icons/tb'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BikeSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

return (
<div id='provider'>

<div className="body sm:px-4 py-12 lg:py-24 ">

<div className='w-full xl:w-6/12'>
 <h3 className='circularSubText'>With AdaptivePower Technology, this bike thinks 
 for itself. Encounter any resistance on the road, and the Cowboy instantly adapts to what's around you. 
 Gain extra power when you need it most and you'll feel nothing but a smooth path ahead.
</h3>   
<p className='pt-4 xl:pt-6 flex gap-3 items-center text-[#9a9a9a] font-[500] font-sand text-[18px] lg:text-[20px]'><TbTriangleInverted className='w-5 h-5'/>  Explore the element</p>
</div>

<div className='web-bike grid grid-cols-3  py-12 lg:py-28 gap-6'>

<div  data-aos="fade-up" data-aos-duration="800" data-aos-offset="200" data-aos-easing="ease-in" className='relative h-[100%] w-[100%] '>
<video className='object-cover h-[100%] rounded-md w-[100%]' paused controls={false} autoPlay loop muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-incline-particles.h264.mp4?v=88766315024405491641689164883' type='video/mp4'/>    
</video> 
<div className="videoText  ">
<h2 className='font-sand  text-[36px] text-white font-[500] '><sup className='text-[24px] pr-3 font-[400]'>1</sup>Incline</h2>
</div>
</div>

<div  data-aos="fade-up" data-aos-duration="800" data-aos-offset="350" data-aos-easing="ease-in" className='relative  h-[100%] w-[100%] '>
<video className='object-cover h-[100%] rounded-md w-[100%]' controls={false} autoPlay loop  muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-wind-particles.h264.mp4?v=25061490472899347231689164936' type='video/mp4'/>    
</video>   
<div className="videoText ">
<h2 className='font-sand text-[36px] text-white font-[500]'><sup className='text-[24px] pr-3 font-[400]'>2</sup>Headwind</h2>
</div>
</div>

<div  data-aos="fade-up" data-aos-duration="800" data-aos-offset="450" data-aos-easing="ease-in" className='relative h-[100%] w-[100%] '>
 <video className='object-cover h-[100%] rounded-md w-[100%]' controls={false} autoPlay loop muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-gravity-particles.h264.mp4?v=167734971585025895201689164852' type='video/mp4'/>    
</video>   
<div className="videoText ">
<h2 className='font-sand text-[36px] text-white font-[500]'><sup className='text-[24px] pr-3 font-[400]'>3</sup>Gravity</h2>
</div>
</div>

</div>

<div className='mobile-bike'>
<Carousel
  swipeable={true}
  draggable={true}
  arrows={false}
  showDots={false}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  className=' grid grid-cols-3 py-12 lg:py-28 gap-6'

>
<div className='relative h-[100%] w-[100%] '>
<video className='object-cover h-[100%] rounded-md w-[100%]' paused controls={false} autoPlay loop muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-incline-particles.h264.mp4?v=88766315024405491641689164883' type='video/mp4'/>    
</video> 
<div className="videoText  ">
<h2 className='font-sand  text-[36px] text-white font-[500] '><sup className='text-[24px] pr-3 font-[400]'>1</sup>Incline</h2>
</div>
</div>

<div className='relative  h-[100%] w-[100%] '>
<video className='object-cover h-[100%] rounded-md w-[100%]' controls={false} autoPlay loop  muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-wind-particles.h264.mp4?v=25061490472899347231689164936' type='video/mp4'/>    
</video>   
<div className="videoText ">
<h2 className='font-sand text-[36px] text-white font-[500]'><sup className='text-[24px] pr-3 font-[400]'>2</sup>Headwind</h2>
</div>
</div>

<div className='relative h-[100%] w-[100%] '>
 <video className='object-cover h-[100%] rounded-md w-[100%]' controls={false} autoPlay loop muted disablePictureInPicture>
<source src='https://cowboy.com/cdn/shop/t/27/assets/adaptive-power-gravity-particles.h264.mp4?v=167734971585025895201689164852' type='video/mp4'/>    
</video>   
<div className="videoText ">
<h2 className='font-sand text-[36px] text-white font-[500]'><sup className='text-[24px] pr-3 font-[400]'>3</sup>Gravity</h2>
</div>
</div>
</Carousel>;

</div>


<hr className='h-[1px] bg-[#9a9a9a] opacity-60' />

</div>        
</div>
  )
}

export default BikeSection