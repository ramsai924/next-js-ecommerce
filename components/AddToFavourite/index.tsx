'use client'
import { creaUserFav } from '@/actions/favourite'
import useFavouriteStore from '@/lib/store/favourite'
import { Heart } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'

function AddToFavourite({ product }: any) {
  console.log('product', product)
  const [isFav, setIsFav] = useState<boolean>(false)
  const userFavouriteStore = useFavouriteStore((state: any) => state)
  const { favourite, setFavourite } = userFavouriteStore

  if(!product){
    return null;
  }
  const isFavProduct = useMemo(() => {
    if(product){
      return favourite.some((favProd: any) => favProd.productId === product._id)
    }else{
      return false
    }
  }, [favourite]);
  
  const handleFavourite = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if(isFavProduct){
      const filterdFavList = favourite.filter((favProd: any) => favProd.productId !== product._id)
      setFavourite(filterdFavList)
      creaUserFav(filterdFavList)
    }else{
      const newFavProduct = {
        productId: product._id,
        details: product
      }
      const newFavList = [...favourite, newFavProduct]
      setFavourite(newFavList)
      creaUserFav(newFavList)
    }
  }

  useEffect(() => {
    setIsFav(isFavProduct)
  }, [isFavProduct])

  return (
    <div>
        {
          isFav ? <Heart onClick={handleFavourite} fill='red' strokeWidth={0} /> : <Heart onClick={handleFavourite} absoluteStrokeWidth />
        }
    </div>
  )
}

export default AddToFavourite