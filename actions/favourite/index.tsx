"use server"

import { addToCart, getCart } from "@/services/cart"
import { addFavList, getFavList } from "@/services/favourite"
import { revalidateTag } from "next/cache"

export const creaUserFav = async (favItems: any) => {
    try {
        const userFavList = {
            userId: '669ea5863e3d56b806d3a421',
            products: favItems.map((favItem: any) => ({
                productId: favItem.productId
            }))
        }
        const response = await addFavList(userFavList)
        revalidateTag('get-fav-products')
    } catch (error) {
        throw error
    }
}

export const getUserFavList = async () => {
    try {
        const userId = '669ea5863e3d56b806d3a421'
        const response = await getFavList(userId)
        return response
    } catch (error) {
        throw error
    }
}