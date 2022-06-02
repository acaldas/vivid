import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Popover } from "@headlessui/react";
import LogoSmall from "../public/images/logo_small.svg";
import TwitterIcon from "../public/images/twitter.svg";
import DiscordIcon from "../public/images/discord.svg";
import { useRouter } from "next/router";
import useWallet from "../hooks/useWallet";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  mintEnabled: boolean;
}

const Header: React.FC<IProps> = ({ mintEnabled, className, ...props }) => {
  const [open, setOpen] = useState(false);
  const { connectWallet, account, isActive } = useWallet();
  const router = useRouter();
  const path = router.pathname;

  const options = [
    <a
      key="twitter"
      href="https://twitter.com/vividcojp"
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 header-button select-none"
    >
      <Image
        src={TwitterIcon}
        alt="Twitter"
        width="16"
        height="12"
        draggable={false}
      />
    </a>,
    <a
      key="discord"
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
    </a>,
    <Link href="/fashion" key="fashion">
      <a
        className={`header-button ml-[32px] ${
          path === "/fashion" ? "text-gradient" : ""
        }`}
      >
        Fashion
      </a>
    </Link>,
    mintEnabled ? (
      <Popover key="NFT" className="relative ml-[32px]">
        <Popover.Button>
          <div
            className={`header-button text-[18px] font-exo ${
              ["/gallery", "/mint"].includes(path) ? "text-gradient" : ""
            }`}
          >
            NFT
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute z-50 mt-2 p-3 border border-[rgba(0,0,0,0.8)] shadow-md rounded-md lg:left-1/2 left-auto -translate-x-1/2 bg-white">
          <div>
            <Link href="/mint">
              <a
                className={`header-button py-2 inline-block mb-1 ${
                  "/mint" === path ? "text-gradient" : ""
                }`}
              >
                Mint
              </a>
            </Link>
            <Link href="/gallery">
              <a
                className={`header-button py-2 inline-block ${
                  "/gallery" === path ? "text-gradient" : ""
                }`}
              >
                Gallery
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Popover>
    ) : (
      <Link href="/gallery" key="gallery">
        <a
          className={`header-button ml-[32px] ${
            path === "/gallery" ? "text-gradient" : ""
          }`}
        >
          Gallery
        </a>
      </Link>
    ),
    <button
      key="wallet"
      className="header-button ml-[32px] pt-[1px]"
      onClick={() => (isActive && account ? undefined : connectWallet())}
    >
      {isActive && account ? `${account.substring(0, 7)}...` : "CONNECT WALLET"}
    </button>,
  ];
  const [twitterOption, discordOption, ...restOptions] = options;
  const optionsMobile = [twitterOption, discordOption, ...restOptions];

  return (
    <>
      <div
        className={`z-20 flex justify-between relative lg:p-[40px] lg:pl-[75px] p-[24px] items-center ${
          open ? "bg-white" : "bg-transparent"
        } ${className}`}
        {...props}
      >
        <Link href="/">
          <a className="block lg:w-auto w-[75px]">
            <Image src={LogoSmall} alt="Vivid logo" width="100" height="18" />
          </a>
        </Link>
        <div className="lg:flex hidden">{options}</div>
        <div className="lg:hidden">
          <Menu>
            <Menu.Button onClick={() => setOpen((open) => !open)}>
              <div className="w-[16px]">
                {open ? (
                  <span className="text-[24px] leading-tight">&times;</span>
                ) : (
                  <>
                    <div className="bg-black h-[2px] w-full mb-[4px]"></div>
                    <div className="bg-black h-[2px] w-full mb-[4px]"></div>
                    <div className="bg-black h-[2px] w-full"></div>
                  </>
                )}
              </div>
            </Menu.Button>
            {open ? (
              <Menu.Items
                static
                className="fixed top-[66px] left-0 right-0 bottom-0 z-50"
              >
                <div className="flex flex-col items-stretch h-full">
                  <div className="flex flex-col items-end bg-white border-[3px] border-black border-t-0">
                    {optionsMobile.map((option, i) => (
                      <Menu.Item key={i}>
                        <div className="px-[24px] py-[7px] mb-[4px]">
                          {option}
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                  <div
                    className="bg-overlay flex-1 flex-grow mx-[3px] mb-[3px]"
                    style={{ backdropFilter: "blur(4px)" }}
                    onClick={() => setOpen(false)}
                  ></div>
                </div>
              </Menu.Items>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
