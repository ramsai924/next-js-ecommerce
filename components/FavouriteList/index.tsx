import React from 'react'
import { Button } from '../ui/button'
import FavouriteProduct from './FavouriteProduct'

function FavoriteList({ products }: any) {
  return (
    <div className={`flex flex-col gap-4`}>
        <div className='flex flex-col gap-3 my-3'>
            {
              products.map((product:any, i: number) => <FavouriteProduct key={i} index={i} product={product} />)
            }
        </div>
    </div>
  )
}

export default FavoriteList