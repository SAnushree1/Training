import React from 'react';
import cartStore from "../../stores/cartStore";
import productDetails from '../../data/productDetails.json';
import { calculateTotalAmount } from './calculateTotal';
import orderStore from '../../stores/orderStore';

const CartSummary: React.FC = () => {
    const { cartCount, cart, emptyCart } = cartStore();
    const totalAmount = calculateTotalAmount(cart);
    const { addOrder } = orderStore();

    const handlePlaceOrder = () => {
        addOrder(cart, totalAmount);
        emptyCart();
        alert("Order placed successfully!");
    };

    return (
        <div className='m-5 p-5 rounded-2xl bg-white'>
            <p className='font-bold'>SubTotal ({cartCount} items) : ₹ {totalAmount}</p>

            {cart.map((item) => {
                const product = productDetails.find(p => p.id === item.id);
                if (!product) return null;

                return (
                    <div key={item.id} className='flex justify-between'>
                        <div>{product.name}</div>
                        <div>({item.quantity})</div>
                    </div>
                );
            })}

            <button className="p-3 bg-[#ffb9b9] rounded-xl my-3 hover:bg-[#fee9e9] hover:text-gray-500"
                onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
    );
};

export default CartSummary;
