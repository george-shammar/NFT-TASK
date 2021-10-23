import "../styles/Nav.css"

export const NoWallet = () => {
    return (
      <div>
        <div>
          <div>
            <p>
              No Ethereum wallet was detected. <br />
              Please install{" "}
              <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                MetaMask
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }