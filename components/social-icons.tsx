import Image from "next/image";
import Twitter from "#/public/images/twitter.svg";
import Reddit from "#/public/images/reddit.svg";
import Discord from "#/public/images/discord.svg";

export default function SocialIcons() {
  return (
    <div className="flex">
      <Image src={Twitter} alt="Twitter logo" className="mx-3 w-6 h-6" />
      <Image src={Reddit} alt="Twitter logo" width={24} className="mx-3" />
      <Image src={Discord} alt="Discord logo" width={24} className="mx-3" />
    </div>
  );
}
