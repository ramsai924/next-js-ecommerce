'use client'
import { getUserCart } from '@/actions/cart';
import userCartStore from '@/lib/store/cart';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

function CartItem({ userCart }: any) {
  const cartState = userCartStore((state: any) => state)
  const { cart, addToCart, isCartLoading } = cartState;

  // const getUserCartDetails = async () => {
  //   try {
  //       const response = await getUserCart()
  //       if(response.length > 0){
  //           const userCart = response[0]
  //           const userCartProducts = userCart.products.map((product: any) => ({
  //               productId: product.productId,
  //               quantity: product.quantity
  //           }))
  //           addToCart(userCartProducts)
  //       }
  //   } catch (error) {
        
  //   }
  // }

  useEffect(() => {
     if(userCart && userCart.length > 0){
          const userCartData = userCart[0]
          const userCartProducts = userCartData.products.map((product: any) => ({
              productId: product.productId,
              quantity: product.quantity,
              details: product.details
          }))
          isCartLoading(false)
          addToCart(userCartProducts)
        }
  }, [userCart])

  return null
}

export default CartItem