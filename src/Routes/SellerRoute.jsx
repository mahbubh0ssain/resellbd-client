import React, { useContext } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isSeller, loading] = useSeller(user?.email);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }
  if (user && isSeller) {
    return children;
  }
};

export default SellerRoute;
