import React from "react";
import { Link } from "react-router-dom";

const HomeDiscount = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[48%] relative">
        <div className="absolute left-[20px] text-[#000000] top-[100px]">
          <div className="text-[18px] font-light leading-[10px] mb-[6px]">
            Flat 40% Discount
          </div>
          <div className="text-[26px] font-weight leading-[30px] mb-[15px]">
            LG Headphones
          </div>
          <div>
            <Link
              to="/"
              className="underline font-medium uppercase hover:text-[#FED700] hover:transition-all"
            >
              shop now
            </Link>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-[249px] w-[100%]"
        />
      </div>
      <div className="w-[48%] relative">
        <div className="absolute left-[20px] text-[#000000] top-[100px]">
          <div className="text-[18px] font-light leading-[10px] mb-[6px]">
            Flat 40% Discount
          </div>
          <div className="text-[26px] font-weight leading-[30px] mb-[15px]">
            LG Headphones
          </div>
          <div>
            <Link
              to="/"
              className="underline font-medium uppercase hover:text-[#FED700] hover:transition-all"
            >
              shop now
            </Link>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/1093236/pexels-photo-1093236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-[249px] w-[100%]"
        />
      </div>
    </div>
  );
};

export default HomeDiscount;
