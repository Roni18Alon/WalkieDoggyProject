import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditProfileContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const rows = document.querySelectorAll("tbody tr");
  let rowCount = 0;

  rows.forEach((row) => {
    const name = row.cells[1].textContent;

    if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
      row.style.display = "";
      rowCount++;
    } else {
      row.style.display = "none";
    }
  });

  const message = rowCount === 0 ? "No records found." : "";
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
        {/* <div className="card py-2 px-2">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="image d-flex">
              <img
                src={User}
                width="80px"
                alt=""
                className="mr-4"
                onClick={() => document.getElementById("profilePic").click()}
              />
              <input
                type="file"
                className="custom-file-input"
                id="profilePic"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div className="m-auto">
                <p className="card-text ms-3">
                  John Smith <br />
                  <span id="filename">Specialist</span>
                  <span id="filename">{fileName}</span>
                </p>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-update px-3">
                Logout
              </button>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-12 card-margin">
              <div className="card search-form">
                <div className="card-body p-0">
                  <form id="search-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="row no-gutters">
                          {/* <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select
                              className="custom-select"
                              id="exampleFormControlSelect1"
                              style={{ color: "black" }}
                            >
                              <i class="fa-solid fa-caret-down"></i>
                              <option>Location</option>
                              <option>London</option>
                              <option>Boston</option>
                              <option>Mumbai</option>
                              <option>New York</option>
                              <option>Toronto</option>
                              <option>Paris</option>
                            </select>
                          </div> */}
                          <div className="col-lg-11 col-md-6 col-sm-12 p-0">
                            <input
                              type="text"
                              placeholder="Search..."
                              className="form-control"
                              value={searchTerm}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                            <button type="submit" className="btn btn-base">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-search"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "-50px" }}>
            <div className="col-12">
              <div className="card card-margin">
                <div className="card-body">
                  <div className="row search-body">
                    <div className="col-lg-12">
                      <div className="search-result">
                        <div
                          className="result-body"
                          style={{ height: "70vh", overflowY: "auto" }}
                        >
                          <div className="table-responsive">
                            <table className="table widget-26">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfileForUser"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location my-auto">
                                          London, UK
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 20/hr
                                    </div>
                                  </td>

                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (25)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">Daniel Jack</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 15/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="widget-26-job-starred mt-3"
                                      style={{ float: "right" }}
                                    >
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        0
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (0)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">David Michael</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 10/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        4.8
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (20)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info">
                                      <p className="text-muted mt-3">
                                        <span className="location">
                                          Toronto, CAN
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 35/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2.5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (12)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location my-auto">
                                          London, UK
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 20/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (25)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">Daniel Jack</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 15/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        0
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (0)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">David Michael</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 10/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        4.8
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (20)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info">
                                      <p className="text-muted mt-3">
                                        <span className="location">
                                          Toronto, CAN
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 35/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2.5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (12)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location my-auto">
                                          London, UK
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 20/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (25)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">Daniel Jack</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 15/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        0
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (0)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">David Michael</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info mt-3">
                                      <p className="text-muted m-0">
                                        <span className="location">
                                          New York, US
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 10/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        4.8
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (20)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="widget-26-job-emp-img mt-2">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                        alt="Company"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-title">
                                      <a to="/#">James Smith</a>
                                      <p className="m-0">
                                        <Link
                                          to="/WalkerProfile"
                                          className="employer-name"
                                        >
                                          See Profile
                                        </Link>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-info">
                                      <p className="text-muted mt-3">
                                        <span className="location">
                                          Toronto, CAN
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-salary mt-3">
                                      $ 35/hr
                                    </div>
                                  </td>
                                  <td>
                                    <div className="widget-26-job-starred mt-3">
                                      <span
                                        className="m-auto"
                                        style={{
                                          color: "#fd8b2c",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2.5
                                      </span>{" "}
                                      <span
                                        style={{
                                          fontWeight: "lighter",
                                          fontSize: "10px",
                                        }}
                                      >
                                        (12)
                                      </span>
                                      <a to="/#">
                                        <span className="icon-paw icon-paw-review" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {message && (
                              <p className="text-center">{message}</p>
                            )}
                          </div>
                        </div>
                      </div>
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

export default EditProfileContent;
