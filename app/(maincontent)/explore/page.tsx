import CategoryList from '@/components/Categories'
import React from 'react'

function Explore() {
  return (
    <div className='w-[100%] flex flex-col gap-4 p-2'>
        <div className='p-6'>
            <p className='text-xl font-bold md:text-3xl font-Robot text-center'>Explore by Category</p>
        </div>
        <div className='w-[100%] md:w-[80%] mx-auto'>
            <hr />
            <CategoryList />
        </div>
    </div>
  )
}

export default Explore