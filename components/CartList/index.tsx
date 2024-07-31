import React from 'react'
import CartItem from './CartItem'
import { Button } from '../ui/button'

function CarList({ products }: any) {
    console.log('products', products)
    if(!products || products?.length === 0){
        return null
    }
  return (
    <div className={`flex flex-col gap-4`}>
        <div className='flex flex-col gap-3 my-3'>
            {
                products.map((product:any, i: number) => <CartItem product={product} key={i} />)
            }
        </div>
        <hr />
        <div className='flex flex-1 justify-end'>
            <p className='text-xl font-bold'>Total : <span className='font-semibold'>400$</span></p>
        </div>
        <div className='flex-1'>
            <Button className='w-[100%] p-6 bg-em-light-green font-bold leading-3 text-lg hover:bg-emerald-700'>Check out</Button>
        </div>
    </div>
  )
}

export default CarList