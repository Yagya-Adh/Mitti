"use client";
import React from "react";
import CardHeading from "./CardHead";

const OrderSummary = () => {
  return (
    <div className=" border border-mitti-secondaryTextColor my-5">
      <CardHeading Title="Order Summary" isRequire={false} />

      <div className="px-2 py-4">
        <h4 className="flex    justify-between">
          Subtotal: <span className="font-bold font-serif">$25000</span>
        </h4>
        <h5 className="flex  justify-between">
          Total:{" "}
          <span className="font-bold text-xl font-serif">$ 245.00 USD</span>
        </h5>
      </div>
    </div>
  );
};

export default OrderSummary;
