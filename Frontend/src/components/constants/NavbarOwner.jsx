import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import { useGetUserInfoQuery } from "../tokenApi";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color: color || "inherit" }} // Set a default value if color is not provided
    className="relative p-3 text-xl rounded-full hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
  } = useStateContext();

  const { data: responseData } = useGetUserInfoQuery();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  // Check if responseData exists and contains the necessary properties
  const userFullName =
    responseData && responseData.body && responseData.body.user_full_name
      ? responseData.body.user_full_name
          .split(" ")
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(" ")
      : "";

  return (
    <div className="relative flex justify-between w-full p-2 ">
      <div className="flex items-center gap-4">
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <Link className="text-3xl font-bold" to="/">
          WalkieDoggy<span className="text-primary">.</span>{" "}
        </Link>
      </div>

      <div className="flex">
        <div className="relative flex items-center gap-2 p-1 rounded-lg cursor-pointer group hover:bg-light-gray">
          <img
            className="w-8 h-8 rounded-full"
            src={
              "http://localhost:3000/static/media/roni.9b135d7a803b49120cfc.png"
            }
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="ml-1 font-bold text-gray-400 text-14">
              {userFullName}
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
          <ul className="absolute top-[100%] box-shadow hidden bg-white group-hover:block">
            <li>
              <Link className="dropdown-item" to="/Profile">
                Profile
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
