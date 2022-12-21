import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyProductsTable from "./MyProductsTable";

const Myproducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    axios
      .get(
        `https://resellbd-server.vercel.app/my-products?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length) {
          setProducts(res.data);
        }
      });
  }, [user?.email, loader]);

  return (
    <>
      {products.length ? (
        <div className="p-4">
          <h2 className="text-3xl">My Products</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Image</th>
                  <th>name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <MyProductsTable
                    key={product._id}
                    i={i}
                    product={product}
                    setLoader={setLoader}
                    loader={loader}
                  ></MyProductsTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="flex items-center justify-center text-3xl">No product</p>
      )}
    </>
  );
};

export default Myproducts;
