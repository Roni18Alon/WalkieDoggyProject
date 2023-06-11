import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetUserInfoQuery } from "../../tokenApi";

function WalkerProfileContent() {

  const { data } = useGetUserInfoQuery();
  const userEmail = data && data.body && data.body.user_email;
  const userImage = data && data.body && data.body.user_image;
  const userName = data && data.body && data.body.user_full_name;
  const userRegDate = data && data.body && data.body.registration_date;
  const userCountry = data && data.body && data.body.country;
  const userLastVisit= data && data.body && data.body.last_visit;
  const userWhatsAppLink = data && data.body && data.whatsapp_link;



  return (
    <>
      <div
        className="col-12 col-md-9 col-md-9-profile px-3 py-"
        style={{
          overflowY: "auto",
          position: "relative",
          overflowX: "hidden",
          height: "100vh",
          marginTop: "80px",
          backgroundColor: "#e2e8f0",
        }}
      >
        <div className="card container">
          <div className="card-body py-4">
            <div className="row">
              <div className="col-xs-12 col-sm-9">
                {/* User profile */}
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="profile__avatar">
                      <img
                        src={userImage}
                        alt="..."
                      />
                    </div>
                    <div className="profile__header">
<h4>
  {userName &&
    userName
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ")}
</h4>


                    </div>
                  </div>
                </div>
                {/* User info */}
                <div className="panel panel-default">
                  <div className="panel-body">
                    <table className="table profile__table">
                      <tbody>
                        <tr>
                          <th>
                            <bold>Location</bold>
                          </th>
                          <td>{userCountry && userCountry.charAt(0).toUpperCase() + userCountry.slice(1)}</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Community */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">Community</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table profile__table">
                      <tbody>
                        <tr>
                          <th>
                            <bold>Jobs</bold>
                          </th>
                          <td>84</td>
                        </tr>
                        <tr>
                          <th>
                            <bold>Member since</bold>
                          </th>
                          <td>Jan 01, 2016</td>
                        </tr>
                        <tr>
                          <th>
                            <bold>Last login</bold>
                          </th>
                          <td>1 day ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Latest posts */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">Reviews</h4>
                  </div>
                  <div className="panel-body">
                    <div className="profile__comments">
                      <div className="profile-comments__item">
                        <div className="profile-comments__avatar">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="..."
                          />
                        </div>
                        <div className="profile-comments__body">
                          <h5 className="profile-comments__sender">
                            Richard Roe <small>2 hours ago</small>
                          </h5>
                          <div className="profile-comments__content">
                            Good job done by James Smith <br />
                            Recommended!
                          </div>
                          <div className="rating">
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw low"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="profile-comments__item">
                        <div className="profile-comments__avatar">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt="..."
                          />
                        </div>
                        <div className="profile-comments__body">
                          <h5 className="profile-comments__sender">
                            Saim Ayub <small>3 days ago</small>
                          </h5>
                          <div className="profile-comments__content">
                            Not satisfied with his job <br />
                            Not Recommended
                          </div>
                          <div className="rating">
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw low"></i>{" "}
                            <i className="fa-solid fa-paw low"></i>{" "}
                            <i className="fa-solid fa-paw low"></i>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="profile-comments__item">
                        <div className="profile-comments__avatar">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="..."
                          />
                        </div>
                        <div className="profile-comments__body">
                          <h5 className="profile-comments__sender">
                            Andreas Martinez <small>5 day ago</small>
                          </h5>
                          <div className="profile-comments__content">
                            Completely satisfied with his work. He did his job
                            very well. <br />
                            Recommended!
                          </div>
                          <div className="rating">
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                            <i className="fa-solid fa-paw"></i>{" "}
                          </div>
                        </div>
                        <p className="mt-3" style={{ cursor: "pointer" }}>
                          Show More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                {/* Contact user */}
                <p>
                  <a
                    href="#"
                    className="profile__contact-btn btn btn-lg btn-block btn-info"
                    data-toggle="modal"
                    data-target="#profile__contact-form"
                  >
                    Contact user
                  </a>
                </p>

                {/* Contact info */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalkerProfileContent;
