import { ethers } from "ethers";
import Web3Modal from "web3modal";
import contractAddress from "../contracts/contract-address.json";
import contractAbi from "../contracts/Zebra.json";

import "../styles/minter.css";

const Minter = () => {

    async function mintZebra() {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const signer = provider.getSigner();
        // @ts-ignore
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const transaction = await contract.createToken();

        await transaction.wait();
    }

    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <div className="formContent">
                <div className="flex">
                    <label className="color font">No of NFTs:</label>
                    <input className="input" type="number" required/>
                </div>
                <div className="flex">
                    <label className="color font">Name of NFT:</label>
                    <input className="input" type="text" required/>
                </div>
                <div className="flex">
                    <label className="color font">Description</label>
                    <input className="input" type="textarea" required/>
                </div>
                <div className="flex">
                    <label className="color font">Image: </label>
                    <input className="input" type="file" required/>
                </div>
              
                <button className="confirm-text" onSubmit={mintZebra}>Confirm</button>
            
            </div>
        </div>
    );
}

export default Minter;