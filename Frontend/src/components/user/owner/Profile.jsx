import React from 'react';
import Sidebar from './Sidebar';
import ProfileContent from './ProfileContent';
import "./style.css";
import Footer from '../../constants/Footer';
import './owner.module.css';
import NavbarOwner from '../../constants/NavbarOwner';

function Profile() {
    return (
        <>
           
            
            <NavbarOwner/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <Sidebar />
                    <ProfileContent />
                </div>
            </div>
            <Footer/>
            
        </>
    )
}

export default Profile