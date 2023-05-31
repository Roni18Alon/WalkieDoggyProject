import React from "react";
import User from "./images/roni.png";
import { Link, useLocation } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";

function ProfileContent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  console.log(responseData);

  const handleDateSelection = (selectedDateTime) => {
    console.log('Selected date/time:', selectedDateTime);
    // Perform additional actions
  };

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
        <div className="main-body px-4">
          <div className="row gutters-sm">
            <div className="col-lg-4 h-auto">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={User}
                      alt="Admin"
                      className="rounded-circle p-1"
                      width={130}
                    />
                    <div className="mt-3">
                      <h4>
                      {responseData &&
                          responseData.body[0].user_full_name &&
                          responseData.body[0].user_full_name
                            .split(" ")
                            .map(
                              (name) =>
                                name.charAt(0).toUpperCase() + name.slice(1)
                            )
                            .join(" ")}
                      </h4>
                      <p className="text-secondary mb-1">Dog Owner</p>
                      <p className="text-muted font-size-sm">
                      
                      </p>
                      <p className="text-muted font-size-sm">
  {responseData && responseData.body[0].city.charAt(0).toUpperCase() + responseData.body[0].city.slice(1)}, {responseData && responseData.body[0].country.charAt(0).toUpperCase() + responseData.body[0].country.slice(1)}
</p>

                    </div>
                    <div className="rating-position">
                      <button className="rating-button">
                        <i className="fa-solid fa-paw"></i>
                      </button>
                      <button className="rating-button">
                        <i className="fa-solid fa-paw"></i>
                      </button>
                      <button className="rating-button">
                        <i className="fa-solid fa-paw"></i>
                      </button>
                      <button className="rating-button">
                        <i className="fa-solid fa-paw"></i>
                      </button>
                      <button className="rating-button">
                        <i className="fa-solid fa-paw low"></i>
                      </button>
                    </div>
                    <div className="calendar-container">
                      <Calendar onSelectDateTime={handleDateSelection} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-body" style={{ padding: "30px 20px" }}>
                  <p className="card-text">Profile Details</p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3 mt-2">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mt-2">
                      {responseData &&
                        responseData.body[0].user_full_name &&
                        responseData.body[0].user_full_name
                          .split(" ")
                          .map(
                            (name) =>
                              name.charAt(0).toUpperCase() + name.slice(1)
                          )
                          .join(" ")}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {responseData.body[0].user_email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {responseData.body[0].phone_number}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
  {responseData.body[0].address}, {responseData.body[0].city.charAt(0).toUpperCase() + responseData.body[0].city.slice(1)}, {responseData.body[0].country.charAt(0).toUpperCase() + responseData.body[0].country.slice(1)}
</div>

                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Link
                        className="btn btn-info"
                        target="__blank"
                        to="/EditProfile"
                      >
                        Edit
                      </Link>
                    </div>
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
