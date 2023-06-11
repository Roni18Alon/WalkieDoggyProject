import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import PetsIcon from "@mui/icons-material/Pets";
import ReportIcon from "@mui/icons-material/Report";
import { useGetUserQuery } from "../../authApi";
import { useAddDogMutation, useGetDogBreedsQuery } from "../../dogApi";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "../../tokenApi";

function AddDogContent() {


    const { data: responseData } = useGetUserInfoQuery();
    console.log(responseData?.body?.user_email);


    //Birthday arrays:
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
  const [info, setInfo] = useState(0);
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
  const [base64Image, setBase64Image] = useState("");
  //fetch dog breed list
  const { mutate: addDog } = useAddDogMutation(() => console.log("hi"));

  const { data } = useGetDogBreedsQuery();

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
        if (file) {
            const reader = new FileReader();
            reader.onloadend = (e) => {
              const base64String = e.target.result;
              setBase64Image(base64String);
            };
            reader.readAsDataURL(file);
          }
    };
    //add Dog to database
    const handleAddDog = async () => {
        console.log("in HandleaddDog");

        const newDog = {
            dog_name: name,
            dog_breed: breed,
            dog_weight: Weight,
            dog_gender: gender,
            dog_birthday: bithDay + "-" + bithMonth + "-" + bithYear,
            dog_birthday: date,
            free_text: info,
            spayed: spayed,
            rabies_vaccinated: vaccinated,
            human_friendly: hFriendly,
            dog_friendly: DFriendly,
        };
        if (!name || !breed || !Weight || !bithDay || !bithMonth || !bithYear) {
            // Show error dialog if any parameter is empty
            setModalText("Please fill in all the required fields.");
            setIsModalOpen(true);
            setModalCloseText("Close");
            setModalIcon(<ReportIcon />);
            return;
          }
        addDog({ ...newDog, user_email: responseData.body[0].user_email});
    };

    return (
        <div
            className=""
            style={{
                backgroundColor: "#f8f8f8",
            }}
        >
            <div className="md:p-4 !py-[100px] md:!py-4 m-3">
                <div className="d-flex align-items-center justify-content-between">
                    <form className="g-3 p-4 lg:p-5 w-full md:w-[800px] max-w-[800px] bg-white mx-auto rounded-lg box-shadow">
                        <h2 className="">Add a new pet</h2>

                        <div className="flex flex-col gap-3 my-3 md:flex-row">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Name"
                                    required
                                    onInput={(e) => setName(e.target.value)}
                                />   
                            </div>
                            {/* <div className=" col-12">
                            <select id="Weight"></select>
                        </div> */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    placeholder="Weight"
                                    required
                                    onInput={(e) => setWeight(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 my-3 md:items-center md:flex-row">
                            {/* <h5>Pet's Breed</h5> */}
                            <select
                                className="w-full rounded"
                                name="breed"
                                onChange={(e) => setBreed(e.target.value)}
                                required
                            >
                                <option value="">Select Pet Breed</option>
                                {data &&
                                    Array.isArray(data) &&
                                    data.length > 0 &&
                                    data.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                            </select>
                            <div className="flex flex-1 gap-3 mt-8 md:items-center">
                                <label className="!static flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="Male"
                                        name="petGender"
                                        id="petGender"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    Male
                                </label>
                                <label className="!static flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="Female"
                                        name="petGender"
                                        id="petGender"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    Female
                                </label>
                            </div>
                        </div>
                        <div
                            className=""
                            style={{ marginTop: "10px", marginRight: "10px" }}
                        >
                            <h5>Pet's Birthday</h5>
                            <div className="flex flex-col gap-2 mt-1 md:flex-row">
                                <select
                                    className="flex-1 rounded"
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
                                    className="flex-1 rounded"
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
                                    className="flex-1 rounded"
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
                        </div>

                        <div
                            className="my-3 mt-4 md:mt-3"
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

                        <div className="">
                            <input
                                type="checkbox"
                                name="spayed"
                                id="spayed"
                                checked={spayed}
                                onChange={handleSpayedChange}
                            />

                            <label
                                htmlFor="spayed"
                                className="label-agree-term"
                            >
                                <span>
                                    <span />
                                </span>
                                Spayed
                            </label>
                        </div>
                        <div className="">
                            <input
                                className="w-8 h-8"
                                type="checkbox"
                                name="vaccinated"
                                id="vaccinated"
                                checked={vaccinated}
                                onChange={handleVaccinatedChange}
                            />
                            <label
                                htmlFor="vaccinated"
                                className="label-agree-term"
                            >
                                <span>
                                    <span />
                                </span>
                                Rabies vaccinated
                            </label>
                        </div>
                        <div className="">
                            <input
                                className="w-8 h-8"
                                type="checkbox"
                                name="hFriendly"
                                id="hFriendly"
                                checked={hFriendly}
                                onChange={handleHFriendlyChange}
                            />
                            <label
                                htmlFor="hFriendly"
                                className="label-agree-term"
                            >
                                <span>
                                    <span />
                                </span>
                                Human friendly
                            </label>
                        </div>
                        <div className="">
                            <input
                                className="w-8 h-8"
                                type="checkbox"
                                name="DFriendly"
                                id="DFriendly"
                                checked={DFriendly}
                                onChange={handleDFriendlyChange}
                            />
                            <label
                                htmlFor="DFriendly"
                                className="label-agree-term"
                            >
                                <span>
                                    <span />
                                </span>
                                Dog friendly
                            </label>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            className="px-2 py-2 pb-3 mt-3 border form-control"
                            id="inputImage"
                            onChange={handleImageUpload}
                        />
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="mt-2 bg-[#03C9D7] text-white py-2  rounded  w-100"
                                onClick={handleAddDog}
                            >
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
