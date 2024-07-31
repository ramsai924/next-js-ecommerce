import { create } from 'zustand'

const userCartStore = create((set) => ({
    cart: [],
    isLoading: true,
    addToCart: (updatedCart: any) => set({ cart: updatedCart }),
    isCartLoading: (status: boolean) => set({ isLoading: status }),
    removeFromCart: (productId: any) => set((state: any) => ({ cart: state.cart.filter((userCart: any) => userCart.productId !== productId) }))
}))

export default userCartStore