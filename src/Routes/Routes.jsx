import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home"
import Packages from "../Pages/Packages/Packages"

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
    ]
  },
]);

export default Router