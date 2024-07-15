import CarList from '@/components/CartList'
import FavoriteList from '@/components/FavouriteList'
import React from 'react'

function Cart() {
  return (
    <div className='w-[100%] md:w-[80%] lg:w-[50%] mx-auto p-3 md:p6'>
      <div className='flex justify-center font-Robot p-6'>
            <p className='text-xl font-bold text-center'>Favorite</p>
        </div>
        <hr />
        <FavoriteList />
    </div>
  )
}

export default Cart