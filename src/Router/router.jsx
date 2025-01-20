import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/sign up/SignUp";
import Login from "../Page/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AddCamp from "../Components/AddCamp";


const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
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
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>,
            children:[
                {
                path:'profile',
                element: <h1>hello profile</h1>
            },
                {
                path:'addcamp',
                element: <AddCamp></AddCamp>
            },
        ]
        }
       
    ]
}])

export default router;