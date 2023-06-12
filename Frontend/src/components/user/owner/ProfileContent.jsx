import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useGetUserInfoQuery } from "../../tokenApi";
import dog1 from "./images/2.jfif";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";

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
  carouselContainer: {
    backgroundColor: "#f8f8f8",
    minHeight: "calc(100vh - 100px)",
    padding: "0",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  dogImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "20px",
  },
  dogName: {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "8px",
  },
  dogAge: {
    fontSize: "18px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  dogButton: {
    margin: "0 10px",
  },
  noDogsMessage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  dogCheckBox: {},
}));
const ProfileContent = () => {
  const classes = useStyles();
  const { data } = useGetUserInfoQuery();
  const [isMoreDitails, setMoreDitails] = useState(false);

  const dogs = data?.body?.dogs || [];

  const userEmail = data && data.body && data.body.user_email;
  const userImage = data && data.body && data.body.user_image;

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
  const renderDogCards = () => {
    if (isMoreDitails) {
      return dogs.map((dog) => (
        <div key={dog.id} className={classes.cardContainer}>
          <h6 className={classes.dogName}>{dog.dog_name}</h6>
          <p className={classes.dogAge}>Age: {dog.dog_age}</p>
          <p className={classes.dogAge}>breed: {dog.dog_breed}</p>{" "}
          <p className={classes.dogAge}>weight: {dog.dog_weight}</p>
          <p className={classes.dogAge}>gender: {dog.dog_gender}</p>
          <p className={classes.dogAge}>birthday: {dog.dog_birthday}</p>
          {dog.free_text && (
            <p className={classes.dogAge}>free_text: {dog.free_text}</p>
          )}
          {dog.spayed && (
            <div>
              <span>spayed</span>
              <div className="flex flex-col"></div>
            </div>
          )}
          {dog.rabies_vaccinated && (
            <p className="flex flex-col"> rabies vaccinated</p>
          )}
          {dog.human_friendly && (
            <p className="flex flex-col">human friendly</p>
          )}
          {dog.dog_friendly && <p className="flex flex-col">dog friendly</p>}
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.dogButton}
              onClick={() => handleDogButtonClick(dog.id)}
            >
              {" "}
              Close
            </Button>
          </div>
        </div>
      ));
    } else {
      return dogs.map((dog) => (
        <div key={dog.id} className={classes.cardContainer}>
          <div className={classes.dogImage}>
            <img
              src={dog1}
              alt={dog.dog_name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h6 className={classes.dogName}>{dog.dog_name}</h6>
          <p className={classes.dogAge}>Age: {dog.dog_age}</p>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.dogButton}
              onClick={() => handleDogButtonClick(dog.id)}
            >
              View Details
            </Button>
          </div>
        </div>
      ));
    }
  };

  const handleDogButtonClick = (dogId) => {
    // Handle the button click event for a specific dog
    setMoreDitails((isMoreDitails) => !isMoreDitails);
    console.log("Dog ID:", dogId);
  };
  const handleSlide = () => {
    setMoreDitails(false);
  };

  if (dogs.length === 0) {
    return <div className={classes.noDogsMessage}>No dogs available</div>;
  }

  if (!data) {
    // Handle loading state or error condition
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <div className="md:p-4 !py-[100px] md:!py-4 m-3">
          <div className="p-4 max-w-[900px] mx-auto_ mb-10 flex flex-col md:flex-row bg-white rounded-lg box-shadow">
            <div className="md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  {userImage && (
                    <img
                      src={userImage}
                      alt="Admin"
                      className="object-cover w-full h-full rounded-full"
                      style={{ objectPosition: "center top" }}
                    />
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold">
                {data.body.user_full_name
                  .split(" ")
                  .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                  .join(" ")}
              </h3>

              <div className="flex gap-4 my-2">
                <p className="mb-1">Dog Owner</p>-
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
                to="/EditProfile"
              >
                Edit Profile
              </Link>
            </div>

            <div className="md:w-2/3">
              <hr className="my-6 opacity-40" />

              <div className="">
                <div className="flex items-center gap-4 my-3">
                  <h6 className="mb-0 text-lg">Full Name</h6>
                  <div className="font-bold text-secondary text-md">
                    {data.body.user_full_name
                      .split(" ")
                      .map(
                        (name) => name.charAt(0).toUpperCase() + name.slice(1)
                      )
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
          </div>

          <div className={classes.carouselContainer}>
            <div className="container p-0 md:p-4 !py-[100px] md:!py-4">
              <Carousel
                animation="slide"
                navButtonsAlwaysVisible
                autoPlay={false}
                indicators={false}
                timeout={500}
                onChange={handleSlide}
                navButtonsProps={{
                  style: {
                    backgroundColor: "transparent",
                    color: "#000000",
                    borderRadius: "50%",
                    margin: "0 10px",
                  },
                }}
              >
                {renderDogCards()}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
