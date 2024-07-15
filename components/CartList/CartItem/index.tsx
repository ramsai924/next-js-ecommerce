import React from 'react'
import product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart'
import { Heart, X } from 'lucide-react';
import AddToFavourite from '@/components/AddToFavourite';

function CartItem() {
  return (
    <div className='relative flex items-center w-[100%] border border-gray-50-1 rounded shadow-product-shadow px-4 py-2'>
        <div className='absolute top-[16px] left-[16px]'>
            <AddToFavourite />
        </div>
       <div className='flex items-center'>
            <div>
                <Image src={product} alt="image" className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain'/>
            </div>
            <div className='flex flex-col justify-between gap-8'>
                <div>
                    <p>Bell Pepper Red</p>
                    <p>1kg, Piece</p>
                </div>
                <div className='h-[30px]'>
                    <AddToCart />
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col justify-between items-end gap-16 px-3'>
            <div className='cursor-pointer'>
                <X />
            </div>
            <div>
                <p>40$</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem