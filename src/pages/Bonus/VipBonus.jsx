import { GrCircleInformation } from "react-icons/gr";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import BonusCard2 from "../Bonus/BonusCard2";

const VipBonus = () => {
  const [information, setInformation] = useState(false);
  const progress = 30; // Example progress, set this value dynamically if needed.

  return (
    <div className="my-5">
      <div className="lg:text-[25px] lg:mb-5 md md:text-[25px] sm:mb-5 text-white font-semibold">
        <strong>VIP Bonus</strong>
      </div>

      <div className="lg:flex lg:items-center lg:justify-between gap-4 ">
        {/* Left Section */}
        <div className="lg:w-[50%]">
          <div
            className="w-full h-[auto] bg-[#323738] rounded-xl px-5 py-4"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(61, 73, 84, 1) 47.13%, rgba(65, 82, 99, 1) 78.48%)",
            }}
          >
            {/* View Level Up Details */}
            <div className="flex items-end justify-end">
              <strong className="text-[#26df85]">View Level Up Details</strong>
            </div>

            {/* Image and Text */}
            <div className="w-full flex items-center justify-start gap-3 mt-3">
              <div className="w-[25%]">
                <img
                  src="/VipBonusimages/badge-none.webp" // Corrected image path
                  alt="VIP Badge"
                  className="w-full"
                />
              </div>
              <div className="w-[75%] relative">
                <h1 className="text-[30px] font-extrabold text-white">VIP 0</h1>
                <h4 className="flex items-center justify-between font-normal text-white">
                  Your VIP Progress
                  <button onClick={() => setInformation(!information)}>
                    <div className="flex items-center gap-3">
                      <p>0.0%</p>
                      <GrCircleInformation />
                    </div>
                    {information && (
                      <div className="absolute -top-14 lg:left-12 sm:-left-24  rounded-xl w-[300px] h-[100px] bg-[#323738] leading-5 px-4 pt-2">
                        <p className="text-center text-[16px]">
                          BC Banks Rules
                        </p>
                        <p className="text-[12px] font-medium">
                          BC Bank will be able to claim every 8 hours. Claims 3
                          times a day, expire in 24 hours.
                        </p>
                      </div>
                    )}
                  </button>
                </h4>
                {/* Progress Bar */}
                <div className="relative w-full h-4 bg-[#2e373e] rounded-full overflow-hidden mt-3">
                  {/* Blur Effect */}
                  <div className="absolute inset-0 backdrop-blur-sm"></div>

                  {/* Progress Fill */}
                  <div
                    className="h-full bg-gradient-to-r from-[#4a5a64] to-[#6b7c87] transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>

                  {/* Circular Indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#2e373e] rounded-full shadow-lg"
                    style={{ left: `calc(${progress}% - 12px)` }} // Adjust position
                  ></div>
                </div>
              </div>
            </div>
            <h4 className="flex items-center justify-between font-normal text-white mt-5">
              Your VIP Progress
              <p>0.0%</p>
            </h4>

            <div className="center h-full w-full text-center">
              <div className="flex items-center justify-center gap-x-2 font-semibold bg-[#232626] p-3 rounded-xl mt-4 text-white ">
                <FaLock />
                Available at VIP 22
              </div>
            </div>
          </div>
        </div>
        {/* Right Section (Empty for now) */}
        <div className="lg:w-[50%] ">
          <BonusCard2 />
        </div>
      </div>
    </div>
  );
};

export default VipBonus;
