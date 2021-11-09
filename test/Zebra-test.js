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
        // @ts-ignore
        const ZebraFactory = await ethers.getContractFactory("Zebra");

        const zebraContract = await ZebraFactory.deploy();
        expect(await zebraContract.name()).to.equal("Zebra");
    });

    it("Should set the right owner", async () => {
        expect(await zebraContract.owner()).to.equal(await owner.address);
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

    it("Should mint token properly", async () => {
        [account1] = await ethers.getSigners();
        expect(await zebraContract.balanceOf(account1.address)).to.equal(0);
        await zebraContract.setOnlyWhitelisted(false);
        const uri = "https://zebra";
    })
    
});