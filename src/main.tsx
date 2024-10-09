import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "@coinbase/onchainkit/styles.css";
import "./index.css";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";
import WastewiseProvider from "./context/index.tsx";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
          chain={base}
        >
          <WastewiseProvider>
            <App />
          </WastewiseProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
