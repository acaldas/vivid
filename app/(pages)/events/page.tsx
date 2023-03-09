"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ReadMore from "#/components/read-more";
import IconCross from "#/public/images/icon_cross_dark.svg";
import Event11 from "#/public/images/events/popup/1.png";
import Event12 from "#/public/images/events/popup/2.png";
import Event13 from "#/public/images/events/popup/3.png";
import Event14 from "#/public/images/events/popup/4.png";
import Event15 from "#/public/images/events/popup/5.png";
import Event16 from "#/public/images/events/popup/6.png";
import Event17 from "#/public/images/events/popup/7.png";
import Event18 from "#/public/images/events/popup/8.png";
import Event19 from "#/public/images/events/popup/9.png";
import Event110 from "#/public/images/events/popup/10.png";
import AnimeNyc1 from "#/public/images/events/anime_nyc/1.png";
import AnimeNyc2 from "#/public/images/events/anime_nyc/2.png";
import AnimeNyc3 from "#/public/images/events/anime_nyc/3.png";
import AnimeNyc4 from "#/public/images/events/anime_nyc/4.png";
import AnimeNyc5 from "#/public/images/events/anime_nyc/5.png";
import AnimeNyc6 from "#/public/images/events/anime_nyc/6.png";
import AnimeNyc7 from "#/public/images/events/anime_nyc/7.png";
import Filters from "#/components/filters";
import { Dialog } from "@headlessui/react";

const Events = [
  {
    date: "18th of November 2022",
    title: "ANIME NYC",
    subtitle: "サイバーパンク",
    text: "Vivid also recently attended Anime NYC with one of our collaborators; artist Acky Bright. It turned out to be an incredibly successful event. We met with many of our NFT holders and also made some new connections with people who fell in love with Vivid just as much as us. Anime NYC is an annual event that celebrates anime, manga, and Japanese culture, and it attracts thousands of enthusiasts from all over the world.",
    textMore:
      "The event is a perfect platform for companies like Vivid to showcase what we are about and connect with our audience. At the event, Vivid had the opportunity to engage with the community, show off our latest artwork, and educate people about the world of NFTs. With the help of Acky, we were able to create an immersive experience that resonated with our audience. One piece of this is Acky's 8'x8' live draw canvas, which took him 72 hours to complete. We as a company had an amazing time and hope to do more things like this in the future!!",
    meta: {
      country: ["USA"],
      event: ["Convention"],
    },
    details: ({
      showImage,
    }: {
      showImage: (image: StaticImageData) => void;
    }) => (
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="col-span-2" onClick={() => showImage(AnimeNyc1)}>
          <Image src={AnimeNyc1} alt="event 1 picture 0" className="h-full" />
        </button>
        <button className="col-span-2" onClick={() => showImage(AnimeNyc2)}>
          <Image src={AnimeNyc2} alt="event 1 picture 1" className="h-full" />
        </button>
        <button className="col-span-2" onClick={() => showImage(AnimeNyc3)}>
          <Image src={AnimeNyc3} alt="event 1 picture 2" className="h-full" />
        </button>
        <button className="col-span-1" onClick={() => showImage(AnimeNyc4)}>
          <Image src={AnimeNyc4} alt="event 1 picture 3" className="h-full" />
        </button>
        <button className="col-span-1" onClick={() => showImage(AnimeNyc5)}>
          <Image src={AnimeNyc5} alt="event 1 picture 4" className="h-full" />
        </button>
        <button className="col-span-2" onClick={() => showImage(AnimeNyc6)}>
          <Image src={AnimeNyc6} alt="event 1 picture 5" className="h-full" />
        </button>
        <button className="col-span-2" onClick={() => showImage(AnimeNyc7)}>
          <Image src={AnimeNyc7} alt="event 1 picture 6" className="h-full" />
        </button>
      </div>
    ),
  },
  {
    date: "15th of October 2022",
    title: "LOS ANGELES POP UP STORE",
    subtitle: "サイバーパンク",
    text: `We at Vivid are thrilled to have recently held a pop-up shop on Melrose in Los Angeles to showcase our latest line of anime-inspired fashion. We were excited to give fans and curious onlookers alike the chance to experience it for themselves. One of the highlights of the event was having our collaborative artist, Acky Bright, on site live-drawing on a canvas for three days straight. It was amazing to watch as he brought our character "Miko" to life, and fans were thrilled to be able to take pictures with him and see his creative process up close. Acky's art was a central part of our line so we were ecstatic to have him there all the way from Japan!`,
    textMore:
      "Of course, no pop-up shop would be complete without a party, and we were excited to host one for our fans and NFT holders. We're incredibly grateful to have such a passionate community supporting our brand and were thrilled to be able to celebrate with them in person. We had music, drinks, and of course, plenty of opportunities to show off our latest designs. We're incredibly proud of the work we've done so far, and we're excited to continue pushing the boundaries of what's possible with anime-inspired fashion and NFTs. Thank you to everyone who came out to support us on Melrose, and we can't wait to see what the future holds for Vivid.",
    meta: {
      country: ["USA"],
      event: ["Pop Up Store"],
    },
    details: ({
      showImage,
    }: {
      showImage: (image: StaticImageData) => void;
    }) => (
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="row-span-2" onClick={() => showImage(Event11)}>
          <Image src={Event11} alt="event 1 picture 0" className="h-full" />
        </button>
        <button onClick={() => showImage(Event12)}>
          <Image src={Event12} alt="event 1 picture 1" />
        </button>
        <button onClick={() => showImage(Event13)}>
          <Image src={Event13} alt="event 1 picture 2" />
        </button>
        <button className="row-span-2" onClick={() => showImage(Event14)}>
          <Image src={Event14} alt="event 1 picture 3" />
        </button>
        <button className="row-span-2" onClick={() => showImage(Event15)}>
          <Image src={Event15} alt="event 1 picture 4" className="h-full" />
        </button>
        <button onClick={() => showImage(Event16)}>
          <Image src={Event16} alt="event 1 picture 5" />
        </button>
        <button className="row-span-2" onClick={() => showImage(Event17)}>
          <Image src={Event17} alt="event 1 picture 6" />
        </button>
        <button onClick={() => showImage(Event18)}>
          <Image src={Event18} alt="event 1 picture 7" />
        </button>
        <button onClick={() => showImage(Event19)}>
          <Image src={Event19} alt="event 1 picture 8" />
        </button>
        <button onClick={() => showImage(Event110)}>
          <Image src={Event110} alt="event 1 picture 9" />
        </button>
      </div>
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
                <ReadMore
                  className="text-lg font-normal"
                  small={event.text}
                  large={
                    <>
                      <p className="mt-2">{event.textMore}</p>
                      {event.details && event.details({ showImage: setImage })}
                    </>
                  }
                />
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
