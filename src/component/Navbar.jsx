import { Link } from "react-router-dom";

import "../style/Navbar.css"

function Navbar(){

    const reload = ()=>{
        window.location.reload();
    }
    return(
        <nav className="navbar">
            <div className="logo" onClick={reload}>
                <img src="/Logo-removebg.png" alt="LOGO" />
            </div>
            <div className="hero-section">
                <Link to="/">
                    HOME
                </Link>
                <Link to="certificate">
                    OUR CERTIFICATE
                </Link>
                <Link to="https://bastikipathshala.org/about/">
                    ABOUT US
                </Link>
                <Link to= "volunteer">
                    VOLUNTEER
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;