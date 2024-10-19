"use client";

import React from "react";
import Button from "../components/button/Button";
import ItemOrder from "../components/checkout/ItemOrder";
import OrderSummary from "../components/checkout/OrderSummary";
import CustomerInformation from "../components/checkout/CustomerInformation";
import ShippingAddress from "../components/checkout/ShippingAddress";
import ShippingMethod from "../components/checkout/ShippingMethod";
import PaymentInformation from "../components/checkout/PaymentInformation";

const CheckOut = () => {
  return (
    <div className="bg-mitti-bodyColor ">
      <div className="max-w-screen-2xl mx-auto px-4 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2  relative">
          <div>
            <CustomerInformation />
            <ShippingAddress />
            <ShippingMethod />
            <PaymentInformation />
          </div>

          <div className="flex flex-col p-4  h-full">
            <ItemOrder />
            <OrderSummary />
            <Button variant="button-default" buttonName="Place Order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
