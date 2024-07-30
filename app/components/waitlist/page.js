'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Product from './product'


const delay = 2500;

const WaitList = () => {
  const product = Product

  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null);
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === product.length -1 ? 0 : prevIndex + 1 
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='w-[85%] lg:flex grid items-center lg:justify-between mx-auto gap-10 justify-center  py-10'>
      <div className='lg:w-[40%] '>
        <h2 className='font-bold text-[#E60A2B] md:text-[78px] text-[46px]'>
          Kichor App
          <span className='flex text-[#300000] items-center gap-3 md:mt-[-20px]'>
            is coming 
            <Image src='https://s.w.org/images/core/emoji/15.0.3/svg/1f60b.svg' alt='emoji' width={50} height={50} />
          </span>
        </h2>
        <p>
          Enjoy fast delivery from the best restaurants near you. Order local food, Fresh soup, and Drinks from restaurants near you in Agbor.
        </p>
        <button className='py-3 px-5 mt-10 text-[14px] rounded-full'>
          Join waitlist
        </button>
      </div>
      <div className='lg:w-[45%]   overflow-hidden'>
        <div className='w-[1500px] flex items-center justify-center md:gap-[140px] gap-[30px]' style={{ transform: `translate3d(${-index * 34}%, 0, 0)` }}>
        {
          product.map((item, index)=>(
            <>
              <div key={index} className='flex items-center justify-center  w-full h-[450px] ' >
                <Image src={require('@/public/assets/' + item.food)} alt='emoji' width={350} height={350} className='ml-[-30%] md:ml-0  w-[65%]  md:w-[100%] md:h-[80%] lg:h-[90%]'/>
              </div>
            </>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default WaitList