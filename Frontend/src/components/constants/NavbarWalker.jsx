import React from "react";
import { Link } from "react-router-dom";

const NavbarWalker = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
                <a href="" className="h2 mb-0">
                WalkieDoggy<span className="text-primary">.</span>{" "}
                </a>
              </h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <Link to="/HomeWalker" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/WalkerPersonalProfile" className="nav-link">
                      Dog Walker
                    </Link>
                  </li>
                  <li className="has-children">
                    <a href="" className="nav-link">
                      John Smith
                    </a>
                    <ul className="dropdown">
                      <li>
                        <Link class="dropdown-item" to="/WalkerPersonalProfile">
                          Profile
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
              style={{ position: "relative", top: 3 }}
            >
              <a
                href="/"
                className="site-menu-toggle js-menu-toggle float-right"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarWalker;
