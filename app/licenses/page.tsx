"use client";

import React from "react";
import MainImageBanner from "../components/banner/MainImageBanner";

const Licenses = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <MainImageBanner Title="License" />
      <div className="mx-auto max-w-screen-2xl px-10">
        <Disclaimer />
      </div>
    </div>
  );
};

export default Licenses;

const Disclaimer = () => {
  return (
    <>
      <section className="border-b border-b-mitti-secondaryTextColor py-4 my-10">
        <h1 className="text-4xl font-serif">Disclaimer</h1>
        <p className="font-mono py-2 text-mitti-secondaryTextColor">
          All graphical assets in this template are licensed for personal and
          commercial use. If you&lsquo;d like to use a specific asset, please
          check the license below.
        </p>
      </section>

      <section className="py-4">
        <button className="bg-mitti-secondaryTextColor text-xl text-white px-2 py-1">
          Typography
        </button>
        <p className="py-4 text-mitti-secondaryTextColor">
          The typography we used in this template is{" "}
          <b className="underline text-black">Halant</b> and{" "}
          <b className="underline text-black">Work Sans</b>, licensed for free
          personal and commercial use. If you&apos;d like to use these fonts
          then you can check the licenses and download the font for free.
        </p>
      </section>

      <section className="py-4">
        <button className="bg-mitti-secondaryTextColor text-xl text-white px-2 py-1">
          Images
        </button>
        <p className="py-4 text-mitti-secondaryTextColor">
          All images used on this website are sourced from{" "}
          <b className="underline text-black">yandex</b>. These images are
          available for free personal and commercial use. If you wish to use any
          of these images, please visit yandex, check the licenses, and download
          the images.
        </p>
      </section>

      <section className="py-4">
        <button className="bg-mitti-secondaryTextColor text-xl text-white px-2 py-1">
          Icons
        </button>
        <p className="py-4 text-mitti-secondaryTextColor">
          The icons on this website come from{" "}
          <b className="underline text-black">Font Awesome</b> and{" "}
          <b className="underline text-black">Lucide</b>. These icons are free
          for personal and commercial use. To use any of these icons, visit the{" "}
          <b className="underline text-black">Font Awesome licenses</b> and{" "}
          <b className="underline text-black">Lucide licenses</b> pages to
          download them.
        </p>
      </section>
    </>
  );
};
