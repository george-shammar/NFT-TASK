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