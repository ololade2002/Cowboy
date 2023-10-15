import React from 'react'


const HeroPage = () => {
  return (
    <section id='intro' className=''>
   
    <aside className='media '>
     <div className="render ">
     <video autoPlay muted loop playsInline  disablePictureInPicture  controls={false}  className='object-cover absolute top-0 z-0 h-[100vh] w-[100%] sm:w-[80%]'>
    <source className='' src="https://cowboy.com/cdn/shop/t/27/assets/connect--hero.webm?v=135320951610200723611689697287" type="video/webm"/>    
    </video>
     </div>
    </aside>
     
   <div className="connectText z-20">
   <h1 className='font-mont font-[500] text-[22px] pb-3 sm:pb-0 sm:-mb-1 text-[#1d1d1d]'>Cowboy Connect</h1>
    <p className='main-text text-[40px] sm:text-[55px] font-[500] lg:text-[95px] text-[#000] font-rale'>Unlock your ride</p>
   </div>  
   </section>
  )
}

export default HeroPage

