import Image from "next/image";
import Logo from "#/public/images/logo.svg";
import Twitter from "#/public/images/twitter.svg";
import Reddit from "#/public/images/reddit.svg";
import Discord from "#/public/images/discord.svg";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="h-[80px] px-[40px] flex items-center justify-between py-[27px] bg-overlay backdrop-blur-[30px]">
      <div>
        <Image src={Logo} alt="Vivid logo" width={140} height={25} />
      </div>
      <div className="flex">
        <Image src={Twitter} alt="Twitter logo" className="mx-3 w-6 h-6" />
        <Image src={Reddit} alt="Twitter logo" width={24} className="mx-3" />
        <Image src={Discord} alt="Discord logo" width={24} className="mx-3" />
      </div>
      <Navbar />
    </div>
  );
}
