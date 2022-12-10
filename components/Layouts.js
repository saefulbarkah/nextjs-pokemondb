import Head from "next/head";
import React from "react";
import { SidebarProvider } from "../context/sidebarContext";
import SideBar from "./SideBar";

const Layouts = ({ children, className }) => {
  return (
    <SidebarProvider>
      <SideBar />
      <div
        className={`md:ml-[330px] mt-[80px] md:mt-[30px] md:mr-[30px] mx-[30px] ${className}`}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};

export default Layouts;
