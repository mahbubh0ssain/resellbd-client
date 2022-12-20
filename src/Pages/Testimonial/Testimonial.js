import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
  return (
    <section className="mt-20 mx-6">
      <div className="flex justify-between items-center ">
        <div>
          <h4 className="text-primary text-bold text-xl mb-3">Testimonial</h4>
          <h4 className=" text-bold text-3xl">Our Customer Says</h4>
        </div>
        <img className="h-48" src="https://i.ibb.co/C6j805j/quote.png" alt="" />
      </div>
      <TestimonialCards></TestimonialCards>
    </section>
  );
};

export default Testimonial;
