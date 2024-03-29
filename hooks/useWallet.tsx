import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { CHAIN_ID } from "../config";
import { metaMaskHooks } from "./useMetamask";

const { useIsActive: useMetamaskIsActive, useAccount: useMetamaskAccount } =
  metaMaskHooks;

const useWallet = (chainId: number) => {
  const { connector, ...rest } = useWeb3React();
  const account = useMetamaskAccount();
  const isActive = useMetamaskIsActive();

  const connectWallet = async () => {
    console.log(chainId, account);
    await connector.activate(chainId);
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
