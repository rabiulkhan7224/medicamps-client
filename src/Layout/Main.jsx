import { Outlet } from "react-router";
import Navbar from "../Page/shared/Navbar";
import Footer from "../Page/shared/Footer";

const Main = () => {
    return (
        <div className="bg-background">
        
        <Navbar></Navbar>
        <main className='pt-24 px-2 min-h-[calc(100vh-68px)]'>

        <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </div>
    );
};

export default Main;