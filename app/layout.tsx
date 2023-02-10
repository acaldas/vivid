import Script from "next/script";
import Image from "next/image";
import { fontFamilyVivid, fontFamilyExo } from "./fonts";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="font-exo">
      <head />
      <body className="bg-neco bg-blend-overlay bg-no-repeat bg-cover bg-center overflow-hidden">
        <style>
          {`
            .font-vivid {
              font-family: ${fontFamilyVivid};
            }
            .font-exo {
              font-family: ${fontFamilyExo};
            }
          `}
        </style>
        {children}
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
      </body>
    </html>
  );
}
