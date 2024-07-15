import React from 'react'
import Product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import Link from 'next/link'
import AddToCart from '@/components/AddToCart'
import AddToFavourite from '@/components/AddToFavourite'

function ProductCard({ index }: any) {
  return (
    <Link href={`/product/${index}`}>
        <div className='relative p-4 flex flex-col gap-2 shadow-product-shadow rounded cursor-pointer'>
            <div className='absolute top-[16px] left-[16px]'>
            <AddToFavourite />
        </div>
            <div className='self-center'>
                <Image src={Product} alt="product name" width={200} height={200}  />
            </div>
            <div className='flex flex-col gap-1 self-center items-center'>
                <p className='font-bold'>Banana</p>
                <p className='text-sm'>7Pcs Prices</p>
            </div>
            <div className='flex justify-between items-center mt-2 md:mt-4 h-[30px]'>
                <p className='font-semibold'>40$</p>
                <AddToCart />
            </div>
        </div>
    </Link>
  )
}

export default ProductCard