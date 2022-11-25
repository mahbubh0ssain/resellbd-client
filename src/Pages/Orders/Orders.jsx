import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderTable from "./OrderTable";

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

  return (
    <div className="max-w-[1440px] mx-auto my-16 p-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((orderInfo, i) => (
              <OrderTable
                i={i}
                key={orderInfo._id}
                orderInfo={orderInfo}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
