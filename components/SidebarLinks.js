import React from "react";
import SidebarItems from "./SidebarItems";

const SidebarLinks = () => {
  return (
    <ul className="flex flex-col py-5 w-full">
      <SidebarItems name="pokemon" url="/pokemon" />
      <SidebarItems name="berry" url="/berry" />
    </ul>
  );
};

export default SidebarLinks;
