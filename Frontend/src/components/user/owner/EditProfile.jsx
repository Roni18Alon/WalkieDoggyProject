import React from 'react';
import Sidebar from './Sidebar';
import "./style.css";
import Footer from '../../constants/Footer';
import './owner.module.css';
import EditProfileContent from './EditProfileContent';
import NavbarOwner from '../../constants/NavbarOwner';

function Profile() {
    return (
        <>       
           <NavbarOwner/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <Sidebar />
                    <EditProfileContent />
                </div>
            </div>
            <Footer/>          
        </>
    )
}

export default Profile