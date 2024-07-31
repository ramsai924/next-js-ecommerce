import React from 'react'
import Product from '@/public/assets/geroceries.png'
import Image from 'next/image'
import clsx from "clsx"
import Link from 'next/link'

const colors = [
    'bg-em-light-green-100',
    'bg-em-light-red-100',
    'bg-em-light-blue-100',
    'bg-em-light-violet-100',
    'bg-em-light-blue-100'
]
function Category({ category }: any) {
    let colorbg = colors[Math.floor(Math.random() * colors.length)]
  return (
        <Link href={`/explore/${category._id}`}>
            <div
            className={clsx("cursor-pointer flex flex-col items-center p-4 gap-4 rounded-2xl shadow-product-shadow", colorbg)}
            key={category._id}
        >
            <div>
                <Image src={category?.imageSrc || Product} alt="test" height={200} width={200} />
            </div>
            <div>
                <p>{category.category}</p>
            </div>
        </div>
        </Link>
  )
}

export default Category