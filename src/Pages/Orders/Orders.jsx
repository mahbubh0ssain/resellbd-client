import React, { useContext, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderTable from "./OrderTable";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`https://resellbd-server.vercel.app/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, [user?.email]);

  if (loader) {
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

  return (
    <div className="max-w-[1440px] mx-auto mb-16 p-4">
      {data.length ? (
        <>
          <h1 className="text-3xl ml-3">My oders</h1>
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
                {data?.map((orderInfo, i) => (
                  <OrderTable
                    i={i}
                    key={orderInfo?._id}
                    orderInfo={orderInfo}
                  ></OrderTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-3xl ml-3 flex justify-center items-center">
          {user?.displayName} has no order
        </h1>
      )}
    </div>
  );
};

export default Orders;
