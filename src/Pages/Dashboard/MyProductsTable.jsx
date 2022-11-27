import React from "react";

const MyProductsTable = ({ i, product }) => {
  const { name, img, price, status } = product;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>
        <button disabled className="bg-primary p-1 rounded-lg text-white ">
          {status}
        </button>
      </td>
      <td>
        <button className="btn btn-xs btn-warning m-1">delete</button>
        {status === "unsold" && (
          <button className="btn btn-xs btn-primary m-1">Ad.</button>
        )}
      </td>
    </tr>
  );
};

export default MyProductsTable;
