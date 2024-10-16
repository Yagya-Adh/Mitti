"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import mainLogo from "@/app/assets/images/mainLogo.svg";
import facebook from "@/app/assets/icons/facebook-svgrepo-com.svg";
import instagram from "@/app/assets/icons/instagram-svgrepo-com.svg";
import linkedin from "@/app/assets/icons/linkedin-svgrepo-com.svg";
import pinterest from "@/app/assets/icons/pinterest-svgrepo-com.svg";
import youtube from "@/app/assets/icons/youtube-play-svgrepo-com.svg";

import footerGridData from "@/footerData.json";
const Footer = () => {
  return (
    <div className="bg-mitti-darkBodyColor text-mitti-secondaryTextColor">
      <FooterTopBar />
      <div className="mx-auto max-w-screen-2xl py-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <GridOne />
          <GridTwo />
          <GridThree />
          <GridFour />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterTopBar = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h2 className="font-serif text-3xl max-w-sm text-center capitalize">
        Subscribe to the newsletter and get 10% off
      </h2>

      <div className="flex items-center w-1/3 justify-center relative py-10">
        <input
          type="text"
          placeholder="Email Address"
          className="border-transparent hover:border hover:border-black text-2xl py-2 px-2 w-full transition-all ease-in-out duration-500 focus:outline-none"
        />

        <div className="absolute right-3 ">
          <ArrowRightIcon className="size-5 -rotate-45 hover:rotate-0 transition-all ease-in-out duration-200 text-black" />
        </div>
      </div>
    </div>
  );
};

const icons = [
  { id: 1, icon: facebook, name: "facebook" },
  { id: 1, icon: instagram, name: "facebook" },
  { id: 1, icon: linkedin, name: "facebook" },
  { id: 1, icon: pinterest, name: "facebook" },
  { id: 1, icon: youtube, name: "facebook" },
];

const GridOne = () => {
  return (
    <div className="flex flex-col">
      <Image src={mainLogo} alt="footer_image_" className="" />

      <p className="py-4 ">
        Connect with us for updates, FAQs, and support. Shop confidently with
        our secure checkout.
      </p>

      <div className="flex flex-col ">
        <h2 className="font-serif text-4xl text-mitti-secondaryTextColor ">
          Follow Us
        </h2>
        {/* social */}
        <div className="flex items-center py-5">
          {icons?.map((listing) => (
            <div className="" key={listing.id}>
              <Image
                src={listing.icon}
                alt={listing.name}
                className="border rounded-full border-mitti-paragraphColor p-2 size-10 me-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = footerGridData;

const GridTwo = () => {
  return (
    <>
      {data?.slice(0, 1).map((list) => (
        <div className="" key={list.id}>
          <h1 className="text-3xl font-serif ">{list.routeHead}</h1>
          <div className="py-4">
            {list.routes.map((route) => (
              <ul key={route.id}>
                <li className="font-semibold hover:underline leading-10">
                  {route.linkName}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const GridThree = () => {
  return (
    <>
      {data?.slice(1, 2).map((list) => (
        <div className="" key={list.id}>
          <h1 className="text-3xl font-serif">{list.routeHead}</h1>
          <div className="py-4">
            {list.routes.map((route) => (
              <ul key={route.id}>
                <li className="font-semibold hover:underline leading-10">
                  {route.linkName}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const informationData = [
  {
    id: 1,
    head: "Information",
    address: "70 Washington square new york, NY 10012, US",
    email: "service@mitti.com",
    phone: "+250 123 456 7890",
  },
];

const GridFour = () => {
  return (
    <>
      {informationData?.map((list) => (
        <div className="flex flex-col" key={list.id}>
          <h1 className="text-3xl font-serif ">{list.head}</h1>

          <div className="py-4">
            <h2 className="font-semibold leading-10 ">
              Address:{" "}
              <span className="hover:underline font-normal py-2">
                {" "}
                {list.address}
              </span>
            </h2>

            <h3 className="font-semibold leading-10">
              Email:{" "}
              <span className="hover:underline font-normal py-2">
                {list.email}
              </span>
            </h3>
            <h4 className="font-semibold leading-10">
              Phone:{" "}
              <span className="hover:underline font-normal py-2">
                {list.phone}
              </span>
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};
