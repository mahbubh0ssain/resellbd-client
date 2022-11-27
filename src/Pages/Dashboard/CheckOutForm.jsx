import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckOutForm = ({ data }) => {
  const { productPrice, buyerEmail, buyerName, _id } = data;
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ResellBD-Token")}`,
      },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, confirmPaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });
    if (confirmPaymentError) {
      setCardError(confirmPaymentError.message);
      return;
    }
    if (paymentIntent?.status === "succeeded") {
      //store payment info to DB
      const paymentInfo = {
        transectionId: paymentIntent.id,
        productPrice,
        buyerEmail,
        _id,
      };

      fetch("http://localhost:5000/paymentInfo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setTransectionId(paymentIntent.id);
            toast.success("Payment successful");
          }
        });
    }
  };

  return (
    <div>
      <p className="text-red-600">{cardError}</p>
      {transectionId && (
        <p className="gree-red-600 my-2">
          TransectionId is:{" "}
          <span className="text-green-700">{transectionId}</span>
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs mt-2"
          type="submit"
          disabled={!stripe || !clientSecret || transectionId}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
