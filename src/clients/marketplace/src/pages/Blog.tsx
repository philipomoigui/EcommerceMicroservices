import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="flex justify-center items-center">
          <Link to="/" className="p-[1rem]">
            <AiFillHome className="hover:text-yellow-500" />
          </Link>
        </div>
        <div>|</div>
        <div className="flex justify-center items-center">
          <Link
            to="/blog"
            className="text-[14px] text-[#333E48] tracking-wide hover:text-yellow-500 p-[1rem]"
          >
            Blog
          </Link>
        </div>
      </div>
      <div>
        <h1 className="uppercase font-semibold text-[#333e48] mb-[20px] pt-[10px] text-[18px]">
          all blogs
        </h1>
      </div>
      <div className="border-b-2 border-black-100 pb-[10px]">
        <h1 className="font-semibold text-[#333e48] mb-[20px] pt-[10px] text-[18px]">
          Lorem Ipsum is therefore always free from repetition humour
        </h1>
        <div className="w-[100%] h-[400px] bg-[url('https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-5-900x771.jpg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="w-[100%] flex justify-between items-center border-b-2 border-black-100">
          <div className="text-[#0062bd] text-[14px] flex items-center pt-[15px] pb-[15px]">
            <GoCalendar />
            <div className="pl-[5px]">22 September, 2022</div>
          </div>
          <div className="flex text-[14px]">
            <div className="mr-[10px]">0 Comment</div>
            <Link to="/" className="flex items-center hover:text-yellow-500">
              <BsChat />
              <div className="pl-[5px]">Leave Comment</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-[15px] leading-[26px] pt-[15px] pb-[15px] flex items-center">
            1914 translation by H. Rackham"But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No o...
          </div>
          <div className="flex justify-end">
            <Link
              to="slugger"
              className="pt-[9px] pb-[9px] pl-[40px] pr-[25px] min-w-[170px] bg-[#fed700] border border-[#fed700] text-[#333e48] uppercase text-[14px] font-medium hover:bg-[#333e48] hover:text-[#fff] hover:border-[#333e48]"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black-100 pb-[10px]">
        <h1 className="font-semibold text-[#333e48] mb-[20px] pt-[10px] text-[18px]">
          Lorem Ipsum is therefore always free from repetition humour
        </h1>
        <div className="w-[100%] h-[400px] bg-[url('https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-5-900x771.jpg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="w-[100%] flex justify-between items-center border-b-2 border-black-100">
          <div className="text-[#0062bd] text-[14px] flex items-center pt-[15px] pb-[15px]">
            <GoCalendar />
            <div className="pl-[5px]">22 September, 2022</div>
          </div>
          <div className="flex text-[14px]">
            <div className="mr-[10px]">0 Comment</div>
            <Link to="/" className="flex items-center hover:text-yellow-500">
              <BsChat />
              <div className="pl-[5px]">Leave Comment</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-[15px] leading-[26px] pt-[15px] pb-[15px] flex items-center">
            1914 translation by H. Rackham"But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No o...
          </div>
          <div className="flex justify-end">
            <Link
              to="slugger"
              className="pt-[9px] pb-[9px] pl-[40px] pr-[25px] min-w-[170px] bg-[#fed700] border border-[#fed700] text-[#333e48] uppercase text-[14px] font-medium hover:bg-[#333e48] hover:text-[#fff] hover:border-[#333e48]"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
