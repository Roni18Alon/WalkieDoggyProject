import React from "react";
import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import StarRating from "../../StarRating";

function ProfileContent() {
  // const [fileName, setFileName] = useState("No file chosen");
  // function handleFileChange(e) {
  //   setFileName(e.target.files[0].name);

  //}
  const handleDateSelection = (selectedDateTime) => {
    console.log("Selected date/time:", selectedDateTime);
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
                <div className="card-body ">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={User}
                      alt="Admin"
                      className="rounded-circle p-1"
                      width={130}
                    />
                    <div className="mt-3">
                      <h4>John Smith</h4>
                      <p className="text-secondary mb-1">Dog Owner</p>
                      <p className="text-muted font-size-sm">
                        Tel Aviv, Israel
                      </p>
                    </div>
                  </div>

                  <div>{/* Add the Calendar component here */}</div>
                  <div>
                    {" "}
                    <StarRating />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-body" style={{ padding: "30px 20px" }}>
                  <p className="card-text ">Profile Details</p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3 mt-2">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mt-2">
                      John Smith
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">fip@gmail.com</div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (054) 123456789
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Dizingof, Tel Aviv, Israel
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Link
                        className="btn btn-info "
                        target="__blank"
                        to="/EditProfile"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body ">
                  <div className="d-flex flex-column text-center">
                    <Calendar onSelectDateTime={handleDateSelection} />
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
