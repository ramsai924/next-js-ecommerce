import React from 'react'
import Product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import clsx from "clsx"

const colors = [
    'bg-em-light-green-100',
    'bg-em-light-red-100',
    'bg-em-light-blue-100',
    'bg-em-light-violet-100',
    'bg-em-light-blue-100'
]
function Category() {
    let colorbg = colors[Math.floor(Math.random() * colors.length)]
  return (
        <div
            className={clsx("cursor-pointer flex flex-col items-center p-4 gap-4 rounded-2xl shadow-product-shadow", colorbg)}
        >
        <div>
            <Image src={Product} alt="test" />
        </div>
        <div>
            Fresh Fruits & Vegitables
        </div>
    </div>
  )
}

export default Category