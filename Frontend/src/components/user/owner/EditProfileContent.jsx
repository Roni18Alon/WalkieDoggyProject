import User from "./images/kindpng_248729.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEditProfileMutation } from "../../editApi";
import { useGetUserInfoQuery } from "../../tokenApi";
//import ReportIcon from "@mui/icons-material/Report";

function EditProfileContent() {
  const navigate = useNavigate();
  const { data: responseData, isLoading, isError } = useGetUserInfoQuery();
  const user = responseData?.body; // Add nullish coalescing operator to handle undefined responseData
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [lastName, setLastName] = useState(user.user_last_name);
  const [firstName, setFirstName] = useState(user.user_name);
  const [zip, setZip] = useState(user.zip);
  // const [modalText, setModalText] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalCloseText, setModalCloseText] = useState("");
  // const [modalIcon, setModalIcon] = useState("</ReportIcon>");

  const editProfileMutation = useEditProfileMutation((response) => {
    // Handle success, if needed
    console.log(response);
    navigate("/Profile"); // Example: navigate to the profile page
  });

  const handleEditProfile = (e) => {
    e.preventDefault();

    // // Parameter check
    // if (!firstName || !lastName || !phoneNumber || !country || !city || !address || !zip) {
    //         // Show error dialog if any parameter is empty
    //         setModalText("Please fill in all the required fields.");
    //         setIsModalOpen(true);
    //         setModalCloseText("Close");
    //         setModalIcon(<ReportIcon />);
    //         return;
    // }

    const requestData = {
      user_email: user.user_email,
      address: address,
      city: city,
      country: country,
      phone_number: phoneNumber,
      user_last_name: lastName,
      user_name: firstName,
      zip: zip,
    };
    console.log(user.user_email);

    editProfileMutation.mutate(requestData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user data.</div>;
  }

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
                  defaultValue={user?.user_name}
                  onInput={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt-[0px]">
                <input
                  type="text"
                  defaultValue={user?.user_last_name}
                  onInput={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[40px]">
                <input
                  type="text"
                  defaultValue={user?.phone_number}
                  onInput={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[80px]">
                <input
                  type="text"
                  defaultValue={
                    user?.country.charAt(0).toUpperCase() +
                    user?.country.slice(1)
                  }
                  onInput={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[120px]">
                <input
                  type="text"
                  defaultValue={user?.city}
                  onInput={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[160px]">
                <input
                  type="text"
                  defaultValue={user?.address}
                  onInput={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold -mt[200px]">
                <input
                  type="text"
                  className="text"
                  defaultValue={user?.zip}
                  onInput={(e) => setZip(e.target.value)}
                />
              </div>
              <button
                className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
                onClick={handleEditProfile}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfileContent;
