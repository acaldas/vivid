"use client";

import useGraph, { NFTFilters } from "#/hooks/useNFTGraph";
import NFTCard from "./nft-card";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useState } from "react";
import { NFTModal } from "./nft-modal";

export default function NFTList({
  filters,
  text,
}: {
  filters: NFTFilters;
  text: string;
}) {
  const { ref, inView } = useInView();
  const { data, setSize } = useGraph(filters, text);
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
    <>
      <div className="grid grid-cols-4 gap-8">
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
