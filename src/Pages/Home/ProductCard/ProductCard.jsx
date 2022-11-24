import React from "react";
import Modal from "../../../Utilities/Modal";

const ProductCard = ({ product }) => {
  const {
    name,
    img,
    originalPrice,
    postedAt,
    yearsUse,
    price,
    sellerName,
    verified,
  } = product;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-40" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Original Price: ${originalPrice}</p>
          <p>Resell Price: ${price}</p>
          <p>Posted at:{postedAt}</p>
          <p>Years use: {yearsUse}</p>
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
            <label htmlFor="productModal" className="btn  btn-sm btn-primary">
              Buy now
            </label>
          </div>
        </div>
        <div>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
