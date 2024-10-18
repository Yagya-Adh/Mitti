"use client";

import React from "react";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import BrandMarquee from "../components/marquee/BrandMarquee";
import Elevate from "../components/about/Elevate";

const About = () => {
  return (
    <div>
      <NavBar />
      <Elevate />
      <VideoAndQuestion />
      <BrandMarquee />
      <Footer />
    </div>
  );
};

export default About;
