import Head from "next/head";
import React from "react";
import { SidebarProvider } from "../context/sidebarContext";
import SideBar from "./SideBar";

const Layouts = ({ children, noMarginTop }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <div
        className={`md:ml-[330px] md:mr-[30px] mx-[30px] ${
          noMarginTop ? "mt-0 mb-0 my-0" : "mt-[80px] md:my-[30px]"
        }`}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};

export default Layouts;
