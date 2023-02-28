"use client";
import { Fragment } from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { links } from "./navbar";
import IconArrow from "#/public/images/icon_arrow.svg";

export default function NavbarMobile({
  close,
  className,
}: {
  close: () => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {links.map((value) => (
        <Fragment key={value.title}>
          {Array.isArray(value.link) ? (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between text-lg font-light px-[40px] w-full hover:text-red transition mt-6">
                    <span>{value.title}</span>
                    <Image
                      src={IconArrow}
                      alt="open"
                      width={28}
                      height={16}
                      className={`stroke-red ${open && "rotate-180"}`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="flex items-start">
                      <div className="flex flex-col pl-11 pt-4">
                        {value.link.map((l) => (
                          <div className=" px-4 mb-4 last:mb-1" key={l.title}>
                            <Link
                              prefetch={false}
                              key={l.title}
                              href={l.link}
                              onClick={close}
                              className="hover:text-red animate-underline text-lg font-light transition leading-[3rempx]"
                            >
                              {l.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
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
