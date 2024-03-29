import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
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
