import React from "react";

function WalkerPersonalProfileContent() {
  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div className="md:p-4 !py-[100px] md:!py-4 m-3">
          <div className="p-4 max-w-[900px] mx-auto mb-10 gap-6 bg-white rounded-lg box-shadow">
            <div className="row">
              <div className="col-xs-12 col-sm-9">
                {/* User profile */}
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="profile__avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        alt="..."
                      />
                    </div>
                    <div className="profile__header">
                      <h4>user Name</h4>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
                      </p>
                    </div>
                  </div>
                </div>
                {/* User info */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">User info</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table profile__table">
                      <tbody>
                        <tr>
                          <th>
                            <b>Location</b>
                          </th>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <th>
                            <b>Experience</b>
                          </th>
                          <td>3 Years</td>
                        </tr>
                        <tr>
                          <th>
                            <b>Rank</b>
                          </th>
                          <td>Level 1</td>
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
                            <b>Jobs</b>
                          </th>
                          <td>84</td>
                        </tr>
                        <tr>
                          <th>
                            <b>Member since</b>
                          </th>
                          <td>Jan 01, 2016</td>
                        </tr>
                        <tr>
                          <th>
                            <b>Last login</b>
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
                            Completely satisfied with his work. He did his job very well. <br />
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
                        <p
                          className="mt-3"
                          style={{ cursor: "pointer" }}
                        >
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
                    Edit
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalkerPersonalProfileContent;
