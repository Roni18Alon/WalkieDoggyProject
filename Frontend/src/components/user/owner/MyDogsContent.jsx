import React from "react";
import { useGetUserInfoQuery } from "../../tokenApi";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import dog1 from "./images/2.jfif";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  carouselContainer: {
    backgroundColor: "#f8f8f8",
    minHeight: "calc(100vh - 100px)", // Adjust the height to leave some space at the bottom
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
});

function MyDogsContent() {
  const classes = useStyles();
  const { data } = useGetUserInfoQuery();

  const dogs = data?.body?.dogs || [];

  const renderDogCards = () => {
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
  };

  const handleDogButtonClick = (dogId) => {
    // Handle the button click event for a specific dog
    console.log("Dog ID:", dogId);
  };

  return (
    <div className={classes.carouselContainer}>
      <div className="container p-0 md:p-4 !py-[100px] md:!py-4">
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          autoPlay={false}
          indicators={false}
          timeout={500}
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
  );
}

export default MyDogsContent;
