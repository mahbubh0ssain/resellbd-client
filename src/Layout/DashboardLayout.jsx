import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

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
              {isBuyer && (
                <li>
                  <Link
                    className="font-bold hover:bg-violet-600 hover:text-white"
                    to="/dashboard/orders"
                  >
                    My Orders
                  </Link>
                </li>
              )}

              {isSeller && (
                <>
                  <li>
                    <Link
                      className="font-bold hover:bg-violet-600 hover:text-white"
                      to="/dashboard/my-products"
                    >
                      My Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold hover:bg-violet-600 hover:text-white"
                      to="/dashboard/add-product"
                    >
                      Add Products
                    </Link>
                  </li>
                </>
              )}
              {admin && (
                <>
                  <li>
                    <Link
                      className="font-bold hover:bg-violet-600 hover:text-white"
                      to="/dashboard/all-sellers"
                    >
                      All Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold hover:bg-violet-600 hover:text-white"
                      to="/dashboard/all-buyers"
                    >
                      All Buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold hover:bg-violet-600 hover:text-white"
                      to="/dashboard/reported-items"
                    >
                      Reported Items
                    </Link>
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
