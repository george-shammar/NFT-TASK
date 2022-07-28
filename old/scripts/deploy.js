async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Zebra = await ethers.getContractFactory("Zebra");
    const zebra = await Zebra.deploy();
  
    console.log("Zebra address:", zebra.address);

    //  To save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(zebra);
  }

  function saveFrontendFiles(zebra) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address.json",
      JSON.stringify({ Zebra: zebra.address }, undefined, 2)
    );
  
    const ZebraArtifact = artifacts.readArtifactSync("Zebra");
  
    fs.writeFileSync(
      contractsDir + "/Zebra.json",
      JSON.stringify(ZebraArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  