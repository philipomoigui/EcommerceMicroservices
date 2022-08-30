import React from "react";
import { Link } from "react-router-dom";
import BestSellerCard from "../Card/BestSellerCard";

const Sidebar = () => {
  return (
    <div className="w-[20rem] text-[14px] text-[#333E48]">
      <div className="w-[100%] border border-yellow-500">
        <ul className="w-[100%] flex flex-col justify-between p-[2rem]">
          <li className=" pb-[14px] border-b-2">
            <Link
              className="pb-[5px] tracking-wide hover:text-yellow-500"
              to="/category/electronic"
            >
              Electronic
            </Link>
          </li>
          <li className="border-b-2 pb-[14px] tracking-wide">
            <Link
              to="/category/camera"
              className="hover:text-yellow-500 pb-[5px]"
            >
              Camera
            </Link>
          </li>
          <li className="border-b-2 pb-[14px] tracking-wide">
            <Link
              to="/category/DSLRcamera"
              className="hover:text-yellow-500 pb-[5px]"
            >
              DSLR Camera
            </Link>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <Link
              to="/category/liquid-polish"
              className="pb-[5px] hover:text-yellow-500"
            >
              Liquid Polish
            </Link>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <Link
              to="/category/head-phone"
              className=" hover:text-yellow-500 pb-[5px]"
            >
              HeadPhone
            </Link>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <Link
              to="/category/windows"
              className="pb-[5px] hover:text-yellow-500"
            >
              Windows
            </Link>
          </li>
          <li className="border-b-2  pb-[14px] tracking-wide">
            <Link
              to="/category/cloth"
              className="pb-[5px] hover:text-yellow-500"
            >
              Cloth
            </Link>
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
            slug="this-is-a-slug"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/15-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Enim blandit volutpat maecenas volutpat"
            slug="this-is-a-slug"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/07-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Vivamus arcu felis bibendum ut tristique"
            slug="this-is-a-slug"
          />
          <BestSellerCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/02-85x95.jpg"
            price="82.00"
            listPrice="85.00"
            itemDesc="Orci nulla pellentesque dignissim enim"
            slug="this-is-a-slug"
          />
        </div>
      </div>
      <div className="w-[100%] border border-black-500 mt-[3rem]">
        <div className="w-[20rem] font-[600] text-[15px] uppercase bg-[#F0F0F0] text-[#333E48] p-[1rem] uppercase">
          information
        </div>
        <div className="">
          <ul className="w-[100%] flex flex-col justify-between p-[2rem]">
            <li className=" pb-[14px] ">
              <Link
                to="/"
                className="pb-[5px] tracking-wide hover:text-yellow-500"
              >
                About Us
              </Link>
            </li>
            <li className=" pb-[14px] tracking-wide hover:text-yellow-500">
              <Link to="/" className=" pb-[5px]">
                Privacy Policy
              </Link>
            </li>
            <li className="pb-[14px] tracking-wide hover:text-yellow-500">
              <Link to="/" className="pb-[5px]">
                Delivery Information
              </Link>
            </li>
            <li className="pb-[14px] tracking-wide hover:text-yellow-500">
              <Link to="/" className="pb-[5px]">
                Terms & Conditions
              </Link>
            </li>
            <li className="pb-[14px] tracking-wide hover:text-yellow-500">
              <Link to="/" className="pb-[5px]">
                Contact Us
              </Link>
            </li>
            <li className="pb-[14px] tracking-wide hover:text-yellow-500">
              <Link to="/" className="pb-[5px]">
                Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
