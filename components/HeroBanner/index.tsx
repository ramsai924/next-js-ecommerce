import Image from 'next/image'
import React from 'react'
import geroceries from '@/public/assets/geroceries.png';

function HeroBanner() {
  return (
    <div className='p-10 border border-gray border-1 bg-custom-em-gradient'>
        <div className='flex-col-reverse lg:flex-row flex justify-center items-center gap-20'>
            <div className='flex flex-col gap-5'>
                <p className='sm:text-6xl  text-xl font-extrabold font-Robot text-white'>Online Groceries Shopping</p>
                <p className='text-xl font-semibold text-white'>Get upto 40% off</p>
            </div>
            <div>
                <Image className='object-contain w-[100%] h-[250px]' src={geroceries} alt='banner' />
            </div>
        </div>
    </div>
  )
}

export default HeroBanner