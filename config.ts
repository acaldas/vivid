const chainId = parseInt(process.env.CHAIN_ID || "");
export const CHAIN_ID = !isNaN(chainId) ? chainId : 1;
