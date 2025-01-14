import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,

        },
       
    ]
}])

export default router;