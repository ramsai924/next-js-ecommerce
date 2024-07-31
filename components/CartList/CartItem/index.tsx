import React from 'react'
import product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart'
import { Heart, X } from 'lucide-react';
import AddToFavourite from '@/components/AddToFavourite';

function CartItem({ product }: any) {
  return (
    <div className='relative flex items-center w-[100%] border border-gray-50-1 rounded shadow-product-shadow px-4 py-2' key={product._id}>
        <div className='absolute top-[16px] left-[16px]'>
            <AddToFavourite />
        </div>
       <div className='flex items-center'>
            <div>
                <Image src={product.imageSrc} alt="image"  width={150} height={150} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain'/>
            </div>
            <div className='flex flex-col justify-between gap-8'>
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                </div>
                <div className='h-[30px]'>
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col justify-between items-end gap-16 px-3'>
            <div className='cursor-pointer'>
                <X />
            </div>
            <div>
                <p>{product.price}$</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem