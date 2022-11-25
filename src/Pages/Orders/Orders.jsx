import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user?.email]);

  return <div>
    
    {data.length}
  
  
  </div>;
};

export default Orders;
