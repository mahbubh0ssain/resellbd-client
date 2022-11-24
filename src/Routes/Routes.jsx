import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/category/:id",
        element: <ProductDetails />,
      },
    ],
  },
  { path: "*", element: <Notfound></Notfound> },
]);
