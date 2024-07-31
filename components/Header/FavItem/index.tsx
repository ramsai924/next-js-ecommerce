'use client'
import { getUserFavList } from '@/actions/favourite';
import useFavouriteStore from '@/lib/store/favourite';
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

function FavItem() {
  const favoriteState = useFavouriteStore((state: any) => state)
  const { favourite, setFavourite } = favoriteState;

  const getUserFavDetails = async () => {
    try {
        const response = await getUserFavList()
        if(response.length > 0){
            const userFav = response[0]
            const userFavProducts = userFav.products
            setFavourite(userFavProducts)
        }
    } catch (error) {
        
    }
  }

    useEffect(() => {
        getUserFavDetails()
    }, [])

  return (
    <Link className='flex flex-col items-center text-sm font-semibold' href={'/favourite'}>
        <Heart absoluteStrokeWidth/>
        Favourite
    </Link>
  )
}

export default FavItem