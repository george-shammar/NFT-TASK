require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


 const ALCHEMY_API_KEY = process.env.ALCHEMY_KEY;

 
 const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
 module.exports = {
   solidity: "0.8.4",
   networks: {
     ropsten: {
       url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
       accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
     }
   }
 };