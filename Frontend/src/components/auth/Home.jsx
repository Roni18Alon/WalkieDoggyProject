import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../pages/home/HeroSection";
import AboutSection from "../pages/home/AboutSection";
import OurDogWalkerSection from "../pages/home/OurDogWalkerSection";
import GallerySection from "../pages/home/GallerySection";
import { useGetUserInfoQuery } from "../tokenApi";
import videoBg from "../../../src/assets/FOOT.mp4";
import "../auth/dist/Home.css"

const Home = () => {
  const navigate = useNavigate();
  const { data } = useGetUserInfoQuery();
  const userRole = data && data.body && data.body.user_role;

  const handleDogOwnerClick = () => {
    if (document.cookie.includes("walkieDoggy")) {
      if (userRole === "owner") {
        navigate("/Profile");
      } else if (userRole === "walker") {
        navigate("/WalkerProfile");
      }
    } else {
      navigate("/RegisterDogOwner");
    }
  };

  const handleDogWalkerClick = () => {
    if (document.cookie.includes("walkieDoggy")) {
      if (userRole === "owner") {
        navigate("/Profile");
      } else if (userRole === "walker") {
        navigate("/WalkerProfile");
      }
    } else {
      navigate("/RegisterDogWalker");
    }
  };

  return (
    <div className="site-wrap">
      <div className="bg-video">
        <video src={videoBg} autoPlay muted loop />
      </div>
      <div className="row d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-lg-12 col-md-6 col-sm-12">
          <div className="card shadow" style={{ background: "transparent" }}>
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
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
      <AboutSection />
      <OurDogWalkerSection />
      <GallerySection />
    </div>
  );
};

export default Home;
