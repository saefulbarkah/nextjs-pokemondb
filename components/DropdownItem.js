import { Disclosure } from "@headlessui/react";
import React from "react";
import Paragraph from "./Paragraph";

const DropdownItem = ({ children, key, className, title }) => {
  return (
    <>
      <Disclosure.Panel className="bg-th-blue-dark p-5">
        <div className="bg-th-darken p-5">
          <h5 className={`font-bold text-2xl capitalize ${className}`}>
            {title}
          </h5>
          <Paragraph>{children}</Paragraph>
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default DropdownItem;
