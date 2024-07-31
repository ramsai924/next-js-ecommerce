import ApiServiceMethods from "@/lib/environment"
const api = new ApiServiceMethods()

export const addToCart = async (cartItem: any) => {
    try {
        const response = await api.POST(`http://localhost:3000/api/cart`, cartItem, '')
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}

export const getCart = async (userId: any) => {
    try {
        const response = await api.GET(`http://localhost:3000/api/cart/${userId}`, '', {}, { next : { tags: ['get-user-cart'] } })
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}