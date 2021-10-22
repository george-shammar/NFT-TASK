//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Zebra is ERC721URIStorage, Pausable, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor()ERC721("Zebra", "ZBR"){

    }

    function createToken(string memory tokenURI, uint256 _mintAmount) public {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");

        for (uint256 i; i <= _mintAmount; i++) {
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
            _setTokenURI(newItemId, tokenURI);
            _tokenIds.increment();
        }
    }
}
