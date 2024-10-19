"use client";
import React from "react";
import CardHeading from "./CardHead";

const ShippingMethod = () => {
  return (
    <div className="flex flex-col py-10 border">
      <CardHeading Title="Shipping Method" isRequire={false} />

      <div className="flex flex-col justify-center items-center">
        <p>No shipping methods are available for the address given.</p>
      </div>
    </div>
  );
};

export default ShippingMethod;
