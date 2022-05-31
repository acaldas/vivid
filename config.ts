const chainId =
  process.env.NODE_ENV === "development"
    ? 31337
    : parseInt(process.env.CHAIN_ID || "");
export const CHAIN_ID = !isNaN(chainId) ? chainId : 1;

export const CONTRACT_ADDRESS =
  process.env.CONTRACT_ADDRESS || "0x5FbDB2315678afecb367f032d93F642f64180aa3";
