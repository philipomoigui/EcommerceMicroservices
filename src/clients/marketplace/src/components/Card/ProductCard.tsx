import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { preProcessFile } from "typescript";
import Rating from "../Rating/Rating";

const ProductCard = (props: {
  image: string;
  price: string;
  description: string;
  category: string;
  rating: number;
  slug: string;
}) => {
  return (
    <div className="max-w-[220px] max-h-[425px] border border-black-100 mb-[40px]">
      <div className="p-[5px]">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          <Link
            to={`/product/${props.slug}`}
            className="text-[14px] text-[#666666] hover:underline"
          >
            {props.category}
          </Link>
        </div>
        <div className="mt-[10px]">
          <Link
            to={`/product/${props.slug}`}
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
        <div className="mt-[10px] flex justify-between items-center">
          <Rating rating={props.rating} />
          <div className="rounded-full bg-[#F0F0F0] hover:bg-[#fed700] w-[2rem] h-[2rem] flex justify-center items-center">
            <AiOutlineShoppingCart size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
