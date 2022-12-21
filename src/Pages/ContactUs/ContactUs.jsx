import React from "react";

const ContactUs = () => {
  return (
    <div className=" flex items-center  justify-center">
      <div className="p-4 shadow-lg rounded-md max-w-[1280px]  my-6 mx-6">
        <h1 className="text-3xl text-center my-1">Get in Touch</h1>
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 py-6 mx-auto">
          <div className="mx-auto">
            <img
              className=" object-cover"
              src="https://i.ibb.co/THrXXSs/support-img-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 mx-auto w-full px-4 ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md  my-4"
            />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md mb-1"
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
    </div>
  );
};

export default ContactUs;
