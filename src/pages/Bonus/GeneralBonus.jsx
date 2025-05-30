import { GrCircleInformation } from "react-icons/gr";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import BonusCard from "./BonusCard";

const GeneralBonus = () => {
  const bcBankData = [
    {
      number: "16",
      day: "Thursaday",
      months: "January",
      text: "No Bonus",
    },
    {
      number: "30",
      day: "Thursaday",
      months: "January",
      text: "No Bonus",
    },
    {
      number: "25",
      day: "Thursaday",
      months: "January",
      text: "No Bonus",
    },
    {
      number: "22",
      day: "Thursaday",
      months: "January",
      text: "No Bonus",
    },
    {
      number: "22",
      day: "Thursaday",
      months: "January",
      text: "No Bonus",
    },
  ];

  // const [isExpanded, setIsExpanded] = useState(true);

  // // Toggle Expand
  // const toggleExpansion = () => {
  //   setIsExpanded((prev) => !prev);
  // };

  const [information, setInformation] = useState("");
  return (
    <div className="">
      <div className="my-5 lg:text-[25px] md:text-[25px] text-white font-semibold ">
        <strong>General Bonus</strong>
      </div>
      <div className="w-full lg:flex lg:items-center lg:justify-between gap-5 ">
        <div
          className="lg:w-[40%] sm:w-[100%] bg-[#323738] relative z-0 flex flex-grow flex-col gap-y-4 overflow-hidden rounded-xl bg-layer4 px-6 py-4 "
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(74, 3, 255, 0) 27.13%, rgba(74, 3, 255, 0.3) 86.48%)",
          }}
        >
          <div className="relative -z-10 -mx-6 -mt-4 flex items-center justify-center">
            <div className="absolute -top-8 -z-10 h-full w-full bg-[#F2CD3B] opacity-45 blur-3xl"></div>
            <div className="min-h-48 w-[18rem]">
              <img
                src="../../../public/general-bonus/locker.webp"
                alt="BC Bank"
              />
            </div>
          </div>
          <h4 className="flex items-center gap-x-3 lg:text-3xl md:text-2xl sm:text-xl font-extrabold text-white">
            BC Bank
            <button
              onClick={() => setInformation((prev) => !prev)}
              className="relative"
            >
              <GrCircleInformation />
            </button>
            {information && (
              <div className="absolute top-24 lg:left-16 md:left-16 sm:left-0 rounded-xl w-[300px] h-[100px] bg-[#323738] leading-5 px-4 pt-2 ">
                <p className="text-center text-[16px] ">BC Banks Rules</p>
                <p className="text-[12px] font-medium ">
                  BC Bank will be able to claim every 8 hours. Claims 3 times a
                  day , expire in 24 hours.{" "}
                </p>
              </div>
            )}
          </h4>
          <div className="flex flex-col gap-y-2">
            <p className="flex justify-between font-semibold text-[#737272] ">
              Total bonus in bank <span className="text-primary">₹0.00</span>
            </p>
            <div className="w-[100%] m-auto  ">
              <div className=" h-[50px] bg-[#292d2e] rounded-lg  ">
                <div className=" flex items-center justify-between px-2 ">
                  <div className="flex items-center text ">
                    <h1 className="text-white font-bold">₹00.00</h1>
                  </div>
                  <div className=" cursor-pointer w-[150px] bg-[#383f40] rounded-md p-2 text-[16px] mt-1 ">
                    <div className=" font-bold text-[#797878] ">Claim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm font-bold leading-normal text-[#737272] text-[20px] ">
            Claim every 8 hours
          </p>
        </div>
        <div className="lg:w-[55%] sm:w-[100%] sm:mt-5 lg:mt-0 ">
          <div className="h-[400px] bg-[#323738] rounded-xl px-4 pt-1 ">
            <div className="flex items-center justify-between my-5">
              <strong className="text-white text-[14px] ">Special Bonus</strong>
              <div className="flex items-center justify-start gap-2 text-white">
                <div className="w-7 h-7 rounded-lg bg-[#2c3131] flex items-center justify-center ">
                  <FaChevronUp />
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#2c3131] flex items-center justify-center ">
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stat justify-center gap-2">
              {bcBankData.map((bankdata, index) => (
                <div
                  key={index}
                  className="bg-[#3a4142] rounded-xl flex items-center justify-between  px-3"
                >
                  <div className="flex items-center justify-start gap-3 leading-5">
                    <h1 className="w-14 h-10 rounded-xl bg-[#232626] flex items-center justify-center my-1 text-[23px] font-bold text-white ">
                      {" "}
                      {bankdata.number}{" "}
                    </h1>
                    <div>
                      <strong className="text-white font-semibold">
                        {" "}
                        {bankdata.day}{" "}
                      </strong>
                      <p className="text-[#a9b4b7] "> {bankdata.months} </p>
                    </div>
                  </div>
                  <div className="text-[#a9b4b7] font-semibold ">
                    {" "}
                    {bankdata.text}{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* components of cards */}
      <div className="">
        <BonusCard />
      </div>
    </div>
  );
};

export default GeneralBonus;
