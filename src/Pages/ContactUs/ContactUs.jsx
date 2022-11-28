import React from "react";

const ContactUs = () => {
  return (
    <div className="p-2 shadow rounded-3xl max-w-[576px] mx-auto mb-6">
      <section className="mt-4 grid grid-cols-1 py-6 mx-auto">
        <div className="mx-auto">
          <img
            className=" object-cover"
            src="https://i.ibb.co/qmhz9Rk/contact-us-icon-g6598a6168-1920.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 mx-auto ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm   my-4"
          />
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm  mb-1"
          />
          <br />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-primary mt-4">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
