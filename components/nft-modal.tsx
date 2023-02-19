import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import IconClose from "#/public/images/icon_cross.svg";
import IconOpensea from "#/public/images/icon_opensea.svg";

const OPENSEA_URL = process.env.NEXT_PUBLIC_OPENSEA_URL;

export function NFTModal({
  open,
  onClose,
  id,
  image,
}: {
  open: boolean;
  onClose: () => void;
  id?: string;
  image?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  function handleClose() {
    onClose();
    setLoaded(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-modal backdrop-blur"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto rounded-[18px] overflow-hidden shadow-xl border-[3px] border-black w-[720px] max-w-[60%]">
          <Dialog.Title className="bg-black py-4 pl-6 flex items-stretch justify-between">
            <div className="flex items-center">
              <Link href={`${OPENSEA_URL}${id}`} className="outline-none mr-4">
                <Image src={IconOpensea} width={24} height={24} alt="Opensea" />
              </Link>
              <p className="text-xl text-red mr-4">#{id}</p>
              <p className="font-medium">ORIGINAL COLLECTION</p>
            </div>
            <button className="block px-4" onClick={handleClose}>
              <Image src={IconClose} alt="close" className="" />
            </button>
          </Dialog.Title>
          <div className="bg-black relative">
            {image && (
              <Image
                src={image}
                alt="nft image"
                width={620}
                height={680}
                className={`w-full opacity-${
                  loaded ? 100 : 0
                } duration-200 transition-opacity`}
                onLoad={() => setLoaded(true)}
              />
            )}
            {!loaded && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-900 animate-pulse"></div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
