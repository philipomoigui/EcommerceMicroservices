import React from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="max-h-[50px] bg-yellow-500 w-100 flex justify-center items-center font-[600] text-[15px] uppercase text-[#333E48]">
      <div className="flex justify-between items-center w-[100rem] p-[3rem]">
        <div className="w-[20rem]">
          <h1>shop by categories</h1>
        </div>
        <div className="uppercase w-[60rem]">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/contact-us">contact</Link>
            </li>
            <li>
              <Link to="/">affiliate</Link>
            </li>
            <li>
              <Link to="/">special</Link>
            </li>
            <li>
              <Link to="/">site map</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
          </ul>
        </div>
        <div className="w-[20rem] "></div>
      </div>
    </div>
  );
};

export default BottomNavigation;
