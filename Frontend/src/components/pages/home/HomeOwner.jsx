import React from "react";
import Footer from "../../constants/Footer";
import "../dist/css/style.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurDogWalkerSection from "./OurDogWalkerSection";
import GallerySection from "./GallerySection";
import NavbarOwner from "../../constants/NavbarOwner";

const HomeOwner = () => {
  return (
    <>
      <div class="site-wrap">
        <NavbarOwner />
        <HeroSection />
        <AboutSection />
        <OurDogWalkerSection />
        <GallerySection />
        <Footer />
      </div>
    </>
  );
};

export default HomeOwner;
