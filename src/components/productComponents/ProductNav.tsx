import React from 'react'
import AddtoCartButton from './AddToCartButton';
import { Link } from 'react-router-dom';
import { Product } from '../../stores/cartStore';

interface ProductNavProps {
    product: Product;
}

const ProductNav: React.FC<ProductNavProps> = ({ product }) => {

    return (
        <div className='flex justify-between items-center px-10 py-3 bg-[rgba(32,32,32,1)] text-white'>
            <Link to="/shopNow" className='text-gray-300'>Categories/...</Link>
            <AddtoCartButton product={product} />
        </div>
    )
}

export default ProductNav
