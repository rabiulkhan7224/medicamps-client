import { Outlet } from "react-router";
import SideBar from "../Page/Dashboard/SideBar";

const DashboardLayout = () => {
    return (
       
            <div className=" flex h-screen overflow-y-auto">
                <SideBar></SideBar>
            
            <div className="flex-1 p-8 bg-gray-100 overflow-auto"> 
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;

