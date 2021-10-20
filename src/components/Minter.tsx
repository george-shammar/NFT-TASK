import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="fadeInDown minter">
            <h2>Mint NFT</h2>
            <div>
                <label>Recipient's Address</label>
                <input /> <br />
                <label>No of NFTs</label>
                <input /><br />
                <button className="confirm-text">Confirm</button>
            </div>
        </div>
    );
}

export default Minter;