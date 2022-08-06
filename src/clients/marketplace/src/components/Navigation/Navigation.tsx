import React from "react";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import TopNavigation from "./TopNavigation/TopNavigation";

const Navigation = (props: { children: JSX.Element }) => {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      {props.children}
    </div>
  );
};

export default Navigation;
