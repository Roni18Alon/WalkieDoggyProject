import React from 'react';
import WalkerProfileContent from './WalkerProfileContent';
import "../owner/style.css";
import Footer from '../../constants/Footer';
import '../owner/owner.module.css';
import SidebarWalker from '../owner/SidebarWalker';
import NavbarWalker from '../../constants/NavbarWalker';

function WalkerProfile() {
    return (
        <>
            <NavbarWalker/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <SidebarWalker/>
                    <WalkerProfileContent />
                </div>
            </div>
            <Footer/>          
        </>
    )
}

export default WalkerProfile