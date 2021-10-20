import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="minter">
            <h2>Mint NFT</h2>
            <form>
                <label>Recipient's Address</label>
                <input />
                <label>No of NFTs</label>
                <input />
                <button>Confirm</button>
            </form>
        </div>
    );
}

export default Minter;