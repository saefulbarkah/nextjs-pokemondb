import Image from "next/image";
import React from "react";

export const SidebarTitle = () => {
  return (
    <div className="pb-5 flex flex-col items-center text-center">
      <Image
        src="/assets/logo.webp"
        alt=""
        loading="lazy"
        width={100}
        height={100}
      />
      <p className="text-xl font-bold">Pokémon Database</p>
    </div>
  );
};
