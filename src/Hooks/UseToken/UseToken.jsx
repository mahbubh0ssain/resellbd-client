import axios from "axios";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  axios.get(`http://localhost:5000/jwt?email=${email}`).then((res) => {
    if (res.data.token) {
      localStorage.setItem("ResellBD-Token", res.data.token);
      setToken(res.data.token);
    }
  });
  return token;
};
export default useToken;
