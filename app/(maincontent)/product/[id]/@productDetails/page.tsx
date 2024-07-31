import Image from 'next/image'
import React from 'react'
import Product from '@/public/assets/geroceries.png'
import AddToCart from '@/components/AddToCart'
import AddToFavourite from '@/components/AddToFavourite'

function ProductDetails({ params }: any) {
  return (
    <div className='relative flex flex-col gap-4 py-4'>
        <div className='absolute top-[32px] left-[24px]'>
            <AddToFavourite product={null} />
        </div>
        <div className='max-w-[400px] max-h-[400px] border border-gray-1 py-4 rounded'>
            <Image priority className='object-contain' src={Product} alt={`product-${params.id}`} />
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-4xl font-bold'>Banane</p>
            <p className='text-md'>7pcs Banana is superb</p>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-xl font-semibold'>40$</p>
            <div className='h-[30px]'>
                <AddToCart product={null}/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails