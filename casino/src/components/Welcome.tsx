import {useWalletConnect} from "@cityofzion/wallet-connect-sdk-react";

function Welcome() {
  const walletConnectCtx = useWalletConnect()
  return <>
{walletConnectCtx.loadingSession
  ? "Loading Session"
  : !walletConnectCtx.session ? <button onClick={() => walletConnectCtx.connect()}>Connect your Wallet</button>
  : <ul>
            {walletConnectCtx.accounts.map((account) => {
                const [address] = account.split("@");
                return <li key={address}>
                    <span>{walletConnectCtx.session?.peer.metadata.name}</span>
                    <span>{address}</span>
                    <button onClick={walletConnectCtx.disconnect}>Disconnect</button>
                </li>
            })}
    </ul>
}
</>;
}

export default Welcome;