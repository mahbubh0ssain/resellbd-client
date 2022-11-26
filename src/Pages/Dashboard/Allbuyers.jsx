import axios from "axios";
import React from "react";

const Allbuyers = () => {
  axios.get(`http://localhost:5000/all-buyers`).then((res) => {
    console.log(res);
    // if (res.data.token) {
    //   localStorage.setItem("ResellBD-Token", res.data.token);
    // }
  });
  return <div>all buyers</div>;
};

export default Allbuyers;
