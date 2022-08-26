import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="w-100 flex justify-center items-center font-[600] text-[15px] text-[#333E48]">
      <div className="flex justify-between w-[100rem] pt-[5rem] pb-[5rem]">
        <div>
          <div className="pb-[10px]">
            <h4 className="uppercase">store information</h4>
          </div>
          <div className="font-normal text-[14px]">
            Elocart - Electronic Store
          </div>
          <div className="font-normal text-[14px]">
            507-Union Trade ipsum Doler Centre
          </div>
          <div className="font-normal text-[14px]">France</div>
          <div className="font-normal text-[14px]">Call Us: 000-000-0000</div>
          <div className="font-normal text-[14px]">sales@yourcompany.com</div>
        </div>
        <div>
          <div className="pb-[10px]">
            <h4 className="uppercase">information</h4>
          </div>
          <ul className="w-[100%] flex flex-col justify-between">
            <li className=" pb-[14px] tracking-wide">
              <Link
                to="/"
                className="hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                About Us
              </Link>
            </li>
            <li className=" pb-[14px] tracking-wide">
              <Link
                to="/"
                className="hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                Delivery Information
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className="pb-[5px] hover:text-yellow-500 font-normal text-[14px]"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className=" hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className="pb-[5px] hover:text-yellow-500 font-normal text-[14px]"
              >
                Site map
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="pb-[10px]">
            <h4 className="uppercase">extras</h4>
          </div>
          <ul className="w-[100%] flex flex-col justify-between">
            <li className=" pb-[14px] tracking-wide">
              <Link
                to="/"
                className="hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                Brands
              </Link>
            </li>
            <li className=" pb-[14px] tracking-wide">
              <Link
                to="/"
                className="hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                Gift Certificates
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className="pb-[5px] hover:text-yellow-500 font-normal text-[14px]"
              >
                Affiliate
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className=" hover:text-yellow-500 pb-[5px] font-normal text-[14px]"
              >
                Specials
              </Link>
            </li>
            <li className="  pb-[14px] tracking-wide">
              <Link
                to="/"
                className="pb-[5px] hover:text-yellow-500 font-normal text-[14px]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="pb-[10px]">
            <h4 className="uppercase">contact us</h4>
          </div>
          <ul className="w-[100%] flex flex-col justify-between">
            <li className=" pb-[14px] tracking-wide">
              <div className=" text-[14px]">
                Subscribe our newsletter get 10% off your first update.
              </div>
            </li>

            <div className="border border-black-100 rounded-full flex justify-between items-center border-l-[#F0F0F0] bg-[#333E48] w-[80%]">
              <input
                type="text"
                className="w-[90%] h-[35px] pt-[8px] pr-[60px] pb-[8px] pl-[22px] bg-[#F0F0F0] rounded-l-full focus:outline-none"
                placeholder="Search Products Here"
              />
              <button className="w-[10%] pl-[10px] h-[100%]">
                <AiOutlineSearch style={{ color: "white" }} size={15} />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
