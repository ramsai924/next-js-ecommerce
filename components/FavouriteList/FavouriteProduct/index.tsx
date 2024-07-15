import Image from 'next/image'
import React from 'react'
import product from '@/public/assets/geroceries.png'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

function FavouriteProduct({ index }: any) {
  return (
    <Link href={`/product/${index}`}>
    <div className='flex items-center w-[100%] border border-gray-50-1 rounded shadow-product-shadow px-4 py-2'>
        <div className='flex items-center'>
                <div>
                    <Image src={product} alt="image" className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain'/>
                </div>
                <div className='flex flex-col justify-between gap-8'>
                    <div>
                        <p>Bell Pepper Red</p>
                        <p>1kg, Piece</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex justify-end items-center gap-8 px-3'>
                <div>
                    <p>40$</p>
                </div>
                <div>
                    <ChevronRight />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default FavouriteProduct