import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { CHAIN_ID } from "../config";

export const metamaskConnector = initializeConnector<MetaMask>(
  (actions) => new MetaMask(actions),
  [CHAIN_ID]
);

export const metaMaskHooks = metamaskConnector[1];

const RPC = {} as any;
RPC[CHAIN_ID] = "http://127.0.0.1:8545/";

export const walletconnectConnector = initializeConnector<WalletConnect>(
  (actions) => new WalletConnect(actions, { rpc: RPC }),
  [CHAIN_ID]
);

export const walletconnectHooks = walletconnectConnector[1];
