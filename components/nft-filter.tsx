"use client";
import { Popover } from "@headlessui/react";
import IconOpen from "#/public/images/icon_open.svg";
import IconClose from "#/public/images/icon_close.svg";
import Image from "next/image";
import { NFTFilters, TraitKey, traitKeys } from "#/hooks/useNFTGraph";
import { useState } from "react";

export default function ({
  filters,
  toggleTrait,
  text,
  setText,
}: {
  filters: NFTFilters;
  toggleTrait: (trait: TraitKey, value: string) => void;
  text: string;
  setText: (text: string) => void;
}) {
  const [textFilter, setTextFilter] = useState(
    {} as Record<TraitKey, string | undefined>
  );
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-12 p-4 text-black outline-none rounded-md"
        placeholder="Search..."
      ></input>
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
              <div className="flex flex-col pt-4">
                <input
                  value={textFilter[key] || ""}
                  onChange={(e) =>
                    setTextFilter((value) => ({
                      ...value,
                      [key]: e.target.value,
                    }))
                  }
                  className="h-12 p-4 text-black outline-none rounded-md"
                  placeholder="Search..."
                />
                <div className="flex flex-col mt-2 pt-2 max-h-[300px] overflow-auto scrollbar-thumb-transparent scrollbar">
                  {trait.values
                    .filter(
                      (value) =>
                        !!value &&
                        (!textFilter[key] ||
                          value
                            .toLowerCase()
                            .includes(textFilter[key]!.toLowerCase()))
                    )
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
              </div>
            </Popover.Panel>
          </Popover>
        );
      })}
    </div>
  );
}
