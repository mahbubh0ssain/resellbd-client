import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
  return (
    <section className="mt-20 mx-12">
      <div className="flex justify-between items-center ">
        <div>
          <h4 className="text-primary text-bold text-xl">Happy</h4>
          <h4 className=" text-bold text-2xl">Customer Says</h4>
        </div>
        <img className="h-24" src="https://i.ibb.co/C6j805j/quote.png" alt="" />
      </div>
      <TestimonialCards></TestimonialCards>
    </section>
  );
};

export default Testimonial;
