"use client";

import { useState } from "react";
import Link from "next/link";
import NftFilter from "#/components/nft-filter";
import NFTList from "#/components/nft-list";
import { defaultFilters, TraitKey } from "#/hooks/useNFTGraph";

export default function Page() {
  const [filters, setFilters] = useState(defaultFilters);

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
          <p className="text-lg">
            VIVID's NFT collection is a must-see for art enthusiasts and fans of
            the VIVID universe. The collection features 8888 unique works of art
            created by the talented Japanese artist, Acky Bright.
            <Link href="" className="text-red block">
              Read more
            </Link>
          </p>
          <div>
            <NftFilter filters={filters} toggleTrait={toggleTrait} />
          </div>
        </div>
        <div className="flex-1 relative ml-8">
          <div className="max-w-[1050px] h-full left-0 right-0 mx-auto bottom-8 absolute overflow-auto scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg pr-4 scrollbar-h-[240px]">
            <NFTList filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
