import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ResultList from "./ResultList";
import { IoPawSharp } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useGetUserInfoQuery } from "../../tokenApi";

function DogWalkerListContent() {
  const { data } = useGetUserInfoQuery();
  const user = data && data.body;

  // State variables for search criteria
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [distance, setDistance] = useState("");
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const url = "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/search";

  // Event handler for search button
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setShowModal(true);
      return;
    }

    const requestData = {
      distance_km: parseInt(distance),
      start_time: startDate.toISOString(),
      end_time: endDate.toISOString(),
      max_price: parseInt(price),
      min_rating: parseFloat(rating),
    };

    const params = new URLSearchParams({ user_mail: user.user_email });

    try {
      const response = await axios.post(`${url}?${params}`, JSON.stringify(requestData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("SearchResult", JSON.stringify(response.data));
      setIsSearch(true);

      if (response.data.length === 0) {
        setShowModal(true);
      }
    } catch (error) {
      console.log("Error message:", error.message);
    }
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
                    value={startDate ? startDate.toString() : ""}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button
                      className="btn w-[100px] btn-outline-secondary"
                      type="button"
                      onClick={openStartDatePicker}
                      style={{ backgroundColor: "#03C9D7", color: "#ffffff" }}
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
                    value={endDate ? endDate.toString() : ""}
                    readOnly
                  />
                  <div className="input-group-append ">
                    <button
                      className="btn btn-outline-secondary w-[100px]"
                      type="button"
                      onClick={openEndDatePicker}
                      style={{ backgroundColor: "#03C9D7", color: "#ffffff" }}
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
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    timeFormat="HH:mm:ss"
                    timeIntervals={1}
                    timeCaption="Time"
                    className="d-none"
                    ref={startDatePickerRef}
                  />

                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    timeFormat="HH:mm:ss"
                    timeIntervals={1}
                    timeCaption="Time"
                    className="d-none"
                    ref={endDatePickerRef}
                  />
                </div>
              </div>
              <form id="search-form">
                <div className="grid grid-cols-1 sm:grid-te !p-3">
                  {/* Rating Section*/}
                  <label className="!static !p-0 !my-0">
                    <Rating
                      count={5}
                      onChange={handleChange}
                      size={35}
                      activeColor="#8B4513"
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

                  {/* Price Range */}
                  <div className="mb-3">
                    <label htmlFor="Price-range" className="form-label"></label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="h-2 p-0 bg-gray-300 border-none outline-none focus:border-none focus:outline-none"
                      id={"Price-range" + price}
                      style={{ backgroundColor: "#03C9D7" }}
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
                      style={{ backgroundColor: "#03C9D7", color: "#ffffff" }}
                    >
                      <option value={0}>Distance</option>
                      <option value={1}>1 km</option>
                      <option value={5}>5 km</option>
                      <option value={10}>10 km</option>
                    </select>
                  </div>

                  {/* Search button */}
                  <div>
                    <button
                      type="submit"
                      className="mt-4 w-full"
                      onClick={handleSearch}
                      style={{ backgroundColor: "#03C9D7", color: "#ffffff" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              {isSearch && (
                <div className="mt-8">
                  {localStorage.getItem("SearchResult") && (
                    <ResultList results={JSON.parse(localStorage.getItem("SearchResult"))} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal-container bg-white w-1/3 rounded shadow-lg z-50">
            <div className="modal-content py-4 px-6">
              <div className="modal-header">
                <h3 className="text-lg font-semibold">No results found</h3>
              </div>
              <div className="modal-body">
                <p>Please adjust your search criteria and try again.</p>
              </div>
              <div className="modal-footer">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DogWalkerListContent;
