const chainId = parseInt(process.env.CHAIN_ID || "");
export const CHAIN_ID = !isNaN(chainId) ? chainId : 1;

export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

export const MINT_ENABLED = process.env.MINT_ENABLED === "true";

export const WHITELIST_ENABLED = process.env.WHITELIST_ENABLED === "true";

const whitelistMintPrice = parseFloat(
  process.env.WHITELIST_MINT_PRICE ?? "0.25"
);
export const WHITELIST_MINT_PRICE = !isNaN(whitelistMintPrice)
  ? whitelistMintPrice
  : 0.25;

const publicMintPrice = parseFloat(process.env.PUBLIC_MINT_PRICE ?? "0.3");
export const PUBLIC_MINT_PRICE = !isNaN(publicMintPrice)
  ? publicMintPrice
  : 0.3;

export const MINT_PRICE = WHITELIST_ENABLED
  ? WHITELIST_MINT_PRICE
  : PUBLIC_MINT_PRICE;

export const OPENSEA_URL = process.env.OPENSEA_URL || "https://opensea.io/";
