import React from 'react'
import productDetails from '../../data/productDetails.json'
import cartStore from '../../stores/cartStore';

interface CartProductProps {
    productId: number;
}

const CartProduct: React.FC<CartProductProps> = ({ productId }) => {
    const product = productDetails.find(item => item.id === productId);
    const { cart, addToCart, removeFromCart } = cartStore();
    const item = cart.find(product => product.id === productId);

    if (!product || !item) return null;

    return (
        <div className='flex bg-white rounded-2xl mb-1'>
            <div className='flex justify-center w-1/4 '>
                <img src={product.image} alt='product image' className='w-30 h-30 m-10' />
            </div>
            <div className='flex w-3/4 m-5 justify-between '>
                <div>
                    <h2 className='font-semibold'>{product.brand} {product.name}</h2>
                    <div className='inline-flex p-2 bg-[#ffb9b9] rounded-2xl my-3  gap-5'>
                        <button onClick={() => removeFromCart(productId)} className='cursor-pointer  hover:text-gray-500'> {item.quantity === 1 ? " " : "-"}</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => addToCart(productId)} className='cursor-pointer hover:text-gray-500'> + </button>
                    </div>
                    <button className='p-2 bg-[#ffb9b9] rounded-2xl my-3 hover:bg-[#fee9e9] hover:text-gray-500 ml-3' >Buy Now</button>
                </div>
                <div className='flex font-bold'>₹ {product.price * item.quantity}</div>
            </div>
        </div>
    )
}

export default CartProduct
