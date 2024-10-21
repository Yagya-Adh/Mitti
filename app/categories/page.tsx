"use client";
import Image from "next/image";
import MainImageBanner from "../components/banner/MainImageBanner";
import Button from "../components/button/Button";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <>
      <MainImageBanner Title={"All Categories"} />

      <CategoryLink />
    </>
  );
};

export default CategoriesPage;

const categoryLink = [
  {
    id: 1,
    image: "/assets/images/category/bathroom.webp",
    pageLink: "/categories/bathroom",
    title: "Bathroom",
  },
  {
    id: 2,
    image: "/assets/images/category/livingroom.webp",
    pageLink: "/categories/living-room",
    title: "Living Room",
  },
  {
    id: 3,
    image: "/assets/images/category/homedecor.webp",
    pageLink: "/categories/home-decor",
    title: "Home Decor",
  },
  {
    id: 4,
    image: "/assets/images/category/dining.webp",
    pageLink: "/categories/dining",
    title: "Dining",
  },
  {
    id: 5,
    image: "/assets/images/category/kitchen.webp",
    pageLink: "/categories/kitchen",
    title: "Kitchen",
  },
  {
    id: 6,
    image: "/assets/images/category/pottery.webp",
    pageLink: "/categories/pottery",
    title: "Pottery",
  },
];
const CategoryLink = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="grid grid-cols-4 gap-10  ">
        {categoryLink?.map((list) => (
          <div className="py-10" key={list.id}>
            <Link href={list.pageLink}>
              <div className="overflow-hidden ">
                <Image
                  src={list.image}
                  height={500}
                  width={500}
                  className="hover:scale-125 transition-all ease-linear duration-700 h-full"
                  alt="latest_"
                />
              </div>
              <Button
                buttonName={list.title}
                variant="button-underline"
                size="text-xl w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
