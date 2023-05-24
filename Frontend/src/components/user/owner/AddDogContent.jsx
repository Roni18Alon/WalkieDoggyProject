<<<<<<< HEAD
import React, { useEffect, useState } from "react";
function AddDogContent() {
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
  const [bithDay, setDay] = useState(1);
  const [bithMonth, setMonth] = useState(1);
  const [bithYear, setYear] = useState(2000);
  const [info, setInfo] = useState(0);
  const [spayed, setSpayed] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
  const [hFriendly, setHFriendly] = useState(false);
  const [DFriendly, setDFriendly] = useState(false);
  const [date, setDate] = useState("");

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
  const handleAddDog = async () => {

    const url ="https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register-dog";
    setDate(bithDay + "-" + bithMonth + "-" + bithYear);
    console.log("in HandleaddDog");
      const newDog = {
        dog_name: name,
        dog_breed: breed,
        dog_weight: Weight,
        dog_gender: gender,
        dog_birthday: date,
        free_text: info,
        spayed: spayed,
        rabies_vaccinated: vaccinated,
        human_friendly: hFriendly,
        dog_friendly: DFriendly,
      };

       // Replace with your actual API endpoint URL
      const params = new URLSearchParams({
        user_mail: "user_email",
      });

      // Create query string parameters
      // const params = new URLSearchParams({ user_email: user_email });
      const requestOptions = {
        method: "POST",
        mode: 'no-cors',
        Headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDog),
      };

      try {
        const response = await fetch(`${url}?${new URLSearchParams(params)}`,requestOptions);
        console.log(name);
        console.log("-----------------------" + requestOptions.body);
        console.log(response.status + " hi");
        if (response.status == "400") {
          alert("Bad Request: Please check your request data.");
        }
        if (response.ok) {
          // POST request was successful
          console.log("Request sent successfully!" + response.status);
          // Do something with the response if needed
        } else {
          prompt("Error:", response.error);
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

  
=======
import React from "react";

function AddDogContent() {
>>>>>>> origin
  return (
    <div className="col-12 col-md-9 p-4 " style={{ marginTop: "58px" }}>
      <div className="card p-4 m-3">
        <div className="card-body d-flex align-items-center justify-content-between">
          <form className="row g-3">
<<<<<<< HEAD
            <h2 className="ml-3">Add a new pet</h2>
=======
            <h2 className="ml-3">Animal Information</h2>
>>>>>>> origin
            <div className="col-md-12 mt-4">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
<<<<<<< HEAD
                required
                onInput={(e) => setName(e.target.value)}
              />
              {console.log(name)}
            </div>
            <div className="col-12">
              <select id="Weight"></select>
=======
              />
            </div>
            <div className="col-md-12 my-4">
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Age"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Breed"
                required=""
              />
>>>>>>> origin
            </div>
            <div className="col-md-12 my-4">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Weight"
<<<<<<< HEAD
                required
                onInput={(e) => setWeight(e.target.value)}
              />
              {console.log(Weight)}
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
            <div className="col-md-12 mt-3">
              <button
                type="submit"
                className="btn w-100 mt-2"
                onClick={handleAddDog}
              >
=======
                required=""
              />
            </div>
            <div className="col-md-12 my-2">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Vaccinaton"
                required=""
              />
            </div>
            <div className="col-md-12 ">
              <select
                id="inputState"
                className="form-select form-control"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>USA</option>
                <option>England</option>
                <option>Germany</option>
                <option>France</option>
              </select>
            </div>
            <div className="col-md-12 mt-3">
              <button type="submit" className="btn w-100 mt-2">
>>>>>>> origin
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDogContent;
