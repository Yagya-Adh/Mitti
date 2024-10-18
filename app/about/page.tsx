"use client";
import React from "react";
import Elevate from "../components/about/Elevate";
import GridImageGroup from "../components/about/GridImageGroup";
import VideoAndQuestion from "../components/about/VideoAndQuestion";
import BrandMarquee from "../components/marquee/BrandMarquee";

const About = () => {
  return (
    <>
      <Elevate />
      <GridImageGroup />
      <VideoAndQuestion />
      <BrandMarquee />
    </>
  );
};

export default About;
