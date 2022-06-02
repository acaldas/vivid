import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            href="fonts/Vivid.otf"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="fonts/Exo2-Regular.ttf"
            type="font/ttf"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
