import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";

declare const window: any;

const Nav = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
      (async() => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);
    
        addWalletListener();
      }) ()
    }, []);

    // connect wallet 
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    // wallet listener to update UI when wallet's state changes, 
    // such as when the user disconnects or switches accounts.
    function addWalletListener() {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts: string | any[]) => {
            if (accounts.length > 0) {
            setWallet(accounts[0]);
            setStatus("Connected");
            } else {
            setWallet("");
            setStatus("🦊 Connect to Metamask");
            }
        });
        } else {
        setStatus("Install metamask");
        }
    }

    return (
        <div>
        <h1>task</h1>

        <div>    
          {walletAddress.length > 0 ? (
            <div>Connected:   
              {String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
            </div>
            ) : (
          <div onClick={connectWalletPressed}>Connect Wallet</div>
            )}
        </div>
    </div>
    );
}

export default Nav;