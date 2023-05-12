import React from 'react';
import "../owner/style.css";
import Footer from '../../constants/Footer';
import '../owner/owner.module.css';
import SidebarWalker from '../owner/SidebarWalker';
import NavbarWalker from '../../constants/NavbarWalker';
import WalkerHistoryContent from './WalkerHistoryContent';

function WalkerHistory() {
    return (
        <>       
          <NavbarWalker/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <SidebarWalker/>
                    <WalkerHistoryContent/>
                </div>
            </div>
            <Footer/>          
        </>
    )
}

export default WalkerHistory