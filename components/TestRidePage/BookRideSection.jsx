
import React from 'react'
import { testRideData } from '../../utils/utilsData'

const BookRideSection = () => {
  return (
    <section id='preview'>
    <div className='body pt-12 xl:pt-24'>

    <div className='w-full xl:w-6/12 flex flex-col gap-4'>
    <h3 className='connectSubText'>
        Try one of our bikes to discover how it fits your style and the way you
        like to ride. A test rider will come to you to show you the new way of
        cycling in and around the city.</h3>
    <button className='bg-[#1d1d1d] text-white f-btn font-sand font-[400] text-[18px] rounded-full px-6 py-3'>Book a free test ride</button>    
    </div>

    <div className='py-12 xl:py-24'>
    <main className='grid grid-cols-1 lg:grid-cols-3  gap-6'>
    {testRideData.map((ride) => (
      <div className="ride-preview  bg-[#efede9]  py-10 " key={ride.id}>
       <article className='px-6'>
       <h1 className='text-[#1d1d1d] text-[25px] font-sand font-[500]'>{ride.id} {ride.title}</h1> 
       <p className='text-[18px] font-sand font-[500] text-[#00000080]'>{ride.subText}</p>
       </article>
       <hr className='my-9 bg-[#d7d3d3] h-[2px]' />
       <ul className=' list-inside list-disc px-6 font-[500] text-[17px] text-[#000] font-sand'>
        <li>{ride.text1}</li>
        <li>{ride.text2}</li>
        <li>{ride.text3}</li>
       </ul>
      </div>
    ))}
    </main>
    </div>

    </div>     
    </section>
  )
}

export default BookRideSection