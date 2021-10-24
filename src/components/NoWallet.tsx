import "../styles/Nav.css"

export const NoWallet = () => {
    return (
      <div>
        <div className="nav">
        <h1 className="title">ZebraMint</h1>
        <i className="fas mobile fa-bars" /> 
        <p className="no-wallet-desktop">No Ethereum wallet was detected.</p>
          <div className="wallet">
            <p className="text">
              Install{" "}
              <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                MetaMask
              </a>
            </p>
          </div>
        </div>
        <p className="no-wallet">No Ethereum wallet was detected.</p>
        </div>
    );
  }