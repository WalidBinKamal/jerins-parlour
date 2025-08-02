import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home"
import Packages from "../Pages/Packages/Packages"
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/services',
            element: <Packages></Packages>,
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/signup',
            element: <Signup></Signup>,
        },
    ]
  },
]);

export default Router