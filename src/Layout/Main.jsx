import { Outlet } from "react-router";
import Navbar from "../Page/shared/Navbar";

const Main = () => {
    return (
        <div>
        
        <Navbar></Navbar>
        <main className="h-svh">

        <Outlet></Outlet>
        </main>
        </div>
    );
};

export default Main;