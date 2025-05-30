import { IoChevronDownSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import india from "../../../public/Wallet_images/balance-img/flag.webp";
import { useState } from "react";
import { BsExclamationSquare } from "react-icons/bs";
import { LuNotebookTabs } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";

const Withdraw = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, SetIsOpen] = useState("");
  const [is1Open, set1Open] = useState("");
  return (
    <div className="">
      <div className="bg-[#323738] rounded-xl py-6 ">
        <div className="lg:px-10 sm:px-2">
          <h3 className="font-semibold text-[#b3bec1]">Deposit Currency</h3>
          <div  onClick={() => setOpen((prev) => !prev)} className="relative cursor-pointer w-full bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 text-[16px] my-3 font-semibold">
            <div className="flex items-center justify-start gap-2 text-white">
              <img
                src="/public/balance-img/BCD.webp"
                alt=""
                className="h-[24px] w-[24px] rounded"
              />
              INR
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
              <button
                className="relative"
               
              >
                <IoChevronDownSharp className="text-white" />
              </button>
              {open && (
                <div className="absolute w-full h-[350px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                  <form className="max-w-[100%] mx-auto mt-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IoSearch className="text-[#b3bec1] text-[20px] ml-7" />
                      </div>
                      <input
                        type="search"
                        className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium bg-[#292d2e] hover:border-[#24ee89] text-white"
                        placeholder="Search"
                      />
                    </div>
                  </form>

                  <div className="w-[95%] m-auto h-[50px] bg-[#3a4142] rounded-lg mt-3">
                    <div className=" px-5 m-auto py-3">
                      <div className="flex items-center justify-between gap-2 ">
                        <div className="flex items-center gap-2">
                          <img
                            src={india}
                            alt=""
                            className="w-[30px] h-[20px]"
                          />
                          <h1 className="text-white font-extrabold text-[16px]">
                            INR
                          </h1>
                        </div>
                        <div className="w-[16px] h-[16px] text-white font-extrabold pr-10">
                          ₹0.00
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[95%] m-auto mt-5 ">
                    <h1 className="mb-3 text-[#b3bec1] text-[14px] font-bold tracking-wider ">
                      Crypto currency
                    </h1>
                    <div className=" h-[50px] bg-[#3a4142] rounded-lg  ">
                      <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                        <div className="flex items-center gap-2 ">
                          <img
                            src="/public/balance-img/BCD.webp"
                            alt=""
                            className="h-[24px] w-[24px] rounded "
                          />
                          <h1 className="text-white font-semibold text-[16px] ">
                            BCD
                          </h1>
                          <div className=" w-[16px] h-[16px]">
                            <BsExclamationSquare className="text-[#25dc68] " />
                          </div>
                        </div>
                        <div className="flex items-center gap-5 text ">
                          <h1 className="text-white font-bold">₹0.00</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2">
          <h3 className="font-semibold text-[#b3bec1]">Choose Network</h3>
          <div  onClick={() => SetIsOpen((prev) => !prev)} className="relative cursor-pointer w-full bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 text-[16px] my-3 font-semibold">
            <div className="flex items-center justify-start gap-2 text-white">
              Segwit
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
              <button
                className="relative"
               
              >
                <IoChevronDownSharp className="text-white" />
              </button>
              {isOpen && (
                <div className="absolute w-full h-[350px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
                  <div className="w-[95%] m-auto  h-[40px] bg-[#3a4142] rounded mt-3  ">
                    <div className=" flex items-center justify-between gap-5 px-5 m-auto py-2">
                      <h1 className="text-white font-semibold text-[16px] ">
                        ERC20
                      </h1>
                      <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                    </div>
                  </div>
                  <div className="w-[95%] m-auto  h-[40px] bg-[#3a4142] rounded mt-3  ">
                    <div className=" flex items-center justify-between gap-5 px-5 m-auto py-2">
                      <h1 className="text-white font-semibold text-[16px] ">
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

        <div className="lg:px-10 sm:px-2">
          <h3 className="font-semibold text-[#b3bec1]">Withdrawal Address</h3>
          <div className="relative cursor-pointer w-full bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 text-[16px] my-3 font-semibold">
            <div className="flex items-center justify-start gap-2 text-[#939faf]">
              Fill in carefully according to the specific currency
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
              <button
                className="relative"
                onClick={() => set1Open((prev) => !prev)}
              >
                <LuNotebookTabs className=" text-[#939faf] " />
              </button>
              {is1Open && (
                <div className="absolute w-full h-[150px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl  z-20 ">
                  <div className="flex items-start justify-between my-3 px-3">
                    <div className="flex items-center justify-center gap-2 w-[10%] h-[40px] bg-[#3a4142] rounded mt-3 text-white font-semibold text-[16px]  ">
                      <IoSettings /> Manage
                    </div>
                    <div className="flex items-center justify-center gap-2 w-[10%] h-[40px] bg-[#3a4142] rounded mt-3 text-white font-semibold text-[16px] ">
                      <IoMdAdd /> Add
                    </div>
                  </div>
                  <h1 className="text-[#939faf] font-bold text-center mt-7 ">
                    No record yet
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#b3bec1]">Withdraw amount</h3>
            <h2 className="font-semibold text-[#b3bec1]">
              Min: <span className="text-red-600">206.4639 BCD</span>
            </h2>
          </div>
          <div className="relative cursor-pointer w-full bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 text-[16px] my-3 font-semibold">
            <div className="flex items-center justify-start gap-2 text-white">
              0
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#b3b9bc] font-bold flex items-center justify-center rounded-xl ">
              Min
            </div>
            <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#b3b9bc] font-bold flex items-center justify-center rounded-xl ">
              25%
            </div>
            <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#b3b9bc] font-bold flex items-center justify-center rounded-xl ">
              50%
            </div>
            <div className="w-[240px] bg-[#4a5354] h-[35px] text-[#b3b9bc] font-bold flex items-center justify-center rounded-xl ">
              Max
            </div>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2 mt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#b3bec1]">
              Available: <span className="text-white">0</span>
            </h3>
            <h2 className="font-semibold text-[#b3bec1] underline">
              Locked funds: <span className="text-white">0</span>
            </h2>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2">
          <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
            <div className="w-[100%] p-2  rounded-lg mt-3  ">
              <h1 className="text-black font-bold text-center">Preview</h1>
            </div>
          </div>
        </div>

        <div className="lg:px-10 sm:px-2">
          <div className="bg-[#314940] rounded-lg">
            <div className="w-[100%] p-2  rounded-lg mt-3  ">
              <div className=" flex items-center justify-start gap-5  ">
                <IoIosAlert className="text-[#24ee89] text-[30px] " />
                <div className="text-white font-bold">
                  Withdrawals can only be made to either the Cwalletor a
                  decentralized wallet to prevent potential asset loss.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
