const hre = require("hardhat")
const { ethers } = hre
const typechain = require("../src/types")

async function main() {
  const accounts = await ethers.getSigners();
  const [minter, buyer] = accounts;

  const nftMarketplace = await new typechain.NFTMarketplace__factory(minter).deploy();
  console.log("NFTMarketplace: ", nftMarketplace.target);
  const individualNFTs = await new typechain.IndividualNFTs__factory(minter).deploy(nftMarketplace.target);
  console.log("IndividualNFTs: ", individualNFTs.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
