import { NextPage } from "next";
import Cards from "../components/cards";
import Page from "../components/page";
import Mico from "../components/mico";
import Text from "../components/text";

const Gallery: NextPage = () => {
  return (
    <Page>
      <div className="overflow-hidden fixed w-full h-full">
        <Mico desktopClassName="!right-[-210px] opacity-30" />
      </div>
      <div className="flex flex-1 w-full lg:pl-[75px] p-[24px]">
        <div>
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
        <div className="mt-14 flex-1">
          <Cards />
        </div>
      </div>
    </Page>
  );
};

export default Gallery;
