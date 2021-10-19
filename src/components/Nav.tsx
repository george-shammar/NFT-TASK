import React from 'react';
import { useState, useEffect } from "react";
import Web3 from "web3";

declare const window: any;

let web3 = window.web3;

const Nav = () => {

    const [ethAdd, setEthAdd] = useState(null);
    const [metaMaskStatus, setMetaMaskStatus] = useState(true);

    const checkWallet = async () => {
        const accounts = await window.web3.eth.getAccounts();
        return accounts.length > 0;
    };

    const connectWallet = async () => {
        const userAdd = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setEthAdd(userAdd[0]);
    };

    return (
        <div>
            <h1>task</h1>
        </div>
    );
}

export default Nav;