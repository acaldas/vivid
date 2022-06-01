import { NextPage } from "next";
import Page from "../components/page";
import Slide from "../components/slide";
import Text from "../components/text";

const Gallery: NextPage = () => {
  return (
    <Page>
      <div className="lg:pl-[75px] p-[24px]">
        <Text className="lg:text-[56px] text-[40px] sm:mb-[8px] mb-[1vh] lg:pr-0 pr-1 lg:leading-none leading-[1.1em]">
          43 Cut-and-sew pieces
        </Text>
        <Text className="lg:text-[32px] text-[24px] font-medium lg:pr-[10%]">
          Luxury fabrics and materials
        </Text>
        <Text className="lg:text-[24px] text-[18px] font-light lg:pr-[10%]">
          Designed by Acky & Zap
        </Text>
      </div>
      <div className="mt-14">
        <Slide />
      </div>
    </Page>
  );
};

export default Gallery;
