import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import Background from "../components/background";
import Page from "../components/page";
import Logo from "../components/logo";
import Mico from "../components/mico";
import Text from "../components/text";
import Link from "next/link";
import Button from "../components/button";
import { CHAIN_ID, MINT_ENABLED, FASHION_URL, LOADING_ENABLED } from "../config";

import StoreImg from "../public/images/announcement.jpg";

const LOADING_TIME = 5000 * (LOADING_ENABLED ? 1 : 0);

const StoreImgComponent = (props: Partial<ImageProps>) => <Image objectFit="contain" src={StoreImg} alt="Los Angeles toakever Oct 15-16 Video fashion popup" priority {...props} />

interface IProps {
  chainId: number;
  mintEnabled: boolean;
}

const Home: NextPage<IProps> = ({ chainId, mintEnabled }) => {
  const [loading, setLoading] = useState(LOADING_ENABLED);
  useEffect(() => {
    if (!LOADING_ENABLED) {
      return;
    }
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, [loading, LOADING_ENABLED]);

  return (
    <Page chainId={chainId} loading={loading} mintEnabled={mintEnabled}>
      <Background loading={loading}   />
      <div className="lg:px-[5.6vw] px-[3.5vh] lg:py-[10vh] py-[7vh] relative flex-grow flex">
        <div
          className="transition-opacity duration-1000 delay-700 flex flex-grow justify-between"
          style={{ opacity: loading ? 0 : 1 }}
        >
          {/* <Mico /> */}
          <div className="xl:w-2/3 xl:max-w-[620px]">
            <Logo />
            <div className="xl:mt-[40px] mt-[3vh] z-10 relative">
              <Text
                className="lg:text-[56px] text-[40px] sm:mb-[8px] mb-[1vh] lg:pr-0 pr-1 lg:leading-none leading-[1.1em]"
                delay={LOADING_TIME * 1.1}
              >
                Vivid: a manga fashion lifestyle brand
              </Text>
              <Text
                className="lg:text-[32px] text-[24px] font-medium lg:pr-[10%]"
                delay={LOADING_TIME}
              >
                Set in the kawakakkoii (cool and cute) cyberpunk universe of Acky
                Bright
              </Text>
              <div className="xl:hidden mt-[4vh] drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <StoreImgComponent />
              </div>
              <div className="lg:mt-[24px] mt-[4vh] lg:static flex w-full">
                <Link href={mintEnabled ? "/mint" : FASHION_URL}>
                  <Button
                    className="lg:w-auto w-1/2 mr-[26px]"
                    textProps={{ delay: LOADING_TIME, textGradient: true }}
                  >
                    {`${mintEnabled ? "MINT" : "FASHION"}`}
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    className="lg:w-auto w-1/2"
                    textProps={{ delay: LOADING_TIME, textGradient: true }}
                  >
                    GALLERY
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:block hidden relative overflow-hidden flex-grow max-h-[1280px] ml-[4vw] drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <StoreImgComponent layout="fill"/>
          </div>
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

export default Home;
