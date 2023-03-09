"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ReadMore from "#/components/read-more";
import IconCross from "#/public/images/icon_cross_dark.svg";
import { Dialog } from "@headlessui/react";
import fashionGif from "#/public/images/fashion/imagery/fashion.gif";
import fashion1 from "#/public/images/fashion/imagery/1.png";
import fashion2 from "#/public/images/fashion/imagery/2.png";
import fashion3 from "#/public/images/fashion/imagery/3.png";
import fashion4 from "#/public/images/fashion/imagery/4.png";
import fashion5 from "#/public/images/fashion/imagery/5.png";
import fashion6 from "#/public/images/fashion/imagery/6.png";
import fashion7 from "#/public/images/fashion/imagery/7.png";
import fashion8 from "#/public/images/fashion/imagery/8.png";

export default function Page() {
  const [image, setImage] = useState<StaticImageData | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  function handleClose() {
    setImage(null);
    setImageLoaded(false);
  }

  return (
    <div className="flex flex-col px-[6.5vw] pt-[7vh] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-col xl:flex-row flex-1 justify-between relative items-stretch">
        <div className="xl:max-w-[640px] mb-8">
          <h2 className="text-h2">Vivid</h2>
          <h1 className="text-h1">FASHION</h1>
          <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
            ファッション
          </h3>
          <ReadMore
            className="text-lg"
            small="Vivid's latest fashion collection is an exclusive cut and sew line designed for its holders. This unique collection features collaborative artwork and designs from Acky Bright, a renowned artist known for his vibrant, eye-catching designs."
            large={
              <>
                <p className="mt-2">
                  {`Each piece in the collection is expertly crafted using
                  high-quality materials and is a testament to the brand's
                  commitment to exceptional craftsmanship and attention to
                  detail. The collection includes a range of stylish pieces such
                  as t-shirts, hoodies, and joggers, all adorned with vivid
                  graphics and intricate details that showcase Acky Bright's
                  signature style.`}
                </p>
                <p className="mt-2">
                  {`Each item in the collection is a true work of art, with its
                  unique design and attention to detail making it stand out from
                  the crowd. Whether you're looking to make a bold fashion
                  statement or simply want to add some color and vibrancy to
                  your wardrobe, this collection is the perfect choice. In
                  conclusion, Vivid's exclusive cut and sew fashion collection
                  featuring collaborative artwork and designs from Acky Bright
                  is a must-have for anyone looking to make a statement with
                  their wardrobe.`}
                </p>
                <p className="mt-2">
                  {`With its unique designs, high-quality materials, and
                  exceptional craftsmanship, this collection is a true testament
                  to Vivid's commitment to innovation and creativity in the
                  fashion industry. Whether you're a seasoned collector or
                  simply appreciate great design, this collection is sure to
                  impress.`}
                </p>
              </>
            }
          />
          <div className="mt-5">
            <button className="bg-red rounded-md h-11 px-10 pb-2 pt-1 text-lg leading-tight w-full max-w-[506px]">
              Buy Fashion
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full xl:ml-8">
          <div className="xl:max-w-[935px] h-full left-0 right-0 top-0 mx-auto bottom-8 pb-8 xl:absolute overflow-auto scrollbar-thumb-overlay scrollbar-thin scrollbar-rounded-lg xl:pr-4 scrollbar-h-[240px]">
            <div className="grid grid-cols-2 gap-6">
              <Image
                onClick={() => setImage(fashionGif)}
                src={fashionGif}
                alt="Fashion"
                className="col-span-2 cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion1)}
                src={fashion1}
                alt="Fashion 1"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion2)}
                src={fashion2}
                alt="Fashion 2"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion3)}
                src={fashion3}
                alt="Fashion 3"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion4)}
                src={fashion4}
                alt="Fashion 4"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion5)}
                src={fashion5}
                alt="Fashion 5"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion6)}
                src={fashion6}
                alt="Fashion 6"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion7)}
                src={fashion7}
                alt="Fashion 7"
                className="cursor-pointer"
              />
              <Image
                onClick={() => setImage(fashion8)}
                src={fashion8}
                alt="Fashion 8"
                className="cursor-pointer"
              />
            </div>
          </div>
          <Dialog
            open={!!image}
            onClose={handleClose}
            className="relative z-50"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div
                className="fixed inset-0 bg-overlay backdrop-blur-[30px]"
                aria-hidden="true"
              />
              <Dialog.Panel className="rounded-[27px] mx-auto overflow-hidden shadow-xl border-[3px] border-black w-[720px] max-w-[60%]">
                <div className="bg-black relative">
                  {image && (
                    <Image
                      src={image}
                      alt="Event image"
                      width={620}
                      height={680}
                      className={`w-full opacity-${
                        imageLoaded ? 100 : 0
                      } duration-200 transition-opacity`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                  {!imageLoaded && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 animate-pulse"></div>
                  )}
                  <button
                    className="absolute top-5 right-5 bg-black rounded-full p-2"
                    onClick={handleClose}
                  >
                    <Image src={IconCross} alt="close" width={16} height={16} />
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
