import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { CONTRACT_ADDRESS } from "../config";
import { Vivid } from "../contracts/vivid";
import abi from "../contracts/vivid.abi.json";

const MINT_PRICE = 0.25;

const mintNFT = async (
  whitelist: boolean,
  tokens: number,
  account: string,
  provider: ethers.providers.Web3Provider
) => {
  const signer = provider.getSigner(account);
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    signer
  ) as any as Vivid;

  const value = ethers.utils.parseEther((tokens * MINT_PRICE).toString());

  if (!whitelist) {
    await contract.mint(tokens, { value });
  } else {
    await contract.whitelistMint(tokens, generateMerkleProof(account), {
      value,
    });
  }
};

const generateMerkleProof = (address: string): [string, string] => {
  const whitelistAddresses = [
    "0xe8409e4bF1EA6e07b65ea3707D1fdbb48CDc5f06",
    "0x9f4c10AcfB6F7f09c2D403471e9a96Bbd010693d",
    "0x2634cdc8FcA9DaD954Fd57d164C7Df771278c705",
    "0x926C55b33DAef22dFa02B43D94746741e6Ae9983",
    "0x2Ec00d273f29faD639Ad21858921EF973fD10961",
    "0x8fa71b31d41ef7E778F06E3011172b19ec215c53",
    "0xebcEbc0d2af4B578cCca2a61f66512b713B7Da8d",
    "0x08914e46B590210c61604e17f939B25C4d70FC98",
    "0xf94191b8a84FBA1Ed5E72Ff1133C3FC8f0569FB3",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  ];

  const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const proof = merkleTree.getHexProof(
    keccak256("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  );

  return proof as [string, string];
};

export default mintNFT;
