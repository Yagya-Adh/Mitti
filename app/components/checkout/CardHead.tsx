"use client";

interface IcardHead {
  Title: string;
  isRequire: boolean;
}
const CardHeading = ({ Title, isRequire }: IcardHead) => {
  return (
    <div className="flex items-center border justify-between px-4 py-2">
      <h2 className="font-bold font-serif text-xl">{Title}</h2>
      <span>{isRequire ? "* Required" : ""}</span>
    </div>
  );
};

export default CardHeading;
