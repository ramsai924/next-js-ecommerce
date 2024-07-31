import React from 'react'
import Product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import Link from 'next/link'
import AddToCart from '@/components/AddToCart'
import AddToFavourite from '@/components/AddToFavourite'

function ProductCard({ index, product }: any) {
  return (
    <Link href={`/product/${product._id}`} key={product._id}>
        <div className='relative p-4 flex flex-col gap-2 shadow-product-shadow rounded cursor-pointer'>
            <div className='absolute top-[16px] left-[16px]'>
            <AddToFavourite product={product} />
        </div>
            <div className='self-center w-[200] h-[200]'>
                <Image src={product.imageSrc} alt="product name" className='w-[200] h-[200]' width={200} height={200}  />
            </div>
            <div className='flex flex-col gap-1 self-center items-center'>
                <p className='font-bold'>{product.name}</p>
                <p className='text-sm'>{product.description}</p>
            </div>
            <div className='flex justify-between items-center mt-2 md:mt-4 h-[30px]'>
                <p className='font-semibold'>{product.price}$</p>
                <AddToCart product={product} />
            </div>
        </div>
    </Link>
  )
}

export default ProductCard