import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const [admin, loading] = useAdmin(user?.email);
  if (loading) {
    return (
      (<Navigate to="/login"></Navigate>),
      logOutUser()
        .then(() => {})
        .catch(() => {})
    );
  }
  if (user && admin) {
    return children;
  }
};

export default AdminRoute;
