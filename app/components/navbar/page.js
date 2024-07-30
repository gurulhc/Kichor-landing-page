'use client'
import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Logo from '@/public/assets/logo-1.png'
import Link from 'next/link';



const Header = () => {
  


  const [sideNav, setSideNav] = useState(false);
  return (
    <div className='w-[85%] mx-auto flex items-center justify-between py-4' >
      <div >
        <Link href='/' ><Image src={Logo} width={150} height={50} alt='Company logo' className='w-[150px] z-50'/></Link>
        
      </div>
      <div className='lg:flex items-center hidden gap-10 '>
        <button className='flex items-center gap-2 py-3 px-6 rounded-[8px]' ><Link href="/">Get Started</Link></button>
      </div>
      <div className='text-white cursor-pointer bg-[#25262b] p-3 relative rounded-[8px] lg:hidden z-[999]' onClick={() => setSideNav(!sideNav)}>
      <MdOutlineMenu size={30} />
      </div>
      <div className={sideNav 
        ? 'fixed left-0 top-[100px] py-4 px-6 bg-[#fff] z-[999] pb-10  duration-200 w-[300px]'  
        : 'fixed top-[-100%] bg-[#fff]  duration-200 z-[999] w-[300px]'}>
        <div className='flex-col items-center gap-10 w-[150px]'>
          <button className='flex items-center mt-10 gap-2 py-3 px-6 rounded-[8px]' ><Link href="/">Get Started</Link></button>
        </div>
        <IoClose className='absolute top-[10%] left-[250px] cursor-pointer' onClick={() => setSideNav(false)}/>
      </div>
    </div>
  )
}

export default Header