import React from "react";
import "../owner/style.css";
import Footer from "../../constants/Footer";
import "../owner/owner.module.css";
import EditWalkerProfileContent from "./EditWalkerProfileContent";
import SidebarWalker from "./SidebarWalker";
import NavbarWalker from "../../constants/NavbarWalker";

function EditWalkerProfile() {
  return (
    <>
      <NavbarWalker />
      <div className="container-fluid">
        <div className="row wrapper">
          <SidebarWalker />
          <EditWalkerProfileContent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditWalkerProfile;
