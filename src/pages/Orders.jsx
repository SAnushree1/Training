import React from "react";
import ProductHeader from "../components/ProductHeader";
import orderStore from "../stores/orderStore";
import { Link } from "react-router-dom";
import TrackButtons from "../components/ordersComponents/TrackButtons";
import OrderDetails from "../components/ordersComponents/OrderDetails";

const Orders = () => {
  const { orders } = orderStore();
  const isEmpty = orders.length === 0;

  return (
    <div className="bg-[#fee9e9] p-5  min-h-[calc(100vh-2rem)] flex flex-col">
      <Link to="/shopNow" className="font-medium">
        {" "}
        &lt; Back
      </Link>
      <h1 className="text-2xl font-bold my-5">Orders</h1>
      <hr />
      {isEmpty ? (
        <div className="flex flex-col justify-center items-center m-5 bg-white rounded-2xl h-90">
          <p className="text-gray-700">No orders yet!!</p>
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
            <OrderDetails/>
          </div>
          <div className="flex-1/3 my-5 flex flex-col gap-2">
            <TrackButtons buttonText="Track Order" bgClass="bg-amber-300" />
            <TrackButtons
              buttonText="Contact Support"
              textColor="text-red-300"
            />
            <TrackButtons buttonText="Cancel Order" />
            <TrackButtons buttonText="Download Invoice" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
