import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";

function EditWalkerProfileContent() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#f8f8f8",
                }}
            >
                {/* <div className="px-2 py-2 card">
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
              <button type="button" className="px-3 btn btn-update">
                Logout
              </button>
            </div>
          </div>
        </div> */}

                <div className="md:p-4 !py-[100px] md:!py-4 m-3">
                    <div className="p-4 max-w-[900px] mx-auto mb-10 gap-6  bg-white rounded-lg box-shadow">
                        <h2 className="">Edit Profile Details</h2>

                        <hr className="my-6 opacity-40" />

                        <div>
                            <>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Full Name</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="John Doe"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Email</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Phone</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="(239) 816-9029"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Mobile</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="(320) 380-4539"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Address</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Bay Area, San Francisco, CA"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <h6 className="mb-2">Experience</h6>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="3 Years"
                                        />
                                    </div>
                                </div>
                            </>
                            <div className="flex flex-col mb-3">
                                <h6 className="mb-2">About me</h6>
                                <div className="">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum veniam eligendi rem cumque magnam."
                                        rows="5"
                                        cols=""
                                    />
                                </div>
                            </div>
                            <div className="mt-5">
                                    <Link
                                        className="mt-2 bg-[#03C9D7] px-6 text-white py-3  rounded  w-100"
                                        to="../WalkerProfile"
                                    >
                                        Save Changes
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditWalkerProfileContent;
