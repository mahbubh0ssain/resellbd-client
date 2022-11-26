import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import Addproducts from "../Pages/Dashboard/Addproducts";
import Allbuyers from "../Pages/Dashboard/Allbuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myproducts from "../Pages/Dashboard/Myproducts";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";

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
        path: "/about-us",
        element: <AboutUs />,
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
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Orders></Orders>,
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/payment/${params.id}`),
        element: <Payment />,
      },
      {
        path: "/dashboard/my-products",
        element: <Myproducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <Addproducts />,
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <Allbuyers />
          </AdminRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Notfound></Notfound> },
]);
