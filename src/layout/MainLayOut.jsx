import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen mt-5">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayOut;