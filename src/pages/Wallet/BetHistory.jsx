import crocodile from "../../../public/Wallet_images/flate-img/empty.webp";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const BetHistory = () => {
 const [isOpen, SetIsOpen] = useState("");
  const [isOpen1,SetIsOpen1] = useState("");
  const [isOpen2,SetIsOpen2] = useState("");
  return (
    <div>
      <div className="bg-[#323738] lg:px-10 sm:px-2 py-7  rounded-2xl ">
        <div className="flex items-center justify-between mb-7">
          <div onClick={() => SetIsOpen((prev) => !prev)} className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
            <div className="flex items-center justify-start gap-2 text-white">
              All
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
              <button
                className="relative"
                
                
              >
                <IoChevronDownSharp className="text-white"/>
              </button>
              {isOpen && (
                <div className="absolute w-[310px] h-[350px] bg-[#292d2e] top-[155px] left-[405px] rounded-xl ">
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

          <div  onClick={() => SetIsOpen1((prev) => !prev)} className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
            <div className="flex items-center justify-start gap-2 text-white whitespace-nowrap">
              All Assets
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
              <button
                className="relative"
               
              >
                <IoChevronDownSharp className="text-white" />
              </button>
              {isOpen1 && (
                <div className="absolute w-[310px] h-[350px] bg-[#292d2e] top-[155px] left-[750px] rounded-xl ">
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

          <div onClick={() => SetIsOpen2((prev) => !prev)}  className="w-[30%] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
            <div className="flex items-center justify-start gap-2 text-white whitespace-nowrap">
              Pay 24 Hours
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
              <button
                className="relative"
                
              >
                <IoChevronDownSharp className="text-white" />
              </button>
              {isOpen2 && (
                <div className="absolute w-[310px] h-[350px] bg-[#292d2e] top-[155px] left-[1095px] rounded-xl ">
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

        <nav className="bg-[#292d2e]  text-white py-4 px-6 rounded-lg ">
          <ul className="flex space-x-4  justify-between items-center font-bold">
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Type
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Time
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Payout
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Profit
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center justify-center mt-5 py-12 ">
          <img src={crocodile} alt="No data" className="mb-4 w-60 h-60" />
          <p className="text-white text-lg">Oops! There is no data yet!</p>
        </div>
      </div>
    </div>
  );
}

export default BetHistory
