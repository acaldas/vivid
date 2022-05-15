import React from "react";
import Image from "next/image";
import LogoSmall from "../public/images/logo_small.svg";
import TwitterIcon from "../public/images/twitter.svg";
import DiscordIcon from "../public/images/discord.svg";

interface IProps extends React.HTMLProps<HTMLDivElement> {}

const Header: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <div
      className={`flex justify-between p-[40px] pl-[75px] items-center ${className}`}
      {...props}
    >
      <Image src={LogoSmall} alt="Vivid logo" width="100" height="18" />
      <div className="flex">
        <a
          href="https://twitter.com/vividcojp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2  header-button select-none"
        >
          <Image
            src={TwitterIcon}
            alt="Twitter"
            width="16"
            height="12"
            draggable={false}
          />
        </a>
        <a
          href="https://discord.com/invite/vividcojp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 ml-[16px] header-button select-none"
        >
          <Image
            src={DiscordIcon}
            alt="Discord"
            width="16"
            height="12"
            draggable={false}
          />
        </a>
        <button className="header-button ml-[32px]">Menu item 1</button>
        <button className="header-button ml-[32px]">Menu item 2</button>
      </div>
    </div>
  );
};

export default Header;
