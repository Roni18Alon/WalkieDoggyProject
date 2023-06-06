import React from "react";

function WalkerPersonalProfileContent() {
  // const [fileName, setFileName] = useState("No file chosen");

  // function handleFileChange(e) {
  //   setFileName(e.target.files[0].name);
  //}
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
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        alt="..."
                      />
                    </div>
                    <div className="profile__header">
                      <h4>James Smith</h4>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Non nostrum odio cum repellat veniam eligendi rem
                        cumque magnam autem delectus qui.
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
                            <bold>Location</bold>
                          </th>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <th>
                            <bold>Experience</bold>
                          </th>
                          <td>3 Years</td>
                        </tr>
                        <tr>
                          <th>
                            <bold>Rank</bold>
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
                    Edit
                  </a>
                </p>
                <hr />
                {/* Contact info */}
                <div className="profile__contact-info">
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="profile__contact-info-heading">
                        Work number
                      </h5>
                      (000)987-65-43
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="profile__contact-info-heading">
                        Mobile number
                      </h5>
                      (000)987-65-43
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-envelope-square" />
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="profile__contact-info-heading">
                        E-mail address
                      </h5>
                      <a href="mailto:admin@domain.com">admin@domain.com</a>
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="profile__contact-info-heading">
                        Work address
                      </h5>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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

export default WalkerPersonalProfileContent;
