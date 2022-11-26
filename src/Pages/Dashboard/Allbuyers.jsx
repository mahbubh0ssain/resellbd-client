import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Allbuyers = () => {
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/all-buyers`).then((res) => {
      setBuyers(res.data);
    });
  }, [loading]);

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/delete-buyer?email=${email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Buyer deleted successful");
        setLoading(!loading);
      });
  };

  return (
    <div className="ml-5">
      <h3 className="text-3xl ml-5"> All Buyers {buyers?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer) => (
              <tr key={buyer._id}>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer.email)}
                    className="btn btn-xs btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyers;
