import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { TbHeadset } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

const TopNavigation = () => {
  return (
    <div className="w-100 flex justify-center items-center">
      <div className="flex justify-between items-center w-[100rem] p-[3rem]">
        <div>
          <h1 className="font-bold text-[3rem] text-[#333E48]">ELOCART</h1>
        </div>
        <div className="w-[58%] flex justify-between items-center">
          <div className="border border-black-100 rounded-full flex justify-between items-center border-l-[#F0F0F0] bg-[#333E48] w-[80%]">
            <input
              type="text"
              className="w-[90%] h-[35px] pt-[8px] pr-[60px] pb-[8px] pl-[22px] bg-[#F0F0F0] rounded-l-full focus:outline-none"
              placeholder="Search Products Here"
            />
            <button className="w-[10%] pl-[10px] h-[100%]">
              <AiOutlineSearch style={{ color: "white" }} size={20} />
            </button>
          </div>
          <div className="flex justify-between item-center">
            <div className="flex justify-center items-center">
              <TbHeadset size={30} />
            </div>
            <div className="pl-[5px]">
              <p>Contact Us</p>
              <h3>081 330 079 06</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mr-[5px] border-r-[#F0F0F0] font-thin">
            <VscAccount size={40} />
          </div>
          <div className="ml-[5px] ">
            <div className="relative">
              <AiOutlineShoppingCart size={40} />
              <div className="rounded-full bg-yellow-500 flex justify-center items-center absolute right-0 top-0 p-1 text-[10px]">
                1
              </div>
            </div>
          </div>
          <div className="ml-[5px] flex flex-col justify-center items-center">
            <div>My Cart</div>
            <div>$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
