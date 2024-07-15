import React from 'react'

function ProductDetailsLayout({ productDetails, relatedProducts }: any) {
  return (
    <div className='w-[100%] md:w-[80%] mx-auto'>
        {productDetails}
        <hr />
        {relatedProducts}
    </div>
  )
}

export default ProductDetailsLayout