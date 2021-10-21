import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <form className="formContent">
                <div className="flex">
                    <label className="color font">Recipient's Address:</label>
                    <input className="input" type="text" required/>
                </div>
                <div className="flex">
                    <label className="color font">No of NFTs:</label>
                    <input className="input" type="number" required/>
                </div>
                <label className="color font">Name of NFT:</label>
                <input className="input" type="number" required/>
              
                    <button className="confirm-text">Confirm</button>
            
            </form>
        </div>
    );
}

export default Minter;