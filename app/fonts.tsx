import localFont from "@next/font/local";
import { Exo_2 } from "@next/font/google";

const fontExo = Exo_2({
  weight: "variable",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-exo",
});

export const fontVivid = localFont({
  src: "../public/fonts/Vivid.otf",
  variable: "--font-vivid",
});

export const fontFamilyVivid = fontVivid.style.fontFamily.replaceAll("'", "");

export const fontFamilyExo = fontExo.style.fontFamily.replaceAll("'", "");
