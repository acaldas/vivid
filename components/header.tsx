import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import LogoSmall from "../public/images/logo_small.svg";
import TwitterIcon from "../public/images/twitter.svg";
import DiscordIcon from "../public/images/discord.svg";
import CloseIcon from "../public/images/close.svg";
import { useWeb3React } from "@web3-react/core";
import { CHAIN_ID } from "../config";
import { metaMaskHooks } from "../hooks/useMetamask";

interface IProps extends React.HTMLProps<HTMLDivElement> {}

const { useIsActive, useAccount } = metaMaskHooks;

const Header: React.FC<IProps> = ({ className, ...props }) => {
  const [open, setOpen] = useState(false);
  const { connector } = useWeb3React();
  const account = useAccount();
  const isActive = useIsActive();

  const connectWallet = async () => {
    await connector.activate(CHAIN_ID);
  };

  useEffect(() => {
    if (isActive) {
      return;
    }
    connector.connectEagerly?.();
  }, [connector, isActive]);

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
    // <button key="item 1" className="header-button ml-[32px]">
    //   Menu item 1
    // </button>,
    // <button
    //   key="item 2"
    //   className="header-button ml-[32px]"
    //   onClick={connectWallet}
    // >
    //   {isActive && account ? `${account.substring(0, 7)}...` : "Connect wallet"}
    // </button>,
  ];
  const optionsMobile = [options[2], options[3], options[0], options[1]];

  return (
    <div
      className={`flex justify-between relative lg:p-[40px] lg:pl-[75px] p-[24px] items-center ${className}`}
      {...props}
    >
      <div className="lg:w-auto w-[75px]">
        <Image src={LogoSmall} alt="Vivid logo" width="100" height="18" />
      </div>
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
  );
};

export default Header;
