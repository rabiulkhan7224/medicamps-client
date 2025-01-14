import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SingUp from "../Page/sign up/SingUp";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
            path:'register',
            element:<SingUp></SingUp>,
        }
       
    ]
}])

export default router;