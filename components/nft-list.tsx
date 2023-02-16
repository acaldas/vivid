"use client";

import useGraph, { NFTFilters } from "#/hooks/useNFTGraph";
import NFTCard from "./nft-card";
import { useInView } from "react-intersection-observer";
import { Suspense, useEffect, useMemo } from "react";

export default function NFTList({ filters }: { filters: NFTFilters }) {
  const { ref, inView } = useInView();
  const { data, setSize } = useGraph(filters);

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
    <div className="grid grid-cols-4 gap-8">
      {tokens.map((nft, index) => {
        return (
          <NFTCard
            key={nft.tokenID}
            id={nft.tokenID}
            image={nft.image}
            ref={index === tokens.length - 5 ? ref : undefined}
          />
        );
      })}
    </div>
  );
}
