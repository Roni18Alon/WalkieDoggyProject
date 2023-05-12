import React from 'react';
import Sidebar from './Sidebar';
import "./style.css";
import Footer from '../../constants/Footer';
import DogWalkersListContent from './DogWalkersListContent'
import NavbarOwner from '../../constants/NavbarOwner';

const DogWalkersList = () => {
    return (
        <>
        <div class="site-wrap">
        <NavbarOwner/>
        <div className="container-fluid">
            <div className="row wrapper">
                <Sidebar />
                <DogWalkersListContent/>
            </div>
        </div>
        <Footer/>
        </div>
    </>
    )
}

export default DogWalkersList