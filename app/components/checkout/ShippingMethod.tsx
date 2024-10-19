"use client";
import React from "react";
import CardHeading from "./CardHead";

const ShippingMethod = () => {
  return (
    <div className="flex flex-col my-10 border border-mitti-secondaryTextColor">
      <CardHeading Title="Shipping Method" isRequire={false} />

      <div className="flex flex-col justify-center items-center bg-white py-20">
        <p>No shipping methods are available for the address given.</p>
      </div>
    </div>
  );
};

export default ShippingMethod;
