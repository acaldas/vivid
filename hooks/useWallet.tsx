import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from "react";
import { CHAIN_ID } from "../config";
import { metaMaskHooks, walletconnectConnector } from "./useMetamask";

const { useIsActive: useMetamaskIsActive, useAccount: useMetamaskAccount } =
  metaMaskHooks;

const useWallet = () => {
  const { connector, ...rest } = useWeb3React();
  const account = useMetamaskAccount();
  const isActive = useMetamaskIsActive();

  const connectWallet = async (
    wallet: "METAMASK" | "WALLET_CONNECT" = "METAMASK"
  ) => {
    const method = wallet == "METAMASK" ? connector : walletconnectConnector[0];
    await method.activate(CHAIN_ID);
  };

  useEffect(() => {
    if (isActive) {
      return;
    }
    connector.connectEagerly?.();
  }, [connector, isActive]);

  return { connectWallet, connector, ...rest, account, isActive };
};

export default useWallet;
