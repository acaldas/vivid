import ContactForm from "#/components/contact-form";
import Image from "next/image";
import Twitter from "#/public/images/twitter.svg";
import Reddit from "#/public/images/reddit.svg";
import Discord from "#/public/images/discord.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col px-[6.5vw] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-col xl:flex-row flex-1 justify-between relative items-stretch pb-8">
        <div className="max-w-[670px] mr-8">
          <h2 className="text-h2">VIVID</h2>
          <h1 className="text-h1">CONTACT</h1>
          <h3 className="my-6 text-h3 text-red">イベント</h3>
          <p className="text-lg font-normal mb-8 pr-[20%]">
            You can directly reach out to us through various channels or write
            us an email.
          </p>
          <div className="mb-8">
            <Link href="" className="flex items-end mb-4">
              <Image
                src={Twitter}
                alt="Twitter logo"
                className="mr-7 w-6 h-6"
              />
              <p className="text-red text-lg underline font-semibold">
                Twitter.com/VividLimited
              </p>
            </Link>
            <Link href="" className="flex items-end mb-4">
              <Image src={Reddit} alt="Reddit logo" className="mr-7 w-6 h-6" />
              <p className="text-red text-lg underline font-semibold">
                Opensea.com/VividLimited
              </p>
            </Link>
            <Link href="" className="flex items-end mb-4">
              <Image
                src={Discord}
                alt="Discord logo"
                className="mr-7 w-6 h-6"
              />
              <p className="text-red text-lg underline font-semibold">
                Twitter.com/VividLimited
              </p>
            </Link>
          </div>
        </div>
        <div className="xl:mx-auto">
          <div className="max-w-[588px] xl:mx-auto xlpt-[150px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
