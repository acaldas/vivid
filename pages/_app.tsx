import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { metamaskConnector } from "../hooks/useMetamask";

const connectors = [metamaskConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Head>
        <title>Vivid</title>
        <meta
          name="description"
          content="Vivid is a new brand for the new culture. The web3 FUBU."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3ReactProvider connectors={connectors}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
