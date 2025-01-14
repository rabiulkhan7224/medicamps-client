import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/sign up/SignUp";


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
            element:<SignUp></SignUp>,
        }
       
    ]
}])

export default router;