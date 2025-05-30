import eth from "../../../public/Wallet_images/Crypto-img/ETH.webp";
import btc from "../../../public/Wallet_images/Crypto-img/BTC (1).webp";
import doge from "../../../public/Wallet_images/Crypto-img/DOGE.webp";
import sol from "../../../public/Wallet_images/Crypto-img/SOL.webp";
import usdc from "../../../public/Wallet_images/Crypto-img/USDC.webp";
import usdt from "../../../public/Wallet_images/Crypto-img/USDT (1).webp";
import bcd from "../../../public/Wallet_images/Crypto-img/BCD.webp";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsExclamationSquare } from "react-icons/bs";
import bonus from "../../../public/Wallet_images/Crypto-img/bonus.webp";
import scanner from "../../../public/Wallet_images/Crypto-img/download.png";
import { FaCopy } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import Eth from "./Eth";
import Btc from "./Btc";
import Usdt from "./Usdt";
import Usdc from "./Usdc";
import Doge from "./Doge";
import Sol from "./Sol";
import More from "./More";
import d from "../../../public/Wallet_images/Crypto-img/d.png";

const Crypto = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, SetIsOpen] = useState("");
  const [tabActive, setTabActive] = useState("");

  return (
    <div>
      <div className="relative w-full [h-400px] bg-[#323738] lg:mt-3 sm:mt-3  pb-7 rounded-lg">
        <div className="lg:flex lg:items-center lg:justify-start lg:gap-3 lg:p-5 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:snap-x sm:overflow-x-auto sm:px-5 sm:gap-3 sm:pt-3">
          <div
            className={`flex items-center justify-start  text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "Eth" ? "border border-[#24ee89] " : ""
            }`}
          >
            <button
              onClick={() => setTabActive("Eth")}
              className="flex items-center gap-2"
            >
              <img src={eth} alt="" className="w-[20px] h-[20px] " />
              ETH
            </button>
          </div>

          <div
            className={`flex items-center justify-start gap-2 text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "Btc" ? "border border-[#24ee89]" : ""
            }`}
          >
            {" "}
            <button
              className="flex items-center gap-2"
              onClick={() => setTabActive("Btc")}
            >
              <img src={btc} alt="" className="w-[20px] h-[20px] " /> BTC
            </button>
          </div>

          <div
            className={`flex items-center justify-start gap-2 text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "Usdt" ? "border border-[#24ee89] " : ""
            }`}
          >
            <button
              className="flex items-center gap-2"
              onClick={() => setTabActive("Usdt")}
            >
              <img src={doge} alt="" className="w-[20px] h-[20px] " /> USDT
            </button>
          </div>

          <div
            className={`flex items-center justify-start gap-2 text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "Usdc" ? "border border-[#24ee89]" : ""
            }`}
          >
            {" "}
            <button
              className="flex items-center gap-2"
              onClick={() => setTabActive("Usdc")}
            >
              <img src={sol} alt="" className="w-[20px] h-[20px] " /> USDC
            </button>
          </div>

          <div
            className={`flex items-center justify-start gap-2 text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "Doge" ? "border border-[#24ee89] " : ""
            }`}
          >
            <button
              className="flex items-center gap-2"
              onClick={() => setTabActive("Doge")}
            >
              <img src={usdc} alt="" className="w-[20px] h-[20px] " /> DOGE
            </button>
          </div>

          <div
            className={`flex items-center justify-start gap-2 text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full  ${
              tabActive === "Sol" ? "border border-[#24ee89]" : " "
            }`}
          >
            <button
              className="flex items-center gap-2"
              onClick={() => setTabActive("Sol")}
            >
              <img src={usdt} alt="" className="w-[20px] h-[20px] " /> SOL
            </button>
          </div>

          <div
            className={`flex items-center justify-start text-gray-400 font-semibold w-[90px] h-[30px] bg-[#3a4142] p-3 rounded-full ${
              tabActive === "More" ? "" : ""
            }`}
          >
            {" "}
            <button
              className="flex items-center gap-2"
              onClick={() => setOpen("More")}
            >
              <img src={d} alt="" className="w-[20px] h-[20px] " />
              MORE
            </button>
          </div>
        </div>
        {tabActive === "Eth" && <Eth />}
        {tabActive === "Btc" && <Btc />}
        {tabActive === "Usdt" && <Usdt />}
        {tabActive === "Usdc" && <Usdc />}
        {tabActive === "Doge" && <Doge />}
        {tabActive === "Sol" && <Sol />}
        {open === "More" && <More />}
        {tabActive === "" && (
          <div>
            <div className="pl-5 text-[14px] text-[#bcb3c1] font-semibold sm:mt-4 lg:mt-0 ">
              <h3>
                Didn’t see your currency?
                <a href="#" className="text-[#24e987] ">
                  Add here
                </a>
              </h3>
            </div>

            <div className="flex items center px-5 text-[14px] text-[#bcb3c1] font-semibold tracking-wider mt-5 gap-6 ">
              <div  onClick={() => setOpen((prev) => !prev)} className="w-[50%]  ">
                <h3>Deposit Curency</h3>
                <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                  <div className="flex items-center justify-start gap-2 text-white">
                    <img src={bcd} alt="" className="w-[20px] h-[20px] " />
                    BCD
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                    <button
                      className="relative"
                     
                    >
                      <IoChevronDownSharp />
                    </button>
                    {open && (
                      <div className="absolute lg:w-[515px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[180px] sm:bottom-0 sm:left-4  lg:left-[20px]  rounded-xl ">
                        <form className="max-w-[100%] mx-auto mt-3">
                          <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                            </div>
                            <input
                              type="search"
                              className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                              placeholder="Search "
                            />
                          </div>
                        </form>
                        <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                            <div className="flex items-center gap-2 ">
                              <img
                                src="/public/balance-img/BCD.webp"
                                alt=""
                                className="h-[24px] w-[24px] rounded "
                              />
                              <h1 className="text-white font-extrabold text-[16px] ">
                                BCD
                              </h1>
                              <div className=" w-[16px] h-[16px]">
                                <BsExclamationSquare className="text-[#25dc68] " />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div   onClick={() => SetIsOpen((prev) => !prev)} className="w-[50%]  ">
                <h3>Choose Network</h3>
                <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                  <div className="flex items-center justify-start gap-2 text-white">
                    ERC20
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                    <button
                      className="relative"
                    
                    >
                      <IoChevronDownSharp />
                    </button>
                    {isOpen && (
                      <div className="absolute lg:w-[515px] lg:h-[350px] bg-[#292d2e] lg:top-[180px] lg:left-[555px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                        <form className="max-w-[100%] mx-auto mt-3"></form>
                        <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                            <h1 className="text-white font-extrabold text-[16px] ">
                              ERC20
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                          </div>
                        </div>
                        <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                            <h1 className="text-white font-extrabold text-[16px] ">
                              ERC20
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full border-[#292d2e] border-[3px] cursor-pointer hover:border-[#24ee89] hover:border-[5px] "></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#514634] mx-5 rounded-lg">
              <div className="w-[100%]  h-[50px]  rounded-lg mt-3  ">
                <div className=" flex items-center px-3 gap-5 pt-1 ">
                  <div className="mt-">
                    <img src={bonus} alt="" />
                  </div>
                  <div className="text-white font-bold">
                    Get extra <span className="text-[#fe9820] "> 180%</span>{" "}
                    bonus on minimum of{" "}
                    <span className="text-[#fe9820] "> 10 BCD</span> deposit
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] lg:flex lg:items-start lg:justify-start  my-5 px-5">
              <div className="w-[20%] items-center  ">
                <img src={scanner} alt="" className="rounded-lg lg:w-[150px] lg:h-[150px] " />
              </div>
              <div className="w-[100%] ">
                <h1 className="text-[#b3bec1] font-medium ">Deposit address</h1>
                <div className="bg-[#292d2e] p-2 my-3 rounded-lg  ">
                  <div className="text-white font-bold ml-3">
                    0x8A158 <span className="text-[#24ee89] ">7697</span>{" "}
                    98daE6866Afa3 <span className="text-[#24ee89]">a9A9</span>{" "}
                    d105B525A9675e
                  </div>
                </div>
                <div className="bg-[#4a5354] text-white font-bold flex items-center justify-center gap-2 p-2 rounded-lg">
                  <FaCopy />
                  Copy Address
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#314940] mx-5 rounded-lg">
                <div className="w-[100%] p-3  rounded-lg mt-3  ">
                  <div className=" flex items-center justify-start gap-5  ">
                    <IoIosAlert className="text-[#24ee89] text-[30px] " />
                    <div className="text-white font-bold">
                      Send only BCD to this deposit address. Transfers below 1
                      BCD will not be credited.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crypto;
