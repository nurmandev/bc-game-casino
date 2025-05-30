import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Footer from "../../../components/Footer";
import { FaRoadBarrier } from "react-icons/fa6";
import EhorseIcon from "../Soccer/EhorseIcon";
import { GiHorseHead, GiRunningNinja } from "react-icons/gi";
import HorseRacingCard from "../Soccer/HorseRacingCard";

const HorseRace = () => {
  const [Earth, setEarth] = useState("Horese Racing");

  const [selectedFormat, setSelectedFormat] = useState("European");
  const [showDropdown, setShowDropdown] = useState(false);

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Japan",
    "India",
  ];

  return (
    <div className="mt-20">
      <div className="w-[97%] mx-auto">
        <div className="text-[30px] flex items-center gap-2">
          <FaRoadBarrier className="text-green-500" />
          <strong>Racing</strong>
        </div>
        <div>
          <div className="w-[100%] mt-3 p-4   ">
            <div className="flex items-center justify-start gap-2 overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
              <div
                onClick={() => setEarth("Horese Racing")}
                className={`rounded-xl p-1 px-2 flex items-center justify-center ${
                  Earth === "Horese Racing"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm">
                  <EhorseIcon className="" />
                  <button className="">Horese Racing</button>
                </div>
              </div>

              <div
                onClick={() => setEarth("Greyhound")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  Earth === "Greyhound"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-1">
                  <GiRunningNinja />
                  <button className="">Greyhound</button>
                </div>
              </div>
              <div
                onClick={() => setEarth("Harness")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  Earth === "Harness"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm">
                  <GiHorseHead />
                  <button>Harness</button>
                </div>
              </div>
            </div>

            <div>
              {Earth === "Horese Racing" && (
                <div className="w-full lg:flex lg:items-center lg:justify-start gap-4">
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                </div>
              )}

              {Earth === "Greyhound" && (
                <div className="w-full lg:flex lg:items-center lg:justify-start gap-4">
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                </div>
              )}

              {Earth === "Harness" && (
                <div className="w-full lg:flex lg:items-center lg:justify-start gap-4">
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                  <div className="w-[33.33%] rounded-lg">
                    <HorseRacingCard />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Last section in the page */}
      <div className="w-3/5 mx-auto p-4 rounded-lg flex flex-col items-center justify-center mt-5">
        <div className="flex items-center justify-start gap-2 ml-40">
          <div className="mb-2 text-gray-500 font-semibold uppercase tracking-wider">
            Odds Format
          </div>
          <div className="w-96 flex justify-between items-start space-x-4">
            <div className="relative w-1/2">
              <div
                onClick={() => setShowDropdown((prev) => !prev)}
                className="bg-[#292d2e] p-2 rounded-md shadow-md flex justify-between items-center cursor-pointer text-white"
              >
                <span>{selectedFormat}</span>
                <FaCaretDown className="w-4 h-4 text-gray-500" />
              </div>
              {showDropdown && (
                <div className="absolute bg-[#292d2e] shadow-md rounded-md mt-1 w-full h-40 overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer text-sm"
                      onClick={() => {
                        setSelectedFormat(country);
                        setShowDropdown(false);
                      }}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="w-[60%] mt-3 text-xs text-gray-500 text-center">
          Although every effort is made to ensure data displayed on our site is
          accurate, this data is for information purposes and should be used as
          a guide only. In the event of any particular information being
          incorrect, we assume no liability for it.
        </p>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HorseRace;
