import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import india from "../../../public/Wallet_images/balance-img/flag.webp";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Flate1 from "./Flate1";

const Flate = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const upiData = [
    {
      title: "Recommend",
      comp: <Flate1 />,
    },
    {
      title: "UPI",
      comp: <Flate1 />,
    },
    {
      title: "QR",
      comp: <Flate1 />,
    },
    {
      title: "E-wallet",
      comp: <Flate1 />,
    },
  ];

  return (
    <div>
      <div className="bg-[#323738] mt-2 rounded-lg lg:px-10 sm:px-2 pb-8">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#b3bec1]">Deposit Currency</h3>
          <div  onClick={() => setOpen((prev) => !prev)} className="relative cursor-pointer w-[250px] bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 text-[16px] my-3 font-semibold">
            <div className="flex items-center justify-start gap-2 text-white">
              <img src={india} alt="" className="w-[30px] h-[20px]" />
              INR
            </div>
            <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
              <button
                className="relative"
               
              >
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

                  <div className="w-[95%] m-auto h-[50px] bg-[#3a4142] rounded-lg mt-3">
                    <div className="flex items-center justify-between gap-5 px-5 m-auto py-3">
                      <div className="flex items-center gap-2 ">
                        <img src={india} alt="" className="w-[30px] h-[20px]" />
                        <h1 className="text-white font-extrabold text-[16px]">
                          INR - INDIAN RUPEE
                        </h1>
                        <div className="w-[16px] h-[16px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* depositMethod */}
        <div className="mt-5">
          <h3 className="font-semibold text-[#b3bec1]">Deposit Currency</h3>
          <div className="bg-[#292d2e] h-auto rounded-xl mt-2">
            <div className="content">
              {upiData.map((item, index) => (
                <div key={index} onClick={() => toggleDropdown(index)} className="">
                  <div className="flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-1 font-semibold">
                    <div className="flex items-center justify-start gap-2 font-semibold text-[#b3bec1]">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-center rounded">
                      <button
                        className="relative"
                        
                      >
                        {openDropdown === index ? (
                          <FaChevronDown className="text-white" />
                        ) : (
                          <FaChevronRight className="text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                  <hr className="border border-[#414141]" />
                  {openDropdown === index && (
                    <div className="p-3">{item.comp}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flate;
