import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6 text-4xl flex justify-center items-center">
      Welcome <span className="text-blue-600 mx-4"> {user?.displayName} </span>
      to Dashboard.
    </div>
  );
};

export default Dashboard;
