import React from "react";
import { useTitle } from "../../Hooks/useTitle";
import ContactUs from "../ContactUs/ContactUs";
import Testimonial from "../Testimonial/Testimonial";
import Advertise from "./Advertise/Advertise";
import Category from "./Category/Category";
import { Slider } from "./Slider/Slider";

const Home = () => {
  useTitle("");
  return (
    <div className="max-w-[1440px] mx-auto">
      <Slider />
      <Advertise />
      <Category />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
