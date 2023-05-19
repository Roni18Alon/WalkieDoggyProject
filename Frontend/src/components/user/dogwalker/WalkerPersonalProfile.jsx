// import React from "react";
import "../owner/style.css";
import Footer from "../../constants/Footer";
import "../owner/owner.module.css";
import NavbarWalker from "../../constants/NavbarWalker";
import WalkerPersonalProfileContent from "./WalkerPersonalProfileContent";
import SidebarWalker from "./SidebarWalker";

function WalkerPersonalProfile() {
  return (
    <>
      <NavbarWalker />
      <div className="container-fluid">
        <div className="row wrapper">
          <SidebarWalker />
          <WalkerPersonalProfileContent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WalkerPersonalProfile;
