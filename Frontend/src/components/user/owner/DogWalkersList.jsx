import React from "react";
import Sidebar from "./Sidebar";
import "./style.css";
import Footer from "../../constants/Footer";
import DogWalkersListContent from "./DogWalkersListContent";
import NavbarOwner from "../../constants/NavbarOwner";
import { useStateContext } from "../../../contexts/ContextProvider";

const DogWalkersList = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className="relative flex">
      {activeMenu ? (
        <div className="fixed !bg-white w-72 sidebar ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? " bg-white min-h-screen md:ml-72 w-full  "
            : "bg-white  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed w-full bg-white md:static navbar ">
          <NavbarOwner />
        </div>
        <div>
          <DogWalkersListContent />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DogWalkersList;
