import React from "react";
import reactStringReplace from "react-string-replace";

const ChangeColorNumber = (props) => {
  let str = `${props.text}`;
  const regex = props.regex;
  return reactStringReplace(str, regex, (match, i) => (
    <strong className="text-th-sky" key={i}>
      {match}
    </strong>
  ));
};

export default ChangeColorNumber;
