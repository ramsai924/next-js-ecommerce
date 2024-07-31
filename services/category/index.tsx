import ApiServiceMethods from "@/lib/environment"
const api = new ApiServiceMethods()

export const getCategories = async () => {
    try {
        const response = await api.GET(`http://localhost:3000/api/categories`, '')
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}

export const getCategoryProducts= async (categoryId: string) => {
    try {
        const response = await api.GET(`http://localhost:3000/api/categories/${categoryId}`, '', {}, { next : { tags: ['get-category-all-products'] }})
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}