"use client";

import Image from "next/image";
import ReadMore from "#/components/read-more";
import Link from "next/link";
import Twitter from "#/public/images/twitter.svg";
import Instagram from "#/public/images/icon_instagram.svg";
import IconUrl from "#/public/images/icon_url.svg";

export default function Page() {
  return (
    <div className="flex flex-col px-[6.5vw] pt-[7vh] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-col 2xl:flex-row flex-1 justify-between relative items-center">
        <div className="2xl:max-w-[640px] mb-8">
          <h2 className="text-h2">ACKY</h2>
          <h1 className="text-h1">BRIGHT</h1>
          <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
            ファッション
          </h3>
          <div className="my-[6vh]">
            <Link
              href="https://twitter.com/aki001208/"
              className="text-red text-lg underline flex"
            >
              <Image src={Twitter} alt="Twitter" width={24} height={24} />
              <span className="ml-5">twitter.com/aki001208</span>
            </Link>
            <Link
              href="https://instagram.com/acky_bright/"
              className="text-red text-lg underline flex my-2"
            >
              <Image src={Instagram} alt="Instagram" width={24} height={24} />
              <span className="ml-5">instagram.com/acky_bright</span>
            </Link>
            <Link
              href="https://www.acky-bright.com/"
              className="text-red text-lg underline flex"
            >
              <Image
                src={IconUrl}
                alt="www.acky-bright.com"
                width={24}
                height={24}
              />
              <span className="ml-5">acky-bright.com</span>
            </Link>
          </div>
          <ReadMore
            className="text-lg"
            small="The partnership between VIVID and Acky Bright was an exceptional collaboration that brought together the worlds of art, fashion, and technology. Acky, a gifted artist with a distinct and colorful style, created an exclusive NFT collection that garnered attention from collectors worldwide. The NFTs were not only unique and beautiful, but they also incorporated the latest blockchain technology."
            large={
              <>
                <p className="mt-2">
                  {`Acky also contributed stunning art for the VIVID fashion collection, which perfectly complemented the brand's contemporary and cutting-edge fashion line. The combination of Acky's bold designs and VIVID's innovative approach to fashion made for an impressive collection.`}
                </p>
                <p className="mt-2">
                  {`In addition to creating beautiful art for VIVID, Acky attended the brand's pop-up stores and New York City event, where he engaged with fans, created art on the spot, and even gave autographs. His presence added an extra level of excitement to the events, and fans were thrilled to meet the artist behind the beautiful creations.`}
                </p>
                <p className="mt-2">
                  {`Overall, the collaboration between VIVID and Acky Bright was a resounding success, a creative synergy that demonstrated the power of bringing together different worlds and ideas. The partnership was not only innovative, but it also showcased the possibilities of art and technology in fashion, paving the way for future collaborations.`}
                </p>
              </>
            }
          />
        </div>
        <div className="flex-1 relative py-10 2xl:ml-[6.5vw]">
          <video
            className=""
            src="/Acky Bright - Drawing anywhere, with anything.mp4"
            poster="/images/acky_preview.jpeg"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
}
