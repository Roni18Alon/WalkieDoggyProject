import React from "react";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activePage, setActivePage] = useState("");

  // Get the current path using the useLocation hook from react-router-dom
  const location = useLocation();
  const currentPath = location.pathname;

  // Set the active page state when the component mounts
  React.useEffect(() => {
    setActivePage(currentPath);
  }, [currentPath]);

  const handlePageClick = (path) => {
    setActivePage(path);
  };

  // Define a function to check if a given path is the active page
  const isActive = (path) => {
    return activePage === path;
  };
  return (
    <div
      className="p-0 bg-red-700 col-12 col-md-3 col-md-3-profile"
      style={{ marginTop: "80px" }}
    >
      {/* Show on small screens only*/}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light navbar-hide profile-nav"
        style={{ display: "none" }}
      >
        <div className="p-3">
          <a className="navbar-brand" href="/#">
            Dog Owner
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mr-auto navbar-nav flex-column vertical-nav">
            <li className="nav-item nav-item-profile active">
              <a className="nav-link nav-link-profile" href="/#">
                <span className="d-flex jusitfy-content-center">
                  <span
                    className="icon icon-user ms-1"
                    style={{ marginRight: 18 }}
                  />
                  Profile
                </span>
              </a>
            </li>
            <li className="nav-item nav-item-profile">
              <Link className="nav-link nav-link-profile" href="/AddDog">
                <span className="d-flex jusitfy-content-center">
                  <span className="icon icon-dashboard2" />
                  Add Dog
                </span>
              </Link>
            </li>
            <li className="nav-item nav-item-profile">
              <Link className="nav-link nav-link-profile" href="/MyDogsList">
                <span className="d-flex jusitfy-content-center">
                  <span className="icon icon-dashboard2" />
                  My Dogs
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-profile" href="/#">
                <span className="d-flex jusitfy-content-center">
                  <span className="icon icon-save2" />
                  Saved Jobs
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*------------------------ End show on small screens only ------------------------------*/}
      <ul className="bg-red-300 nav navbar-show flex-column">
        <li
          className={`nav-item nav-item-profile mt-4 ${
            isActive("/Profile") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/Profile"
            onClick={() => handlePageClick("/Profile")}
          >
            <span className="d-flex jusitfy-content-center">
              <span
                className="icon icon-user"
                style={{ marginLeft: "4px", marginRight: "23px" }}
              />
              Profile H
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/AddDog") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/AddDog"
            onClick={() => handlePageClick("/AddDog")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon fa-solid fa-dog" />
              Add Dog
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/MyDogs") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/MyDogs"
            onClick={() => handlePageClick("/MyDogs")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon fa-solid fa-list" />
              My Dogs
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/DogWalkersList") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/DogWalkersList"
            onClick={() => handlePageClick("/DogWalkersList")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon icon-search" />
              Find Dog Walkers
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/WalkerHistory") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/OwnerHistory"
            onClick={() => handlePageClick("/OwnerHistory")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon icon-calendar" />
              History
            </span>{" "}
            <i class=""></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
