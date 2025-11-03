import React from "react";
import { fetchProductData } from "./fetchProductData";

const OrderedItems = (prop) => {
  const data = fetchProductData(prop.productId);
  return (
      <div className="flex ">
        <div className="flex justify-center w-1/4 ">
          <img
            src={data.image}
            alt="product image"
            className="w-20 h-20 m-10"
          />
        </div>
        <div className="flex w-3/4 m-5 justify-between items-center">
          <div className="flex">
            <h2 className="font-semibold">
              {data.brand} {data.name}
            </h2>
          </div>
          <div className="flex font-bold">₹ {data.price}</div>
        </div>
      </div>

  );
};

export default OrderedItems;
