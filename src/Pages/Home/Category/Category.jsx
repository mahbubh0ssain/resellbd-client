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
      <p className="text-4xl text-center border rounded-md max-w-[200px] mx-auto p-3 my-6">
        Category
      </p>
      <div className="mx-auto">
        <div className="grid lg:grid-cols-3 gap-4 px-2">
          {data.map((ctg) => (
            <div key={ctg._id}>
              <Link to={`/category/${ctg.categoryId}`}>
                <div className="card w-48 h-24 mx-auto image-full">
                  <figure>
                    <img className="w-full" src={ctg?.img} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-center">
                      {ctg.categoryName}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
