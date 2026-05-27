import react from "react";
import Navabr from "../components/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layout=()=>{

    return(
        <>
            <div>
                <Navabr />
            
                {/*This is where the child routes will be rendered */}
                <Outlet />
            </div>
            
        </>
    )
}

export default Layout;
