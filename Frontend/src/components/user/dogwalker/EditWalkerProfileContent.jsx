import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";

function EditWalkerProfileContent() {

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

        <div className="main-body px-4">  
          <div className="row gutters-sm">      
            <div className="col-lg-12">
              <div className="card mb-3">
                <div className="card-body" style={{ padding: "30px 20px" }}>
                  <p className="card-text ">Profile Details</p>
                  <hr />
                  <>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="John Doe"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="(239) 816-9029"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="(320) 380-4539"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Bay Area, San Francisco, CA"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Experience</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="3 Years"
                        />
                      </div>
                    </div>
                  </>
                  <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">About me</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <textarea
                          type="text"
                          className="form-control"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum veniam eligendi rem cumque magnam."                       
                          rows="5"
                          cols=""
                        />
                      </div>
                    </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Link
                        className="btn btn-info "                       
                        to="../WalkerProfile"
                      >
                        Save Changes
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

export default EditWalkerProfileContent;
