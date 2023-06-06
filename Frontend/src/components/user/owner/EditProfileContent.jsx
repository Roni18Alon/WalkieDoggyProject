import User from "./images/kindpng_248729.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function EditProfileContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const user = JSON.parse(JSON.stringify(responseData.body[0]));
  console.log(user.user_email);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [zip, setZip] = useState("");

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const url = "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/edit";

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
      const response = await axios.post(`${url}?${params}`, JSON.stringify(requestData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("responseData", JSON.stringify(response.data));
      navigate("/Profile?data=" + JSON.stringify(response));
    } catch (error) {
      console.log("Error:", error.response);
    }

    console.log(requestData);
  };

  return (
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
                  <img src={User} alt="Admin" className="rounded-circle p-1" width={130} />
                  <div className="mt-3">
                    <h4>{user.user_name}</h4>
                    <p className="text-secondary mb-1">Dog Owner</p>
                    <p className="text-muted font-size-sm">
                      {user.city}, {user.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">First Name:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.user_name}
                onInput={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">Last name:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.user_last_name}
                onInput={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">Mobile:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.phone_number}
                onInput={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">County:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.county}
                onInput={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">City:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.city}
                onInput={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">Address:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                defaultValue={user.address}
                onInput={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 opacity-75">
              <h6 className="mb-0">Zip:</h6>
            </div>
            <div className="text-secondary">
              <input
                type="text"
                className="border form-control"
                defaultValue={user.zip}
                onInput={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          <Link
            className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
            to="/Profile"
            onClick={handleEditProfile}
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditProfileContent;
