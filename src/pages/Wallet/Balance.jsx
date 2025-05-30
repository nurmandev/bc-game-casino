import { IoSearch } from "react-icons/io5";
import { BsExclamationSquare } from "react-icons/bs";
import bc2 from "../../../public/Wallet_images/balance-img/BC (2).webp";
import USTD from "../../../public/Wallet_images/balance-img/USDT.webp";
import BTC from "../../../public/Wallet_images/balance-img/BTC.webp";
import { useState } from "react";

const Balance = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleToggleChange = () => {
    setIsHidden(!isHidden); // Toggle the hidden state
  };

  return (
    <div>
      <div className="w-full h-auto bg-[#323738] rounded-2xl py-5">
        <div className="w-[95%] m-auto h-auto bg-[#3a4142] rounded-2xl  ">
          <div className=" flex items-center gap-5 lg:pl-10 sm:pl-2 m-auto py-5">
            <img
              src="../../../public/Wallet_images/balance-img/coin-1.webp"
              alt=""
              className="h-[24px] w-[24px] sm:hidden md:block "
            />
            <div className="lg:flex lg:items-center sm:flex sm:flex-wrap sm:items-center gap-5 text ">
              <div>
                <h3 className="text-[#b3bec1] font-medium">Total Balance </h3>
                <h1 className="text-white font-bold">₹0.00</h1>
              </div>
              <span className="text-white h-[50px] "> | </span>
              <div>
                <h3 className="text-[#b3bec1] font-medium">Deposit Balance </h3>
                <h1 className="text-white font-bold">₹0.00</h1>
              </div>
              <span className="text-white h-[50px] "> | </span>
              <div>
                <h3 className="text-[#b3bec1] font-medium"> Bonus Balance </h3>
                <h1 className="text-white font-bold">₹0.00</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="w-[95%] mx-auto flex items-center justify-between gap-5 pt-10">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={handleToggleChange} // Toggle visibility when clicked
              checked={isHidden}
            />
            <div className="relative w-11 h-6 rounded-full peer bg-gray-700 dark:bg-gray-700 peer-checked:bg-[#24ee89]">
              <div className="absolute top-[2px] start-[2px] w-5 h-5 bg-white border-gray-300 border rounded-full transition-all peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"></div>
            </div>
            <span className="text-[#b3bec1] font-medium ml-2 hidden sm:block">
              {isHidden ? "Show 0 balance" : "Hide 0 balance"}
            </span>
          </label>
          <div>
            <form className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoSearch className="text-[#b3bec1] text-[20px] " />
                </div>
                <input
                  type="search"
                  className="block lg:w-[280px] p-3 ps-10 text-sm border rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                  placeholder="Search "
                />
              </div>
            </form>
          </div>
        </div>
        {/* Button */}
        <div className="w-[95%] m-auto mt-5 ">
          <h1 className="mb-3 text-[#b3bec1] text-[14px] font-bold tracking-wider ">
            Cash
          </h1>
          <div className=" h-[50px] bg-[#3a4142] rounded-2xl  ">
            <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
              <div className="flex items-center gap-2 ">
                <img
                  src="../../../public/Wallet_images/balance-img/flag.webp"
                  alt=""
                  className="h-[24px] w-[28px] rounded "
                />
                <h1 className="text-white font-extrabold text-[16px] ">INR</h1>
              </div>
              <div className="flex items-center gap-5 text ">
                <h1 className="text-white font-bold">₹0.00</h1>
                <h3 className="text-[#25dc68] font-bold">Deposite </h3>
                <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[95%] m-auto mt-5 ">
          <h1 className="mb-3 text-[#b3bec1] text-[14px] font-bold tracking-wider ">
            Crypto currency
          </h1>
          <div className=" h-[50px] bg-[#3a4142] rounded-2xl  ">
            <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
              <div className="flex items-center gap-2 ">
                <img
                  src="../../../public/Wallet_images/balance-img/BCD.webp"
                  alt=""
                  className="h-[24px] w-[24px] rounded "
                />
                <h1 className="text-white font-extrabold text-[16px] ">BCD</h1>
                <div className=" w-[16px] h-[16px]">
                  <BsExclamationSquare className="text-[#25dc68] " />
                </div>
              </div>
              <div className="flex items-center gap-5 text ">
                <h1 className="text-white font-bold">₹0.00</h1>
                <h3 className="text-[#25dc68] font-bold">Deposite </h3>
                <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
              </div>
            </div>
          </div>
        </div>

        {!isHidden && (
          <div className="w-[95%] m-auto">
            <div className=" h-[50px] bg-[#3a4142] rounded  ">
              <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                <div className="flex items-center gap-2 ">
                  <img
                    src={bc2}
                    alt=""
                    className="h-[24px] w-[24px] rounded "
                  />
                  <h1 className="text-white font-extrabold text-[16px] ">BC</h1>
                  <div className=" w-[16px] h-[16px]">
                    <BsExclamationSquare className="text-[#25dc68] " />
                  </div>
                </div>
                <div className="flex items-center gap-5 text ">
                  <h1 className="text-white font-bold">₹0.00</h1>
                  <h3 className="text-[#25dc68] font-bold">Deposite </h3>
                  <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
                </div>
              </div>
            </div>
            <div className=" h-[50px] bg-[#3a4142] rounded  ">
              <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                <div className="flex items-center gap-2 ">
                  <img
                    src={USTD}
                    alt=""
                    className="h-[24px] w-[24px] rounded "
                  />
                  <h1 className="text-white font-extrabold text-[16px] ">
                    USTD
                  </h1>
                </div>
                <div className="flex items-center gap-5 text ">
                  <h1 className="text-white font-bold">₹0.00</h1>
                  <h3 className="text-[#25dc68] font-bold">Deposite </h3>
                  <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
                </div>
              </div>
            </div>
            <div className=" h-[50px] bg-[#3a4142] rounded  ">
              <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                <div className="flex items-center gap-2 ">
                  <img
                    src={BTC}
                    alt=""
                    className="h-[24px] w-[24px] rounded "
                  />
                  <h1 className="text-white font-extrabold text-[16px] ">
                    BTC
                  </h1>
                </div>
                <div className="flex items-center gap-5 text ">
                  <h1 className="text-white font-bold">₹0.00</h1>
                  <h3 className="text-[#25dc68] font-bold">Deposite </h3>
                  <h2 className="text-[#25dc68] font-bold">Withdraw</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Balance;
