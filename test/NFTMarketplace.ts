const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers")
const { expect } = require("chai")
const { ethers } = require("hardhat")
const typechain = require("../src/types")


describe("NFTMarketplace", function () {
    async function prepare() {
        const accounts = await ethers.getSigners();
        // const [minter, buyer] = accounts;
        const minter = accounts[0];
        const buyer = accounts[1];

        const nftMarketplace = await new typechain.NFTMarketplace__factory(minter).deploy();

        return {nftMarketplace, minter, buyer}
    }

    it("first test", async function () {
        const a = "hello world";
        expect(a).to.equal("hello world");
    })

    it("deployment", async function () {
        const {nftMarketplace, minter, buyer} = await loadFixture(prepare);
        console.log(await nftMarketplace.LISTING_FEE.staticCall())
        expect(await nftMarketplace.LISTING_FEE.staticCall()).to.equal(100000000000000n);
    })
})