"use client";

import { useState } from "react";
import NftFilter from "#/components/nft-filter";
import ReadMore from "#/components/read-more";
import Event10 from "#/public/images/events/1_0.jpg";
import Event11 from "#/public/images/events/1_1.jpg";
import Event12 from "#/public/images/events/1_2.jpg";
import Event13 from "#/public/images/events/1_3.jpg";
import Event14 from "#/public/images/events/1_4.jpg";
import Image from "next/image";

export default function Page() {
  const [filters, setFilters] = useState({});
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col px-[6.5vw] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-1 justify-between relative items-stretch">
        <div className="max-w-[498px]">
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
            {/* <NftFilter
              filters={filters}
              toggleTrait={toggleTrait}
              text={text}
              setText={setText}
            /> */}
          </div>
        </div>
        <div className="flex-1 relative ml-8">
          <div className="max-w-[935px] h-full left-0 right-0 top-0 mx-auto bottom-8 absolute overflow-auto scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg pr-4 scrollbar-h-[240px]">
            <div className="bg-overlay rounded-md px-7 py-8 mb-10">
              <h4 className="text-[2.5rem] leading-none font-bold">
                14th of January 2023
              </h4>
              <h3 className="text-[4rem] leading-none font-extrabold">
                NEW YORK POP UP STORE
              </h3>
              <h5 className="text-red text-lg leading-tight mb-4">
                サイバーパンク
              </h5>
              <p className="text-lg font-normal">
                Aadjee is VIVID’s product designer with over 7 years of
                experience in the fintech industry. He specializes in creating
                visually appealing designs on iOS , Android and WEB with a
                strong focus on user experience. Aadjee has a background in
                fintech, giving him unique insights into the design challenges
                of the financial industry.
              </p>
              <button className="text-red text-lg font-semibold mt-2">
                See more
              </button>
            </div>
            <div className="bg-overlay rounded-md px-7 py-8">
              <h4 className="text-[2.5rem] leading-none font-bold">
                14th of January 2023
              </h4>
              <h3 className="text-[4rem] leading-none font-extrabold">
                NEW YORK POP UP STORE
              </h3>
              <h5 className="text-red text-lg leading-tight mb-4">
                サイバーパンク
              </h5>
              <p className="text-lg font-normal">
                Aadjee is VIVID’s product designer with over 7 years of
                experience in the fintech industry. He specializes in creating
                visually appealing designs on iOS , Android and WEB with a
                strong focus on user experience. Aadjee has a background in
                fintech, giving him unique insights into the design challenges
                of the financial industry.
              </p>
              <div className="flex w-full overflow-hidden justify-between gap-5 mt-6">
                <div className="rounded-[27px] flex-1 overflow-hidden">
                  <Image src={Event10} alt="event 1 picture 0" />
                </div>
                <div className="rounded-[27px] flex-1 overflow-hidden">
                  <Image src={Event11} alt="event 1 picture 1" />
                </div>
                <div className="rounded-[27px] flex-1 overflow-hidden">
                  <Image src={Event12} alt="event 1 picture 2" />
                </div>
              </div>
              <Image
                src={Event13}
                alt="event 1 picture 3"
                className="w-full mt-10 rounded-[27px]"
              />
              <Image
                src={Event14}
                alt="event 1 picture 4"
                className="w-full mt-2 rounded-[27px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
