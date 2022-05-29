import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from "react";
import { CHAIN_ID } from "../config";
import { metaMaskHooks } from "./useMetamask";

const { useIsActive: useMetamaskIsActive, useAccount: useMetamaskAccount } =
  metaMaskHooks;

const useWallet = () => {
  const { connector } = useWeb3React();
  const account = useMetamaskAccount();
  const isActive = useMetamaskIsActive();

  const connectWallet = async (
    wallet: "METAMASK" | "WALLET_CONNECT" = "METAMASK"
  ) => {
    await connector.activate(CHAIN_ID);
  };

  useEffect(() => {
    if (isActive) {
      return;
    }
    connector.connectEagerly?.();
  }, [connector, isActive]);

  return { connectWallet, account, isActive };
};

export default useWallet;
