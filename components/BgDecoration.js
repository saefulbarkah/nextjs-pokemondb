import Image from "next/image";
import React from "react";

const BgDecoration = (props) => {
  return (
    <div className="fixed opacity-10 md:left-[60%] left-[2%] bottom-[25%] md:bottom-[25%] -z-[50] select-none md:h-[450px]">
      <Image
        src={props.path}
        alt=""
        width={400}
        height={400}
        priority
        className="w-[400px] md:w-[700px] select-none pointer-events-none"
      />
    </div>
  );
};

export default BgDecoration;
