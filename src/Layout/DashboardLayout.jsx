import { Outlet } from "react-router";
import SideBar from "../Page/Dashboard/SideBar";

const DashboardLayout = () => {
    return (
       
            <div className="relative flex h-screen">
                <SideBar></SideBar>
            
            <div className="flex-1 p-8 bg-gray-100 overflow-y-auto"> 
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;

