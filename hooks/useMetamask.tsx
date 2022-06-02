import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { CHAIN_ID } from "../config";

export const metamaskConnector = initializeConnector<MetaMask>(
  (actions) => new MetaMask(actions),
  [CHAIN_ID]
);

export const metaMaskHooks = metamaskConnector[1];
