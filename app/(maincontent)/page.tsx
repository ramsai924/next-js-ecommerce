import { getProductsWithCategory } from '@/actions/products'
import HeroBanner from '@/components/HeroBanner'
import Products from '@/components/Products'
import React from 'react'

async function Home() {
  const categoryProducts: any = await getProductsWithCategory();
  return (
    <div className='flex flex-col gap-8'>
        <HeroBanner />
        <div className='flex flex-col gap-8 w-[100%] p-4 mx-auto lg:w-[80%] lg:p-0'>
          {
            categoryProducts?.length > 0 && categoryProducts.map((category: any, i: number) => {
              if(category.products.length > 0){
                return <Products showHeader products={category.products} category={category} key={category?._id || '' + i}/>
              }else{
                return <></>
              }
            })
          }
        </div>
    </div>
  )
}

export default Home