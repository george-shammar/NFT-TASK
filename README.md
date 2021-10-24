# ZEBRA NFT

- This is a simple DApp that allow users to mint their own NFT. Users can mint multpile NFTs at once. Minted assets are dynamically stored on IPFS. The DApp is deployed on the Ropsten Test Network.


## Live Demo
[Deployed app](https://frosty-carson-9d1a51.netlify.app/)

# Built With
- Solidity
- React
- TYpescript
- Hardhat
- Ethers
- IPFS
- Infura
- Tested with Chai
- HTML5
- CSS3

## Getting Started

To run a local copy of this application, follow the steps below:

- Go to the "Code" section of this repository and press the green button that says "Code". Copy the URL or the SSH key.
- Go to the terminal and enter:
```
git clone https://github.com/george-shammar/NFT-TASK.git
```

The URL or SSH are the links copied from the step above.

- If you don't have git installed, you can download this project and unzip it.
- Change directory into the folder the application is saved.
```
cd directory
```
Directory is the name of your folder.

- Once you have the local copy in your desired folder, go back to your terminal and run:
```
npm install
```

This command installs all the dependencies of the application.

Next, run Hardhat's testing network:
```
npx hardhat node
```
Then, on a new terminal, go to the repository's root folder and run this to deploy your contract:

```
npx hardhat run scripts/deploy.js --network localhost
```

To use the application, open http://localhost:3000/ or use the command below:

```npm start
```

You will need to have Metamask installed and listening to localhost 8545.

However, to use the Dapp live on the Ropsten testnet, visit the live version below:

## Live Demo
[Deployed app](https://frosty-carson-9d1a51.netlify.app/)

## Usage

- Upon launching the application, connect to your metamask wallet by choosing an address to connect with.
- Fill in the minting form on the page with the name, description, number of assets to mint and upload your asset. All fields are mandatory. You'll see a preview of your asset on the page before minting.
- Confirm your minting and sign off the transaction on metamask by paying the gas fee.
- Confirm your minted asset through any of the available means. Check out the transaction on etherscan.

## Tests

- For smart contract tests, run the tests in the command line interface, type:

```
npx hardhat test
```
Note: The application relied heavily on openzeppelin's standard libraries, hence the only newly implemented function "createToken" and contract deployment was tested. Openzeppelin's contracts are already well tested.