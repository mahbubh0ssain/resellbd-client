import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const logOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout successful.");
      })
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li className="hover:bg-primary text-black hover:text-white font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-primary text-black hover:text-white font-bold">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="hover:bg-primary text-black hover:text-white font-bold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user?.email ? (
        <li>
          <button onClick={logOut}>
            <img
              className="img-fluid"
              style={{ width: "28px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2048px-OOjs_UI_icon_logOut-ltr.svg.png"
              alt=""
            />
          </button>
        </li>
      ) : (
        <li className="hover:bg-primary text-black hover:text-white font-bold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="mb-6 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className=" text-xl font-bold text-white">
            <div className="flex items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/TkjGrHR/png-transparent-computer-icons-retail-reseller-others-miscellaneous-retail-omnichannel-thumbnail-rem.png"
                alt=""
              />
              <p className="text-black">Resell-BD</p>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <label
            htmlFor="dashboard-drawer"
            className="cursor-pointer text-white drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
