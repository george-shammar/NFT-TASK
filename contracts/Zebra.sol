//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/// @title A basic ERC721 smart contract that allows user to mint multiple tokens at once.  
/// @dev Inherits standard Openzeppelin's library.

contract Zebra is ERC721URIStorage, Pausable, Ownable {

    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;

    uint256 private _price = 500000000000000;

    constructor()ERC721("Zebra", "ZBR"){

    }

    function getMintingPrice(uint256 _mintAmount) public view returns (uint256) {
        return  _mintAmount *_price;
    }

    /**
    @notice onlyOwner is not enforced so as to allow anyone call this function.
    @dev Requires minimum number of mintable token to be at least 1.
    */

    function createToken(string memory tokenURI, uint256 _mintAmount) public payable whenNotPaused {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");
        uint256 _mintingPrice = _price * _mintAmount;
        require(msg.value == _mintingPrice, "Please send along 0.0005 ether for each NFT to complete minting");

        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
            string memory uniqueURI = string(abi.encodePacked(tokenURI, i));
            _setTokenURI(newItemId, uniqueURI);
            _tokenIds.increment();
        }
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
