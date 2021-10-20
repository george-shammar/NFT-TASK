import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="wrapper fadeInDown">
            <h2>Mint NFT</h2>
            <div className="minter">
                <label>Recipient's Address</label>
                <input /> <br />
                <label>No of NFTs</label>
                <input /><br />
            </div>
            <button className="confirm-text">Confirm</button>
        </div>
    );
}

export default Minter;