# ZEBRA NFT

- This is a simple DApp that allow users to mint their own NFT. Users can mint multiple NFTs at once. Minted assets are dynamically stored on IPFS. The DApp is deployed on the Ropsten Test Network.


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

Next, run Hardhat's testing network in the CLI:
```
npx hardhat node
```
Then, on a new terminal, go to the repository's root folder and run this to deploy your contract:

```
npx hardhat run scripts/deploy.js --network localhost
```

To use the application, open http://localhost:3000/ or use the command below in your terminal:

```npm start
```
- Import an account from the hardhat node in your terminal and copy the given private key in the section of Metamask that says 'import an account' and paste the copied private key from your terminal in the space where it says: 'Paste your private key string here:'. Click on 'Import'.

- Set your network in MetaMask to localhost:8545. You might also need to configure MetaMask to work well with Hardhat. To do that, go to Settings -> Networks -> Localhost 8545 and change the Chain ID input to 31337.

 

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


## Developer

👤 **George Gbenle**

- GitHub: [george-shammar](https://github.com/george-shammar)
- Twitter: [@GeorgeShammar](https://twitter.com/GeorgeShammar)
- LinkedIn: [George Gbenle](https://www.linkedin.com/in/georgegbenle/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is MIT licensed.