import React from 'react';
import { useEffect, useState } from "react";
import { connectWallet } from "../utils/wallet";

// declare const window: any;
// declare var truncate: any

// let web3 = window.web3;

const Nav = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");


    // connect wallet 
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    return (
        <div>
        <h1>task</h1>

        </div>
    );
}

export default Nav;