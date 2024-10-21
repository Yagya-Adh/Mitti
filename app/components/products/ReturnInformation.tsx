"use client";
import React from "react";

const ReturnInformation = ({ title, listData }) => {
  return (
    <div className="flex flex-col font-sans text-center md:text-start py-5">
      <h3 className="text-3xl text-start text-black font-serif py-2">
        {title}
      </h3>

      {listData.returnPolicyDescription?.map((item) => (
        <p key={item.id}>{item.slug}</p>
      ))}

      <ul className=" py-4">
        {listData.policyPoints?.map((list) => (
          <li key={list.id} className=" py-1">
            {list.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReturnInformation;
