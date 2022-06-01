import { NextPage } from "next";
import Image from "next/image";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Page from "../components/page";
import BackgroundMint from "../public/images/background_mint.png";
import Text from "../components/text";
import Button from "../components/button";
import WalletDialog from "../components/wallet-dialog";
import { useEffect, useMemo, useRef, useState } from "react";
import useWallet from "../hooks/useWallet";
import { Transition } from "@headlessui/react";
import ErrorDialog from "../components/error-dialog";
import { BigNumber, ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config";
import { Vivid } from "../contracts/type";
import useMint from "../utils/mint";
import mintNFT from "../utils/mint";

const FormatDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "full" })
  .format;

const MINT_PRICE = 0.25;

const Mint: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<"INITIAL" | "ERROR" | "MINTING" | "SUCCESS">(
    "INITIAL"
  );
  const [mintClicked, setMintClicked] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { account, provider } = useWallet();
  const [result, setResult] = useState<string>();
  const availableMints = "8888";

  useEffect(() => {
    if (account && mintClicked) {
      mint(mintClicked);
    }
  }, [account, mintClicked]);

  const mint = async (mints: number) => {
    if (!account || !provider) {
      return;
    }

    try {
      setStep("MINTING");
      await mintNFT(true, mints, account, provider);
      setStep("SUCCESS");
    } catch (error) {
      setShowError(true);
      setStep("INITIAL");
    } finally {
      setMintClicked(0);
    }
  };

  const dateMsg = useMemo(
    () => `MINTED ON ${FormatDate(new Date()).toUpperCase()}`,
    []
  );

  return (
    <Page>
      <div className="flex w-full h-full">
        <div className="flex flex-0 md:pl-[75px] p-[24px] w-[500px] overflow-visible relative z-10">
          <SwitchTransition>
            <CSSTransition
              key={step}
              nodeRef={ref}
              addEndListener={(done) =>
                ref.current?.addEventListener("transitionend", done, false)
              }
              classNames="long fade"
            >
              <div ref={ref}>
                {step === "INITIAL" ? (
                  <div>
                    <div className="mb-[5vh]">
                      <Text className="block md:text-[56px] text-[40px] md:pr-0 pr-1 leading-[1.1em]">
                        NFT collection
                      </Text>
                      <div className="flex">
                        <Text className="md:text-[32px] text-[24px]">
                          {availableMints}
                        </Text>
                        <span className="w-3"> </span>
                        <Text className="whitespace-nowrap md:text-[32px] text-[24px] font-medium">
                          Available
                        </Text>
                      </div>
                    </div>
                    <div className="mb-[6vh]">
                      <Button
                        onClick={() => {
                          if (!account) {
                            setShowDialog(true);
                          }
                          setMintClicked(1);
                        }}
                      >
                        GET ONE
                      </Button>
                      <Button
                        onClick={() => {
                          if (!account) {
                            setShowDialog(true);
                          }
                          setMintClicked(2);
                        }}
                      >
                        GET TWO
                      </Button>
                    </div>
                    <div>
                      <Text className="text-[24px]">0.25 ETH PER NFT</Text>
                      <Text className="text-[24px] mb-[5vh]">
                        2 MINT PER COLLECTOR
                      </Text>
                      <Text className="text-[24px] font-light mb-5">
                        LIMITED EDITION
                      </Text>
                    </div>
                  </div>
                ) : step === "MINTING" ? (
                  <div>
                    <Text
                      className="block md:text-[56px] text-[40px] md:pr-0 pr-1 leading-[1.1em]"
                      finishClassName="inline-block loading"
                    >
                      Connecting
                    </Text>
                    <div className="flex">
                      <Text className="md:text-[32px] text-[24px] font-medium">
                        You
                      </Text>
                      <span className="w-2"> </span>
                      <Text className="whitespace-nowrap md:text-[32px] text-[24px] font-medium">
                        are being connected
                      </Text>
                    </div>
                    <Text className="whitespace-nowrap md:text-[32px] text-[24px] font-medium">
                      to the Vivid universe
                    </Text>
                    <div className="mt-[5vh] pl-1">
                      <Transition show={step === "MINTING"} appear>
                        <Transition.Child
                          enter="transition-opacity duration-1000 delay-[3000ms]"
                          enterFrom="opacity-0"
                          leave="transition-opacity duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Text
                            delay={3000}
                            className="text-[24px] font-light"
                            finishClassName="inline-block loading loading-exo"
                          >
                            ATTACHING DNA TO MAINFRAME
                          </Text>
                        </Transition.Child>
                        <Transition.Child
                          enter="transition-opacity duration-1000 delay-[5250ms]"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Text
                            delay={5250}
                            className="text-[24px] font-light"
                            finishClassName="inline-block loading loading-exo"
                          >
                            TESTING PROTOCOL PROCEDURE
                          </Text>
                        </Transition.Child>
                        <Transition.Child
                          enter="transition-opacity duration-1000 delay-[7500ms]"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Text
                            delay={7500}
                            className="text-[24px] font-light"
                            finishClassName="inline-block loading loading-exo"
                          >
                            GRANTING ACCESS TO UNIVERSE
                          </Text>
                        </Transition.Child>
                      </Transition>
                    </div>
                  </div>
                ) : step === "SUCCESS" ? (
                  <div>
                    <Text
                      className="block md:text-[56px] text-[40px] md:pr-0 pr-1 leading-[1.1em]"
                      finishClassName="inline-block loading"
                    >
                      Congratulations
                    </Text>
                    <div className="flex">
                      <Text className="md:text-[32px] text-[24px] font-medium">
                        You
                      </Text>
                      <span className="w-2"> </span>
                      <Text className="whitespace-nowrap md:text-[32px] text-[24px] font-medium">
                        are a collector
                      </Text>
                    </div>
                    <div className="mt-[5vh] mb-[6vh]">
                      <Button>SEE YOUR NFT</Button>
                    </div>
                    <Text className="text-[24px]">{dateMsg}</Text>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="md:block hidden overflow-hidden flex-1 relative">
          <Image
            priority
            src={BackgroundMint}
            alt="background"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
        <div className="pointer-events-none md:hidden fixed left-0 bottom-[3px] w-full h-full opacity-25">
          <Image
            priority
            src={BackgroundMint}
            alt="background"
            layout="fill"
            objectFit="scale-down"
            objectPosition="bottom"
          />
        </div>
      </div>
      <WalletDialog open={showDialog} setOpen={setShowDialog} />
      <ErrorDialog
        open={showError}
        setOpen={setShowError}
        onTryAgain={() => mint(mintClicked)}
      />
    </Page>
  );
};

export default Mint;
