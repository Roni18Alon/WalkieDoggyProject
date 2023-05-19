// import React from "react";
import AddImage from "./AddImage";

function AddDogContent() {
  return (
    <div className="col-12 col-md-9 p-4 " style={{ marginTop: "58px" }}>
      <div className="card p-4 m-3">
        <div className="card-body d-flex align-items-center justify-content-between">
          <form className="row g-3">
            <h2 className="ml-3">Animal Information</h2>
            <div className="col-md-12 mt-4">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
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
            </div>
            <div className="col-md-12 my-4">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Weight"
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
              <AddImage />
              <button type="submit" className="btn btn-primary mt-3 ">
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
