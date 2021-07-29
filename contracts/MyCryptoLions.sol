// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract MyCryptoLions is ERC721, Ownable {
    uint256 public tokenCounter;

    struct tokenInfo{
        address tokenOwner;
        string tokenURI;
    }

    // Mpping to store who owns NFTs
    mapping(uint256 => tokenInfo) public newTokenIdToSender;

    constructor(string memory name, string memory symbol) public ERC721(name, symbol)
    {
        tokenCounter = 0;
    }

    // Minting the NFT
    function createCollectible(string memory tokenURI) public onlyOwner returns(uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        newTokenIdToSender[newTokenId] = tokenInfo(msg.sender, tokenURI);
        tokenCounter += 1;
        return newTokenId;
    }
}