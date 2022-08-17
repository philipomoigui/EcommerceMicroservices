import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { slides } from "../helpers/data";

const Home = () => {
  return (
    <div className="w-[100%]">
      <div className="h-[480px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Home;
