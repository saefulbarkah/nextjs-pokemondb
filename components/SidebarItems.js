import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SidebarContext from "../context/sidebarContext";

const SidebarItems = (props) => {
  const { handleSidebar } = useContext(SidebarContext);
  const router = useRouter();
  return (
    <>
      <Link
        href={`${props.url}`}
        className={`${
          router.pathname === `${props.url}`
            ? "transition-all hover:bg-white/5 py-3 hover:font-bold hover:translate-x-2 hover:text-th-cream text-th-cream font-bold capitalize"
            : "transition-all hover:bg-white/5 py-3 hover:font-bold hover:translate-x-2 hover:text-th-cream capitalize"
        }`}
        onClick={() => handleSidebar()}
      >
        {props.name}
      </Link>
    </>
  );
};

export default SidebarItems;
