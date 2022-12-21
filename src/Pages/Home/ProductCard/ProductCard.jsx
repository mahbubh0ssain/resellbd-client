import React, { useContext } from "react";
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
    fetch("https://resellbd-server.vercel.app/reported-items", {
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
      <div className="px-2 mx-auto">
        <div className="card w-66 h-full  shadow-xl">
          <figure>
            <img className="w-96 h-64" src={img} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center ">
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
              </div>
              <div onClick={handleReport}>
                <p className="text-red-500 font-bold cursor-pointer">Report</p>
              </div>
            </div>
            <p className="font-bold ">
              Original Price:
              <span className="font-normal line-through text-primary">
                ${originalPrice}
              </span>
            </p>
            <p className="font-bold">
              Resell Price:
              <span className="font-bold text-primary text-lg"> ${price}</span>
            </p>
            <p className="font-bold">
              Posted at: <span className="font-normal">{postedAt}</span>
            </p>
            <p className="font-bold">
              Years use: <span className="font-normal">{yearsUse}</span>
            </p>
            <p className="font-bold">
              Year of purchase:{" "}
              <span className="font-normal">{yearOfPurchase}</span>
            </p>
            <p className="font-bold">
              Location: <span className="font-normal"> {location}</span>
            </p>
            <p className="font-bold">
              Contact: <span className="font-normal">{contact}</span>
            </p>
            <p className="font-bold">
              Description:{" "}
              <span className="font-normal">
                {description?.length > 50
                  ? description.slice(0, 27) + "..."
                  : description}
              </span>
            </p>
            <div className="flex">
              <p className="font-bold">
                Seller: <span className="font-normal">{sellerName}</span>
              </p>
              {verified === true && (
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
                disabled={user.email === "mahbubh0ssain.dev@gmail.com"}
                htmlFor="productModal"
                className="btn  btn-sm w-full btn-primary"
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
