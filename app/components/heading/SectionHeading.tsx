"use clinet";
import React from "react";
import Button from "../button/Button";
interface IPropsSection {
  title: string;
  describe?: string;
  buttonName: string;
}
const SectionHeading = ({ title, describe, buttonName }: IPropsSection) => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="text-mitti-secondaryTextColor">
          <h2 className="text-4xl font-serif max-w-sm">{title}</h2>
          <p>{describe && describe}</p>
        </div>
        <Button buttonName={buttonName} variant="button-underline" />
      </div>
    </div>
  );
};

export default SectionHeading;
