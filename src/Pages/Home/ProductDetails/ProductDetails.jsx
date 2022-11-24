import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useQuery({
    queryKey: ["products", "id"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = res.json();
      return data;
    },
  });
  console.log(data);
  if (isLoading) {
    return (
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    );
  }

  return (
    <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1440px] mx-auto">
      {data.map((product, i) => (
        <ProductCard key={i} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductDetails;
