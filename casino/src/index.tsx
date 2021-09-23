import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {WalletConnectContextProvider} from "@cityofzion/wallet-connect-sdk-react";

const wcOptions = {
  chainId: "neo3:testnet", // blockchain and network identifier
  logger: "debug", // use debug to show all log information on browser console
  methods: ["invokefunction"], // which RPC methods do you plan to call
  relayServer: "wss://connect.coz.io", // which relay server do you want to use, alternatively you can use "wss://relay.walletconnect.org"
  appMetadata: {
    name: "MyApplicationName", // your application name to be displayed on the wallet
    description: "My Application description", // description to be shown on the wallet
    url: "https://localhost:3000", // url to be linked on the wallet
    icons: ["https://walletconnect.org/walletconnect-logo.png"], // icon to be shown on the wallet
  }
};

ReactDOM.render(
  <WalletConnectContextProvider options={wcOptions}>
      <App />
  </WalletConnectContextProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
