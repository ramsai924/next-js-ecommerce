    "use server"

    import { createAProduct, getProductsList } from "@/services/products"
    import { ObjectId } from "mongodb"
    import { revalidateTag } from "next/cache"
    import { redirect } from "next/navigation"

    export const productCreate = async (state: { error: string, success: boolean }, formdata: FormData) => {
        try {
            const productInfo = {
                name: formdata.get('name'),
                description: formdata.get('description'),
                price: formdata.get('price'),
                categories: formdata.getAll('categories'),
                imageSrc: formdata.get('imageSrc'),
            }


            if(productInfo.name === '' || productInfo.price === ''){
                return {
                    error: 'Name/Price fields are required',
                    success: false
                }
            }

            if(productInfo.categories && productInfo.categories.length === 0){
                return {
                    error: 'Atleast one category is required',
                    success: false
                }
            }

            const response = await createAProduct(productInfo)
            if(response){
                revalidateTag('get-all-products')
                revalidateTag('get-category-all-products')
             
            }else{
                return {
                    error: 'Something went wrong',
                    success: false
                }
            }
        } catch (error: any) {
            return {
                error: error,
                success: false
            }
        }
        redirect('/')
    }


export const getProductsWithCategory = async () => {
    try {
        const response = await getProductsList()

        return response;
    } catch (error) {
        throw error
    }
}