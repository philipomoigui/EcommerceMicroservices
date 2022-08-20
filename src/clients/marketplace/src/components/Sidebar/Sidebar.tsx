import React from "react";
import BestSellerCard from "../Card/BestSellerCard";

const Sidebar = () => {
  return (
    <div className="w-[20rem] text-[14px] text-[#333E48]">
      <div className="w-[100%] border border-yellow-500">
        <ul className="w-[100%] flex flex-col justify-between p-[2rem]">
          <li className=" pb-[14px] border-b-2">
            <a className="pb-[5px] tracking-wide">Electronic</a>
          </li>
          <li className="border-b-2 pb-[14px] tracking-wide">
            <a className=" pb-[5px]">Camera</a>
          </li>
          <li className="border-b-2 pb-[14px] tracking-wide">
            <a className="pb-[5px]">DSLR Camera</a>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <a className="pb-[5px]">Liquid Polish</a>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <a className="pb-[5px]">HeadPhone</a>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <a className="pb-[5px]">Windows</a>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <a className="pb-[5px]">Cloth</a>
          </li>
        </ul>
      </div>
      <div className="w-[100%] border border-black-500 mt-[3rem]">
        <div className="w-[20rem] font-[600] text-[15px] uppercase bg-[#F0F0F0] text-[#333E48] p-[1rem]">
          bestsellers product
        </div>
        <div className="p-[2rem]">
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/05-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="vestibulum sed arcu non odio"
            link="/"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/15-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Enim blandit volutpat maecenas volutpat"
            link="/"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/07-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Vivamus arcu felis bibendum ut tristique"
            link="/"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/02-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Orci nulla pellentesque dignissim enim"
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
