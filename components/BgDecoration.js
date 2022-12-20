import Image from "next/image";
import React from "react";

const BgDecoration = (props) => {
  return (
    <div className="fixed opacity-10 md:-right-[250px] -right-[0px] md:-bottom-[100px] -bottom-[200px] -z-[50] select-none md:w-[80vw] h-full w-[100vw]">
      <Image
        src={props.path}
        alt=""
        objectFit="contain"
        fill
        priority={props.priority}
        className="select-none pointer-events-none"
      />
    </div>
  );
};

export default BgDecoration;
