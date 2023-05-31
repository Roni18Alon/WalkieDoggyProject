import React from "react";
import dog1 from "./images/2.jfif";
import { useLocation } from "react-router-dom";

function ProfileContent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const dogsArr = JSON.parse(JSON.stringify(responseData.body[0].dogs));
  console.log(dogsArr);

  const handleMoreDetails = () => {};
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
                  onClick={handleMoreDetails}
                >
                  {/* Team Thumb*/}
                  <div className="advisor_thumb">
                    <img src={dog1} alt="" />
                    {/* Social Info*/}
                  </div>
                  {/* Team Details*/}
                  <div className="single_advisor_details_info">
                    <h6>{dogsArr[0].dog_name}</h6>
                    <p className="designation">{dogsArr[0].dog_gender}</p>
                    <p className="designation">{dogsArr[0].dog_age} old</p>
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
