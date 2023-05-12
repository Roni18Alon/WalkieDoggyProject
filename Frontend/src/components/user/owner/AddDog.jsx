import React from 'react';
import Sidebar from './Sidebar';
import "./style.css";
import Footer from '../../constants/Footer';
import AddDogContent from './AddDogContent';
import NavbarOwner from '../../constants/NavbarOwner';




const AddDog = () => {
  return (
    <>
    <div class="site-wrap">
    <NavbarOwner/>
    <div className="container-fluid">
        <div className="row wrapper">
            <Sidebar />
            <AddDogContent/>
        </div>
    </div>
    <Footer/>
    </div>
</>
  )
}

export default AddDog