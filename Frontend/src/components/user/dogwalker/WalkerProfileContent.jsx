import React, { useState, useEffect } from "react";
import { useGetUserInfoQuery } from "../../tokenApi";
import Calendar from "../../Calendar/Calendar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import User from "./images/kindpng_248729.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function WalkerProfileContent() {
  const { data } = useGetUserInfoQuery();
  const userEmail = data && data.body && data.body.user_email;
  const userImage =
    data && data.body && data.body.user_image
      ? data.body.user_image
      : "https://bootdey.com/img/Content/user_3.jpg";
  const userName = data && data.body && data.body.user_full_name;
  const userRegDate = data && data.body && data.body.registration_date;
  const userCountry = data && data.body && data.body.country;
  const userLastVisit = data && data.body && data.body.last_visit;
  const userWhatsAppLink = data && data.body && data.whatsapp_link;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (data) {
      localStorage.setItem("userEmailForCalander", JSON.stringify(userEmail));
    }
  }, [data, userEmail]);

  const handleDateSelection = (selectedDateTime) => {
    console.log("Selected date/time:", selectedDateTime);
    setOpen(true);
    // Perform additional actions
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setInputValue(numericValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
    handleClose();
  };

  if (!data) {
    // Handle loading state or error condition
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div className="md:p-4 !py-[100px] md:!py-4 m-3">
          <div className="p-4 max-w-[900px] mx-auto_ mb-10 flex gap-6 flex-col lg:flex-row bg-white rounded-lg box-shadow">
            <div className="md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <img
                    src={userImage ? userImage : User}
                    alt="Admin"
                    className="object-cover w-full h-full rounded-full"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold">
                {data.body.user_full_name
                  .split(" ")
                  .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                  .join(" ")}
              </h3>
              <div className="flex gap-4 my-2">
                <p className="mb-1">Dog Walker</p>-
                <p className="flex items-center gap-2 text-muted font-size-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  {data.body.city.charAt(0).toUpperCase() +
                    data.body.city.slice(1) +
                    ", " +
                    data.body.country.charAt(0).toUpperCase() +
                    data.body.country.slice(1)}
                </p>
              </div>
              <Link
                className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
                to="/EditWalkerProfile"
              >
                Edit Profile
              </Link>
            </div>

            <hr className="my-6 opacity-40" />

            <div className="">
              <div className="flex items-center gap-4 my-3">
                <h6 className="mb-0 text-lg">Full Name</h6>
                <div className="font-bold text-secondary text-md">
                  {data.body.user_full_name
                    .split(" ")
                    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                    .join(" ")}
                </div>
              </div>

              <div className="flex items-center gap-4 my-3">
                <h6 className="mb-0 text-lg">Email</h6>
                <div className="font-bold text-secondary text-md">
                  {data.body.user_email}
                </div>
              </div>

              <div className="flex items-center gap-4 my-3">
                <h6 className="mb-0 text-lg">Mobile</h6>
                <div className="font-bold text-secondary text-md">
                  {data.body.phone_number}
                </div>
              </div>

              <div className="flex items-center gap-4 my-3">
                <h6 className="mb-0 text-lg">Address</h6>
                <div className="font-bold text-secondary text-md">
                  {data.body.address.charAt(0).toUpperCase() +
                    data.body.address.slice(1) +
                    ", " +
                    data.body.city.charAt(0).toUpperCase() +
                    data.body.city.slice(1) +
                    ", " +
                    data.body.country.charAt(0).toUpperCase() +
                    data.body.country.slice(1)}
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 row">
            <div className="col-12">
              <div className="overflow-hidden bg-white rounded-lg box-shadow">
                <div className="card-body">
                  <div className="calendar-container">
                    <Calendar
                      value={userEmail || ""}
                      onClick={handleDateSelection}
                      onSelectDateTime={handleDateSelection}
                    />
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

export default WalkerProfileContent;
