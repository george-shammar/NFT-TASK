import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <div className="formContent">
                <div className="flex">
                    <label>Recipient's Address:</label>
                    <input />
                </div>
                <div className="flex">
                    <label>No of NFTs:</label>
                    <input />
                </div>
                <button className="confirm-text">Confirm</button>
            </div>
        </div>
    );
}

export default Minter;