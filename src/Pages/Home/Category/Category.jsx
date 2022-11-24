import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="lg:flex justify-center m-4">
      {data.map((ctg) => (
        <div key={ctg._id}>
          <Link to={`/category/${ctg.categoryId}`}>
            <button className="btn btn-outline m-3 ">{ctg.categoryName}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
