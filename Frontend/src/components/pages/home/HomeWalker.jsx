import React from "react";
import Footer from "../../constants/Footer";
import "../dist/css/style.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurDogWalkerSection from "./OurDogWalkerSection";
import GallerySection from "./GallerySection";
import NavbarWalker from "../../constants/NavbarWalker";

const HomeWalker = () => {
  return (
    <>
      <div class="site-wrap">
        <NavbarWalker />
        <HeroSection />
        <AboutSection />
        <OurDogWalkerSection />
        <GallerySection />
        <Footer />
      </div>
    </>
  );
};

export default HomeWalker;
