import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PetsIcon from "@mui/icons-material/Pets";
import ReportIcon from "@mui/icons-material/Report";
import axios from "axios";
import dog1 from "./images/2.jfif";

function AddDogContent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  console.log(responseData);

  // console.log(responseData);

  //Birthday arrays:
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];

  //regitration parameters
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [Weight, setWeight] = useState("");
  const [bithDay, setDay] = useState(null);
  const [bithMonth, setMonth] = useState(null);
  const [bithYear, setYear] = useState(null);
  const [info, setInfo] = useState("");
  const [spayed, setSpayed] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
  const [hFriendly, setHFriendly] = useState(false);
  const [DFriendly, setDFriendly] = useState(false);
  const [date, setDate] = useState("");
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCloseText, setModalCloseText] = useState("");
  const [flag, setFlag] = useState(false);
  const [path, setPath] = useState("#");
  const [modalIcon, setModalIcon] = useState("</ReportIcon>");
  //fetch dog breed list
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const jsonData = await response.json();
        const breedList = Object.keys(jsonData.message);
        setData(breedList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //handle checkBox
  const handleSpayedChange = (event) => {
    setSpayed(event.target.checked);
  };
  const handleVaccinatedChange = (event) => {
    setVaccinated(event.target.checked);
  };
  const handleHFriendlyChange = (event) => {
    setHFriendly(event.target.checked);
  };
  const handleDFriendlyChange = (event) => {
    setDFriendly(event.target.checked);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle the image file here
    // You can upload the file to a server or process it further
  };

  //add Dog to database
  const handleAddDog = () => {
    console.log("in HandleaddDog" + name);

    if (bithDay != null && bithMonth != null && bithYear != null) {
      setDate(bithDay + "-" + bithMonth + "-" + bithYear);
    } else {
      setDate(null);
    }
    console.log(
      "name: " +
        name +
        "breed: " +
        breed +
        " weight: " +
        Weight +
        "date: " +
        date
    );
    setIsModalOpen(true);
    if (name && breed && Weight && date) {
      setModalText("Welcome " + name + "!");
      setPath("/MyDogs");
      setFlag(true);

      addValidDog();
    } else {
      setModalText(
        "somthing went wrong... please make sure to input all the details"
      );
    }
  };

  const Modal = ({ isOpen, onClose }) => {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle align="center">{modalText}</DialogTitle>
        <DialogContent>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "center" }}
          ></div>
          <br></br>
        </DialogContent>
        <DialogActions>
          {flag && (
            <Button
              className="card-body d-flex align-items-center justify-content-between"
              variant="contained"
              onClick={onClose}
              endIcon={<PetsIcon />}
            >
              <a href={path}></a>
              go checkout your new dog
            </Button>
          )}
          {!flag && (
            <Button
              className="card-body d-flex align-items-center justify-content-between"
              variant="contained"
              onClick={onClose}
              endIcon={<ReportIcon />}
            >
              <a href={path}></a>
              try again
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  };

  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    return (
      <>
        <a href="/myDogs"></a>
      </>
    );
  };
  function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  const addValidDog = async () => {
    /*try {
      const base64Image = await convertImageToBase64(dog1);
    } catch {
      console.log("fuck it");
    }*/

    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register-dog";
    const requestData = {
      dog_name: name,
      dog_breed: breed,
      dog_weight: parseInt(Weight),
      dog_gender: gender,
      dog_birthday: date,
      free_text: info,
      spayed: spayed,
      rabies_vaccinated: vaccinated,
      human_friendly: hFriendly,
      dog_friendly: DFriendly,
      dog_image: dog1,
    };
    // Replace with your actual API endpoint URL
    const params = new URLSearchParams({
      user_mail: responseData.body[0].user_email,
    });

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

      console.log(requestData);
      console.log(response);
    } catch (error) {
      console.log("Error:", error.response);
    }

    console.log(requestData);
  };

  return (
    <div className="col-12 col-md-9 p-4 " style={{ marginTop: "58px" }}>
      <div className="card p-4 m-3">
        <div className="card-body d-flex align-items-center justify-content-between">
          <form className="row g-3">
            <h2 className="ml-3">Add a new pet</h2>
            <div className="col-md-12 mt-4">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
                required
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <select id="Weight"></select>
            </div>
            <div className="col-md-12 my-4">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Weight"
                required
                onInput={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <h5>Pet's Breed</h5>
              <select
                className="row-12"
                name="breed"
                onChange={(e) => setBreed(e.target.value)}
                required
              >
                <option value="breed"> </option>
                {data &&
                  Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </div>
            <div
              className="col-2"
              style={{ marginTop: "20px", marginRight: "30px" }}
            >
              <input
                type="radio"
                value="Male"
                name="petGender"
                id="petGender"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="petGender"
                id="petGender"
                className="col-12"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>
            <div
              className="col-12"
              style={{ marginTop: "10px", marginRight: "10px" }}
            >
              <h5>Pet's Birthday</h5>
              <select
                className="row-12"
                name="Day"
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="Day"> Day</option>
                {days.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                className="row-12"
                name="Month"
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="Month"> Month</option>
                {months.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                className="row-12"
                name="Year"
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="Year"> Year</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="col-12"
              style={{ marginTop: "10px", marginRight: "10px" }}
            >
              <input
                className="form-control me-auto"
                type="text"
                placeholder="A little bit about my pet"
                aria-label="A little bit about my pet"
                onInput={(e) => setInfo(e.target.value)}
              />
            </div>

            <div className="col-md-12">
              <input
                type="checkbox"
                name="spayed"
                id="spayed"
                checked={spayed}
                onChange={handleSpayedChange}
              />

              <label htmlFor="spayed" className="label-agree-term">
                <span>
                  <span />
                </span>
                Spayed
              </label>
            </div>
            <div className="col-md-12">
              <input
                type="checkbox"
                name="vaccinated"
                id="vaccinated"
                checked={vaccinated}
                onChange={handleVaccinatedChange}
              />
              <label htmlFor="vaccinated" className="label-agree-term">
                <span>
                  <span />
                </span>
                Rabies vaccinated
              </label>
            </div>
            <div className="col-md-12">
              <input
                type="checkbox"
                name="hFriendly"
                id="hFriendly"
                checked={hFriendly}
                onChange={handleHFriendlyChange}
              />
              <label htmlFor="hFriendly" className="label-agree-term">
                <span>
                  <span />
                </span>
                Human friendly
              </label>
            </div>
            <div className="col-md-12">
              <input
                type="checkbox"
                name="DFriendly"
                id="DFriendly"
                checked={DFriendly}
                onChange={handleDFriendlyChange}
              />
              <label htmlFor="DFriendly" className="label-agree-term">
                <span>
                  <span />
                </span>
                Dog friendly
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="inputImage"
              onChange={handleImageUpload}
            />
            <div className="col-md-12 mt-3 d-flex justify-content-center">
              <Button
                variant="contained"
                color="success"
                size="large"
                id={name}
                value={name}
                onClick={handleAddDog}
              >
                add Dog
              </Button>

              <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDogContent;
