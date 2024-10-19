"use client";
import React from "react";
import CardHeading from "./CardHead";

const ItemOrder = () => {
  return (
    <div className="border border-mitti-secondaryTextColor">
      <CardHeading Title="Items In Order" isRequire={false} />
      <div className="py-6"></div>
    </div>
  );
};

export default ItemOrder;
