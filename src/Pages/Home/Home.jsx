import React from "react";
import Modal from "../../Utilities/Modal";
import Advertise from "./Advertise/Advertise";
import Category from "./Category/Category";
import { Slider } from "./Slider/Slider";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Slider />
      <Advertise />
      <Category />
      <Modal/>
    </div>
  );
};

export default Home;
