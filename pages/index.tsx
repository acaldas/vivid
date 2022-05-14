import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "../components/background";
import Header from "../components/header";
import Logo from "../components/logo";
import Text from "../components/text";
import MicoImg from "../public/images/mico.png";

const LOADING_TIME = 4000;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, [loading]);

  return (
    <div className="border-[5px] border-black h-full relative overflow-auto flex flex-col">
      <Header
        className="transition-opacity duration-1000 delay-700"
        style={{ opacity: loading ? 0 : 1 }}
      />
      <div className="px-[5.6vw] py-[10.5vh] relative flex-grow">
        <Background loading={loading} />
        <div
          className="transition-opacity duration-1000 delay-700"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <div className="absolute bottom-0 right-0 h-full w-1/2">
            <Image
              src={MicoImg}
              priority
              alt="Mico"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
          <Logo />
          <div className="max-w-[722px] mt-[40px] z-10 relative">
            <Text
              className="text-[64px] font-bold max-h-[160px]"
              delay={LOADING_TIME * 1.1}
            >
              before we knew it we were hitting the ground...
            </Text>
            <Text
              className="text-[40px] font-medium pr-[10px]"
              delay={LOADING_TIME}
            >
              The story starts in the year 2305 when all stars have darknened
              and the last life.
            </Text>
            <div className="mt-[24px]">
              <button className="button mr-[26px]">
                <Text
                  className="font-bold flex items-center"
                  fontsOffset={0}
                  delay={LOADING_TIME}
                >
                  Gallery
                </Text>
              </button>
              <button className="button">
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
