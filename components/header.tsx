"use client";
import Image from "next/image";
import Logo from "#/public/images/logo.svg";
import Menu from "#/public/images/icon_menu.svg";
import Navbar from "./navbar";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import NavbarMobile from "./navbar_mobile";
import SocialIcons from "./social-icons";

export default function Header() {
  return (
    <div className="h-[80px] px-[40px] flex items-center justify-between py-[27px] bg-modal backdrop-blur-[30px] relative z-10">
      <div className="flex-1">
        <Link href="/">
          <Image src={Logo} alt="Vivid logo" width={140} height={25} />
        </Link>
      </div>
      <div className="hidden xl:block">
        <SocialIcons />
      </div>
      <Navbar className="hidden xl:flex flex-1 justify-end" />
      <Popover className="relative xl:hidden">
        <Popover.Button>
          <Image src={Menu} alt="menu" width={32} height={24} />
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-0 w-screen h-[calc(100vh-80px)] z-50 top-[calc(100%+26px)] right-[-2.5rem] bg-overlay backdrop-blur-[30px]">
            <div className="flex flex-col h-full justify-between items-stretch py-10">
              <NavbarMobile />
              <div className="self-center">
                <SocialIcons />
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
