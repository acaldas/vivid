import Image from "next/image";
import { forwardRef, useState } from "react";

// const NFT_IMAGE_URL = process.env.NEXT_PUBLIC_NFT_IMAGE_URL;

export default forwardRef<
  HTMLDivElement,
  { id: string; image: string; onClick: () => void }
>(({ id, image, onClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div ref={ref} onClick={onClick} className="cursor-pointer">
      <div className="relative rounded-md overflow-hidden">
        <Image
          className={`opacity-${loaded ? 100 : 0} transition-opacity`}
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
        <p className="mt-1">ORIGINAL COLLECTION</p>
      </div>
    </div>
  );
});
