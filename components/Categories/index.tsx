import React from 'react'
import Category from './category'

function CategoryList() {
  return (
    <div className='grid grid-cols-products-grid gap-4 py-10'>
        {
            new Array(10).fill('').map((_: any, i: number) => <Category />)
        }
    </div>
  )
}

export default CategoryList