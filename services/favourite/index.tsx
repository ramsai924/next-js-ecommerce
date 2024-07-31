"use server"

import ApiServiceMethods from "@/lib/environment"
const api = new ApiServiceMethods()

export const addFavList = async (favList: any) => {
    try {
        const response = await api.POST(`http://localhost:3000/api/favourite`, favList, '')
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}

export const getFavList = async (userId: any) => {
    try {
        // Generate a unique timestamp
        const response = await api.GET(`http://localhost:3000/api/favourite/${userId}`, '', {}, { next : { tags: ['get-fav-products'] }})
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}