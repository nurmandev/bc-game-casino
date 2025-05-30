import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import WinnerList from "./WinnerList";

const Result = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const mapdata = [
    { number: "20250106120000" },
    { number: "202501034520000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
  ];

  return (
    <div>
      <div className="w-full h-auto bg-[#323738] mt-3 mb-5 rounded-xl pb-10 pt-5 ">
        <div className="w-[97%] m-auto relative flex items-center justify-between">
          <div className="flex items-center justify-start gap-3 text-white mt-5">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#292d2e]">
              <FaChevronLeft />
            </div>
            <div className="w-48 h-10 flex items-center justify-center rounded-lg bg-[#292d2e] gap-3 relative">
              20250106120000{" "}
              <button
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3a4142]"
                onClick={toggleDropdown}
              >
                <FaChevronDown />
              </button>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className=" absolute top-12 left-0 bg-[#3a4142] text-white rounded-lg shadow-lg lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[350px] sm:w-[250px]  overflow-y-auto">
                  <ul className="flex flex-col snap-y scroll-smooth p-2">
                    {mapdata.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between px-4 py-2 hover:bg-[#292d2e] rounded-xl cursor-pointer"
                      >
                        <span>{item.number}</span>
                        <div className="w-5 h-5 rounded-full border-[4px] border-slate-400"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#292d2e]">
              <FaChevronRight />
            </div>
          </div>
          <p className="text-[#afbbc0] font-semibold text-[16px] sm:hidden md:block  ">
            Draw time:1/27/2025, 5:30:00 PM
          </p>
          <p className="text-[#afbbc0] font-semibold text-[16px] sm:hidden md:block   ">
            ticket Total participated tickets for this round{" "}
            <span className="tet-white font-bold text-[18px] text-white ">
              468794
            </span>{" "}
          </p>
        </div>
        <div className="w-[97%] m-auto my-4">
          <hr className="border-[1px] border-[#414141]   " />
          <h1 className="text-[20px] text-white font-semibold text-center mt-3 tracking-wider ">
            Winner List
          </h1>
          
          <div className="mt-3">
            <WinnerList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
