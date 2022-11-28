import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://resellbd-server.vercel.app/category");
      const data = res.json();
      return data;
    },
  });

  return (
    <>
      <p className="text-4xl text-center border rounded-md max-w-[200px] mx-auto p-3">
        Category
      </p>
      <div className="lg:flex justify-center m-4 text-center">
        {data.map((ctg) => (
          <div key={ctg._id}>
            <Link to={`/category/${ctg.categoryId}`}>
              <button className="btn btn-primary btn-lg m-3 ">
                {ctg.categoryName}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
