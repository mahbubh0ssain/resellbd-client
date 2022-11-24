import { useQuery } from "@tanstack/react-query";
import React from "react";

const Category = () => {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = res.json();
      return data;
    },
  });

  return <div>this is category component${data.length}</div>;
};

export default Category;
