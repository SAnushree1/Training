import React from 'react'
import { productDetail } from '../../stores/productDetail'
import ProductCarousel from './ProductCarosuel'
import ProductInfo from './ProductInfo'
import ProductNav from './ProductNav'
import MoreDetails from './MoreDetails'
import { Outlet } from 'react-router-dom'

function ProductContent() {
  const product = productDetail((s) => s.selectedProduct)

  if (!product) return <p className='flex justify-center'>No product selected</p>

  const images = [product.image, ...product["more-images"]];
  // console.log(images);
  
  return (
    <>    
    <ProductNav product={product}/>
    <div className='flex flex-col bg-[#fee9e9] sm:flex-row'>
      <div className='flex-1 mx-2 my-5 '>
        <ProductCarousel images={images}/>
      </div>
      <div className='flex-1 mx-2 my-5'>
        <ProductInfo product={product}/>
      </div>
    </div>
    <MoreDetails product={product}/>
    </>

  )
}

export default ProductContent;
