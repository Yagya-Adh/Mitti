"use client";
import React from "react";
import CardHeading from "./CardHead";

const ItemOrder = () => {
  return (
    <div className="border border-mitti-secondaryTextColor">
      <CardHeading Title="Items In Order" isRequire={false} />
      <div></div>
    </div>
  );
};

export default ItemOrder;
