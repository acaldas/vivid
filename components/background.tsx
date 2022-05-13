import React from "react";
import Image from "next/image";
import VImg from "../public/images/v.png";
import Text from "./text";

interface IProps {
  loading: boolean;
}

const Background: React.FC<IProps> = ({ loading }) => {
  return (
    <div className="pointer-events-none absolute top-0 bottom-0 z-0 flex flex-col justify-center items-center left-0 right-0 overflow-hidden transition-opacity">
      <h2
        className="h-[86px] mb-[40px] text-[64px] leading-[0.95em] transition-opacity duration-700"
        style={{ opacity: loading ? 1 : 0 }}
      >
        <Text>Loading...</Text>
      </h2>
      <div
        className="transition-opacity duration-1000"
        style={{
          opacity: loading ? 1 : 0.5,
        }}
      >
        <Image src={VImg} width="600" height="400" alt="V" />
      </div>
      <h2 className="h-[86px] mb-[40px]"></h2>
    </div>
  );
};

export default Background;
