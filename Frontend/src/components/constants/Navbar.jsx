import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGetUserInfoQuery } from "../tokenApi";

const Navbar = () => {
  const { data } = useGetUserInfoQuery();
  console.log("*****************");
  console.log(data);

  // Check if data exists and contains the necessary properties
  const userFullName =
    data && data.body && data.body.user_full_name ? data.body.user_full_name : "";

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        {/* ... */}
      </div>
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              {/* ... */}
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  {/* ... */}
                  <li className="has-children">
                    <a href="/" className="nav-link">
                      {userFullName
                        ? userFullName
                            .split(" ")
                            .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                            .join(" ")
                        : ""}
                    </a>
                    {/* ... */}
                  </li>
                </ul>
              </nav>
            </div>
            {/* ... */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
