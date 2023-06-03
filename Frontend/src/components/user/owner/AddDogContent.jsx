import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function AddDogContent() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const responseData = JSON.parse(searchParams.get("data"));
    console.log(responseData);

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
                const response = await fetch(
                    "https://dog.ceo/api/breeds/list/all"
                );
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
        const url =
            "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/register-dog";
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
            user_mail: "ronialon2008@gmail.com",
        });

        // Create query string parameters
        // const params = new URLSearchParams({ user_email: user_email });
        const requestOptions = {
            method: "POST",
            mode: "no-cors",
            Headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDog),
        };

        try {
            const response = await fetch(
                `${url}?${new URLSearchParams(params)}`,
                requestOptions
            );
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
                                {console.log(name)}
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
                                {console.log(Weight)}
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
