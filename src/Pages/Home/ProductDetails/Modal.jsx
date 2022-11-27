import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Modal = ({ productInfo, setProductInfo }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingInfo = {
      buyerName: form.buyerName.value,
      buyerEmail: form.buyerEmail.value,
      productName: form.productName.value,
      productPrice: form.productPrice.value,
      location: form.location.value,
      contact: form.contact.value,
      img: productInfo.img,
      id: productInfo._id,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Booking confirmed.");
          setProductInfo(null);
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="productModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setProductInfo(null)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label>Name</label>
              <input
                type="text"
                name="buyerName"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Email</label>
              <input
                type="email"
                name="buyerEmail"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label>Item </label>
              <input
                type="text"
                name="productName"
                defaultValue={productInfo?.name}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Price</label>
              <input
                type="text"
                name="productPrice"
                defaultValue={productInfo?.price}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="Dhaka"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                placeholder="01********"
                className="input input-bordered w-full"
              />
            </div>

            <input type="submit" className=" mt-3 btn  btn-sm w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
