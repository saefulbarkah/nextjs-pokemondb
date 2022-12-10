import { React, useContext } from "react";
import Border from "./Border";
import SidebarLinks from "./SidebarLinks";
import { SidebarTitle } from "./SidebarTitle";
import Social from "./Social";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import SidebarContext from "../context/sidebarContext";

const SideBar = () => {
  const { openSidebar, handleSidebar } = useContext(SidebarContext);
  return (
    <>
      <aside
        className={`transition-all fixed md:w-[300px] w-[250px] h-full top-0 left-0 border-r-2 border-r-black/30 bg-th-dark md:translate-x-0 z-[2] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="w-full flex flex-col px-[25px] h-full">
          {/* title */}
          <SidebarTitle />
          <Border />
          {/* sidebar link */}
          <SidebarLinks />
          <Border />

          {/* Social */}
          <Social />
        </nav>
        <button
          className={`md:hidden block bg-th-dark p-3 transition-all absolute top-[0] right-0 ${
            openSidebar ? "translate-x-0" : "translate-x-16"
          }`}
          onClick={() => handleSidebar()}
        >
          {openSidebar ? (
            <>
              <IoClose className="text-[40px] text-th-cream" />
            </>
          ) : (
            <GiHamburgerMenu className="text-[30px] text-th-cream" />
          )}
        </button>
      </aside>
    </>
  );
};

export default SideBar;
