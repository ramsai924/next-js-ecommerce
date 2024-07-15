import React from 'react'
import { Button } from '../ui/button'
import FavouriteProduct from './FavouriteProduct'

function FavoriteList() {
  return (
    <div className={`flex flex-col gap-4`}>
        <div className='flex flex-col gap-3 my-3'>
            {
                new Array(5).fill('').map((_:any, i: number) => <FavouriteProduct key={i} index={i} />)
            }
        </div>
    </div>
  )
}

export default FavoriteList