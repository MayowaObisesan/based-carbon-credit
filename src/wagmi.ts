import { http, createConfig, createStorage, cookieStorage } from 'wagmi'
import { mainnet, sepolia, base } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({
      appName: "OnchainKit",
      preference: 'smartWalletOnly',
      version: '4',
    }),
    walletConnect({ projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID }),
  ],
  storage
    : createStorage({
      storage: cookieStorage,
    }),
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
