import React from "react";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <>
      <TopFooter />
      <BottomFooter />
      <div className="w-100 flex justify-center items-center font-[600] text-[15px] text-[#333E48] border">
        <div className="flex justify-center w-[100rem] pt-[1rem] pb-[1rem]">
          Powered By JayCart - Electronic Store © 2022
        </div>
      </div>
    </>
  );
};

export default Footer;
