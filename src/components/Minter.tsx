import { ethers } from "ethers";
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
// import { contractAddress } from "../contracts/contract-address";
import { ZebraArtifact } from "../contracts/Zebra";
import "../styles/minter.css";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;
// @ts-ignore
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
declare let window:any;
const Minter = () => {
    const [formInput, updateFormInput] = useState({no:"",  name:"", description:""});
    const [fileUrl, setFileUrl] = useState(null);

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url);
        } catch (e) {
            console.log(e);
        }
    }

    async function mintZebra() {
       const {no, name, description} = formInput;
       if (!no || !name || !description || !fileUrl) return
       const data = JSON.stringify({
           name, description, image: fileUrl
       })
      
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = provider.getSigner();
        
        const contract = new ethers.Contract(contractAddress, ZebraArtifact.abi, signer);
        console.log("called");

        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            const transaction = await contract.createToken(url, no);
            const receipt = await transaction.wait();
            console.log("Successful");
            if (receipt.status === 0) {
                throw new Error("Transaction failed");
            }
        } catch (error) {
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
              return;
            }
            console.error(error);
          } finally {
                console.log("No error");
          }
    }

    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <div className="formContent">
                <div className="flex">
                    <label className="color font">No of NFTs:</label>
                    <input className="input" 
                        type="number" 
                        onChange={e => updateFormInput({...formInput, no: e.target.value})}
                        required/>
                </div>
                <div className="flex">
                    <label className="color font">Name of NFT:</label>
                    <input className="input" 
                        type="text" 
                        onChange={e => updateFormInput({...formInput, name: e.target.value})} 
                        required/>
                </div>
                <div className="flex">
                    <label className="color font">Description</label>
                    <input className="input" 
                        type="textarea" 
                        onChange={e => updateFormInput({...formInput, description: e.target.value})}
                        required/>
                </div>
                <div className="flex">
                    <label className="color font">Image: </label>
                    <input className="input" 
                        type="file"
                        onChange={onChange}
                        required/>
                        {
                            fileUrl && (
                                <img width="350" src={fileUrl} alt=""/>
                            )
                        }
                </div>
                {/*@ts-ignore*/}
                <button className="confirm-text" onClick={mintZebra}>Mint Asset</button> 
            
            </div>
        </div>
    );
}

export default Minter;