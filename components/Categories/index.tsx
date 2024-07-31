import React from 'react'
import Category from './category'

function CategoryList({ categories }: any) {
  return (
    <div className='grid grid-cols-products-grid gap-3.5 py-10'>
        {
            categories.map((category: any, i: number) => <Category key={i} category={category}/>)
        }
    </div>
  )
}

export default CategoryList