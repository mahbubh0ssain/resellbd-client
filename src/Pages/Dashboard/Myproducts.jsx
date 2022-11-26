import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Myproducts = () => {
  const { user } = useContext(AuthContext);
  if (!user?.email) {
    return;
  }
  axios
    .get(`http://localhost:5000/my-products?email=${user?.email}`)
    .then((res) => {
      console.log(res);
      // if (res.data.token) {
      //   localStorage.setItem("ResellBD-Token", res.data.token);
      // }
    });

  return <div>this is my products section for the seller.</div>;
};

export default Myproducts;
