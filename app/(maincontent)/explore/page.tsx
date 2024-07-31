import { getCategoryList } from '@/actions/category'
import CategoryList from '@/components/Categories'
import React from 'react'

async function Explore() {
  const categoryList = await getCategoryList()

  return (
    <div className='w-[100%] flex flex-col gap-4 p-2'>
        <div className='p-6'>
            <p className='text-xl font-bold md:text-3xl font-Robot text-center'>Explore by Category</p>
        </div>
        <div className='w-[100%] md:w-[80%] mx-auto'>
            <hr />
            <CategoryList categories={categoryList} />
        </div>
    </div>
  )
}

export default Explore