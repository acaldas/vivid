import { NextPage } from "next";
import Image from "next/image";
import Cards from "../components/cards";
import Page from "../components/page";
import Text from "../components/text";
import GalleryBackground from "../public/images/background_gallery.png";

const Gallery: NextPage = () => {
  return (
    <Page>
      <div className="overflow-hidden flex items-end fixed top-[0px] left-0 bottom-0 bg-red h-full pointer-events-none opacity-25">
        <Image
          className="h-full"
          src={GalleryBackground}
          alt="background"
          layout="intrinsic"
          objectFit="fill"
          objectPosition="bottom"
          width="632"
          height="789"
        />
      </div>
      <div className="flex flex-1 w-full lg:pl-[75px] p-[24px] overflow-hidden">
        <div className="w-[420px] mr-[10px]">
          <div className="mb-[9vh]">
            <Text className="block lg:text-[56px] text-[40px] sm:mb-[8px] mb-[1vh] lg:pr-0 pr-1 lg:leading-none leading-[1.1em]">
              NFT collection
            </Text>
            <div className="flex">
              <Text className="whitespace-nowrap lg:text-[32px] text-[24px] font-medium">
                Made by
              </Text>
              <span className="w-3"> </span>
              <Text className="lg:text-[32px] text-[24px]">Acky Bright</Text>
            </div>
          </div>
          <div>
            <Text className="text-[40px]">6 unique characters</Text>
            <Text className="text-[40px]">200 hand-drawn traits</Text>
            <Text className="text-[40px] font-medium">
              800 pieces available
            </Text>
          </div>
        </div>
        <div className="flex-1">
          <Cards />
        </div>
      </div>
    </Page>
  );
};

export default Gallery;
