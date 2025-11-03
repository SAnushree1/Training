import React from "react";
import orderStore from "../../stores/orderStore";
import cartStore from "../../stores/cartStore";
import UserAddress from "../cartComponents/UserAddress";
import OrderedItems from "./OrderedItems";
import { fetchProductData } from "./fetchProductData";

const OrderDetails = () => {
  const { cartCount } = cartStore();
  const { orders } = orderStore();

  return (
    <>
      <div>
        {orders.map((order, index) => (
          <div key={index}>
            <div className="bg-white rounded-2xl mr-5 p-5" >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">ORDER ID</p>
                  <p>{order.id}</p>
                </div>
                <div>
                  <p className="text-gray-400">PLACED</p>
                  <p>{order.date}</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-gray-400">RAZOR PAY TRANSACTION ID</p>
                <p>309875534232</p>
              </div>
            </div>
            <UserAddress />
            <div className="bg-white rounded-2xl my-2 mr-5">
              {order.items.map((product, index) => {
                const productId = product.id;
                return <OrderedItems productId = {productId}/>
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderDetails;
