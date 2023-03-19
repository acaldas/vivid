"use client";
import Image from "next/image";
import Menu from "#/public/images/icon_menu.svg";
import Cross from "#/public/images/icon_cross.svg";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import NavbarMobile from "./navbar-mobile";
import SocialIcons from "./social-icons";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function HeaderMobile() {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal-content");
  }, []);

  return (
    <Popover className="relative xl:hidden">
      <Popover.Button>
        {({ open }) => {
          return open ? (
            <>
              {ref.current
                ? createPortal(
                    <div className="fixed w-full h-full z-[1] bg-overlay backdrop-blur-[30px]" />,
                    ref.current
                  )
                : null}
              <Image src={Cross} alt="Close menu" width={24} height={24} />
            </>
          ) : (
            <Image src={Menu} alt="Open menu" width={32} height={24} />
          );
        }}
      </Popover.Button>
      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute bottom-0 w-screen h-[calc(100vh-80px)] z-50 top-[calc(100%+26px)] right-[-2rem] bg-overlay">
          {({ close }) => (
            <div className="flex flex-col h-full justify-between items-stretch py-10 overflow-auto relative ">
              <NavbarMobile close={close} />
              <div className="flex flex-col items-center mt-[6vh] px-[40px]">
                <SocialIcons />
                <Link
                  href="/login"
                  onClick={() => close()}
                  className="bg-red mt-[8vh] rounded-md h-14 w-full pb-2 pt-1 text-lg font-light leading-relaxed text-center"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
