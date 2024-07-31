"use server"
import { getCategories, getCategoryProducts } from "@/services/category"


export const getCategoryList = async () => {
    try {
        const response = await getCategories()
        return response;
    } catch (error) {
        throw error
    }
}

export const getCategoryProductsList = async (categoryId: string) => {
    try {
        const response = await getCategoryProducts(categoryId)
        return response;
    } catch (error) {
        throw error
    }
}