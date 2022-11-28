import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  useEffect(() => {
    fetch(`https://resellbd-server.vercel.app/buyer?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.role === "buyer") {
          setIsBuyer(data.role);
        }
      });
  }, [email]);
  return [isBuyer];
};
export default useBuyer;
