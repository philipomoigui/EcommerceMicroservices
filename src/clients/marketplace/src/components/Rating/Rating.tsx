import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Rating = (props: { rating: number }) => {
  if (props.rating === 5) {
    return (
      <div className="flex items-center">
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
      </div>
    );
  } else if (props.rating === 4) {
    return (
      <div className="flex items-center">
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
      </div>
    );
  } else if (props.rating === 3) {
    return (
      <div className="flex items-center">
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
      </div>
    );
  } else if (props.rating === 2) {
    return (
      <div className="flex items-center">
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
      </div>
    );
  } else if (props.rating === 1) {
    return (
      <div className="flex items-center">
        <AiTwotoneStar style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
        <IoIosStarOutline style={{ color: "#EAB308" }} />
      </div>
    );
  }
};

export default Rating;
