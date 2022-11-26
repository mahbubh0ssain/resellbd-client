import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/all-sellers`).then((res) => {
      setSellers(res.data);
      setLoading(false);
    });
  }, [loading]);

  const verifySeller = (email) => {
    fetch(`http://localhost:5000/verify-seller?email=${email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Seller verified successful");
        setLoading(!loading);
      });
  };

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/delete-seller?email=${email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Seller deleted successful");
        setLoading(!loading);
      });
  };

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

  return (
    <div className="ml-5">
      {sellers?.length && (
        <>
          <h3 className="text-3xl ml-5"> All Sellers</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                  <th>Verify</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((seller) => (
                  <tr key={seller._id}>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(seller.email)}
                        className="btn btn-xs btn-primary"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {seller.verified ? (
                        <button disabled className="btn btn-xs btn-primary">
                          Verified
                        </button>
                      ) : (
                        <button
                          onClick={() => verifySeller(seller.email)}
                          className="btn btn-xs btn-primary"
                        >
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {!sellers.length && (
        <h1 className="text-3xl flex justify-center items-center">No buyers</h1>
      )}
    </div>
  );
};

export default AllSellers;
