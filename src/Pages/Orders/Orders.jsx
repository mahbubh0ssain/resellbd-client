import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);

  console.log(user?.email);
  
  const { data = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(data);
  return <div>{data.length}</div>;
};

export default Orders;
