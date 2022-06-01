import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useWallet from "../hooks/useWallet";
import Metamask from "../public/images/metamask.png";
import WalletConnect from "../public/images/wallet_connect.png";
import Button from "./button";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const WalletDialog: React.FC<IProps> = ({ open, setOpen }) => {
  const { connectWallet, account } = useWallet();

  useEffect(() => {
    if (account) {
      setOpen(false);
    }
  }, [account, setOpen]);

  return (
    <Transition
      appear
      show={open}
      enter="transition duration-100 ease-out"
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
          <Dialog.Panel className="w-full max-w-2xl rounded-[20px] bg-white border-[5px] border-black p-[40px]">
            <Dialog.Title className="sm:text-[40px] text-[32px] text-center font-exo">
              Connect a wallet
            </Dialog.Title>
            <div className="flex sm:justify-center justify-around my-[80px] sm:gap-[150px] gap-[20px]">
              <button onClick={() => connectWallet()}>
                <Image src={Metamask} alt="metamask" width={80} height={80} />
              </button>
              <button onClick={() => connectWallet("WALLET_CONNECT")}>
                <Image
                  src={WalletConnect}
                  alt="wallet connect"
                  width={80}
                  height={80}
                />
              </button>
            </div>
            <Button
              className="block mx-auto"
              onClick={() => setOpen(false)}
              textProps={{ className: "text-center", delay: 0 }}
            >
              Cancel
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WalletDialog;
