import User from "./images/kindpng_248729.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEditProfileMutation } from '../../editApi';
import { useGetUserQuery } from "../../authApi";



function EditProfileContent() {
  
  const navigate = useNavigate();
  const { data } = useGetUserQuery();
  const user = data.body[0];
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [zip, setZip] = useState("");

  const editProfileMutation = useEditProfileMutation((response) => {
    // Handle success, if needed
    console.log(response);
    navigate('/Profile'); // Example: navigate to the profile page
  });
  

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const requestData = {
      address: address,
      city: city,
      country: country,
      phone_number: phoneNumber,
      user_last_name: lastName,
      user_name: firstName,
      zip: zip,
    };
    editProfileMutation.mutate(requestData);
  };
  

  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div className="md:p-4 !py-[100px] md:!py-4 m-3">
          <div className="p-4 max-w-[900px] mx-auto_ mb-10 flex gap-6 flex-col lg:flex-row bg-white rounded-lg box-shadow">
            <div className="">
              <img
                src={User}
                alt="Admin"
                className="p-1 -translate-y-1/2 rounded-circle "
                width={130}
              />

              <div className="text-lg font-bold -mt-[40px]">
                <input
                  type="text"
                  defaultValue={user.user_name}
                  onInput={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt-[0px]">
                <input
                  type="text"
                  defaultValue={user.user_last_name}
                  onInput={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[40px]">
                <input
                  type="text"
                  defaultValue={user.phone_number}
                  onInput={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[80px]">
                <input
                  type="text"
                  defaultValue={
                    data.body[0].country.charAt(0).toUpperCase() +
                    data.body[0].country.slice(1)
                  }
                  onInput={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[120px]">
                <input
                  type="text"
                  defaultValue={user.city}
                  onInput={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[160px]">
                <input
                  type="text"
                  defaultValue={user.address}
                  onInput={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[200px]">
                <input
                  type="text"
                  className="text"
                  defaultValue={user.zip}
                  onInput={(e) => setZip(e.target.value)}
                />
              </div>
              <Link
                className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
                to="/Profile"
                onClick={handleEditProfile}
              >
                Save changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfileContent;
