require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// const ALCHEMY_API_KEY = process.env.KEY;
// ROPSTEN_PRIVATE_KEY = process.env.PRIVATE_KEY
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  // networks: {
  //   ropsten: {
  //     url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
  //     accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
  //   }
  // }
};