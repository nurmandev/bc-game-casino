import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Usdt from "../../../public/Wallet_images/Crypto-img/USDT (1).webp";
import swipe from "../../../public/Wallet_images/balance-img/swipe.png";
import bcd from "../../../public/Wallet_images/Crypto-img/BCD.webp";

const Swap = () => {
  const [open, setOpen] = useState("");
  const [open1, setOpen2] = useState("");
  return (
    <div>
      <div className="bg-[#3a4142] rounded-2xl py-7 ">
        <div className="w-full px-10 ">
          <h1 className="mb-3  text-[#b3bec1] text-[14px] font-bold tracking-wider ">
            From
          </h1>
          <div className=" h-[50px]  rounded-lg  ">
            <div className=" flex items-center justify-between px-2 ">
              <div className="flex flex-col items-center ">
                <h1 className="text-white text-[25px] font-semibold">0</h1>
                <h2 className="text-[#aab4b7] text-[16px] font-semibold">
                  ≈₹0.00
                </h2>
              </div>

              <div  onClick={() => setOpen((prev) => !prev)} className="relative cursor-pointer w-[200px] bg-[#383f40] border border-[#656565] rounded-md flex items-center justify-between p-1 text-[16px] my-2 font-semibold">
                <div  className="flex items-center justify-start gap-2 text-white">
                  <img src={Usdt} alt="" className="w-[20px] h-[20px]" />
                  USDT
                </div>
                <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                  <button
                    className="relative"
                   
                  >
                    <IoChevronDownSharp className="text-white" />
                  </button>
                  {open && (
                    <div className="absolute w-[300px] h-[450px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                      <form className="max-w-[100%] mx-auto mt-3">
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearch className="text-[#b3bec1] text-[20px] ml-3" />
                          </div>
                          <input
                            type="search"
                            className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium bg-[#292d2e] hover:border-[#24ee89] text-white"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-10 mt-7 flex items-center justify-start gap-5">
          <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#ffffff] font-bold flex items-center justify-center rounded-xl ">
            25%
          </div>
          <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#ffffff] font-bold flex items-center justify-center rounded-xl ">
            50%
          </div>
          <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#ffffff] font-bold flex items-center justify-center rounded-xl ">
            75%
          </div>
          <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#ffffff] font-bold flex items-center justify-center rounded-xl ">
            100%
          </div>
        </div>

        <div className="hr-line relative">
          <hr className="border border-[#232626] mt-7 " />
          <div className=" absolute w-[35px] h-[35px] -top-4 lg:left-[530px]  bg-[#3a4142] border border-[#616161] flex items-center justify-center rounded">
            <img src={swipe} alt="" />
          </div>
        </div>

        <div className="w-full px-10 mt-7 ">
          <h1 className="mb-3  text-[#b3bec1] text-[14px] font-bold tracking-wider ">
            To
          </h1>
          <div className=" h-[50px]  rounded-lg  ">
            <div className=" flex items-center justify-between px-2 ">
              <div className="">
                <h1 className="text-white text-[25px] font-semibold">0</h1>
              </div>

              <div onClick={() => setOpen2((prev) => !prev)} className="relative cursor-pointer w-[200px] bg-[#383f40] border border-[#656565] rounded-md flex items-center justify-between p-1 text-[16px] my-2 font-semibold">
                <div className="flex items-center justify-start gap-2 text-white">
                  <img
                    src={bcd}
                    alt=""
                    className="h-[24px] w-[24px] rounded "
                  />
                  BCD
                </div>
                <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                  <button
                    className="relative"
                    
                  >
                    <IoChevronDownSharp className="text-white" />
                  </button>
                  {open1 && (
                    <div className="absolute w-[300px] h-[450px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                      <form className="max-w-[100%] mx-auto mt-3">
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearch className="text-[#b3bec1] text-[20px] ml-3" />
                          </div>
                          <input
                            type="search"
                            className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium bg-[#292d2e] hover:border-[#24ee89] text-white"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-10 mt-7  ">
          <div className="w-full bg-[#4a5354] h-[35px] text-[#ffffff] font-bold  rounded flex items-center justify-between px-2 ">
            <div className="text-[#b3bec1] ">
              Deposit Balance:{" "}
              <span className="text-white font-semibold"> 0 </span>
            </div>
            <div className="text-[#b3bec1] ">
              Bonus Balance:{" "}
              <span className="text-white font-semibold"> 0 </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3a4142] rounded-2xl py-5 mt-5 ">
        <div>
          <div className="flex items-center justify-between lg:px-10 sm:px-2">
            <div className="text-[#b3bec1] text-[14px] font-bold ">Rate</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <div className=" w-3 h-3 border-2 border-[#33ed86] border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="text-white font-bold tracking-wider">
                1 USDT ≈ 1 BCD
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between lg:px-10 sm:px-2 my-3">
            <div className="text-[#b3bec1] text-[14px] font-bold ">
              Estimated Time
            </div>
            <div className="text-white font-bold tracking-wider">
              30 Seconds
            </div>
          </div>
          <div className="flex items-center justify-between lg:px-10 sm:px-2">
            <div className="text-[#b3bec1] text-[14px] font-bold ">
              Swap fee
            </div>
            <div className="text-white font-bold tracking-wider">0 USDT</div>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2 mt-4">
          <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
            <div className="w-[100%] p-2  rounded-lg mt-3  ">
              <h1 className="text-black font-bold text-center">Swap Now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
