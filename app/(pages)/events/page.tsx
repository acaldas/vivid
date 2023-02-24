"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ReadMore from "#/components/read-more";
import IconCross from "#/public/images/icon_cross_dark.svg";
import Event10 from "#/public/images/events/1_0.jpg";
import Event11 from "#/public/images/events/1_1.jpg";
import Event12 from "#/public/images/events/1_2.jpg";
import Event13 from "#/public/images/events/1_3.jpg";
import Event14 from "#/public/images/events/1_4.jpg";
import Filters from "#/components/filters";
import { Dialog } from "@headlessui/react";

const Events = [
  {
    date: "14th of January 2023",
    title: "NEW YORK POP UP STORE",
    subtitle: "サイバーパンク",
    text: `Aadjee is VIVID’s product designer with over 7 years of
    experience in the fintech industry. He specializes in creating
    visually appealing designs on iOS , Android and WEB with a
    strong focus on user experience. Aadjee has a background in
    fintech, giving him unique insights into the design challenges
    of the financial industry.`,
    meta: {
      country: ["USA"],
      event: ["Pop Up Store"],
    },
  },
  {
    date: "14th of January 2023",
    title: "NEW YORK POP UP STORE",
    subtitle: "サイバーパンク",
    text: `Aadjee is VIVID’s product designer with over 7 years of
    experience in the fintech industry. He specializes in creating
    visually appealing designs on iOS , Android and WEB with a
    strong focus on user experience. Aadjee has a background in
    fintech, giving him unique insights into the design challenges
    of the financial industry.`,
    meta: {
      country: ["USA", "Japan"],
      event: ["Pop Up Store"],
    },
    details: ({
      showImage,
    }: {
      showImage: (image: StaticImageData) => void;
    }) => (
      <>
        <div className="flex w-full overflow-hidden justify-between gap-5 mt-6">
          <button
            className="rounded-[27px] flex-1 overflow-hidden cursor-pointer"
            onClick={() => showImage(Event10)}
          >
            <Image src={Event10} alt="event 1 picture 0" />
          </button>
          <button
            className="rounded-[27px] flex-1 overflow-hidden cursor-pointer"
            onClick={() => showImage(Event11)}
          >
            <Image src={Event11} alt="event 1 picture 1" />
          </button>
          <button
            className="rounded-[27px] flex-1 overflow-hidden cursor-pointer"
            onClick={() => showImage(Event12)}
          >
            <Image src={Event12} alt="event 1 picture 2" />
          </button>
        </div>
        <button
          className="w-full mt-6 rounded-[27px] overflow-hidden cursor-pointer"
          onClick={() => showImage(Event13)}
        >
          <Image src={Event13} alt="event 1 picture 3" className="w-full" />
        </button>
        <button
          className="w-full mt-6 rounded-[27px] overflow-hidden cursor-pointer"
          onClick={() => showImage(Event14)}
        >
          <Image src={Event14} alt="event 1 picture 4" className="w-full" />
        </button>
      </>
    ),
  },
];

type EventFilters = Record<
  string,
  { selected: string[]; name: string; values: string[] }
>;

function filterKeyToName(key: string) {
  return key
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(" ");
}

const eventFilters = Events.reduce((acc, curr) => {
  Object.keys(curr.meta).forEach((key) => {
    const metaKey = key as keyof typeof curr.meta;
    const filter = acc[metaKey] || {
      selected: [],
      name: filterKeyToName(metaKey),
      values: [],
    };
    const allValues = filter.values.slice();
    const currentValues = curr.meta[metaKey];
    currentValues.forEach((value) => {
      if (!allValues.includes(value)) {
        allValues.push(value);
      }
      acc[metaKey] = { ...filter, values: allValues };
    });
  });
  return acc;
}, {} as EventFilters);

export default function Page() {
  const [filters, setFilters] = useState(eventFilters);
  const [text, setText] = useState("");
  function toggleFilter(trait: string, value: string) {
    setFilters((filters) => {
      const filter = filters[trait];
      let selected = filter.selected.slice();
      if (!selected.includes(value)) {
        selected.push(value);
      } else {
        selected = selected.filter((v) => v !== value);
      }
      return { ...filters, [trait]: { ...filter, selected } };
    });
  }

  const [image, setImage] = useState<StaticImageData | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  function handleClose() {
    setImage(null);
    setImageLoaded(false);
  }

  const events = useMemo(
    () =>
      Events.filter((event) =>
        text.length
          ? event.title.toLowerCase().includes(text.toLowerCase()) ||
            event.subtitle.toLowerCase().includes(text.toLowerCase()) ||
            event.text.toLowerCase().includes(text.toLowerCase())
          : true
      ).filter((event) => {
        let rejected = false;
        Object.keys(filters).forEach((key) => {
          const filter = filters[key];
          const metaKey = key as keyof typeof event.meta;
          if (
            filter.selected.length &&
            !filter.selected.find((value) =>
              event.meta[metaKey].includes(value)
            )
          ) {
            rejected = true;
          }
        });
        return !rejected;
      }),
    [text, filters]
  );

  return (
    <div className="flex flex-col px-[6.5vw] pt-[7vh] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-col xl:flex-row flex-1 justify-between relative items-stretch">
        <div className="xl:max-w-[498px] mb-8">
          <h2 className="text-h2">Vivid</h2>
          <h1 className="text-h1">Events</h1>
          <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
            イベント
          </h3>
          <ReadMore
            className="text-lg"
            small="VIVID is a dynamic and diverse team made up of individuals from different cultural backgrounds and expertise in a variety of fields. The team members bring a wealth of skills and knowledge to the table, allowing for a unique and creative approach."
            large=""
          />
          <div className="mt-5">
            <div className="mt-5 mb-8">
              <Filters
                filters={filters}
                toggleFilter={toggleFilter}
                text={text}
                setText={setText}
                count={events.length}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full xl:ml-8">
          <div className="xl:max-w-[935px] h-full left-0 right-0 top-0 mx-auto bottom-8  pb-8 xl:absolute overflow-auto scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg xl:pr-4 scrollbar-h-[240px]">
            {events.map((event, index) => (
              <div
                className="bg-overlay rounded-md px-7 py-8 mb-10"
                key={index}
              >
                <h4 className="text-[2.5rem] leading-none font-bold">
                  {event.date}
                </h4>
                <h3 className="text-[4rem] leading-none font-extrabold">
                  {event.title}
                </h3>
                <h5 className="text-red text-lg leading-tight mb-4">
                  {event.subtitle}
                </h5>
                <p className="text-lg font-normal">{event.text}</p>
                {event.details && event.details({ showImage: setImage })}
              </div>
            ))}
          </div>
          {
            <Dialog
              open={!!image}
              onClose={handleClose}
              className="relative z-50"
            >
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <div
                  className="fixed inset-0 bg-overlay backdrop-blur-[30px]"
                  aria-hidden="true"
                />
                <Dialog.Panel className="rounded-[27px] mx-auto overflow-hidden shadow-xl border-[3px] border-black w-[720px] max-w-[60%]">
                  <div className="bg-black relative">
                    {image && (
                      <Image
                        src={image}
                        alt="Event image"
                        width={620}
                        height={680}
                        className={`w-full opacity-${
                          imageLoaded ? 100 : 0
                        } duration-200 transition-opacity`}
                        onLoad={() => setImageLoaded(true)}
                      />
                    )}
                    {!imageLoaded && (
                      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 animate-pulse"></div>
                    )}
                    <button
                      className="absolute top-5 right-5 bg-black rounded-full p-2"
                      onClick={handleClose}
                    >
                      <Image
                        src={IconCross}
                        alt="close"
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          }
        </div>
      </div>
    </div>
  );
}
