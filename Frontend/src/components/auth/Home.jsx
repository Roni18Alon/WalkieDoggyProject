import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../pages/home/HeroSection";
import AboutSection from "../pages/home/AboutSection";
import OurDogWalkerSection from "../pages/home/OurDogWalkerSection";
import GallerySection from "../pages/home/GallerySection";

const Home = () => {
  const navigate = useNavigate();

  const handleDogOwnerClick = () => {
    if (document.cookie.includes("walkieDoggy")) {

      navigate("/Profile");
    } else {
      navigate("/RegisterDogOwner");
    }
  };

  const handleDogWalkerClick = () => {
    if (document.cookie.includes("walkieDoggy")) {
      navigate("/Profile");
    } else {
      navigate("/RegisterDogWalker");
    }
  };

  return (
    <div className="site-wrap">
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-lg-12 col-md-6 col-sm-12">
          <div className="card shadow">
            <div className="card-body text-center py-5">
              <h2 className="card-title">Walkie Doggy</h2>
              <p className="">
                Welcome to Walkie Doggy! Are you a dog walker or a dog owner? Please choose your role.
              </p>
              <br />
              <div className="btn-group">
                <button type="button" className="btn btn-primary mr-2" onClick={handleDogOwnerClick}>
                  Dog Owner
                </button>
                <button type="button" className="btn btn-primary ml-2" onClick={handleDogWalkerClick}>
                  Dog Walker
                </button>
              </div>
              <br />
              <br />
              <HeroSection />
              <AboutSection />
              <OurDogWalkerSection />
              <GallerySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
