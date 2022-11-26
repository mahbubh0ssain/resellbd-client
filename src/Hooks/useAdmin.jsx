import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/admin?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setLoading(false);
      });
  }, [email]);
  return [admin, loading];
};
export default useAdmin;
