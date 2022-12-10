import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ children, title, onClick }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className="bg-th-sky-dark/75 w-full text-start font-bold p-3"
            onClick={onClick}
          >
            <div className="flex items-center gap-2">
              <IoIosArrowDown
                className={`transition-all duration-300 text-xl ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
              <span className="text-xl capitalize">{title}</span>
            </div>
          </Disclosure.Button>
          <div className="overflow-hidden">
            <Transition
              enter="transition-all duration-300"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              {children}
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Dropdown;
