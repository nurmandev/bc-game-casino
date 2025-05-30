import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsExclamationSquare } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import TransationDetails from "./TransationDetails";
import india from "../../../public/Wallet_images/balance-img/flag.webp";

const Transaction = () => {
  const [isOpen, SetIsOpen] = useState("");
  const [isOpen1, SetIsOpen1] = useState("");
  const [isOpen2, SetIsOpen2] = useState("");
  const [isOpen3, SetIsOpen3] = useState("");
  const [isOpen4, SetIsopen4] = useState("");
  const [isopen5, SetIsOpen5] = useState("");

  const Data = [
    {
      paragraph:
        "- For any issues or disputes arising out of any fiat transactions on Our Site, you must formally report and submit such issues or disputes to BC.CO within 30 calendar days from the date of the transaction(s) in question.",
    },
    {
      paragraph:
        "- For any issues or disputes received by BC.CO exceeding 30 calendar days from the date of such transaction(s), We will not accept them for resolution and such transaction(s) are ineligible for us to resolve.",
    },
    {
      paragraph:
        "- Any attempts to circumvent this rule by raising your issue or dispute in relation to the fiat transaction(s) beyond the 30 calendar days period on a public complaint forum of any website, whether online or otherwise, will not change this.",
    },
    {
      paragraph:
        "- BC.CO will not be able to assist any issues or disputes submitted beyond the stipulated timeframe. There are no exceptions to this rule.",
    },
  ];

  return (
    <div className="relative">
      <div>
        <div className="bg-[#323738] lg:px-10 sm:px-2 py-7  rounded-2xl ">
          <div className="lg:flex lg:items-center lg:justify-between sm:flex sm:flex-wrap sm:items-center sm:justify-between">
            <div
              onClick={() => SetIsOpen((prev) => !prev)}
              className=" w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  "
            >
              <div className="flex items-center justify-start gap-2 text-white">
                Deposite
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                <button className="relative">
                  <IoChevronDownSharp className="text-white" />
                </button>
                {isOpen && (
                  <div className="absolute lg:w-[310px] sm:w-[370px] h-[350px] bg-[#292d2e] lg:top-[80px] lg:left-[35px] sm:top-[140px] sm:left-[10px] rounded-xl z-20 ">
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

            <div
              onClick={() => SetIsOpen1((prev) => !prev)}
              className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  "
            >
              <div className="flex items-center justify-start gap-2 text-white whitespace-nowrap">
                All Assets
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                <button className="relative">
                  <IoChevronDownSharp className="text-white" />
                </button>
                {isOpen1 && (
                  <div className="absolute lg:w-[310px] sm:w-[370px] h-[350px] bg-[#292d2e] lg:top-[80px]  sm:top-[140px] lg:left-[380px] sm:left-[10px] rounded-xl z-20 ">
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

            <div
              onClick={() => SetIsOpen2((prev) => !prev)}
              className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  "
            >
              <div className="flex items-center justify-start gap-2 text-white whitespace-nowrap">
                Past 60 Days
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                <button className="relative">
                  <IoChevronDownSharp className="text-white" />
                </button>
                {isOpen2 && (
                  <div className="absolute lg:w-[310px] sm:w-[370px] h-[350px] bg-[#292d2e] lg:top-[80px] lg:left-[720px]  sm:top-[140px] sm:left-[10px] rounded-xl ">
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
          
          <div
            onClick={() => SetIsOpen3((prev) => !prev)}
            className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] font-semibold "
          >
            <div className="flex items-center justify-start gap-2 text-white whitespace-nowrap">
              All Status
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
              <button className="relative">
                <IoChevronDownSharp className="text-white" />
              </button>
              {isOpen3 && (
                <div className="absolute lg:w-[310px] sm:w-[370px] h-[350px] bg-[#292d2e] lg:top-[128px] lg:left-[35px] sm:top-[140px] sm:left-[10px] rounded-xl ">
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

          <div className=" flex items-center justify-between gap-5 my-3  m-auto py-3">
            <div className="flex items-center gap-2 ">
              <div className=" w-[16px] h-[16px]">
                <BsExclamationSquare className="text-[#a4bac0] " />
              </div>
              <div>
                <button
                  onClick={() => SetIsopen4((prev) => !prev)}
                  className="text-[#a4bac0] font-medium text-[16px] underline cursor-pointer "
                >
                  Fiat Deposit issues or Disputes
                </button>
                {isOpen4 && (
                  <div className="absolute top-0 left-36 w-[500px] h-[600px] bg-black  ">
                    <div
                      className="w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-full h-[70px] bg-[#323738] rounded-t-3xl flex items-center justify-center ">
                        <h1 className="text-white font-bold">
                          Fiat deposit issues or disputes
                        </h1>
                        <button
                          className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg "
                          onClick={() => SetIsopen4(false)}
                        >
                          <IoMdClose className="text-[#a4aeb1]" />
                        </button>
                      </div>

                      <div className="p-4 snap-y overflow-y-auto h-[500px] scroll-smooth">
                        <div className="snap-normal">
                          {Data.map((items, index) => (
                            <div key={index} className="text-[#b0bbbe]">
                              <p className="my-3 px-5 text-left font-bold">
                                {" "}
                                {items.paragraph}{" "}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <nav className="bg-[#292d2e]  text-white py-4 px-6 rounded-lg ">
            <ul className="flex space-x-4  justify-between items-center font-bold">
              <li>
                <a href="#">Type</a>
              </li>
              <li>
                <a href="#" className="whitespace-nowrap">Payment Method</a>
              </li>
              <li>
                <a href="#">Amount</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </nav>

          <nav className="hover:bg-[#767878]  text-white py-4 px-6 rounded-lg mt-3 ">
            <ul className="flex space-x-4  justify-between items-center font-bold">
              <li>
                <a href="#">Deposit</a>
              </li>
              <li>
                <a href="#">PayIn</a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <a href="#" className="text-[#24ec85] whitespace-nowrap ">
                  +₹5,000.00
                </a>
                <img src={india} alt="" className="w-8 h-5 sm:hidden md:block" />
              </li>
              <li>
                <div
                  onClick={() => SetIsOpen5((prev) => !prev)}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#ff9820]"></div>
                  <a href="#">Processing</a>
                  <FaAngleRight />
                </div>
                {isopen5 && (
                  <div className="absolute top-0 left-36 lg:w-[500px] h-[600px] bg-black ">
                    <div
                      className="lg:w-[500px] sm:w-[400px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="w-full h-[70px] bg-[#323738] rounded-t-3xl flex items-center justify-start gap-36   ">
                        <div
                          onClick={() => SetIsOpen5(false)}
                          className="w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg ml-3"
                        >
                          <FaChevronLeft className="text-[#a4aeb1] " />
                        </div>
                        <h1>Transaction Details</h1>
                      </div>
                      <div className="p-4 snap-y overflow-y-auto h-[500px] scroll-smooth">
                        <div className="snap-normal">
                          <TransationDetails />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <div className="mt-6">
            <hr className="border-[o.1px] border-[#414141]"/>
            <h1 className="py-3 text-white text-center font-semibold">Submit your UTR/Reference no. to verify your depositVerify</h1>
            <hr className="border-[o.1px] border-[#414141]"/>
          </div>

          <h1 className="text-center mt-6 font-bold text-white">No More</h1>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
