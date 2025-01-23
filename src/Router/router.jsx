import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/sign up/SignUp";
import Login from "../Page/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AddCamp from "../Components/AddCamp";
import ErrorPage from "../Page/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AvailableCamps from "../Page/Available/AvailableCamps";
import CampDetails from "../Page/Available/CampDetails";
import RegisteredCamps from "../Components/RegisteredCamps";
import Payment from "../Page/Dashboard/Payment";
import AdminRuter from "./AdminRuter";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
            path:'/register',
            element:<SignUp></SignUp>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/available',
            element:<AvailableCamps></AvailableCamps>,
        },
        {
            path:'/camps/:id',
            element:<CampDetails></CampDetails>,
            
        },
        {
            path:'/dashboard',
            element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[
                {
                path:'profile',
                element: <h1>hello profile</h1>
            },
                {
                path:'addcamp',
                element: <AdminRuter><AddCamp></AddCamp></AdminRuter>
            },
                {
                path:'registered',
                element: <RegisteredCamps></RegisteredCamps>
            },
                {
                path:'payment/:id',
                element: <Payment></Payment>
            },
        ]
        }
       
    ]
}])

export default router;