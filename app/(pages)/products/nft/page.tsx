"use client";

import { useMemo, useState } from "react";
import Filters from "#/components/filters";
import NFTList from "#/components/nft-list";
import { defaultFilters, TraitKey } from "#/hooks/useNFTGraph";
import ReadMore from "#/components/read-more";
import useGraph from "#/hooks/useNFTGraph";

export default function Page() {
  const [filters, setFilters] = useState(defaultFilters);
  const [text, setText] = useState("");
  function toggleFilter(trait: TraitKey, value: string) {
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

  const { data, setSize } = useGraph(filters, text);
  const tokens = useMemo(() => {
    if (!data) return [];
    return data.reduce(
      (acc, curr) => [...acc, ...curr.tokens],
      [] as {
        tokenID: string;
        image: string;
      }[]
    );
  }, [data]);

  return (
    <div className="px-[6.5vw] pt-[7vh] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <h2 className="text-h2">8888</h2>
      <h1 className="text-h1">Unique pieces</h1>
      <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
        個性的
      </h3>
      <div className="flex flex-col xl:flex-row justify-between relative items-stretch">
        <div className="xl:max-w-[440px]">
          <ReadMore
            className="text-lg"
            small="VIVID's NFT collection is a must-see for art enthusiasts and fans
              of the VIVID universe. The collection features 8888 unique works
              of art created by the talented Japanese artist, Acky Bright."
            large="The pieces showcase the vibrant and colorful kawaii cyberpunk
              world of VIVID and offer a glimpse into the imagination of the
              artist. Each piece is one-of-a-kind and serves as a testament to
              the skill and creativity of Acky Bright."
          />
          <div className="mt-5 mb-8">
            <Filters
              filters={filters}
              toggleFilter={toggleFilter}
              text={text}
              setText={setText}
              count={tokens.length}
            />
          </div>
        </div>
        <div className="flex-1 relative xl:ml-8">
          <div className="xl:max-w-[1050px] h-full left-0 right-0 mx-auto bottom-8 xl:absolute xl:overflow-auto xl:scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg xl:pr-4 scrollbar-h-[240px]">
            <NFTList tokens={tokens} setSize={setSize} />
          </div>
        </div>
      </div>
    </div>
  );
}
