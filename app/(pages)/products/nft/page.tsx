"use client";

import { useState } from "react";
import NftFilter from "#/components/nft-filter";
import NFTList from "#/components/nft-list";
import { defaultFilters, TraitKey } from "#/hooks/useNFTGraph";
import ReadMore from "#/components/read-more";

export default function Page() {
  const [filters, setFilters] = useState(defaultFilters);
  const [text, setText] = useState("");
  function toggleTrait(trait: TraitKey, value: string) {
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

  return (
    <div className="px-[6.5vw] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <h2 className="text-h2">8888</h2>
      <h1 className="text-h1">Unique pieces</h1>
      <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
        個性的
      </h3>
      <div className="flex justify-between relative items-stretch">
        <div className="max-w-[440px]">
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
          <div className="mt-5">
            <NftFilter
              filters={filters}
              toggleTrait={toggleTrait}
              text={text}
              setText={setText}
            />
          </div>
        </div>
        <div className="flex-1 relative ml-8">
          <div className="max-w-[1050px] h-full left-0 right-0 mx-auto bottom-8 absolute overflow-auto scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg pr-4 scrollbar-h-[240px]">
            <NFTList filters={filters} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
