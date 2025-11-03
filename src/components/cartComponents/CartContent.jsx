import React, { useState } from "react";
import cartStore from "../../stores/cartStore";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import { calculateTotalAmount } from "./calculateTotal";
import UserAddress from "./UserAddress";

const CartContent = () => {
  const { cart, cartCount } = cartStore();
  const isEmpty = cart.length === 0;

  return (
    <div className="flex-1 flex flex-col">
      <div>
        {isEmpty ? (
          <div className="flex flex-col justify-center items-center m-5 bg-white rounded-2xl h-90">
            <p className="text-gray-700">Cart empty!!</p>
            <Link
              to="/shopNow"
              className="p-3 bg-[#ffb9b9]  rounded-xl m-3 hover:bg-[#fee9e9] hover:text-gray-500"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row">
            <div className="flex-2/3 my-5">
              {cart.map((item, index) => (
                <CartProduct key={index} productId={item.id} />
              ))}
              <div className="flex justify-between m-3">
                <p className="flex justify-end font-bold">{cartCount} items</p>
                <p className="flex justify-end font-bold ">
                  SubTotal : {calculateTotalAmount(cart)}
                </p>
              </div>
              <UserAddress/>
            </div>
            <div className="flex-1/3 ">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContent;
