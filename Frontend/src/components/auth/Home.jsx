import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../pages/home/HeroSection";
import AboutSection from "../pages/home/AboutSection";
import OurDogWalkerSection from "../pages/home/OurDogWalkerSection";
import GallerySection from "../pages/home/GallerySection";

const Home = () => {
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
<<<<<<< HEAD
              Welcome to Walkie Doggy! Are you a dog walker or a dog owner? Please choose your role.
=======
                Welcome to Dog Walker, you need to choice if you dog walker or
                dog owner
>>>>>>> origin
              </p>{" "}
              <br />
              <div className="btn-group">
                <Link to="/RegisterDogOwner">
                  <button type="button" className="btn btn-primary mr-2">
                    Dog Owner
                  </button>
                </Link>

                <Link to="/RegisterDogWalker">
                  <button type="button" className="btn btn-primary ml-2">
                    Dog Walker
                  </button>
                </Link>
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
