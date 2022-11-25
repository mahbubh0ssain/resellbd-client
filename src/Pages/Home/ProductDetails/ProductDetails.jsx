import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "./Modal";

const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState(null);
  const { id } = useParams();

  const { data = [], isLoading } = useQuery({
    queryKey: ["products", "id"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = res.json();
      return data;
    },
  });
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
    <section>
      <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1440px] mx-auto">
        {data.map((info, i) => (
          <ProductCard
            key={i}
            info={info}
            setProductInfo={setProductInfo}
          ></ProductCard>
        ))}
      </div>
      {productInfo && (
        <Modal
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        ></Modal>
      )}
    </section>
  );
};

export default ProductDetails;
