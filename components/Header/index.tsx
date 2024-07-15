import React from 'react'
import { Input } from "@/components/ui/input"
import { Heart, Search, ShoppingCart, TextSearch } from 'lucide-react'
import Link from 'next/link'
import AvatarComponent from '../Avatar'

function Header() {
  return (
    <div className='p-4 px-8 border border-grey border-solid border-1'>
        <div className='w-[100%] grid grid-cols-1 md:grid-cols-3 justify-center'>
          <div className='hidden md:flex items-center'>
            <Link href={'/'} className='self-center justify-center font-bold'>Logo</Link>
          </div>
          <div className='w-[100%] md:w-[80%] mx-auto flex items-center'> 
            <Input placeholder='Search for product'  />
            <div className='p-3'>
              <Search size={20} />
            </div>
          </div>
          <div className='hidden md:flex items-center justify-end md:gap-6 xl:gap-12'>
            <Link className='flex flex-col items-center text-sm font-semibold' href={'/explore'}>
              <TextSearch absoluteStrokeWidth/>
              Expore
            </Link>
            <Link className='flex flex-col items-center text-sm font-semibold' href={'/cart'}>
              <ShoppingCart absoluteStrokeWidth/>
              Cart
            </Link>
            <Link className='flex flex-col items-center text-sm font-semibold' href={'/favourite'}>
              <Heart absoluteStrokeWidth/>
              Favourite
            </Link>
             <AvatarComponent />
          </div>
        </div>
    </div>
  )
}

export default Header