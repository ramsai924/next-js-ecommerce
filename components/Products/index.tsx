import React from 'react'
import ProductCard from './ProductCard'

function Products({ showHeader }: any) {
  return (
    <div className='flex flex-col gap-5'>
        {
          showHeader && (
            <div className='flex justify-between'>
                <p className='text-14 md:text-xl font-semibold'>Exclusive Offers</p>
                <p className='text-14 font-semibold'>See All</p>
            </div>
          )
        }
        <div className='grid grid-cols-products-grid gap-4'>
            {
                new Array(15).fill('').map((_: any, i: number) => <ProductCard key={i} index={i} />)
            }
        </div>
    </div>
  )
}

export default Products