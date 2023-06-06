import React from 'react';
import "../owner/style.css";
import Footer from '../../constants/Footer';
import '../owner/owner.module.css';
import SidebarWalker from '../owner/SidebarWalker';
import NavbarWalker from '../../constants/NavbarWalker';
import WalkerFutureMeetingsContent from './WalkerFutureMeetingsContent';
import { useStateContext } from '../../../contexts/ContextProvider';

function WalkerFutureMeetings() {
    
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
                    <WalkerFutureMeetingsContent />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default WalkerFutureMeetings