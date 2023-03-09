import Image from "next/image";
import { forwardRef, useState } from "react";

const NFTCard = forwardRef<
  HTMLDivElement,
  { id: string; image: string; collection: string; onClick: () => void }
>(({ id, image, collection, onClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div ref={ref} onClick={onClick} className="cursor-pointer">
      <div className="relative rounded-md overflow-hidden">
        <Image
          className={`object-cover opacity-${
            loaded ? 100 : 0
          } transition-opacity w-[240px] h-[240px]`}
          src={image}
          width={240}
          height={240}
          alt={`Image #${id}`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute top-0 left-0 w-full h-full backgrop-blur-[30px] bg-overlay animate-pulse"></div>
        )}
      </div>
      <div className="pl-2">
        <b className="text-red text-xl mt-2 block">#{id}</b>
        <p className="mt-1">
          {collection === "Vivid" ? "ORIGINAL" : collection.toUpperCase()}{" "}
          COLLECTION
        </p>
      </div>
    </div>
  );
});

NFTCard.displayName = "NFTCard";

export default NFTCard;
