import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const data = useLoaderData();
  

  return (
    <div className="max-w-[1440px] mx-auto my-20 p-16  justify-center items-center">
      <h3 className="text-3xl text-center mb-4">Make Payment</h3>
      <p className="text-xl text-center mb-4">
        Please pay ${data.productPrice} fot {data.productName}
      </p>
      <div className="text-center mb-4">
        <div className="avatar ">
          <div className="w-20 rounded">
            <img src={data.img} alt="Product" />
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
