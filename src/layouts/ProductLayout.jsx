import React from 'react'
import ProductHeader from '../components/ProductHeader'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {
  return (
    <>
        <ProductHeader/>
        <Outlet/>
    </>
  )
}

export default ProductLayout