import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/buyer?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "buyer") {
          setIsBuyer(data.role);
        }
      });
  }, [email]);
  return [isBuyer];
};
export default useBuyer;
