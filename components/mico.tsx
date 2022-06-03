import React from "react";
import Image from "next/image";
import MicoImg from "../public/images/front_image.png";
import MicoMobileImg from "../public/images/front_image_mobile.png";

const Mico: React.FC<{
  desktopClassName?: string;
  mobileClassName?: string;
}> = ({ desktopClassName = "", mobileClassName = "" }) => (
  <>
    <div
      className={`lg:block hidden absolute bottom-0 right-0 h-full w-1/2 pointer-events-none ${desktopClassName}`}
    >
      <Image
        src={MicoImg}
        priority
        alt="Mico"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
      />
    </div>
    <div
      className={`lg:hidden block fixed bottom-[3px] right-0 h-[82vh] w-full pointer-events-none ${mobileClassName}`}
    >
      <Image
        src={MicoMobileImg}
        priority
        alt="Mico"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
      />
    </div>
  </>
);

export default Mico;
