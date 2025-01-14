import { Outlet } from "react-router";
import Navbar from "../Page/shared/Navbar";

const Main = () => {
    return (
        <div className="bg-background">
        
        <Navbar></Navbar>
        <main className='pt-24 px-2 min-h-[calc(100vh-68px)]'>

        <Outlet></Outlet>
        </main>
        </div>
    );
};

export default Main;