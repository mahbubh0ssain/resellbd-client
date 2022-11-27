import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/seller?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "seller") {
          setIsSeller(data.role);
        }
      });
  }, [email]);
  return [isSeller];
};
export default useSeller;
