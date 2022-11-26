import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [admin, loading] = useAdmin(user?.email);
  if (loading) {
    return <p>loading....</p>;
  }
  if (user && admin) {
    return children;
  }
};

export default AdminRoute;
