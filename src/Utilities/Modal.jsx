import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const Modal = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <input type="checkbox" id="productModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="productModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-96 mx-auto"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-96 mx-auto"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-96 mx-auto"
            />

            <label
              htmlFor="productModal"
              className="btn w-96 mx-auto btn-sm btn-primary"
            >
              Submit
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
