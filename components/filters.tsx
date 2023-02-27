"use client";
import { Dialog, Popover, Transition } from "@headlessui/react";
import IconOpen from "#/public/images/icon_open.svg";
import IconClose from "#/public/images/icon_close.svg";
import IconOpenDark from "#/public/images/icon_open_dark.svg";
import IconCloseDark from "#/public/images/icon_close_dark.svg";
import IconCrossDark from "#/public/images/icon_cross_dark.svg";
import IconFilter from "#/public/images/icon_filter.svg";
import Image from "next/image";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type Filters<T extends string> = Record<
  T,
  { selected: string[]; name: string; values: string[] }
>;

function FilterItemHead({
  trait,
  open,
  dark,
}: {
  trait: {
    selected: string[];
    name: string;
    values: string[];
  };
  open: boolean;
  dark?: boolean;
}) {
  return (
    <>
      <span>
        {`${trait.name} (${
          trait.selected.length ? trait.selected.length : trait.values.length
        })`}
      </span>
      {open ? (
        <Image src={dark ? IconCloseDark : IconClose} alt="Close" />
      ) : (
        <Image src={dark ? IconOpenDark : IconOpen} alt="Open" />
      )}
    </>
  );
}

function FilterItemContent({
  trait,
  text,
  onTextChange,
  toggleFilter,
  dark,
}: {
  trait: {
    selected: string[];
    name: string;
    values: string[];
  };
  text: string;
  onTextChange: (text: string) => void;
  toggleFilter: (value: string) => void;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col pt-4">
      <input
        value={text || ""}
        onChange={(e) => onTextChange(e.target.value)}
        className={`max-w-[400px] h-12 ml-[2px] p-4 text-black outline outline-${
          dark ? "black" : "none"
        } rounded-md`}
        placeholder="Search..."
      />
      <div className="flex flex-col mt-2 pt-2 max-h-[300px] overflow-auto scrollbar-thumb-transparent scrollbar">
        {trait.values
          .filter(
            (value) =>
              !!value &&
              (!text || value.toLowerCase().includes(text.toLowerCase()))
          )
          .map((value) => {
            const selected = trait.selected.includes(value);
            return (
              <div
                key={value}
                className="flex justify-between items-center group cursor-pointer"
                onClick={() => toggleFilter(value)}
              >
                <p
                  key={value}
                  className="text-lg font-extralight mb-2 capitalize group-hover:font-light"
                >
                  {value}
                </p>
                <div
                  className={`w-6 h-6 border-[1.5px] ${
                    dark ? "border-[#000000]" : "border-[#FCFCFC]"
                  } ${selected ? "bg-red" : ""}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

const FilterList = function <T extends string>({
  filters,
  toggleFilter,
  textFilter,
  setTextFilter,
  dark,
}: {
  filters: Filters<T>;
  toggleFilter: (trait: T, value: string) => void;
  textFilter: Record<T, string | undefined>;
  setTextFilter: Dispatch<SetStateAction<Record<string, string | undefined>>>;
  dark?: boolean;
}) {
  const filterKeys = Object.keys(filters) as T[];
  return (
    <>
      {filterKeys.map((key) => {
        const trait = filters[key as T];
        return (
          <Popover className="mb-4" key={key}>
            <Popover.Button className="text-lg w-full hover:text-red transition flex items-center justify-between">
              {({ open }) => (
                <FilterItemHead open={open} trait={trait} dark={dark} />
              )}
            </Popover.Button>
            <Popover.Panel className="w-full">
              <FilterItemContent
                dark={dark}
                trait={trait}
                text={textFilter[key] || ""}
                onTextChange={(text) => {
                  setTextFilter(
                    (value: Record<string, string | undefined>) => ({
                      ...value,
                      [key]: text,
                    })
                  );
                }}
                toggleFilter={(value) => toggleFilter(key, value)}
              />
            </Popover.Panel>
          </Popover>
        );
      })}
    </>
  );
};

const FiltersContainer = function <T extends string>({
  filters,
  toggleFilter,
  text,
  setText,
  count,
}: {
  filters: Filters<T>;
  toggleFilter: (trait: T, value: string) => void;
  text: string;
  setText: (text: string) => void;
  count: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal-content");
  }, []);

  const [textFilter, setTextFilter] = useState(
    {} as Record<string, string | undefined>
  );

  return (
    <div>
      <div className="flex items-stretch">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-12 p-4 text-black outline-none rounded-md w-full max-w-[298px]"
          placeholder="Search..."
        ></input>
        <button
          className="bg-red px-5 h-12 rounded-md ml-4 xl:hidden"
          onClick={() => setOpen(true)}
        >
          <Image src={IconFilter} alt="Filter" width={24} height={21} />
        </button>
        <Transition show={open} as={Fragment}>
          <Dialog onClose={() => setOpen(false)}>
            <Transition.Child
              enter="transition-opacity ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              as={Fragment}
            >
              <div
                className="fixed z-50 inset-0 bg-overlay backdrop-blur-[9px]"
                aria-hidden="true"
              />
            </Transition.Child>
            <Transition.Child
              enter="transition ease-out"
              enterFrom="transform translate-y-full"
              enterTo="transform translate-y-0"
              leave="transition ease-out"
              leaveFrom="transform translate-y-0"
              leaveTo="transform translate-y-full"
              as={Fragment}
            >
              {/* <div className="fixed w-full flex items-center justify-center"> */}
              <Dialog.Panel className="fixed z-50 bottom-0 flex flex-col py-4 px-6 rounded-t-md bg-white text-black w-full h-[60vh]">
                <div className="flex items-center justify-between mb-7">
                  <p className="text-lg font-extrabold">
                    Showing <span className="text-red">{count}</span> results
                  </p>
                  <button
                    className="bg-black rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={IconCrossDark} alt="" />
                  </button>
                </div>
                <div className="flex-1 pr-5 mr-[-1.5rem] overflow-auto scrollbar-thumb-overlay scrollbar-thin">
                  <FilterList<T>
                    dark
                    filters={filters}
                    toggleFilter={toggleFilter}
                    textFilter={textFilter}
                    setTextFilter={setTextFilter}
                  />
                </div>
              </Dialog.Panel>
              {/* </div> */}
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
      <div className="hidden xl:block">
        <p className="text-[40px] font-extrabold leading-tight mt-8 mb-6">
          Filter
        </p>
        <FilterList<T>
          filters={filters}
          toggleFilter={toggleFilter}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      </div>
    </div>
  );
};

FiltersContainer.displayName = "Filters";

export default FiltersContainer;
