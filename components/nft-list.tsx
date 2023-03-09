"use client";

import { NFTItem } from "#/hooks/useNFTGraph";
import NFTCard from "./nft-card";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { NFTModal } from "./nft-modal";

export default function NFTList({
  tokens,
  setSize,
}: {
  tokens: NFTItem[];
  setSize: (arg: (size: number) => number) => void;
}) {
  const { ref, inView } = useInView();
  const [selectedNFT, setSelectedNFT] = useState<NFTItem | undefined>(
    undefined
  );

  useEffect(() => {
    if (inView) {
      setSize((size) => size + 1);
    }
  }, [inView, setSize]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {tokens.map((nft, index) => {
          return (
            <NFTCard
              key={nft.id}
              id={nft.tokenID}
              image={nft.image}
              collection={nft.collection}
              ref={index === tokens.length - 5 ? ref : undefined}
              onClick={() => setSelectedNFT(nft)}
            />
          );
        })}
      </div>
      <NFTModal
        open={!!selectedNFT}
        id={selectedNFT?.id}
        tokenID={selectedNFT?.tokenID}
        image={selectedNFT?.image}
        onClose={() => setSelectedNFT(undefined)}
      />
    </>
  );
}
