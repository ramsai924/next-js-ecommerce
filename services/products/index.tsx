import ApiServiceMethods from "@/lib/environment";

const api = new ApiServiceMethods()

export const getProductsList = async () => {
     try {
        const response = await api.GET(`http://localhost:3000/api/products?type=all`, '', {}, { next : { tags: ['get-all-products'] }})
        if(response.data && response.data.length){
            return response.data
        }
    } catch (error: any) {
        throw error
    }
}

export const createAProduct = async (productInfo: any) => {
     try {
        const response = await api.POST(`http://localhost:3000/api/products`,productInfo, '')
        return response
    } catch (error: any) {
        throw error
    }
}