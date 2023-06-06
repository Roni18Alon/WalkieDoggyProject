import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ResultList from "./ResultList";
import { IoPawSharp } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function DogWalkerListContent() {
    // State variables for search criteria
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [distance, setDistance] = useState(0);
    const [rating, setRating] = useState(null);
    const [price, setPrice] = useState(null);
    const user_email = "ronialon2008@gmail.com";
    const url =
        "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/search";

    // Event handler for search button
    const handleSearch = async (e) => {
        e.preventDefault();

        const requestData = {
            distance: parseInt(distance),
            start_time: "23-05-28 18:00:00",
            end_time: "23-05-28 19:00:00",
            max_price: parseInt(price),
            min_rating: parseInt(rating),
        };

        const params = new URLSearchParams({ user_mail: user_email });

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
            console.log(response);
        } catch (error) {
            console.log("Error:", error.response);
        }

        console.log(requestData);
    };

    // Event handler for rating change
    const handleChange = (newRating) => {
        setRating(newRating);
    };

    // Function to open the start date picker
    const openStartDatePicker = () => {
        startDatePickerRef.current.setOpen(true);
    };

    // Function to open the end date picker
    const openEndDatePicker = () => {
        endDatePickerRef.current.setOpen(true);
    };

    // Refs for date pickers
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    // rows.forEach((row) => {
    //   const name = row.cells[1].textContent;

    //   if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
    //     row.style.display = "";
    //     rowCount++;
    //   } else {
    //     row.style.display = "none";
    //   }
    // });

    // const message = rowCount === 0 ? "No records found." : "";

    // const [startDate, setStartDate] = useState();
    // const [endDate, setEndDate] = useState();

    // const [startDate, setStartDate] = useState(null);
    // const [selectedTime, setSelectedTime] = useState(null);

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f8f8f8",
                }}
                className="p-2 py-8 md:px-0"
            >
                <div className="m-2 md:p-4 !py-[100px] md:!py-8 m-3 mx-auto bg-white px-4 rounded-lg box-shadow max-w-[800px] ">
                    <div className="row">
                        <div className="col-lg-12 card-margin">
                            <div>
                                <div className="mb-3 input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="From"
                                        value={
                                            startDate
                                                ? startDate.toString()
                                                : ""
                                        }
                                        readOnly
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn w-[100px] btn-outline-secondary"
                                            type="button"
                                            onClick={openStartDatePicker}
                                        >
                                            From
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-3 input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="To"
                                        value={
                                            endDate ? endDate.toString() : ""
                                        }
                                        readOnly
                                    />
                                    <div className="input-group-append ">
                                        <button
                                            className="btn btn-outline-secondary w-[100px]"
                                            type="button"
                                            onClick={openEndDatePicker}
                                        >
                                            To
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect
                                        dateFormat="Pp"
                                        className="d-none"
                                        ref={startDatePickerRef}
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        showTimeSelect
                                        dateFormat="Pp"
                                        className="d-none"
                                        ref={endDatePickerRef}
                                    />
                                </div>
                            </div>
                            <form id="search-form">
                                <div className="grid grid-cols-1 sm:grid-te !p-3">
                                    {/* Rating  Section*/}

                                        <label className="!static !p-0 !my-0">
                                            <Rating
                                                count={5}
                                                onChange={handleChange}
                                                size={35}
                                                activeColor="#ffc107"
                                                filledIcon={
                                                    <div className="custom-icon">
                                                        <IoPawSharp />
                                                    </div>
                                                }
                                                emptyIcon={
                                                    <div className="custom-icon">
                                                        <IoPawSharp />
                                                    </div>
                                                }
                                                value={rating}
                                            />
                                        </label>

                                    {/* Price-Range */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="Price-range"
                                            className="form-label"
                                        ></label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                            // class="form-control"
                                            className="h-2 p-0 bg-gray-300 border-none outline-none focus:border-none focus:outline-none"
                                            id={"Price-range" + price} // save for back
                                        />
                                        <h4 className="mt-2">Price range ({price})</h4>
                                    </div>

                                    {/* Distance */}
                                    <div>
                                        <select
                                            name="Distance"
                                            className="w-full my-3"
                                            onChange={(e) => {
                                                setDistance(e.target.value);
                                            }}
                                        >
                                            <option value={0}>Distance</option>
                                            <option value={1}>1 km</option>
                                            <option value={5}>5 km</option>
                                            <option value={10}>10 km</option>
                                        </select>
                                    </div>

                                    {/* Search btn */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="bg-[#03C9D7] px-8 text-white py-2.5 rounded-lg"
                                            onClick={handleSearch}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-search"
                                            >
                                                <circle cx={11} cy={11} r={8} />
                                                <line
                                                    x1={21}
                                                    y1={21}
                                                    x2="16.65"
                                                    y2="16.65"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/*Result Section------ */}
                    </div>
                    <div className="row" style={{ marginTop: "-50px" }}>
                        <div className="col-12">
                            <div className="card card-margin">
                                <div className="card-body">
                                    <div className="row search-body">
                                        <div className="col-lg-12">
                                            <div className="search-result">
                                                <div
                                                    className="result-body"
                                                    style={{
                                                        height: "70vh",
                                                        overflowY: "auto",
                                                    }}
                                                >
                                                    <div className="table-responsive">
                                                        <table className="table widget-26">
                                                            <tbody>
                                                                {ResultList()}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default DogWalkerListContent;
