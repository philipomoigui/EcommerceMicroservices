import React from "react";
import { Link } from "react-router-dom";

const BestSellerCard = (props: {
  itemDesc: string;
  price: string;
  listPrice: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className="border mr-[5px]"
        style={{
          display: "block",
          left: "0px",
          top: "100%",
          transition: "all 300ms ease 0s;",
        }}
      >
        <img src={props.image} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <Link to={props.link} className="text-blue-500 hover:text-yellow-500">
            <p>{props.itemDesc}</p>
          </Link>
        </div>
        <div>
          <p>${props.price}</p>
          <p>${props.listPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
