import Head from "next/head";
import React from "react";
import { SidebarProvider } from "../context/sidebarContext";
import SideBar from "./SideBar";

const Layouts = ({ children, noMargin }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <div
        className={`${
          noMargin
            ? "mt-0 mb-0 my-0 mx-0"
            : "md:ml-[330px] mt-[80px] md:my-[30px] md:mr-[30px] mx-[30px]"
        }`}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};

export default Layouts;
