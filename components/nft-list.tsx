"use client";

import useGraph, { NFTFilters } from "#/hooks/useNFTGraph";
import NFTCard from "./nft-card";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useState } from "react";
import { NFTModal } from "./nft-modal";

export default function NFTList({
  tokens,
  setSize,
}: {
  tokens: { tokenID: string; image: string }[];
  setSize: (arg: (size: number) => number) => void;
}) {
  const { ref, inView } = useInView();
  const [selectedNFT, setSelectedNFT] = useState<
    | {
        tokenID: string;
        image: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    if (inView) {
      setSize((size) => size + 1);
    }
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {tokens.map((nft, index) => {
          return (
            <NFTCard
              key={nft.tokenID}
              id={nft.tokenID}
              image={nft.image}
              ref={index === tokens.length - 5 ? ref : undefined}
              onClick={() => setSelectedNFT(nft)}
            />
          );
        })}
      </div>
      <NFTModal
        open={!!selectedNFT}
        id={selectedNFT?.tokenID}
        image={selectedNFT?.image}
        onClose={() => setSelectedNFT(undefined)}
      />
    </>
  );
}
