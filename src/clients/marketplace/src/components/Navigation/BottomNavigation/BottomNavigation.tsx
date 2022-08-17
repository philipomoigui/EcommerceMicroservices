import React from "react";

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
              <a>home</a>
            </li>
            <li>
              <a>contact</a>
            </li>
            <li>
              <a>affiliate</a>
            </li>
            <li>
              <a>special </a>
            </li>
            <li>
              <a>site map</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-[20rem] "></div>
      </div>
    </div>
  );
};

export default BottomNavigation;
