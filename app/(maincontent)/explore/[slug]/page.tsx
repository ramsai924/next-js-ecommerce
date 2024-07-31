import React from 'react'
import { ChevronRight } from 'lucide-react';
import Products from '@/components/Products';
import { getCategoryProductsList } from '@/actions/category';
import { notFound } from 'next/navigation';

async function exploreProducts({ params }: any) {
    const response = await getCategoryProductsList(params.slug);

    if(!response || response?.length ===0){
        notFound()
    }

    const categoryDetails = response[0]
    const breadCrums =  ['Category', categoryDetails.category]
  return (
    <div className='flex flex-col gap-4 w-[100%] md:w-[80%] mx-auto'>
        <div className='py-1 md:py-3 flex gap-2'>
            {
               breadCrums.map((type: any, i: number) => (
                    <div className='flex items-center' key={i}>
                        {i> 0 && i<breadCrums.length && <ChevronRight />}
                        <p className='font-Robot text-xl font-bold'>{type}</p>
                    </div>
                ))
            }
        </div>
        <hr />
        <div>
            <Products showHeader={false} products={categoryDetails.products} />
        </div>
    </div>
  )
}

export default exploreProducts