import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="w-[100%]">
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
            All Blogs
          </Link>
        </div>
        <div>|</div>
        <div className="flex justify-center items-center">
          <Link
            to="/blog"
            className="text-[14px] text-[#333E48] tracking-wide hover:text-yellow-500 p-[1rem]"
          >
            Lorem Ipsum is therefore always free from repetition
          </Link>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-[#333e48] mb-[20px] pt-[10px] text-[18px]">
          Lorem Ipsum is therefore always free from repetition humour
        </h1>
        <div className="w-[100%] h-[600px] bg-[url('https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-5-900x771.jpg')] bg-cover bg-no-repeat bg-center"></div>
        <div className="text-[#0062bd] text-[14px] flex items-center pt-[15px] pb-[10px]">
          <GoCalendar />
          <div className="pl-[5px]">22 September, 2022</div>
        </div>
        <div className="text-[15px] leading-[26px] pt-[10px] pb-[10px] flex items-center">
          Feugiat in ante metus dictum at tempor commodo. Dolor sed viverra
          ipsum nunc. Auctor elit sed vulputate mi sit amet. Aliquet nec
          ullamcorper sit amet risus nullam eget felis eget. Faucibus turpis in
          eu mi bibendum neque egestas congue. In vitae turpis massa sed
          elementum tempus. Facilisis magna etiam tempor orci eu lobortis.
          Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.
          In aliquam sem fringilla ut morbi tincidunt augue interdum. Tristique
          senectus et netus et malesuada fames. Aenean et tortor at risus
          viverra adipiscing at. Ipsum a arcu cursus vitae congue. Semper
          viverra nam libero justo laoreet. Amet consectetur adipiscing elit ut
          aliquam purus. Nunc eget lorem dolor sed. Netus et malesuada fames ac
          turpis. Feugiat in ante metus dictum at tempor commodo. Dolor sed
          viverra ipsum nunc. Auctor elit sed vulputate mi sit amet. Aliquet nec
          ullamcorper sit amet risus nullam eget felis eget. Faucibus turpis in
          eu mi bibendum neque egestas congue. In vitae turpis massa sed
          elementum tempus. Facilisis magna etiam tempor orci eu lobortis.
          Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.
          In aliquam sem fringilla ut morbi tincidunt augue interdum. Tristique
          senectus et netus et malesuada fames. Aenean et tortor at risus
          viverra adipiscing at. Ipsum a arcu cursus vitae congue. Semper
          viverra nam libero justo laoreet. Amet consectetur adipiscing elit ut
          aliquam purus. Nunc eget lorem dolor sed. Netus et malesuada fames ac
          turpis.
        </div>
        <h1 className="font-semibold text-[#333e48] mb-[20px] pt-[10px] text-[18px] w-[100%] border-b-2 border-black-100 p-[5px]">
          Add Comment
        </h1>
        <div className="w-100">
          <form>
            <div className="flex justify-between items-center w-[100%] mb-[1rem]">
              <label
                htmlFor="Name"
                className="text-[14px] font-semibold text-[#333E48] w-[25%]"
              >
                Author:
              </label>
              <input
                type="text"
                className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] h-[40px] focus:outline-none"
                placeholder="Author"
              />
            </div>
            <div className="flex justify-between items-center w-[100%] mb-[1rem]">
              <label
                htmlFor="Name"
                className="text-[14px] font-semibold text-[#333E48] w-[25%]"
              >
                Email Address:
              </label>
              <input
                type="email"
                className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] h-[40px] focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <div className="flex justify-between w-[100%] mb-[1rem]">
              <label
                htmlFor="Name"
                className="text-[14px] font-semibold text-[#333E48] w-[25%]"
              >
                Comment:
              </label>
              <textarea
                className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] focus:outline-none"
                rows={15}
              ></textarea>
            </div>
            <div className="flex justify-end items-center">
              <input
                type="submit"
                value="Submit"
                className="font-medium text-center pt-[7px] pb-[7px] pl-[20px] pr-[20px] uppercase leading-[24px] bg-[#fed700] hover:text-[#fff] hover:border-[#333e48] hover:bg-[#333e48]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
