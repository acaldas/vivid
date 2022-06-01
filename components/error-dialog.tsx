import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import Button from "./button";
import Text from "./text";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onTryAgain: () => void;
}

const WalletDialog: React.FC<IProps> = ({ open, setOpen, onTryAgain }) => {
  return (
    <Transition
      appear
      show={open}
      enter="transition duration-500 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog onClose={() => setOpen(false)} className="relative z-50">
        <div
          className="fixed inset-0 bg-white/25"
          aria-hidden="true"
          style={{ backdropFilter: "blur(4px)" }}
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-[335px] rounded-[20px] bg-white lg:border-[5px] border-[3px] border-black p-[30px]">
            <Dialog.Title className="text-[24px] text-center font-exo">
              Something went wrong!
            </Dialog.Title>
            <div>
              <p className="font-exo font-light text-[16px] mt-[24px] mb-[30px] px-2">
                Check you settings and requirements, if this problem continues
                contact the Vivid team in the discord.
              </p>
              <Button className="block w-full mb-[24px]" onClick={onTryAgain}>
                TRY AGAIN
              </Button>
              <Link
                href="https://discord.com/invite/vividcojp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="block w-full">GO TO DISCORD</Button>
              </Link>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WalletDialog;
