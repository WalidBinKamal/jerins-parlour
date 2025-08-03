import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home"
import Packages from "../Pages/Packages/Packages"
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup"
import Dashboard from "../Layout/Dashboard";
import Booking from "../Pages/Dashboard/Booking";
import BookingList from "../Pages/Dashboard/BookingList";
import Review from "../Pages/Dashboard/Review";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Packages></Packages>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'booking',
        element: <Booking></Booking>
      },
      {
        path: 'bookingList',
        element: <BookingList></BookingList>
      },
      {
        path: 'review',
        element: <Review></Review>
      },
    ]
  }
]);

export default Router