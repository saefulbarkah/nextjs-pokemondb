import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <Link
      className={`bg-th-blue-dark p-3.5 rounded-lg transition-opacity duration-300 hover:bg-th-blue-hover`}
      href={props.url}
    >
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center h-[75px]">
          <Image src={props.src} alt="" width={75} height={75} priority />
        </div>
        <h4 className="font-bold capitalize mt-3 text-lg">{props.name}</h4>
      </div>
    </Link>
  );
};

export default Card;
