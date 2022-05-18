import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "../components/background";
import Header from "../components/header";
import Logo from "../components/logo";
import Text from "../components/text";
import MicoImg from "../public/images/mico.png";
import MicoMobileImg from "../public/images/mico_mobile.png";

const LOADING_TIME = 5000;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, [loading]);

  return (
    <div
      className={`lg:[5px] border-[3px] border-black h-full relative ${
        loading ? "overflow-hidden" : "overflow-auto"
      } flex flex-col`}
    >
      <Header
        className="transition-opacity duration-1000 delay-700"
        style={{ opacity: loading ? 0 : 1 }}
      />
      <Background loading={loading} />
      <div className="lg:px-[5.6vw] px-[3.5vh] lg:py-[10.5vh] py-[7vh] relative flex-grow">
        <div
          className="transition-opacity duration-1000 delay-700"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <div className="lg:block hidden absolute bottom-0 right-0 h-full w-1/2 pointer-events-none">
            <Image
              src={MicoImg}
              priority
              alt="Mico"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
          <div className="lg:hidden block fixed bottom-[3px] right-0 h-[82vh] w-full opacity-50 pointer-events-none">
            <Image
              src={MicoMobileImg}
              priority
              alt="Mico"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
          <Logo />
          <div className="lg:w-2/3 lg:max-w-[620px] lg:mt-[40px] mt-[14px] z-10 relative">
            <Text
              className="lg:text-[56px] text-[40px] sm:mb-[8px] mb-1 lg:pr-0 pr-1 lg:leading-none leading-[1.1em]"
              delay={LOADING_TIME * 1.1}
            >
              before we knew it we were hitting the ground...
            </Text>
            <Text
              className="lg:text-[32px] text-[24px] font-medium lg:pr-[10%]"
              delay={LOADING_TIME}
              fontsOffset={8}
            >
              The story starts in the year 2305 when all stars have darkened and
              the last life.
            </Text>
            <div className="mt-[24px] lg:static flex w-full">
              <button className="button glitch-hover mr-[26px] lg:w-auto w-1/2">
                <Text
                  className="font-bold flex items-center"
                  fontsOffset={0}
                  delay={LOADING_TIME}
                >
                  Gallery
                </Text>
              </button>
              <button className="button glitch-hover lg:w-auto w-1/2">
                <Text
                  className="font-bold flex items-center"
                  fontsOffset={0}
                  delay={LOADING_TIME}
                >
                  Mint
                </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
