
import React from 'react'

const ConnectSection = () => {
  return (
    <section>
    <div className="body py-10 xl:py-20 ">

    <div className="w-full xl:w-6/12">
    <h3 className='connectSubText'>
        The defining features of a Cowboy deserve a closer look, 
        and the ride feeling is unlike anything you've ever tried.
         Get ready to experience it yourself.</h3>    
    </div>  

    <main className='flex flex-col xl:flex-row gap-6 py-12 xl:py-24 '>
    <div className='w-full xl:w-8/12 '>
    <div className='media-wrapper  '>
    <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='h-[100vh] w-[100%] object-cover'>
    <source src="https://cowboy.com/cdn/shop/t/28/assets/cowboy-4-st--app-3.webm?v=163536191504769648511689509538" type="video/mp4"/>    
    </video> 
    </div>
     </div>

     <div className='w-full xl:w-4/12'>
     <div className=' '>
    <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='object-cover h-[60vh]'>
    <source src="https://cowboy.com/cdn/shop/t/28/assets/cowboy-4-st--assistance.webm?v=100982784447075940551689509566" type="video/mp4"/>    
    </video> 
    </div>   
    </div>   
    </main>

    <div className='w-full xl:w-6/12 flex flex-col gap-4'>
    <h3 className='connectSubText'>
    Don't miss out on trying the Cowboy experience, and soon enough it'll be yours.
    </h3>
    <button className='bg-[#1d1d1d] text-white f-btn font-sand font-[400] text-[18px] rounded-full px-6 py-3 mt-3'>Book a free test ride</button>    
    </div>

    
    </div>    
    </section>
  )
}

export default ConnectSection