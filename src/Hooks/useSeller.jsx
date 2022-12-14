import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://resellbd-server.vercel.app/seller?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "seller") {
          setIsSeller(data.role);
          setLoading(false);
        }
      });
  }, [email]);
  return [isSeller, loading];
};
export default useSeller;
