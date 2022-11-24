import React from "react";
import Advertise from "./Advertise/Advertise";
import { Slider } from "./Slider/Slider";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Slider />
      <Advertise />
    </div>
  );
};

export default Home;
