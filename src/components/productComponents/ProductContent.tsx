import React from 'react'
import products from '../../data/productDetails.json'
import ProductCarousel from './ProductCarosuel'
import ProductInfo from './ProductInfo'
import ProductNav from './ProductNav'
import MoreDetails from './MoreDetails'
import { useParams } from 'react-router-dom';

const ProductContent: React.FC = () => {
    const { product_id } = useParams<{ product_id: string }>();

    const product = products.find((item) => item.id === Number(product_id));
    
    // const product = productDetail((s) => s.selectedProduct)
    // console.log("in content", product_id, product)

    if (!product) return <p className='flex justify-center'>No product selected</p>

    const images = [product.image, ...product["more-images"]];

    return (
        <>
            <ProductNav product={product} />
            <div className='flex flex-col bg-[#fee9e9] sm:flex-row'>
                <div className='flex-1 mx-2 my-5 '>
                    <ProductCarousel images={images} />
                </div>
                <div className='flex-1 mx-2 my-5'>
                    <ProductInfo product={product} />
                </div>
            </div>
            <MoreDetails product={product} />
        </>

    )
}

export default ProductContent;
