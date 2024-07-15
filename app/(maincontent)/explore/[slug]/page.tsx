import React from 'react'
import { ChevronRight } from 'lucide-react';
import Products from '@/components/Products';

function exploreProducts() {
    const breadCrums =  ['Category', 'Vegitable']
  return (
    <div className='flex flex-col gap-4 w-[100%] md:w-[80%] mx-auto'>
        <div className='py-1 md:py-3 flex gap-2'>
            {
               breadCrums.map((type: any, i: number) => (
                    <div className='flex items-center'>
                        {i> 0 && i<breadCrums.length && <ChevronRight />}
                        <p className='font-Robot text-xl font-bold'>{type}</p>
                    </div>
                ))
            }
        </div>
        <hr />
        <div>
            <Products showHeader={false} />
        </div>
    </div>
  )
}

export default exploreProducts