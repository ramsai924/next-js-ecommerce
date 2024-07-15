import FavoriteList from '@/components/FavouriteList'
import React from 'react'

function orders() {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-6 w-[100%] md:w-[80%] mx-auto'>
        <div>
            <p className='font-Robot text-xl font-bold'>Orders</p>
        </div>
        <hr />
        <div className=''>
            <FavoriteList />
        </div>
    </div>
  )
}

export default orders