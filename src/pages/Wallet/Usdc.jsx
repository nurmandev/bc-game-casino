import bcd from "../../../public/Wallet_images/Crypto-img/BCD.webp";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsExclamationSquare } from "react-icons/bs";
import bonus from "../../../public/Wallet_images/Crypto-img/bonus.webp";
import scanner from "../../../public/Wallet_images/Crypto-img/download.png";
import { FaCopy } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";

const Usdc = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, SetIsOpen] = useState("");
  return (
    <div>
      <div className="w-full [h-400px] bg-[#323738] pb-7 rounded-lg">
        <div className="pl-5 text-[14px] text-[#bcb3c1] font-semibold pt-5 ">
          <h3>
            Didn’t see your currency?
            <a href="#" className="text-[#24e987] ">
              Add here
            </a>
          </h3>
        </div>

        <div className="flex items center px-5 text-[14px] text-[#bcb3c1] font-semibold tracking-wider mt-5 gap-6 ">
          <div className="w-[50%]  ">
            <h3>Deposit Curency</h3>
            <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-3 font-semibold  ">
              <div className="flex items-center justify-start gap-2 text-white">
                <img src={bcd} alt="" className="w-[20px] h-[20px] " />
                BCD
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                <button
                  className="relative"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <IoChevronDownSharp />
                </button>
                {open && (
                  <div className="absolute w-[515px] h-[350px] bg-[#292d2e] top-[325px] left-[390px] rounded-xl ">
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
          <div className="w-[50%]  ">
            <h3>Choose Network</h3>
            <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-3 font-semibold  ">
              <div className="flex items-center justify-start gap-2 text-white">
                ERC20
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                <button
                  className="relative"
                  onClick={() => SetIsOpen((prev) => !prev)}
                >
                  <IoChevronDownSharp />
                </button>
                {isOpen && (
                  <div className="absolute w-[515px] h-[350px] bg-[#292d2e] top-[325px] left-[925px] rounded-xl ">
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
                Get extra <span className="text-[#fe9820] "> 180%</span> bonus
                on minimum of <span className="text-[#fe9820] "> 10 BCD</span>{" "}
                deposit
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] flex items-start justify-start  my-5 px-5">
          <div className="w-[20%]  ">
            <img src={scanner} alt="" className="rounded-lg " />
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
                  Send only BCD to this deposit address. Transfers below 1 BCD
                  will not be credited.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usdc;
