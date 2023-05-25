import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import ResultList from "./ResultList";
import { IoPawSharp } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function EditProfileContent() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const startDatePickerRef = useRef(null);
  const endDatePickerRef = useRef(null);

  const openStartDatePicker = () => {
    if (startDatePickerRef.current) {
      startDatePickerRef.current.setOpen(true);
    }
  };

  const openEndDatePicker = () => {
    if (endDatePickerRef.current) {
      endDatePickerRef.current.setOpen(true);
    }
  };

  const handleSubmit = () => {
    // if (startDate && endDate) {
    //   const startTime = format(startDate, 'yyyy-MM-dd HH:mm:ss');
    //   const endTime = format(endDate, 'yyyy-MM-dd HH:mm:ss');

    //   console.log('Start Time:', startTime);
    //   console.log('End Time:', endTime);
    // }
  };
  
  const handleSearch = () => {


    /*axios
      .post(
        "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/search",
        {
          newDog
        }
      )

      .then(function (response) {
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      }); 
    ResultList();*/
  };

  const isEmpty = () => {
    return rating && distance && startDate  && price
      ? handleSearch
      : null;
  };

  const handleChange = (newRating) => {
    setRating(newRating);
  };



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

  const [distance, setDistance] = useState(0);
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState(null);
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();

  // const [startDate, setStartDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  return (
    <>
      <div
        className="col-12 col-md-9 col-md-9-profile p-0"
        style={{
          overflowY: "auto",
          position: "relative",
          overflowX: "hidden",
          height: "100vh",
          marginTop: "80px",
          backgroundColor: "#e2e8f0",
        }}
      >
        {/* <div className="card py-2 px-2">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="image d-flex">
              <img
                src={User}
                width="80px"
                alt=""
                className="mr-4"
                onClick={() => document.getElementById("profilePic").click()}
              />
              <input
                type="file"
                className="custom-file-input"
                id="profilePic"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div className="m-auto">
                <p className="card-text ms-3">
                  John Smith <br />
                  <span id="filename">Specialist</span>
                  <span id="filename">{fileName}</span>
                </p>
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-update px-3">
                Logout
              </button>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-12 card-margin">
            <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="From"
          value={startDate ? startDate.toString() : ''}
          readOnly
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={openStartDatePicker}
          >
            From
          </button>
        </div>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="To"
          value={endDate ? endDate.toString() : ''}
          readOnly
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
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
              <div className="card search-form">
                <div className="card-body p-0">
                  <form id="search-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="row no-gutters">

                          {/* Rating  Section*/}

                          <div className="col-4 p-4" style={{ left: "30px" }}>
                            {[...Array(5)].map((_, index) => {
                              const currentRating = index + 1;
                              return (
                                <label key={currentRating}>
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
                              );
                            })}
                          </div>

                          {/* Price-Range */}
                          <div
                            className="col-lg-3 col-md-3 col-sm-12 p-0"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              right: "80px",
                            }}
                          >
                            <div>
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
                                onChange={(e) => setPrice(e.target.value)}
                                class="form-range"
                                id={"Price-range" + price} // save for back
                              />
                              <h7
                                className="col-lg-12"
                                style={{ left: "30px", opacity: "0.75" }}
                              >
                                Price range
                              </h7>
                              <h4 className="col-12" style={{ left: "50px" }}>
                                {price}
                              </h4>
                            </div>
                            <div
                              className="col-lg-3 col-md-3 col-sm-12 p-0"
                              style={{ left: "100px" }}
                            >
                              {/* <input
                                type="text"
                                placeholder="from:"
                                className="form-control"
                                style={{width: "100px"}}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                              /> */}
                            </div>



                          </div>

                          {/* Distance */}
                          <div>
                            <select
                              className="col-lg-3 col-md-3 col-sm-12 p-0"
                              style={{ width: "90px",
                                    left: "60px" }}
                              name="Distance"
                              onChange={(e) => {
                                setDistance(e.target.value);
                              }}
                            >
                              <option value="0">Distance</option>
                              <option value="1">1 km</option>
                              <option value="5">5 km</option>
                              <option value="10">10 km</option>
                            </select>
                          </div>

                          {/* Search btn */}
                          <div
                            className="col-lg-3 col-md-3 col-sm-12 p-0"
                            style={{ left: "80px" }}
                          >
                            <button
                              type="submit"
                              className="btn btn-base"
                              onClick={handleSubmit()}
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
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                              </svg>
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
                          style={{ height: "70vh", overflowY: "auto" }}
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

export default EditProfileContent;
