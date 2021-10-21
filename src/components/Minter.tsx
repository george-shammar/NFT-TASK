import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <div className="formContent">
                <div className="flex">
                    <label className="color font">Recipient's Address:</label>
                    <input className="input" type="text"/>
                </div>
                <div className="flex">
                    <label className="color font">No of NFTs:</label>
                    <input className="input" type="number" required/>
                </div>
              
                    <button className="confirm-text">Confirm</button>
            
            </div>
        </div>
    );
}

export default Minter;