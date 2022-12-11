import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = (props) => {
  return (
    <div className={`flex shadow-lg ${props.className} relative`}>
      <div className="bg-th-red flex items-center p-2 rounded-l-lg absolute">
        <BiSearchAlt2 className="font-bold text-2xl" />
      </div>
      <input
        type="text"
        className="rounded-lg w-full py-2 pl-[3rem] pr-[10px] outline-none bg-th-sky-dark/50
			focus:ring focus:ring-th-red transition-all"
        name="name_pokemon"
        placeholder={props.placeHolder}
        spellCheck="false"
        id=""
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
