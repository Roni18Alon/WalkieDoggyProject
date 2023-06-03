import React from 'react';
import WalkerProfileContent from './WalkerProfileContent';
import "../owner/style.css";
import Footer from '../../constants/Footer';
import '../owner/owner.module.css';
import SidebarWalker from '../owner/SidebarWalker';
import NavbarWalker from '../../constants/NavbarWalker';
import { useStateContext } from '../../../contexts/ContextProvider';

function WalkerProfile() {
   

    const { activeMenu } = useStateContext();

    return (
        <div className="relative flex">
            {activeMenu ? (
                <div className="fixed !bg-white w-72 sidebar ">
                    <SidebarWalker />
                </div>
            ) : (
                <div className="w-0">
                    <SidebarWalker />
                </div>
            )}
            <div
                className={
                    activeMenu
                        ? " bg-white min-h-screen md:ml-72 w-full  "
                        : "bg-white  w-full min-h-screen flex-2 "
                }
            >
                <div className="fixed w-full bg-white md:static navbar ">
                    <NavbarWalker />
                </div>
                <div>
                    <WalkerProfileContent />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default WalkerProfile