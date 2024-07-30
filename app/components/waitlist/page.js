'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Amiral from '@/public/assets/amiral.png'
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
    <div className='lg:w-[85%] lg:flex grid items-center lg:justify-between mx-auto gap-10 justify-center pt-[80px] mb-10'>
      <div className='lg:w-[40%] '>
        <h2 className='font-bold text-[#E60A2B] text-[78px]'>
          Kichor App
          <span className='flex text-[#300000] items-center gap-3 mt-[-20px]'>
            is coming 
            <Image src='https://s.w.org/images/core/emoji/15.0.3/svg/1f60b.svg' alt='emoji' width={70} height={70} />
          </span>
        </h2>
        <p>
          Enjoy fast delivery from the best restaurants near you. Order local food, Fresh soup, and Drinks from restaurants near you in Agbor.
        </p>
        <button className='py-3 px-5 mt-10 text-[14px] rounded-full'>
          Join waitlist
        </button>
      </div>
      <div className='lg:w-[45%] overflow-hidden'>
        <div className='w-[1500px] flex items-center justify-center gap-[120px]' style={{ transform: `translate3d(${-index * 34}%, 0, 0)` }}>
        {
          product.map((item, index)=>(
            <>
              <div key={index} className='flex items-center justify-center w-[400px] h-[400px]' >
                <Image src={require('@/public/assets/' + item.food)} alt='emoji' width={250} height={250} className='w-full h-full'/>
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