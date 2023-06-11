import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "../tokenApi";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color: color || "inherit" }}
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
  const { currentColor, activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useStateContext();

  const { data } = useGetUserInfoQuery();
  const userImage = data && data.body && data.body.user_image;

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLogout = () => {
    document.cookie =
      "walkieDoggy=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  // Check if data exists and contains the necessary properties
  const userFullName =
    data && data.body && data.body.user_full_name
      ? data.body.user_full_name
          .split(" ")
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(" ")
      : "";

  return (
    <div className="relative flex justify-between w-full p-2">
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
            src={userImage}
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
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
