import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Past = () => {
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
      {" "}
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
            <div className=" absolute top-12 left-0 bg-[#3a4142] text-white rounded-lg shadow-lg lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[350px] sm:w-[250px] overflow-y-auto">
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
      <div className="flex flex-col items-center justify-center mt-5 py-12 ">
        <img
          src="../../public/Active-images/empty.webp"
          alt="No data"
          className="mb-4 w-60 h-60"
        />
        <p className="text-white text-lg">Oops! There is no data yet!</p>
      </div>
    </div>
  );
};

export default Past;
