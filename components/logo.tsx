import React from "react";
import Image from "next/image";
import LogoImg from "../public/images/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="glitch lg:max-w-full max-w-[92%] overflow-hidden">
      <Image
        src={LogoImg}
        width="600"
        height="161"
        alt="Vivid logo"
        className="figure overflow-visible"
      />
    </div>
  );
};

export default Logo;
