// First time wallet connection
declare const window: any;
export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            const obj = {
              status: "Connected",
              address: addressArray[0],
            };
            return obj;
          } catch (err) {
            return {
              address: "",
              status: err,
            };
          }
    } else {
        return {
          address: "",
          status: ""
        };
      }
}

// For an already connected wallet upon browser refresh

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "Connected",
          };
        } else {
          return {
            address: "",
            status: "Connect to Metamask",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: err,
        };
      }
    } else {
      return {
        address: "",
        status: ""
      };
    }
  }