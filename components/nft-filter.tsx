"use client";
import { Popover } from "@headlessui/react";
import IconOpen from "#/public/images/icon_open.svg";
import IconClose from "#/public/images/icon_close.svg";
import Image from "next/image";
import { NFTFilters, TraitKey, traitKeys } from "#/hooks/useNFTGraph";

export default function ({
  filters,
  toggleTrait,
}: {
  filters: NFTFilters;
  toggleTrait: (trait: TraitKey, value: string) => void;
}) {
  return (
    <div>
      <p className="text-[40px] font-extrabold leading-tight mt-8 mb-6">
        Filter
      </p>
      {traitKeys.map((key) => {
        const trait = filters[key];
        return (
          <Popover className="mb-4" key={key}>
            <Popover.Button className="text-lg w-full hover:text-red transition flex items-center justify-between">
              <span>
                {trait.name}
                {trait.selected.length ? ` (${trait.selected.length})` : ""}
              </span>
              <Image src={IconOpen} alt="Open" className="ui-open:hidden" />
              <Image
                src={IconClose}
                alt="Close"
                className="ui-open:block hidden"
              />
            </Popover.Button>
            <Popover.Panel className="w-full">
              <div className="flex flex-col pt-2">
                {trait.values
                  .filter((value) => !!value)
                  .map((value) => {
                    const selected = trait.selected.includes(value);
                    return (
                      <div
                        key={value}
                        className="flex justify-between items-center group cursor-pointer"
                        onClick={() => toggleTrait(key, value)}
                      >
                        <p
                          key={value}
                          className="text-lg font-extralight mb-2 capitalize group-hover:font-light"
                        >
                          {value}
                        </p>
                        <div
                          className={`w-6 h-6 border-[1.5px] border-[#FCFCFC] ${
                            selected ? "bg-red" : ""
                          }`}
                        />
                      </div>
                    );
                  })}
              </div>
            </Popover.Panel>
          </Popover>
        );
      })}
    </div>
  );
}
