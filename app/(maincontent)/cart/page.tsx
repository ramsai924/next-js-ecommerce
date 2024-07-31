import { getUserCart } from '@/actions/cart'
import CarList from '@/components/CartList'
import React from 'react'

async function Cart() {
 const response = await getUserCart();
  const userCart = response && response.length > 0 ? response[0] : null;
  
  // Check if userCart is valid and extract products
  const userCartProducts = userCart && userCart.products ? 
    userCart.products.map((product: any) => ({ ...product.details })) : []

  return (
    <div className='w-[100%] md:w-[80%] lg:w-[50%] mx-auto p-3 md:p6'>
      <div className='flex justify-center font-Robot p-6'>
            <p className='text-xl font-bold text-center'>Cart</p>
        </div>
        <hr />
        {
          userCart && userCart.products.length > 0 && (
            <CarList products={userCartProducts} />
          )
        }
    </div>
  )
}

export default Cart

