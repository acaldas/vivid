"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export const links = [
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
    link: [
      { title: "Events", link: "/events" },
      { title: "Roadmap", link: "/roadmap" },
    ],
  },
  {
    title: "About",
    link: [
      { title: "Team", link: "/team" },
      { title: "Contact", link: "/contact" },
    ],
  },
];

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
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
                <Popover.Panel className="absolute z-10 top-[calc(100%+6px)] min-w-full bg-overlay backdrop-blur-[30px]">
                  <div className="flex flex-col">
                    {value.link.map((l) => (
                      <div className="p-4" key={l.title}>
                        <Link
                          prefetch={false}
                          href={l.link}
                          className="text-lg font-light transition h-[60px]"
                        >
                          <span
                            className={`hover:text-red animate-underline ${
                              pathname === l.link && "selected text-red"
                            }`}
                          >
                            {l.title}
                          </span>
                        </Link>
                      </div>
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
      <Link
        href="/login"
        className="bg-red rounded-md h-11 px-10 pb-2 pt-1 text-lg leading-tight ml-[3vw]"
      >
        Login
      </Link>
    </div>
  );
}
