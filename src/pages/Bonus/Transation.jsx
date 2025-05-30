import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div>
      {/* Header Section */}
      <div className="mt-5">
        <strong>Bonus Transaction</strong>
        <p className="text-[#b4b2b2]">
          Only the latest 60 days transactions will be displayed below.
        </p>
      </div>

      {/* Dropdown */}
      <div className="mt-4 sm:px-2">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative cursor-pointer w-full bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-2 text-[16px] my-3 font-semibold"
        >
          <div className="pl-1 text-[14px] flex items-center justify-start gap-2 text-white">
            All Bonus Type
          </div>
          <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
            <IoChevronDownSharp
              className={`text-white transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Options */}
          {isOpen && (
            <div className="absolute w-full h-auto bg-[#292d2e] top-[40px] left-0 rounded-xl z-20 shadow-lg">
              {["ERC20", "BTC"].map((type, index) => (
                <div
                  key={index}
                  className="w-[95%] m-auto h-[40px] bg-[#3a4142] rounded mt-3"
                >
                  <div className="flex items-center justify-between px-5 py-2">
                    <h1 className="text-white font-semibold text-[16px]">
                      {type}
                    </h1>
                    <div className="w-[20px] h-[20px] rounded-full border-[3px] cursor-pointer hover:border-[#24ee89] hover:border-[5px] border-[#292d2e]"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table Header */}
      <div className="flex items-center justify-between text-[#b4b2b2]">
        <div>Bonus Type</div>
        <div>Amount Claimed</div>
      </div>
      <hr className="border border-[#b4b2b2] mt-1" />

      {/* No Data Section */}
      <div className="flex flex-col items-center justify-center mt-5 py-12">
        <img
          src="/Bonus-images/empty.webp"
          alt="No data"
          className="mb-4 w-60 h-60"
        />
        <p className="text-white text-lg">Oops! There is no data yet!</p>
      </div>
    </div>
  );
};

export default Transaction;
