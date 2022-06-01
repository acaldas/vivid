import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Background from "../components/background";
import Page from "../components/page";
import Logo from "../components/logo";
import Mico from "../components/mico";
import Text from "../components/text";
import Link from "next/link";
import Button from "../components/button";

const LOADING_TIME = 5000;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, [loading]);

  return (
    <Page loading={loading}>
      <Background loading={loading} />
      <div className="lg:px-[5.6vw] px-[3.5vh] lg:py-[10.5vh] py-[7vh] relative flex-grow">
        <div
          className="transition-opacity duration-1000 delay-700"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <Mico />
          <Logo />
          <div className="lg:w-2/3 lg:max-w-[620px] lg:mt-[40px] mt-[3vh] z-10 relative">
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
            <div className="lg:mt-[24px] mt-[4vh] lg:static flex w-full">
              <Link href="/mint">
                <Button
                  className="lg:w-auto w-1/2 mr-[26px]"
                  textProps={{ delay: LOADING_TIME, textGradient: true }}
                >
                  MINT
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
      </div>
    </Page>
  );
};

export default Home;
