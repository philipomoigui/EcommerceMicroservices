import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Header from "./Header";

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <div className="w-100 flex justify-center items-center">
        <div className="flex justify-between w-[100rem]">
          <Sidebar />
          <div className="w-[80rem] p-[2rem]">{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
