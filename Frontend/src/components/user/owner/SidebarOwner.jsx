import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SidebarOwner() {
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
      className="col-12 col-md-3 col-md-3-profile p-0"
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
          <ul className="navbar-nav mr-auto flex-column vertical-nav">
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
      <ul className="nav navbar-show flex-column">
        <li
          className={`nav-item nav-item-profile mt-4 ${
            isActive("/WalkerProfile") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/WalkerProfile"
            onClick={() => handlePageClick("/WalkerProfile")}
          >
            <span className="d-flex jusitfy-content-center">
              <span
                className="icon icon-user"
                style={{ marginLeft: "4px", marginRight: "23px" }}
              />
              <span className="sidebar-link-text">Profile</span>
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/EditWalkerProfile") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/EditWalkerProfile"
            onClick={() => handlePageClick("/EditWalkerProfile")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon fa-solid fa-pen-to-square" />
              <span className="sidebar-link-text">Edit Profile</span>
            </span>
          </Link>
        </li>
        <li
          className={`nav-item nav-item-profile ${
            isActive("/WalkerFutureMeetings") ? "active" : ""
          }`}
        >
          <Link
            className="nav-link nav-link-profile"
            to="/WalkerFutureMeetings"
            onClick={() => handlePageClick("/WalkerFutureMeetings")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon fa-solid fa-handshake" />
              <span className="sidebar-link-text">Future Meetings</span>
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
            to="/WalkerHistory"
            onClick={() => handlePageClick("/WalkerHistory")}
          >
            <span className="d-flex jusitfy-content-center">
              <span className="icon icon-search" />
              <span className="sidebar-link-text">History</span>
            </span>{" "}
            <i className=""></i>
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
              <span className="sidebar-link-text">History</span>
            </span>{" "}
            <i className=""></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarOwner;
