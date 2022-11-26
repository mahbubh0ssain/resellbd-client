import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          {/* drawer cont */}
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>

          {/* drawer side */}
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/my-products">My Products</Link>
              </li>
              <li>
                <Link to="/dashboard/add-product">Add Products</Link>
              </li>
              {admin && (
                <>
                  <li>
                    <Link to="/dashboard/all-sellers">All Sellers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/all-buyers">All Buyers</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
