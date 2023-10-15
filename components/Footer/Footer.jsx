
import Image from 'next/image'
import React from 'react'
import logo from '@/public/cowboy-logo.png'
import { BsFacebook, BsInstagram, BsPinterest, BsStarFill, BsStarHalf, BsTwitter, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className='bg-[#1d1d1d] '>
    <main className="body pt-12 pb-4 flex flex-col ">

    <div>
    <ul className='grid gap-y-6 grid-cols-2 xl:grid-cols-6'>

    <li>
     <h3 className='footerMainText'>Explore</h3>  
     <div className='footerSubText'>
     <Link href='/e-bike/classic'>Classic</Link>
     <Link href='/e-bike/cruiser'>Cruiser</Link>
     <Link href='/e-bike/cruiser-st'>Cruiser ST</Link>
     <Link href='/connect'>Connect</Link>
     <Link href='/adaptive-power'>Circular</Link>
     <Link href='/accessories'>Accessories</Link>
     </div>
    </li>

    <li>
     <h3 className='footerMainText'>Services</h3> 
     <div className="footerSubText">
     <p>Cowboy Care</p>
     <p>Theft Insurance</p>
     <p>Payment methods</p>
     <Link href='/leasing'>Leasing</Link>
     <p>Warranty</p>
     <p>Business</p>
     </div>
    </li>

    <li>
     <h3 className='footerMainText'>About Us</h3> 
     <div className="footerSubText">
     <p>Reviews</p>
     <p>Press</p>
     <p>Blog</p>
     <p>Stores</p>
     <p>Careers</p>
     <p>Affiliate Program</p>
     </div>
    </li>

    <li>
     <h3 className='footerMainText'>Help</h3>  
     <div className="footerSubText">
     <p>Contact</p>
     <p>Support</p>
     <p>Delivery</p>
     <p>Returns</p>
     </div>
    </li>  

    <li className='col-span-2 row-span-2 '>
     <h3 className="footerMainText">Stay in the loop</h3>
    <div className="footerSubText">
    <input type="text" className='bg-transparent border-b w-full text-white py-2 px-0 active:border-0 placeholder:text-white ' placeholder='Enter your email' />
    </div>
    <div className='pt-3'>
    <p className='text-[15px]  font-sand text-[#999999]'>By signing up, I agree with the <span className='underline'>data protection policy</span> of Cowboy</p>
  
    </div>
   
    </li>

    </ul>  
    </div>

    <Link href='/' className='py-12'>
    <Image className='w-[16rem] invert' src={logo} alt='logo'/>  
    </Link>

    <hr className='mb-6' />

    <div>
    <ul className='flex  flex-col-reverse md:flex-row justify-center items-center md:justify-between'>
    <li className='flex gap-4 text-white opacity-70 font-sand text-[14px]'>
     <p>Terms of use</p>
     <p>Privacy policy</p>
     <p>&copy; 2023 Cowboy</p>
    </li>

    <li className='flex gap-2 items-center text-white font-sand '>
    <div className='flex gap-1 '>
    <BsStarFill className='h-4 w-4'/>  
    <BsStarFill className='h-4 w-4'/>  
    <BsStarFill className='h-4 w-4'/>  
    <BsStarFill className='h-4 w-4'/>  
    <BsStarHalf className='h-4 w-4'/>
    </div>
    <p className='text-[16px] underline'>Based on 5478 reviews</p>

    </li>
    </ul>
    </div>  

    </main>
  </footer>
  )
}

export default Footer