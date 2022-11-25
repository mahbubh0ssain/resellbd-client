import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-[1440px] mx-auto my-20 p-16 flex justify-center items-center">
      <h3>Please pay ${} for fgdkgjg.</h3>
    </div>
  );
};

export default Payment;
