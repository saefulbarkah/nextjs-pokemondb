import React from "react";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
const Social = () => {
  return (
    <ul className="flex gap-5 py-5 justify-start">
      <a href="discord" alt="discord">
        <FaDiscord className="text-[30px] text-th-blue" />
      </a>
      <a href="discord" alt="discord">
        <FaTwitter className="text-[30px] text-th-blue" />
      </a>
      <a href="discord" alt="discord">
        <FaFacebook className="text-[30px] text-th-blue" />
      </a>
    </ul>
  );
};

export default Social;
