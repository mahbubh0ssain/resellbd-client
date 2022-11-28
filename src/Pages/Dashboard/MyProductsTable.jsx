import React from "react";
import toast from "react-hot-toast";

const MyProductsTable = ({ i, product, setLoader, loader }) => {
  const { name, img, price, status, _id } = product;

  const handleProductDelete = (_id) => {
    fetch(`https://resellbd-server.vercel.app/delete-product?id=${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoader(!loader);
          toast.success("Product successfully deleted ");
        }
      });
  };

  const advertise = () => {
    const advertiseItem = {
      name,
      img,
      price,
      status,
      id: _id,
    };
    fetch(`https://resellbd-server.vercel.app/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
      body: JSON.stringify(advertiseItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product successfully advertised ");
        }
      });
  };

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
        <button
          onClick={() => handleProductDelete(_id)}
          className="btn btn-xs btn-warning m-1"
        >
          delete
        </button>
        {status === "unsold" && (
          <button onClick={advertise} className="btn btn-xs btn-primary m-1">
            Ad.
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyProductsTable;
