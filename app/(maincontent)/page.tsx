import HeroBanner from '@/components/HeroBanner'
import Products from '@/components/Products'
import React from 'react'

function Home() {
  return (
    <div>
        <HeroBanner />
        <div className='w-[100%] p-4 mx-auto lg:w-[80%] lg:p-0'>
          <Products showHeader />
        </div>
    </div>
  )
}

export default Home