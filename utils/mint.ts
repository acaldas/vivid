import { ethers } from "ethers";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { Vivid } from "../contracts/vivid";
import abi from "../contracts/vivid.abi.json";

const mintNFT = async (
  whitelist: boolean,
  tokens: number,
  account: string,
  provider: ethers.providers.Web3Provider,
  contractAddress: string,
  mintPrice: number
) => {
  const signer = provider.getSigner(account);
  const contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  ) as any as Vivid;

  const value = ethers.utils.parseEther((tokens * mintPrice).toString());

  let contractTransaction: ethers.ContractTransaction;
  if (!whitelist) {
    contractTransaction = await contract.mint(tokens, { value });
  } else {
    contractTransaction = await contract.whitelistMint(
      tokens,
      generateMerkleProof(account),
      {
        value,
      }
    );
  }

  return await contractTransaction.wait();
};

const generateMerkleProof = (address: string): [string, string] => {
  const whitelistAddresses = [
    "0x92eCfa97aBe6f32594f378D63da00326DeC270fD",
    "0xb40cd7DBFc9C4f0AF15a831e7f0eA1D0981a35D6"
  ];

  const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const proof = merkleTree.getHexProof(keccak256(address));

  return proof as [string, string];
};

export default mintNFT;
