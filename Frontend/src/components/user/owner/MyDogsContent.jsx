import React from "react";
import dog1 from "./images/2.jfif";

function ProfileContent() {
  return (
    <>
      <div
        className="col-12 col-md-9 col-md-9-profile p-0"
        style={{
          overflowY: "auto",
          position: "relative",
          overflowX: "hidden",
          height: "100vh",
          marginTop: "80px",
          backgroundColor: "#e2e8f0",
        }}
      >
        <div className="container px-4 py-5">
          <div className="">
            <div className="row">
              {/* Single Advisor*/}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single_advisor_profile wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  {/* Team Thumb*/}
                  <div className="advisor_thumb">
                    <img src={dog1} alt="" />
                    {/* Social Info*/}
                  </div>
                  {/* Team Details*/}
                  <div className="single_advisor_details_info">
                    <h6>Dog Name</h6>
                    <p className="designation">Some Details Here</p>
                  </div>
                </div>
              </div>
              {/* Single Advisor*/}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single_advisor_profile wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  {/* Team Thumb*/}
                  <div className="advisor_thumb">
                    <img src={dog1} alt="" />
                    {/* Social Info*/}
                  </div>
                  {/* Team Details*/}
                  <div className="single_advisor_details_info">
                    <h6>Dog Name</h6>
                    <p className="designation">Some Details Here</p>
                  </div>
                </div>
              </div>
              {/* Single Advisor*/}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single_advisor_profile wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  {/* Team Thumb*/}
                  <div className="advisor_thumb">
                    <img src={dog1} alt="" />
                    {/* Social Info*/}
                  </div>
                  {/* Team Details*/}
                  <div className="single_advisor_details_info">
                    <h6>Dog Name</h6>
                    <p className="designation">Some Details Here</p>
                  </div>
                </div>
              </div>
              {/* Single Advisor*/}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single_advisor_profile wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  {/* Team Thumb*/}
                  <div className="advisor_thumb">
                    <img src={dog1} alt="" />
                    {/* Social Info*/}
                  </div>
                  {/* Team Details*/}
                  <div className="single_advisor_details_info">
                    <h6>Dog Name</h6>
                    <p className="designation">Some Details Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileContent;
