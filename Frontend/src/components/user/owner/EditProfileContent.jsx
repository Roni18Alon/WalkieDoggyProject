import User from "./images/kindpng_248729.png";
import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditProfileContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const user = JSON.parse(JSON.stringify(responseData.body[0]));
  console.log(user.user_email);

  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [zip, setzip] = useState("");

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/edit";

    const requestData = {
      address: address,
      city: city,
      country: country,
      phone_number: phoneNumber,
      user_last_name: lastName,
      user_name: firstName,
      zip: zip,
    };

    const params = new URLSearchParams({ user_mail: user.user_email });

    try {
      const response = await axios.post(
        `${url}?${params}`,
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("responseData", JSON.stringify(response.data));
      navigate("/Profile?data=" + JSON.stringify(response));
    } catch (error) {
      console.log("Error:", error.response);
    }

    console.log(requestData);
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
                      <h4>{user.user_name}</h4>
                      <p className="text-secondary mb-1">Dog Owner</p>
                      <p className="text-muted font-size-sm">
                        {user.city},{user.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-body" style={{ padding: "20px 10px" }}>
                  <p className="card-text ">Profile Details</p>
                  <hr />
                  <>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Fisrt Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.user_name}
                          onInput={(e) => setfirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Last Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.user_last_name}
                          onInput={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3"></div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.phone_number}
                          onInput={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">city</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.city}
                          onInput={(e) => setcity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">country</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.country}
                          onInput={(e) => setCountry(e.target.value)}
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
                          defaultValue={user.address}
                          onInput={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">zip</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.zip}
                          onInput={(e) => setzip(e.target.value)}
                        />
                      </div>
                    </div>
                  </>

                  <div className="row">
                    <div className="col-sm-12">
                      <Link
                        className="btn btn-info "
                        to="/Profile"
                        onClick={handleEditProfile}
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

export default EditProfileContent;
