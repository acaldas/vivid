import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "../components/background";
import Header from "../components/header";
import Text from "../components/text";
import Logo from "../public/images/logo.png";
import MicoImg from "../public/images/mico.png";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            <Image src={MicoImg} alt="Mico" layout="fill" objectFit="contain" />
          </div>
          <Image src={Logo} width="600" height="161" alt="Vivid logo" />
          <div className="max-w-[722px] mt-[40px] z-10 relative">
            <Text className="text-[64px] font-bold font-exo">
              before we knew it we were hitting the ground...
            </Text>
            <Text className="text-[40px] font-medium font-exo">
              The story starts in the year 2305 when all stars have darknened
              and the last life.
            </Text>
            <div className="mt-[24px]">
              <button className="button mr-[26px]">
                <Text className="font-exo font-bold">Gallery</Text>
              </button>
              <button className="button">
                <Text className="font-exo font-bold">Mint</Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
