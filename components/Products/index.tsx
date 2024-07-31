import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

function Products({ showHeader, products = [], category, navigationId = '' }: any) {
  console.log('category', category)
  return (
    <div className='flex flex-col gap-5' key={navigationId}>
        {
          showHeader && (
            <div className='flex justify-between'>
                <p className='text-14 md:text-xl font-semibold'>{category.category}</p>
                <Link href={`/explore/${category._id}`} className='text-14 font-semibold'>See All</Link>
            </div>
          )
        }
        <div className='grid grid-cols-products-grid gap-4'>
            {
              products.map((product: any, i: number) => <ProductCard key={i} index={i} product={product} />)
            }
        </div>
    </div>
  )
}

export default Products