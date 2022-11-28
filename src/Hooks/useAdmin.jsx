import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://resellbd-server.vercel.app/admin?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setLoading(false);
      });
  }, [email]);
  return [admin, loading];
};
export default useAdmin;
