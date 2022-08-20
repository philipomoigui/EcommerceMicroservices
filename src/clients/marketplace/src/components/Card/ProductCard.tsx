import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ProductCard = (props: {
  image: string;
  price: string;
  description: string;
  category: string;
}) => {
  return (
    <div className="max-w-[220px] max-h-[425px] border border-black-100">
      <div className="p-[5px]">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          <Link to="/" className="text-[14px] text-[#666666] hover:underline">
            {props.category}
          </Link>
        </div>
        <div className="mt-[10px]">
          <Link
            to="/"
            className="text-[14px] text-blue-500 hover:text-yellow-500"
          >
            {props.description}
          </Link>
        </div>
        <div className="mt-[10px]">
          <p className="text-[15px] text-[#333E40] font-[600]">
            ${props.price}
          </p>
        </div>
        <div className="mt-[10px]">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
