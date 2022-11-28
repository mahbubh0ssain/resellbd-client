import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!email) {
      return;
    }
    fetch(`https://resellbd-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("ResellBD-Token", data.token);
          setToken(data.token);
        }
      });
  }, [email]);
  return [token];
};
export default useToken;
