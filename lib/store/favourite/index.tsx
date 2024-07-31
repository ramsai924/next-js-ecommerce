import { create } from 'zustand'

const useFavouriteStore = create((set: any) => ({
    favourite: [],
    setFavourite: (newFavouriteList: any[]) => set(({ favourite: newFavouriteList })),
    // removeFavourite: ()
}))

export default useFavouriteStore