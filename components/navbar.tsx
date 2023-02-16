"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const links = [
  {
    title: "Products",
    link: [
      { title: "NFT", link: "/products/nft" },
      { title: "Fashion", link: "/products/fashion" },
    ],
  },
  {
    title: "Collaborations",
    link: [{ title: "Acky Bright", link: "/product/acky_bright" }],
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Team",
    link: "/team",
  },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={`flex ${className}`}>
      {links.map((value) => (
        <Fragment key={value.title}>
          {Array.isArray(value.link) ? (
            <Popover className="relative">
              <Popover.Button className="text-lg font-light px-5 h-full hover:text-red ui-open:text-red transition">
                {value.title}
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute z-10 top-[calc(100%+6px)] w-full bg-overlay backdrop-blur-[30px]">
                  <div className="flex flex-col">
                    {value.link.map((l) => (
                      <Link
                        prefetch={false}
                        key={l.title}
                        href={l.link}
                        className="text-lg font-light hover:text-red transition h-[60px] leading-[60px] px-4"
                      >
                        {l.title}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          ) : (
            <Link
              prefetch={false}
              href={value.link}
              className="text-lg font-light p-5 hover:text-red transition"
            >
              {value.title}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
}
