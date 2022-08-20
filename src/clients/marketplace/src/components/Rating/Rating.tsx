import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosStarHalf } from "react-icons/io";

const Rating = () => {
  return (
    <div className="flex items-center">
      <AiTwotoneStar style={{ color: "#EAB308" }} />
      <AiTwotoneStar style={{ color: "#EAB308" }} />
      <AiTwotoneStar style={{ color: "#EAB308" }} />
      <AiTwotoneStar style={{ color: "#EAB308" }} />
      <IoIosStarHalf style={{ color: "#EAB308" }} />
    </div>
  );
};

export default Rating;
