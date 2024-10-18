"use client";

import React from "react";
import BrandMarquee from "../components/marquee/BrandMarquee";
import Elevate from "../components/about/Elevate";
import VideoAndQuestion from "../components/about/VideoAndQuestion";

const About = () => {
  return (
    <>
      <Elevate />
      <VideoAndQuestion />
      <BrandMarquee />
    </>
  );
};

export default About;
