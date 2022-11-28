import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isSeller, loading] = useSeller(user?.email);
  if (loading) {
    return (
      (<Navigate to="/login"></Navigate>),
      logOutUser()
        .then(() => {})
        .catch(() => {})
    );
  }
  if (user && isSeller) {
    return children;
  }
};

export default SellerRoute;
