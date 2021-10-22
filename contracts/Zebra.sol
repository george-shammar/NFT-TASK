//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

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

    constructor()ERC721("Zebra", "ZBR"){

    }

    /**
    @notice onlyOwner is not enforced so as to allow anyone call this function.
    @dev Requires minimum number of mintable token to be at least 1.
    */

    function createToken(string memory tokenURI, uint256 _mintAmount) public whenNotPaused {
        require(_mintAmount > 0, "Minimum number of mintable token is 1");

        for (uint256 i = 1; i <= _mintAmount; i++) {
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
            _setTokenURI(newItemId, tokenURI);
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
