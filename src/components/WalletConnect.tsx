import {
  ConnectWallet,
  ConnectWalletText,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { Link } from "react-router-dom";

export function WalletConnect() {
  return (
    <div className="flex justify-end">
      <Wallet>
        <ConnectWallet className="bg-green-800 hover:bg-green-700">
          <ConnectWalletText>Sign In</ConnectWalletText>
          <Avatar className="h-6 w-6" />
          <Name className="text-white" />
        </ConnectWallet>
        <WalletDropdown>
          <Identity
            className="px-4 pt-3 pb-2 hover:bg-green-200"
            hasCopyAddressOnClick
          >
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content p-2 shadow bg-base-100 hover:bg-transparent w-full"
            >
              <li className="">
                <Link
                  to="/dashboard/profile"
                  className="h-12 leading-10 justify-between"
                >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
            </ul>
          </div>
          <WalletDropdownLink
            className="hover:bg-green-200"
            icon="wallet"
            href="https://keys.coinbase.com"
          >
            Wallet
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect className="bg-error/50 hover:bg-error" />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}
