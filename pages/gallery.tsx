import { NextPage } from "next";
import Cards from "../components/cards";
import Page from "../components/page";
import Mico from "../components/mico";
import Text from "../components/text";

const Gallery: NextPage = () => {
  return (
    <Page>
      <div className="lg:pl-[75px] p-[24px]">
        <Text className="lg:text-[56px] text-[40px] sm:mb-[8px] mb-[1vh] lg:pr-0 pr-1 lg:leading-none leading-[1.1em]">
          sdadw asdadsd aad awd sa dsada sdr..
        </Text>
        <Text className="lg:text-[32px] text-[24px] font-medium lg:pr-[10%]">
          sdadw asdadsd aad awd sa dsada sdsadas dadsa as
        </Text>
      </div>
      <Mico desktopClassName="!right-[-210px] opacity-30" />
      <div className="mt-14">
        <Cards />
      </div>
    </Page>
  );
};

export default Gallery;
