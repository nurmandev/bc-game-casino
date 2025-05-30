import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import EarthPopular from "./EarthPopular";
import Footer from "../../../components/Footer";
import LiveCardSoccer from "./LiveCardSoccer";
import GunMan from "./GunMan";

const SoccerGunMan = () => {
  const [IsOpen1, setIsOpen1] = useState("");
  const [IsOpen2, setIsOpen2] = useState("");
  const [Earth, setEarth] = useState("Popular");

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
          <GunMan />
          <strong>Counter-Strike</strong>
        </div>
        <div>
          <div className="w-[100%] mt-3 p-4 flex items-center gap-2  ">
            <div className="relative">
              <button
                onClick={() => setIsOpen1(!IsOpen1)}
                className="flex justify-between items-center gap-3 bg-[#292d2e] p-2  rounded-2xl shadow-md w-full text-white"
              >
                <span className="text-white font-semibold flex items-center gap-2 ">
                  <div className="  text-white font-semibold text-sm">All</div>
                  <div className="text-white font-semibold  bg-slate-400 px-2 rounded-full text-sm">
                    219
                  </div>
                </span>
                <FaCaretDown
                  className={`w-4 h-4 text-white transition-transform ${
                    IsOpen1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {IsOpen1 && (
                <div className="absolute bg-[#292d2e] h-96 shadow-md rounded-md mt-1 w-[400px] px-4 py-3 overflow-y-scroll custom-scrollbar hide-scrollbar">
                  <div className="">
                    <button
                      onClick={() => setIsOpen2(!IsOpen2)}
                      className="flex justify-between items-center bg-[#292d2e] p-2 w-full text-white"
                    >
                      <span className="text-white font-semibold flex items-center gap-2 ">
                        <div className="flex items-center gap-2">
                          <img
                            src="/public/Sports/international.svg"
                            alt=""
                            className="Earth w-[28px] h-[28px] "
                          />
                          <div className="  text-white font-semibold text-sm">
                            International
                          </div>
                        </div>
                        <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-sm">
                          62
                        </div>
                      </span>
                      <FaCaretDown
                        className={`w-4 h-4 text-white transition-transform ${
                          IsOpen2 ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {IsOpen2 && (
                      <div className=" mt-1 px-10 flex flex-col items-satrt gap-2">
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                        <span className="text-white font-semibold flex items-center gap-2 ">
                          <div className="  text-white font-semibold text-xs">
                            UEFA Champions League
                          </div>
                          <div className="text-white font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-xs">
                            219
                          </div>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="w-[100%] flex items-center justify-start gap-2  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
              <div
                onClick={() => setEarth("Popular")}
                className={`w-[8%] rounded-xl p-1 flex items-center justify-center ${
                  Earth === "Popular"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <button className="">Popular</button>
              </div>

              <div
                onClick={() => setEarth("UEFA Champions League")}
                className={`w-[16%] rounded-xl p-1 flex items-center justify-center ${
                  Earth === "UEFA Champions League"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/public/Sports/international.svg"
                    alt=""
                    className="Earth w-[25px] h-[25px] "
                  />
                  <button className="text-xs">UEFA Champions League</button>
                </div>
              </div>

              <div
                onClick={() => setEarth("UEFA Europa League")}
                className={`w-[16%] rounded-xl p-1 flex items-center justify-center ${
                  Earth === "UEFA Europa League"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/public/Sports/international.svg"
                    alt=""
                    className="Earth w-[25px] h-[25px] "
                  />
                  <button className="text-xs">UEFA Europa League</button>
                </div>
              </div>

              <div
                onClick={() => setEarth("Premier League")}
                className={`w-[16%] rounded-xl p-1 flex items-center justify-center ${
                  Earth === "Premier League"
                    ? "bg-green-500 text-black font-bold px-2"
                    : "text-white  bg-[#3a4142]"
                }`}
              >
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/public/Sports/ENG.svg"
                    alt=""
                    className="Earth w-[25px] h-[25px] "
                  />
                  <button className="text-sm">Premier League</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {Earth === "Popular" && (
              <div>
                <EarthPopular />
              </div>
            )}{" "}
            {Earth === "UEFA Champions League" && (
              <div>
                <div>
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src="/public/Sports/international.svg"
                      alt=""
                      className="Earth w-[25px] h-[25px] "
                    />
                    <strong className="text-md">UEFA Champions League</strong>
                  </div>
                  <div>
                    <LiveCardSoccer />
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
                      Although every effort is made to ensure data displayed on
                      our site is accurate, this data is for information
                      purposes and should be used as a guide only. In the event
                      of any particular information being incorrect, we assume
                      no liability for it.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {Earth === "UEFA Europa League" && (
              <div>
                {" "}
                <div>
                  <div>
                    <div className="flex items-center justify-start gap-2">
                      <img
                        src="/public/Sports/international.svg"
                        alt=""
                        className="Earth w-[25px] h-[25px] "
                      />
                      <strong className="text-md">UEFA Europa League</strong>
                    </div>
                    <div>
                      <LiveCardSoccer />
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
                        Although every effort is made to ensure data displayed
                        on our site is accurate, this data is for information
                        purposes and should be used as a guide only. In the
                        event of any particular information being incorrect, we
                        assume no liability for it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {Earth === "Premier League" && (
              <div>
                {" "}
                <div>
                  <div>
                    <div className="flex items-center justify-start gap-2">
                      <img
                        src="/public/Sports/international.svg"
                        alt=""
                        className="Earth w-[25px] h-[25px] "
                      />
                      <strong className="text-md">UEFA Europa League</strong>
                    </div>
                    <div>
                      <LiveCardSoccer />
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
                        Although every effort is made to ensure data displayed
                        on our site is accurate, this data is for information
                        purposes and should be used as a guide only. In the
                        event of any particular information being incorrect, we
                        assume no liability for it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default SoccerGunMan;
