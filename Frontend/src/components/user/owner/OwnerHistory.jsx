// import React from "react";
import "../owner/style.css";
import Footer from "../../constants/Footer";
import "../owner/owner.module.css";
import Sidebar from "../owner/Sidebar";
import NavbarOwner from "../../constants/NavbarOwner";
import OwnerHistoryContent from "./OwnerHistoryContent";

function OwnerHistory() {
  return (
    <>
      <NavbarOwner />
      <div className="container-fluid">
        <div className="row wrapper">
          <Sidebar />
          <OwnerHistoryContent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OwnerHistory;
