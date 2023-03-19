import "../styles/globals.css";
import { fontFamilyVivid, fontFamilyExo } from "./fonts";
import Analytics from "#/components/analytics";

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
        <Analytics />
      </body>
    </html>
  );
}
