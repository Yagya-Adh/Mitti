"use clinet";
import React from "react";
import Button from "../button/Button";
interface IPropsSection {
  title: string;
}
const SectionHeading = ({ title }: IPropsSection) => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-5xl font-serif text-mitti-secondaryTextColor max-w-sm">
          {title}
        </h1>
        <Button buttonName="Discover More" variant="button-underline" />
      </div>
    </div>
  );
};

export default SectionHeading;
