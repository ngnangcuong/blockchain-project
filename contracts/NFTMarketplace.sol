// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "contracts/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    uint256 private _nftsSold;
    uint256 private _nftCount;
    uint256 public LISTING_FEE = 0.0001 ether;
    address payable private _marketOwner;

    mapping(uint256 => NFT) private _idToNFT; 
    struct NFT {
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool listed;
    }

    event NFTListed(
        address nftContract,
        uint256 tokenId,
        address seller,
        address owner,
        uint256 price
    );
    event NFTSold(
        address nftContract,
        uint256 tokenId,
        address seller,
        address owner,
        uint256 price
    );

    constructor() {
        _marketOwner = payable(msg.sender);
    }

    // List the NFT on the marketplace
    function listNFT(address _nftContract, uint256 _tokenId, uint256 _price) public payable nonReentrant {
        require(_price > 0, "Price must be at least 1 wei");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);
        _marketOwner.transfer(LISTING_FEE);
        _nftCount++;

        _idToNFT[_tokenId] = NFT(
            _nftContract,
            _tokenId,
            payable(msg.sender),
            payable(address(this)),
            _price,
            true
        );

        emit NFTListed(_nftContract, _tokenId, msg.sender, address(this), _price);
    }

    // Buy NFT
    function buyNFT(address _nftContract, uint256 _tokenId) public payable nonReentrant {
        NFT storage nft = _idToNFT[_tokenId];
        require(msg.value >= nft.price, "Not enough ether to cover asking price");

        address payable buyer = payable(msg.sender);
        payable(nft.seller).transfer(msg.value);
        IERC721(_nftContract).transferFrom(address(this), buyer, nft.tokenId);
        nft.owner = buyer;
        nft.listed = false;

        _nftsSold++;
        emit NFTSold(_nftContract, _tokenId, nft.seller, nft.owner, msg.value);
    }

    // Resell an NFT purchased from the marketplace
    function resellNft(address _nftContract, uint256 _tokenId, uint256 _price) public payable nonReentrant {
        require(_price > 0, "Price must be at least 1 wei");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

        NFT storage nft = _idToNFT[_tokenId];
        nft.seller = payable(msg.sender);
        nft.owner = payable(address(this));
        nft.listed = true;
        nft.price = _price;

        _nftsSold--;
        emit NFTListed(_nftContract, _tokenId, msg.sender, address(this), _price);
    }

    function getListedNFTs() public view returns (NFT[] memory) {
        uint256 nftCount = _nftCount;
        uint256 unsoldNFTCount = nftCount - _nftsSold;
        NFT[] memory nfts = new NFT[](unsoldNFTCount);
        uint nftsIndex = 0;
        for (uint i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].listed) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }

        return nfts;
    }

    function getMyNFTs() public view returns(NFT[] memory) {
        uint nftCount = _nftCount;
        uint myNftCount = 0;
        for (uint i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender) {
                myNftCount++;
            }
        }

        NFT[] memory nfts = new NFT[](myNftCount);
        uint nftsIndex = 0;
        for (uint i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }

    function getMyListNFTs() public view returns(NFT[] memory) {
        uint nftCount = _nftCount;
        uint myNftCount = 0;
        for (uint i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender && _idToNFT[i + 1].listed) {
                myNftCount++;
            }
        }

        NFT[] memory nfts = new NFT[](myNftCount);
        uint nftsIndex = 0;
        for (uint i = 0; i < nftCount; i++) {
            if (_idToNFT[i + 1].owner == msg.sender && _idToNFT[i + 1].listed) {
                nfts[nftsIndex] = _idToNFT[i + 1];
                nftsIndex++;
            }
        }
        return nfts;
    }
}