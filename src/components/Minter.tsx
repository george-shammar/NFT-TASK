import "../styles/minter.css";

const Minter = () => {
    return (
        <div className="minter">
            <h2>Mint Task NFT</h2>
            <form>
                <input>Address</input>
                <input>No of NFT</input>
                <button>Confirm</button>
            </form>
        </div>
    );
}

export default Minter;