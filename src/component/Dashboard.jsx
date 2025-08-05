import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";

function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="nav">
                <Navbar />
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard