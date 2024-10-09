import { useRef, useState } from "react";
import navImg from "../assets/Carus L1 1.png";
import logo from "../assets/wastewise_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useConnect } from "wagmi";
import { WasteWise } from "./WasteWise";
import SignUpButton from "./SignUpButton";
import Logo from "./Logo";
import Button from "./Button";
import { useWasteWiseContext } from "../context";
import { WalletConnect } from "./WalletConnect";
import { Wallet } from "@coinbase/onchainkit/wallet";

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { currentUser, isRegistered } = useWasteWiseContext();
  const sdgModal = useRef<HTMLDialogElement>(null);

  return (
    <section className="sticky top-0 z-10 px-2 py-2 lg:px-8 lg:py-4 bg-transparent backdrop-blur-3xl">
      <div className="navbar bg-base-200 w-full mx-auto rounded-2xl dark:bg-base-300">
        <div className="navbar-start flex-1 font-bold">
          <Logo />
        </div>
        <div className={"navbar-end gap-2 space-x-4"}>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {/* <li>
                <label className="hidden lg:flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    type="checkbox"
                    value="dark"
                    className="toggle theme-controller"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </li> */}

              {isConnected && isRegistered && (
                <li>
                  {currentUser?.role === 0 || currentUser?.role === 2 ? (
                    <Link to="/dashboard/wallet">Dashboard</Link>
                  ) : (
                    <Link to="/dashboard">Dashboard</Link>
                  )}
                </li>
              )}
            </ul>
          </div>
          {/* <WasteWise /> */}
          {location.pathname === "/" && isConnected && !isRegistered && (
            <div className="flex gap-x-4">
              <Link to="/companyregister">
                <Button>Company</Button>
              </Link>
              <Link to="/register">
                <Button>Signup</Button>
              </Link>
            </div>
          )}
          {/* {isConnected && <SignUpButton />} */}
          <WalletConnect />

          {!isRegistered && (
            <dialog id="my_modal_4" className="modal" ref={sdgModal}>
              <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog" className="modal-backdrop">
                  <div className="modal-action">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn btn-md btn-rounded btn-ghost absolute right-8 top-8 text-base-content font-black">
                      ✕
                    </button>
                  </div>
                </form>
                <h3 className="font-bold text-2xl px-1 pb-2 lg:px-4">
                  Welcome
                </h3>
                <div className="px-1 py-1 lg:px-4 lg:py-4 leading-8 text-balance">
                  Thank you for connecting to carbon-wise. We will like to get
                  some info about you so that we can personalize your EIA card.
                  <div>
                    Kindly click the signup button to fill in those details.
                  </div>
                  <Link to="/register" className="block mt-4">
                    <Button>Signup</Button>
                  </Link>
                </div>
              </div>
              {/* <form method="dialog" className="modal-backdrop">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
                ✕
              </button>
            </form> */}
            </dialog>
          )}
        </div>
      </div>
    </section>
    // <div className="drawer drawer-end">
    //   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content">
    //     {/* Page content here */}

    //     <div className="navbar bg-transparent">
    //       <div className="navbar-start">
    //         <Logo />
    //       </div>
    //       <div className="navbar-center hidden lg:flex">
    //         <ul className="menu menu-horizontal px-1">
    //           <li>
    //             <Link to="/dashboard"> DashBoard</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <label
    //         htmlFor="my-drawer-4"
    //         className=" navbar-end  drawer-button btn lg:hidden"
    //       >
    //         MENU
    //       </label>
    //       <div className={"navbar-end gap-8"}>
    //         <WasteWise />
    //         {isConnected && <SignUpButton />}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="drawer-side ">
    //     <label
    //       htmlFor="my-drawer-4"
    //       aria-label="close sidebar"
    //       className="drawer-overlay "
    //     ></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200 z-50 text-base-content">
    //       <li>
    //         <div className="flex items-start flex-col">
    //           <WasteWise />
    //           {isConnected && <SignUpButton />}
    //         </div>
    //       </li>
    //       <li>
    //         <Link to="Layout"> DashBoard</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
