// 'use client'

// import { getUserFavList } from '@/actions/favourite'
// import CarList from '@/components/CartList'
// import FavoriteList from '@/components/FavouriteList'
// import React, { useEffect, useState } from 'react'

// function Favourite() {
//   const [favProds, setFavProds] = useState<any[]>([])
//   // const timestamp = new Date().getTime(); 
//   // const response = await getUserFavList(timestamp)

//     const getUserFavDetails = async () => {
//     try {
//       const timestamp = new Date().getTime(); 
//         const response: any = await getUserFavList(timestamp)
//         if(response.length > 0){
//             const userFav = response[0]
//             const userFavProducts: any[] = userFav.products
//             setFavProds(userFavProducts)
//         }
//     } catch (error) {
        
//     }
//   }

//   useEffect(() => {
//     getUserFavDetails()
//   }, [])

  
//   return (
//     <div className='w-[100%] md:w-[80%] lg:w-[50%] mx-auto p-3 md:p6'>
//       <div className='flex justify-center font-Robot p-6'>
//             <p className='text-xl font-bold text-center'>Favorite</p>
//         </div>
//         <hr />
//         {
//           favProds.length > 0 && (
//             <FavoriteList products={favProds} />
//           )
//         }
//     </div>
//   )
// }

// export default Favourite

import { getUserFavList } from '@/actions/favourite';
import CartList from '@/components/CartList';
import FavoriteList from '@/components/FavouriteList';
import React from 'react';

async function Favourite() {
  const response = await getUserFavList();
  const userCart = response && response.length > 0 ? response[0] : null;
  
  // Check if userCart is valid and extract products
  const userCartProducts = userCart && userCart.products ? 
    userCart.products.map((product: any) => ({ ...product.details })) : [];

  console.log('userCartProducts', userCartProducts, response, userCart);

  return (
    <div className='w-[100%] md:w-[80%] lg:w-[50%] mx-auto p-3 md:p-6'>
      <div className='flex justify-center font-Robot p-6'>
        <p className='text-xl font-bold text-center'>Cart</p>
      </div>
      <hr />
      {
        userCart && userCart.products && userCart.products.length > 0 && (
          <FavoriteList products={userCartProducts} />
        )
      }
    </div>
  );
}

export default Favourite;
