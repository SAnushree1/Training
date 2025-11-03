import React from 'react'
import cartStore from '../../stores/cartStore'

const AddtoCartButton = ({product}) => {
    const {products, addToCart} = cartStore();

    const currentProduct = products.find((item) => item.id === product.id);
    const isOutOfStock = currentProduct.stock <= 0;
  return (
    <button onClick={ () => addToCart(product.id)}
        disabled={isOutOfStock}
        className={`flex gap-2 rounded-3xl px-5 py-2 font-medium cursor-pointer hover:bg-gray-500
        ${isOutOfStock ? "bg-[#aeaeae]" : "bg-[rgba(50,50,50,1)]"}` }>
            <img src="assets/BuyIcon.png" alt="BuyIcon.png" className={`${isOutOfStock ? 'hidden' : 'block'}`}/>
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
    </button>
  )
}

export default AddtoCartButton