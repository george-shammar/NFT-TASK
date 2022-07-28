import { ethers } from "ethers";
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import contractAddress from "../contracts/contract-address.json";
import ZebraArtifact from "../contracts/Zebra.json";
import "../styles/minter.css";


const ERROR_CODE_TX_REJECTED_BY_USER = 4001;
// @ts-ignore
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
declare let window:any;
const Minter = () => {
    const [formInput, updateFormInput] = useState({no:"",  name:"", description:"", whitelist:""});
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
            console.log(url);
        } catch (e) {
            console.log(e);
        }
    }

    async function addWhitelist() {
        
        const {whitelist} = formInput;
        if (!whitelist) return
        let whitelistArray = [];
        whitelistArray.push(whitelist);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress.Zebra, ZebraArtifact.abi, signer);
        try {
            const transaction = await contract.whitelistUsers(whitelistArray);
            const receipt = await transaction.wait();
            if (receipt.status === 0) {
                throw new Error("Whitelisting failed");
            }
        } catch (error) {
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
              return;
            }
            console.error(error);
          } finally {

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
        const contract = new ethers.Contract(contractAddress.Zebra, ZebraArtifact.abi, signer);

        let mintingPrice = await contract.getMintingPrice(no);
        mintingPrice = mintingPrice.toString();

        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            
            const transaction = await contract.createToken(url, no, { value: mintingPrice });
            const receipt = await transaction.wait();
            if (receipt.status === 0) {
                throw new Error("Transaction failed");
            }
        } catch (error) {
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
              return;
            }
            console.error(error);
          } finally {

          }
    }

    return (
        <div className="fadeInDown minter">
            <div>
                <h2>Add To Whitelist</h2>
                <input 
                    className="input" 
                    type="text" 
                    onChange={e => updateFormInput({...formInput, whitelist: e.target.value})} 
                    placeholder="Add an address to whitelist">
                </input>
                <button className="confirm-text" onClick={addWhitelist}>Add</button> 

            </div> 
            <h2>Mint NFT</h2>
            <div className="formContent">
                
                <div className="flex">
                    <input className="input" 
                        type="text" 
                        onChange={e => updateFormInput({...formInput, name: e.target.value})} 
                        placeholder="Name your Asset..."
                        required/>
                </div>
                <div className="flex">
                    <input className="input" 
                        type="textarea" 
                        onChange={e => updateFormInput({...formInput, description: e.target.value})}
                        placeholder="Description..."
                        required/>
                </div>
                <div className="flex">
                    <input className="input" 
                        type="number" 
                        onChange={e => updateFormInput({...formInput, no: e.target.value})}
                        placeholder="Number to be minted.."
                        required/>
                </div>
                <div className="flex">
                    <input className="input" 
                        type="file"
                        onChange={onChange}
                        required/>
                        <div>
                        {
                            fileUrl && (
                                <img className="preview" src={fileUrl} alt=""/>
                            )
                        }
                        </div>
                </div>
                {/*@ts-ignore*/}
                <button className="confirm-text" onClick={mintZebra}>Mint Asset</button> 
            
            </div>
        </div>
    );
}

export default Minter;