import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "../components/background";
import Page from "../components/page";
import Logo from "../components/logo";
import Text from "../components/text";
import Link from "next/link";
import Button from "../components/button";
import {
  CHAIN_ID,
  MINT_ENABLED,
  FASHION_URL,
  LOADING_ENABLED,
} from "../config";
import { GetStaticProps, NextPage } from "next/types";

const LOADING_TIME = 5000 * (LOADING_ENABLED ? 1 : 0);

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
      <Background loading={loading} />
      <div className="lg:px-[5.6vw] px-[3.5vh] lg:py-[10vh] py-[7vh] relative flex-grow flex">
        <div
          className="transition-opacity duration-1000 delay-700 flex flex-grow justify-between"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <div className="xl:w-2/3 xl:max-w-[620px]">
            <Logo />
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
