import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ orderInfo, i }) => {
  // const { data = [] } = useQuery({
  //   queryKey: ["paymentInfo"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/paymentInfo");
  //     const data = res.json();
  //     return data;
  //   },
  // });
  // console.log(data);

  const { img, productName, productPrice, _id, paid } = orderInfo;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt="Product" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>$ {productPrice}</td>
      <td>
        {paid ? (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-primary btn-xs"
            disabled={paid}
          >
            Paid
          </Link>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-primary btn-xs"
          >
            Pay
          </Link>
        )}
      </td>
    </tr>
  );
};

export default OrderTable;
