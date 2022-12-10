import Link from "next/link";
import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";

const BackPage = (props) => {
  return (
    <section className="my-5 flex items-center">
      <Link
        className="transition-all py-2 text-th-blue border-b-2 border-transparent hover:border-th-blue flex gap-1 items-center"
        href={props.url}
      >
        <BsFillCaretLeftFill className="text-[2rem]" />
        <span className="text-xl">{props.title}</span>
      </Link>
    </section>
  );
};

export default BackPage;
