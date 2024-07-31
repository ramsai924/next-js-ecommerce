'use client'

import { creaUserCart } from '@/actions/cart'
import userCartStore from '@/lib/store/cart'
import { LoaderCircle, Minus, Plus } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'

function AddToCart({ product }: any) {
  const [added, setAdded] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  const cartState = userCartStore((state: any) => state)
  const { cart, addToCart, isLoading } = cartState;

  const onHandleCart = useCallback(async (type: string) => {
      let cartCopy = [...cart]
      const isInCartIndex = cartCopy.findIndex((userCart: any) => userCart.productId === product._id)
    try {
        if(isInCartIndex > -1){
            const currentCart = cartCopy[isInCartIndex];    
            const newQuantity = type === 'ADD' ? currentCart.quantity + 1 : currentCart.quantity - 1;
            if(newQuantity <= 0){
                cartCopy.splice(isInCartIndex, 1)
            }else{
                cartCopy[isInCartIndex] = { ...currentCart, quantity: newQuantity };
            }
            addToCart(cartCopy)
            await creaUserCart(cartCopy)
        }else{
            let cartItem: any = {
                productId: product._id,
                details: product,
                quantity: 1
            }
            addToCart([...cart, cartItem])
            await creaUserCart([...cart, cartItem])
        }
    } catch (error) {
         if(isInCartIndex > -1){
            const currentCart = cartCopy[isInCartIndex];    
            const newQuantity = currentCart.quantity - 1;
            if(newQuantity <= 0){
                cartCopy.splice(isInCartIndex, 1)
            }else{
                cartCopy[isInCartIndex] = { ...currentCart, quantity: newQuantity };
            }
            addToCart(cartCopy)
        }else{
            addToCart(cartCopy.filter((prod: any) => prod.productId !== product._id))
        }
    }
  }, [cart])

  useEffect(() => {
    if(product){
        const isInCart = cart.find((userCart: any) => userCart.productId === product._id)
        if(isInCart && isInCart.quantity >=1){
            setAdded(true)
            setQuantity(isInCart.quantity)
        }else{
            setAdded(false)
            setQuantity(0)
        }
    }
  }, [cart, product])

  if(product === undefined){
    return null
  }

  return (
    <div className='flex items-center'>
        {
            isLoading ? (
                <div className='animate-loader-circle'>
                    <LoaderCircle color='#53b175' size={20} />
                </div>
            ): (
                <>
                    {
                        added && (
                            <>
                                <div className='p-2 rounded-xl bg-em-light-green text-white' onClick={(e: any) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    onHandleCart('DELETE')
                                }}>
                                    <Minus  size={18} absoluteStrokeWidth/>
                                </div>
                                <div className='p-2 '>
                                    <p>{quantity}</p>
                                </div>
                            </>
                        )
                    }
                    <div className='p-2 rounded-xl bg-em-light-green text-white' onClick={(e: any) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onHandleCart('ADD')
                    }}>
                        <Plus size={18} absoluteStrokeWidth/>
                    </div>
                </>
            )
        }
        
    </div>
  )
}

export default AddToCart