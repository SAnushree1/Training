import React from 'react'
import { Link } from 'react-router-dom';
import CartContent from '../components/cartComponents/CartContent';

const Cart = () => {
  return (
    <div className='bg-[#fee9e9] p-5  min-h-[calc(100vh-4rem)] flex flex-col'>
      <Link to="/shopNow" className='font-medium'> &lt; Back</Link>
      <h1 className='text-2xl font-bold my-5'>Shopping Cart</h1>
      <hr />
      <CartContent/>
    </div>
  )
}

export default Cart
