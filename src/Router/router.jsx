import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/sign up/SignUp";
import Login from "../Page/Login/Login";


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
       
    ]
}])

export default router;