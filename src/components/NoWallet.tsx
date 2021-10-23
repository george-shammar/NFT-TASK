import "../styles/Nav.css"

export const NoWallet = () => {
    return (
        <div className="nav">
        <h1 className="title">Zebra</h1>
        <p>No Ethereum wallet was detected.</p>
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
    );
  }