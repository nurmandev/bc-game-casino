import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import vcoin from "../../../public/Wallet_images/balance-img/v-coin.webp";
import { BsExclamationSquare } from "react-icons/bs";
import { CiBitcoin } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import Valuitpro1 from "./Valuitpro1";


const VaultPro = () => {
  const [openDropdown, setOpenDropdown] = useState(null);


  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const upiData = [
    {
      title:
        "How is the deposit and withdrawal of funds in Vault Pro protected?",
      subtitle:
        "Funds deposited and withdrawn in Vault Pro are protected by 2FA (Two-Factor Authentication) and can be accessed by the depositor at any time.",
    },
    {
      title: "When is the daily interest calculated, and how is it determined?",
      subtitle:
        "The daily interest is calculated every day on the amount that remains not withdrawn from 00:00 to 23:59 (UTC+0). The interest is calculated at 02:00 (UTC+0), precisely 24 hours after the fund is deposited.",
    },
    {
      title: "Can I trust that my funds in Vault Pro are safe?",
      subtitle:
        "Absolutely! BC.CO ensures that the funds (cryptos) in Vault Pro are safeguarded and will not be accessed by anyone other than the depositor. Your funds are entirely yours, and they will always remain secure for your use.",
    },
  ];
  return (
    <div>
      <div className="w-full lg:flex lg:items-start lg:justify-start gap-5">
        <div className="lg:w-[50%]  bg-[#323738] rounded-2xl py-5 ">
          <div className="flex items-center justify-between lg:px-7 sm:px-2 ">
            <div className="sm:hidden md:block ">
              <div className="w-[130px] bg-[#323738] h-[35px]"></div>
            </div>
            <div className="flex items-center justify-between gap-2 ">
              <div className="w-[130px] bg-[#464f50] h-[35px] text-[#b3bec1] font-bold flex items-center justify-center  gap-2 rounded-lg ">
                <CiBitcoin className="text-[#b3bec1] " /> Interests
              </div>
              <div className="w-[130px] bg-[#464f50] h-[35px] text-[#b3bec1] font-bold flex items-center justify-center gap-2  rounded-lg ">
                <CiClock2 className="text-[#b3bec1] " /> History
              </div>
              <div className="w-[35px] h-[35px] bg-[#4a5354] text-[#b3bec1] rounded font-bold flex items-center justify-center  ">
                <BsExclamationSquare className="" />
              </div>
            </div>
          </div>
          <div className="lg:px-7 sm:px-2 sm:mt-5 text-white ">
            <h2 className="text-[16px] font-semibold text-white ">
              Total Value
            </h2>
            <h1 className="text-[30px] font-semibold ">₹0.00</h1>
          </div>

          <div className="flex items-center justify-between mt-7">
            <div className="lg:px-7 sm:px-2 text-white ">
              <h2 className="text-[16px] font-semibold text-[#b3bec1] ">
                Last Day Return
              </h2>
              <h1 className="text-[30px] font-semibold ">₹0.00</h1>
            </div>
            <div className="px-7 text-white ">
              <h2 className="text-[16px] font-semibold text-[#b3bec1] ">
                Total Return
              </h2>
              <h1 className="text-[30px] font-semibold ">₹0.00</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]  bg-[#323738] rounded-2xl py-5 lg:px-7 sm:px-2 lg:mt-0 sm:mt-4 ">
          <Valuitpro1/>
        </div>
      </div>

      <div className="bg-[#323738] py-5 lg:px-7 sm:px-2 rounded-2xl mt-6  ">
        <div className="flex flex-col items-center justify-center">
          <img src={vcoin} alt="" className="my-2" />
          <h1 className="font-extrabold text-white text-[22px] ">
            No Asset yet
          </h1>
          <h3 className="font-extrabold text-[#9aa3a6]">
            Start earning by transferring assets to Vault Pro
          </h3>
        </div>
      </div>

      {/* depositMethod */}
      <div className="bg-[#323738] py-5 lg:px-7 sm:px-2 rounded-2xl mt-6 ">
        <h3 className="font-extrabold text-white">
          Frequently Asked Questions
        </h3>
        <div className=" h-auto rounded-xl mt-2">
          <div className="content">
            {upiData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-1 font-semibold py-2">
                  <div className="flex items-center justify-start gap-2 font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-center rounded w-[30px] h-[30px] bg-[#464f50] ">
                    <button
                      className="relative"
                      onClick={() => toggleDropdown(index)}
                    >
                      {openDropdown === index ? (
                        <FaChevronDown className="text-white" />
                      ) : (
                        <FaChevronRight className="text-white" />
                      )}
                    </button>
                  </div>
                </div>
                {openDropdown === index && (
                  <div className="pl-3 text-[#9aa3a6]  ">{item.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultPro;
