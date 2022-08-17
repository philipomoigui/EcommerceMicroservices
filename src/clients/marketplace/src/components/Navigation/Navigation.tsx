import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import TopNavigation from "./TopNavigation/TopNavigation";

const Navigation = (props: { children: JSX.Element }) => {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="w-100 flex justify-center items-center">
        <div className="flex justify-between w-[100rem]">
          <Sidebar />
          <div className="w-[80rem] p-[2rem]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
