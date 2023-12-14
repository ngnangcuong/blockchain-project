"use strict";
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const typechain = require("../src/types");
describe("NFTMarketplace", function () {
    async function prepare() {
        const accounts = await ethers.getSigners();
        // const [minter, buyer] = accounts;
        const minter = accounts[0];
        const buyer = accounts[1];
        const seller = accounts[2];
        const randomTokenURI = "random token uri for testing";
        const nftMarketplace = await new typechain.NFTMarketplace__factory(minter).deploy();
        const individualNFTs = await new typechain.IndividualNFTs__factory(minter).deploy(nftMarketplace.target);
        return { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI };
    }
    it("first test", async function () {
        const a = "hello world";
        expect(a).to.equal("hello world");
    });
    it("nftMarketplace's deployment", async function () {
        const { nftMarketplace } = await loadFixture(prepare);
        expect(await nftMarketplace.LISTING_FEE.staticCall()).to.equal(100000000000000n);
    });
    it("should mint a new individualNFT", async function () {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
    });
    it("list a new nft for sale", async function () {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        const ethersToAdd = ethers.parseEther("0.0001");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        // .to.emit(nftMarketplace, individualNFTs.target, tokenID, seller.target, nftMarketplace.target, 10);
        // const provider = ethers.provider;
        // const balanceInWei = await provider.getBalance(buyer);
    });
    it("buy a listed nft successfully", async function () {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        const ethersToAdd = ethers.parseEther("0.0001");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        expect(await nftMarketplace.connect(buyer).buyNFT(individualNFTs.target, tokenID, { value: 10 }))
            .to.emit(nftMarketplace, "NFTSold");
    });
    it("get listed nft", async function () {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        const ethersToAdd = ethers.parseEther("0.0001");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        const listNFTs = await nftMarketplace.connect(buyer).getListedNFTs();
        // console.log(listNFTs[0].seller);
        expect(listNFTs.length).to.equal(1);
    });
    it("get my nft", async () => {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        const ethersToAdd = ethers.parseEther("0.0001");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID + 1, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        expect(await nftMarketplace.connect(buyer).buyNFT(individualNFTs.target, tokenID, { value: 10 }))
            .to.emit(nftMarketplace, "NFTSold");
        expect(await nftMarketplace.connect(buyer).buyNFT(individualNFTs.target, tokenID + 1, { value: 10 }))
            .to.emit(nftMarketplace, "NFTSold");
        console.log(await individualNFTs.connect(buyer).mint(randomTokenURI));
        const myNFTs = await nftMarketplace.connect(buyer).getMyNFTs();
        expect(myNFTs.length).to.equal(2);
    });
    it("get my listed nft", async () => {
        const { nftMarketplace, individualNFTs, minter, buyer, seller, randomTokenURI } = await loadFixture(prepare);
        var tokenID = 1;
        const ethersToAdd = ethers.parseEther("0.0001");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await individualNFTs.connect(seller).mint(randomTokenURI)).to.emit(individualNFTs, "NFTMinted");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        expect(await nftMarketplace.connect(seller).listNFT(individualNFTs.target, tokenID + 1, 10, { value: ethersToAdd }))
            .to.emit(nftMarketplace, "NFTListed");
        expect(await nftMarketplace.connect(buyer).buyNFT(individualNFTs.target, tokenID, { value: 10 }))
            .to.emit(nftMarketplace, "NFTSold");
        const myListedNFT = await nftMarketplace.connect(seller).getMyListNFTs();
        expect(myListedNFT.length).to.equal(1);
    });
});
//# sourceMappingURL=NFTMarketplace.js.map