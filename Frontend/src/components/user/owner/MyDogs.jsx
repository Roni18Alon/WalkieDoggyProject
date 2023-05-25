import React from 'react';
import Sidebar from './Sidebar';
import "./style.css";
import Footer from '../../constants/Footer';
import './owner.module.css';
import MyDogsContent from './MyDogsContent';
import NavbarOwner from '../../constants/NavbarOwner';

function MyDogs() {
    return (
        <>
           
            
           <NavbarOwner/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <Sidebar />
                    <MyDogsContent/>
                </div>
            </div>
            <Footer/>
            
        </>
    )
}

export default MyDogs