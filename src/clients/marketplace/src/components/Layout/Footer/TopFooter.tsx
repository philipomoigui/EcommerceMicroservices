import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GiPiggyBank, GiReceiveMoney } from "react-icons/gi";
import { IoMdAirplane } from "react-icons/io";

const TopFooter = () => {
  return (
    <div className="max-h-[70px] bg-yellow-500 w-100 flex justify-center items-center font-[600] text-[15px] uppercase text-[#333E48]">
      <div className="flex justify-between items-center w-[100rem] pt-[10rem] pb-[10rem]">
        <div className="flex justify-around items-center w-[20%] border-r-4 border-[#333E48]">
          <div className="flex justify-center items-center">
            <GiReceiveMoney size={20} />
          </div>
          <div className="flex justify-center items-center">
            14-day money back
          </div>
        </div>
        <div className="flex justify-around items-center w-[20%] border-r-4 border-[#333E48]">
          <div className="flex justify-center items-center">
            <IoMdAirplane size={20} />
          </div>
          <div className="flex justify-center items-center">
            fast free shipment
          </div>
        </div>
        <div className="flex justify-around items-center w-[20%] border-r-4 border-[#333E48]">
          <div className="flex justify-center items-center">
            <GiPiggyBank size={20} />
          </div>
          <div className="flex justify-center items-center">
            money back guarantee
          </div>
        </div>
        <div className="flex justify-around items-center w-[20%]">
          <div className="flex justify-center items-center">
            <AiOutlineLike size={20} />
          </div>
          <div className="flex justify-center items-center">
            save 20% when you
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
