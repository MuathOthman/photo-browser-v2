import {Outlet} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const MainLayout = () => {
    return (
        <>
            <main className="pb-32">
                <Outlet/>
            </main>
            <Navbar/>
        </>
    );
};

export default MainLayout;