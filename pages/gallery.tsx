import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Cards from "../components/cards";
import Page from "../components/page";
import Text from "../components/text";
import GalleryBackground from "../public/images/background_gallery.png";
import Autograph from "../public/images/autograph_acky.png";
import { CHAIN_ID, MINT_ENABLED } from "../config";

interface IProps {
  chainId: number;
  mintEnabled: boolean;
}

const Gallery: NextPage<IProps> = ({ chainId, mintEnabled }) => {
  return (
    <Page chainId={chainId} mintEnabled={mintEnabled}>
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
      <div className="flex flex-1 w-full lg:px-[75px] px-[32px] py-[24px] flex-wrap">
        <div className="sm:w-[420px] mr-[50px] max-w-full">
          <div className="xl:mb-[9vh] mb-[5vh]">
            <Text className="block lg:text-[56px] text-[40px] sm:mb-[8px] mb-[1vh] lg:pr-0 pr-1 lg:leading-none leading-[1.1em]">
              NFT collection
            </Text>
            <div className="flex mb-[2vh]">
              <Text className="whitespace-nowrap lg:text-[32px] text-[24px] font-medium">
                Made by
              </Text>
              <span className="w-3"> </span>
              <Text className="lg:text-[32px] text-[24px]">Acky Bright</Text>
            </div>
            <div className="relative w-[358px] max-w-full">
              <Image
                src={Autograph}
                alt="Acky autograph"
                layout="responsive"
                width="715"
                height="233"
                objectFit="contain"
              />
            </div>
          </div>
          <div>
            <Text className="xl:text-[40px] text-[32px]">
              6 unique characters
            </Text>
            <Text className="xl:text-[40px] text-[32px]">
              200 hand-drawn traits
            </Text>
            <Text className="xl:text-[40px] text-[32px] font-medium">
              8888 pieces available
            </Text>
          </div>
        </div>
        <div className="xl:flex-1 xl:max-w-[60%] lg:max-w-[90%] w-full mx-auto xl:aspect-auto md:aspect-3/2 aspect-square">
          <Cards />
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      chainId: CHAIN_ID,
      mintEnabled: MINT_ENABLED,
    },
  };
};

export default Gallery;
