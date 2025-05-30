import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import india from "../../../public/Wallet_images/balance-img/flag.webp";

const TransferOut = () => {
  const [open, setOpen] = useState("");
  return (
    <div>
      <div className="mt-3 ">
        <div className=" ">
          <h1 className="mb-3  text-[#b3bec1] text-[14px] font-bold tracking-wider ">
            Amount
          </h1>
          <div className=" h-[50px] bg-[#292d2e] rounded-lg  ">
            <div className=" flex items-center justify-between px-2 ">
              <div className="flex items-center text ">
                <h1 className="text-white font-bold">0</h1>
              </div>

              <div
                onClick={() => setOpen((prev) => !prev)}
                className="relative cursor-pointer w-[150px] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between p-1 text-[16px] my-2 font-semibold"
              >
                <div className="flex items-center justify-start gap-2 text-white">
                  <img src={india} alt="" className="w-[30px] h-[20px]" />
                  INR
                </div>
                <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                  <button className="relative">
                    <IoChevronDownSharp className="text-white" />
                  </button>
                  {open && (
                    <div className="absolute lg:w-[450px] sm:w-[350px] h-[350px] bg-[#292d2e] top-[40px] right-[0px] rounded-xl z-20 ">
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

                      <div className="w-[95%] m-auto  h-[50px] hover:bg-[#3a4142] rounded-lg mt-3  ">
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
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between my-3">
          <div className="text-[#b3bec1] text-[14px] font-bold ">
            Available: 0
          </div>
          <div className="text-white font-bold tracking-wider"></div>
        </div>
        <div className="flex items-center justify-between ">
          <div className="text-[#b3bec1] text-[14px] font-bold ">
            Daily real-time return
          </div>
          <div className="text-white font-bold tracking-wider">0BCDAPR10%</div>
        </div>
      </div>

      <div className=" mt-4">
        <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
          <div className="w-[100%] p-2  rounded-lg mt-3  ">
            <h1 className="text-black font-bold text-center">
              Transfer to Valult Pro
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferOut;
