import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Web3ReactProvider } from "@web3-react/core";
import { metamaskConnector } from "../hooks/useMetamask";

const connectors = [metamaskConnector];

declare let dataLayer: Array<any>;

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QEDRJ44M0T"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QEDRJ44M0T');
        `}
      </Script>
      <Web3ReactProvider connectors={connectors}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
