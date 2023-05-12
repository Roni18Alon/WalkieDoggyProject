import React from 'react';
import "../owner/style.css";
import Footer from '../../constants/Footer';
import '../owner/owner.module.css';
import SidebarWalker from '../owner/SidebarWalker';
import NavbarWalker from '../../constants/NavbarWalker';
import WalkerFutureMeetingsContent from './WalkerFutureMeetingsContent';

function WalkerFutureMeetings() {
    return (
        <>       
          <NavbarWalker/>
            <div className="container-fluid">
                <div className="row wrapper" >
                    <SidebarWalker/>
                    <WalkerFutureMeetingsContent/>
                </div>
            </div>
            <Footer/>          
        </>
    )
}

export default WalkerFutureMeetings