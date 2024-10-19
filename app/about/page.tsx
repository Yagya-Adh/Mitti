"use client";
import React from "react";
import MainImageBanner from "../components/banner/MainImageBanner";
import Elevate from "../components/about/Elevate";
import GridImageGroup from "../components/about/GridImageGroup";
import VideoAndQuestion from "../components/about/VideoAndQuestion";
import BrandMarquee from "../components/marquee/BrandMarquee";

const About = () => {
  return (
    <>
      <MainImageBanner Title={"About Us"} />
      <Elevate />
      <GridImageGroup />
      <VideoAndQuestion />
      <BrandMarquee />
    </>
  );
};

export default About;
