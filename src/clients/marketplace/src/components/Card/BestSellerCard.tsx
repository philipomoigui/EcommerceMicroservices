import React from "react";
import { Link } from "react-router-dom";

const BestSellerCard = (props: {
  itemDesc: string;
  price: string;
  listPrice: string;
  image: string;
  slug: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className="border mr-[5px]"
        style={{
          display: "block",
          left: "0px",
          top: "100%",
          transition: "all 300ms ease 0s",
        }}
      >
        <img src={props.image} alt="" />
      </div>
      <div className="flex flex-col justify-center p-[3px]">
        <div>
          <Link
            to={`/product/${props.slug}`}
            className="text-blue-500 hover:text-yellow-500"
          >
            <p>{props.itemDesc}</p>
          </Link>
        </div>
        <div>
          <p>${props.price}</p>
          <p style={{ textDecoration: "line-through" }}>${props.listPrice}</p>
        </div>
        <Link
          to="/"
          className="uppercase text-[14px] text-[#666] font-medium underline hover:no-underline"
        >
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default BestSellerCard;
