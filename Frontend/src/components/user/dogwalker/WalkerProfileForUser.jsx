import React from "react";
import WalkerProfileContent from "./WalkerProfileContent";
import "../owner/style.css";
import Footer from "../../constants/Footer";
import "../owner/owner.module.css";
import Sidebar from "../owner/Sidebar";
import NavbarOwner from "../../constants/NavbarOwner";

function WalkerProfileForUser() {
  return (
    <>
      <NavbarOwner />
      <div className="container-fluid">
        <div className="row wrapper">
          <Sidebar />
          <WalkerProfileContent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WalkerProfileForUser;
