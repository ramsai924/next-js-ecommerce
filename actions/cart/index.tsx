"use server"

import { addToCart, getCart } from "@/services/cart"
import { revalidateTag } from "next/cache"

export const creaUserCart = async (cartItems: any) => {
    try {
        const userCart = {
            userId: '669ea5863e3d56b806d3a421',
            products: cartItems.map((cart: any) => ({
                productId: cart.productId,
                quantity: cart.quantity
            }))
        }
        const response = await addToCart(userCart)
        revalidateTag('get-user-cart')
    } catch (error) {
        throw error
    }
}

export const getUserCart = async () => {
    try {
        const userId = '669ea5863e3d56b806d3a421'
        const response = await getCart(userId)
        return response
    } catch (error) {
        throw error
    }
}