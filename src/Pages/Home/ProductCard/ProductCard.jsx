import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const ProductCard = ({ info, setProductInfo }) => {
  const { user } = useContext(AuthContext);
  const {
    name,
    img,
    originalPrice,
    postedAt,
    yearsUse,
    price,
    sellerName,
    sellerEmail,
    verified,
    yearOfPurchase,
    description,
    contact,
    location,
  } = info;

  const handleReport = () => {
    const reportedInfo = {
      id: info._id,
      name,
      img,
      email: sellerEmail,
    };
    fetch("http://localhost:5000/reported-items", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reportedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item reported successfully");
        }
      });
  };

  return (
    <>
      <div>
        <div className="card w-96 h-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-40" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center ">
              <div>
                <h2 className="text-3xl">{name}</h2>
              </div>

              <div onClick={handleReport}>
                <p className="text-red-500 font-bold cursor-pointer">Report</p>
              </div>
            </div>
            <p>Original Price: ${originalPrice}</p>
            <p>Resell Price: ${price}</p>
            <p>Posted at:{postedAt}</p>
            <p>Years use: {yearsUse}</p>
            <p>Year of purchase: {yearOfPurchase}</p>
            <p>Location: {location}</p>
            <p>Contact: {contact}</p>
            <p>
              Description:
              {description?.length > 50
                ? description.slice(0, 27) + "..."
                : description}
            </p>
            <div className="flex">
              <p>Seller: {sellerName}</p>
              {verified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              )}
            </div>
            <div className="card-actions justify-start">
              <label
                disabled={user.email === "babargazam@gmail.com"}
                htmlFor="productModal"
                className="btn  btn-sm btn-primary"
                onClick={() => setProductInfo(info)}
              >
                Buy now
              </label>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
