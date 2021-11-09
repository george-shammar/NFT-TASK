const { expect } = require("chai")
const { ethers } = require("hardhat");


describe("Zebra NFT", () => {

    let zebraContract, owner, address1;

    beforeEach(async () => {
        const ZebraFactory = await ethers.getContractFactory("Zebra");
        [owner, address1] = await ethers.getSigners();
        zebraContract = await ZebraFactory.deploy();
        
    });
   
    it("Should initialize Zebra contract", async () => {
        const ZebraFactory = await ethers.getContractFactory("Zebra");

        const zebraContract = await ZebraFactory.deploy();
        expect(await zebraContract.name()).to.equal("Zebra");
    });

    it("Should set the right owner", async () => {
        expect(await zebraContract.owner()).to.equal(await owner.address);
    });

    it("Should confirm that an address is whitelisted and mint token", async () => {
        [account1] = await ethers.getSigners();
        const whitelistedAddresses = [];
        whitelistedAddresses.push(account1.address);
        await zebraContract.whitelistUsers(whitelistedAddresses);
        const uri = "https://zebra";
        const tx = await zebraContract.connect(account1).createToken(uri, 1,
            {value: zebraContract.getMintingPrice(1)});
        expect(await zebraContract.balanceOf(account1.address)).to.equal(1);
    });

    it("Should confirm that 0.0005 ETH is paid before minting token", async () => {
        [account1] = await ethers.getSigners();
        const whitelistedAddresses = [];
        whitelistedAddresses.push(account1.address);
        await zebraContract.whitelistUsers(whitelistedAddresses);
        const uri = "https://zebra";
        const tx = await zebraContract.connect(account1).createToken(uri, 1,
            {value: zebraContract.getMintingPrice(1)});
        expect(await tx.value).to.equal(500000000000000);
    });

    it("Should mint token properly when whitelisting period is over", async () => {
        [account1] = await ethers.getSigners();
        expect(await zebraContract.balanceOf(account1.address)).to.equal(0);
        await zebraContract.setOnlyWhitelisted(false);
        const uri = "https://zebra";
        const tx = await zebraContract.connect(account1).createToken(uri, 1,
            {value: zebraContract.getMintingPrice(1)});
        expect(await zebraContract.balanceOf(account1.address)).to.equal(1);

    });

    it("Should mint a zebra", async () => {
        await zebraContract.setOnlyWhitelisted(false);
        const uri = "https://zebra";
        expect(await zebraContract.createToken(uri, 2, {
            value: zebraContract.getMintingPrice(2)})).to.emit(
          zebraContract,
          "Transfer"
        );
    });

    
});