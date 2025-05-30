import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Footer from "../../../components/Footer";

const SoccerCopy = () => {
  const [popular, SetPopular] = useState("All");
  const [IsOpen1, setIsOpen1] = useState("");
  const [EventBuilder, setEventBuilder] = useState("Today");

  //last section in the page
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
    <div className="lg:mt-20 md:mt-36 sm:mt-36">
      <div className="w-[97%] mx-auto">
        <div
          className="flex items-center justify-start gap-4"
          data-editor-id="blockTitle"
        >
          <svg
            className="bt11539"
            data-cy="ic-mybets"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "currentcolor",
              color: "rgb(65, 188, 44)",
              width: "auto",
              height: 32,
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 6.7C5 4.68329 6.5966 3 8.625 3H17.375C19.4034 3 21 4.68329 21 6.7V19.3C21 21.3167 19.4034 23 17.375 23H8.625C6.5966 23 5 21.3167 5 19.3V6.7ZM8.625 5C7.75391 5 7 5.73437 7 6.7V19.3C7 20.2656 7.75391 21 8.625 21H17.375C18.2461 21 19 20.2656 19 19.3V6.7C19 5.73437 18.2461 5 17.375 5H8.625ZM22.375 10C22.375 9.44772 22.8227 9 23.375 9H24C25.6569 9 27 10.3431 27 12V26C27 27.6569 25.6569 29 24 29H14C12.3431 29 11 27.6569 11 26V25.3C11 24.7477 11.4477 24.3 12 24.3C12.5523 24.3 13 24.7477 13 25.3V26C13 26.5523 13.4477 27 14 27H24C24.5523 27 25 26.5523 25 26V12C25 11.4477 24.5523 11 24 11H23.375C22.8227 11 22.375 10.5523 22.375 10ZM10 16C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H10ZM9 13C9 12.4477 9.44772 12 10 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H10C9.44772 14 9 13.5523 9 13ZM10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H10Z"
            />
          </svg>
          My Bets
        </div>
        {/* /dfghj */}
        <div className="mt-5 lg:flex items-center justify-between ">
          <div className="w-[100%] left-0 h-[30px] rounded-lg flex items-center justify-start gap-2 font-bold text-gray-400 text-[14px] overflow-x-auto hide-scrollbar">
            <div
              onClick={() => SetPopular("All")}
              className={`w-[50%] rounded-xl ${
                popular === "All"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="  text-center my-1 px-2 ">
                <button className="">All</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Open Bet")}
              className={`w-[50%] rounded-xl ${
                popular === "Open Bet"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className=" text-center my-1 px-2 ">
                <button className="whitespace-nowrap">Open Bet</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("won")}
              className={`w-[50%] rounded-xl ${
                popular === "won"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className=" text-center my-1 px-2 ">
                <button className="">won</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Lost")}
              className={`w-[50%] rounded-xl ${
                popular === "Lost"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="text-center my-1 px-2">
                <button className="">Lost</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Cashed Out")}
              className={`w-[50%] rounded-xl whitespace-nowrap ${
                popular === "Cashed Out"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="text-center my-1 px-2">
                <button className="">Cashed Out </button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Canceled")}
              className={`w-[50%] rounded-xl ${
                popular === "Canceled"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="text-center my-1 px-2 ">
                <button className="">Canceled</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Refund")}
              className={`w-[50%] rounded-xl ${
                popular === "Refund"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="text-center my-1 px-2 ">
                <button className="">Refund</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] mt-3 p-2 rounded">
            <div className="relative">
              <button
                onClick={() => setIsOpen1(!IsOpen1)}
                className="flex justify-between items-center bg-green-500 p-2 rounded-md shadow-md w-full text-white"
              >
                <span className="text-black font-semibold flex items-center gap-2 ">
                  <div className="  text-black font-semibold text-sm">Last</div>
                  Bets
                </span>
                <FaCaretDown
                  className={`w-4 h-4 text-black transition-transform ${
                    IsOpen1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {IsOpen1 && (
                <div className="absolute bg-[#292d2e] h-40 shadow-md rounded-md mt-1 w-[400px] px-4 py-3 overflow-y-scroll custom-scrollbar hide-scrollbar">
                  <div className="flex items-center justify-between">
                    <div
                      onClick={() => setEventBuilder("Today")}
                      className={`w-[45%] rounded-xl ${
                        EventBuilder === "Today"
                          ? "bg-green-500 text-black font-bold px-2"
                          : "text-white  bg-[#3a4142]"
                      }`}
                    >
                      <div className="  text-center my-1 px-2 ">
                        <button className="">Today</button>
                      </div>
                    </div>

                    <div
                      onClick={() => setEventBuilder("For Week")}
                      className={`w-[45%] rounded-xl ${
                        EventBuilder === "For Week"
                          ? "bg-green-500 text-black font-bold px-2"
                          : "text-white  bg-[#3a4142]"
                      }`}
                    >
                      <div className="  text-center my-1 px-2 ">
                        <button className="">For Week</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div
                      onClick={() => setEventBuilder("For Month")}
                      className={`w-[45%] rounded-xl ${
                        EventBuilder === "For Month"
                          ? "bg-green-500 text-black font-bold px-2"
                          : "text-white  bg-[#3a4142]"
                      }`}
                    >
                      <div className="  text-center my-1 px-2 ">
                        <button className="">For Month</button>
                      </div>
                    </div>

                    <div
                      onClick={() => setEventBuilder("Last bets")}
                      className={`w-[45%] rounded-xl ${
                        EventBuilder === "Last bets"
                          ? "bg-green-500 text-black font-bold px-2"
                          : "text-white  bg-[#3a4142]"
                      }`}
                    >
                      <div className="  text-center my-1 px-2 ">
                        <button className="">Last bets</button>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setEventBuilder("Custom")}
                    className={`w-[100%] rounded-xl mt-5  ${
                      EventBuilder === "Custom"
                        ? "bg-green-500 text-black font-bold px-2"
                        : "text-white  bg-[#3a4142]"
                    }`}
                  >
                    <div className="  text-center my-1 px-2 ">
                      <button className="">Custom</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* main comntent */}
        <div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#232626] rounded-lg ">
            <div className="mb-4">
              <svg width={152} height={156} data-editor-id="emptyBetsIcon">
                <g fill="#24ee89" fillRule="evenodd">
                  <path
                    d="M18.78 39.62a2 2 0 013.198 2.402 69.863 69.863 0 00-9.385 16.984 2 2 0 01-3.736-1.429 73.862 73.862 0 019.922-17.956zm-8.943 73.234a2 2 0 113.683-1.56 69.89 69.89 0 007.742 13.712 2 2 0 01-3.24 2.346 73.89 73.89 0 01-8.185-14.498zm128.226 14.38a2 2 0 11-3.245-2.339C143.342 113.075 148 98.891 148 84c0-14.736-4.562-28.782-12.922-40.533a2 2 0 113.26-2.319C147.174 53.571 152 68.426 152 84c0 15.737-4.927 30.738-13.937 43.235zM105.268 15.187a2 2 0 01-1.475 3.719C95.657 15.678 86.946 14 78 14c-6.724 0-13.32.948-19.647 2.794a2 2 0 11-1.121-3.84A74.026 74.026 0 0178 10c9.453 0 18.664 1.774 27.268 5.186z"
                    opacity="0.7"
                  />
                  <path
                    d="M12 7.96h5.46a2 2 0 110 4H12v5.461a2 2 0 11-4 0v-5.46H2.54a2 2 0 110-4H8V2.5a2 2 0 114 0v5.46z"
                    opacity="0.3"
                  />
                  <path
                    d="M126 97.96h5.46a2 2 0 010 4H126v5.461a2 2 0 11-4 0v-5.46h-5.46a2 2 0 110-4H122V92.5a2 2 0 014 0v5.46z"
                    opacity="0.4"
                  />
                  <path
                    d="M145.5 16.48h2.23a1.5 1.5 0 010 3h-2.23v2.23a1.5 1.5 0 01-3 0v-2.23h-2.23a1.5 1.5 0 010-3h2.23v-2.23a1.5 1.5 0 013 0v2.23z"
                    opacity="0.2"
                  />
                  <g fill="rgba(255,255,255,0.4)">
                    <path
                      fillRule="nonzero"
                      d="M41.95 59H124a4 4 0 004-4V28a4 4 0 00-4-4H42m.037-2H124a6 6 0 016 6v27a6 6 0 01-6 6H42.01"
                    />
                    <path d="M32 22h10v39H32a6 6 0 01-6-6V28a6 6 0 016-6zm16.5 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8 1h34a1.5 1.5 0 010 3h-34a1.5 1.5 0 010-3zM48 35h59a1 1 0 010 2H48a1 1 0 010-2zm0 5h30a1 1 0 010 2H48a1 1 0 010-2zm1.5 10h5a2.5 2.5 0 110 5h-5a2.5 2.5 0 110-5z" />
                  </g>
                  <g fill="rgba(255,255,255,0.4)">
                    <path
                      fillRule="nonzero"
                      d="M15.95 104H98a4 4 0 004-4V73a4 4 0 00-4-4H16m.037-2H98a6 6 0 016 6v27a6 6 0 01-6 6H16.01"
                    />
                    <path d="M6 67h10v39H6a6 6 0 01-6-6V73a6 6 0 016-6zm16.5 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8 1h34a1.5 1.5 0 010 3h-34a1.5 1.5 0 010-3zM22 80h59a1 1 0 010 2H22a1 1 0 010-2zm0 5h30a1 1 0 010 2H22a1 1 0 010-2zm1.5 10h5a2.5 2.5 0 110 5h-5a2.5 2.5 0 110-5z" />
                  </g>
                  <g fill="rgba(255,255,255,0.4)">
                    <path
                      fillRule="nonzero"
                      d="M41.95 153H124a4 4 0 004-4v-27a4 4 0 00-4-4H42m.037-2H124a6 6 0 016 6v27a6 6 0 01-6 6H42.01"
                    />
                    <path d="M32 116h10v39H32a6 6 0 01-6-6v-27a6 6 0 016-6zm16.5 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8 1h34a1.5 1.5 0 010 3h-34a1.5 1.5 0 010-3zm-8.5 7h59a1 1 0 010 2H48a1 1 0 010-2zm0 5h30a1 1 0 010 2H48a1 1 0 010-2zm1.5 10h5a2.5 2.5 0 110 5h-5a2.5 2.5 0 110-5z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-gray-500 text-lg font-medium">
              Please login to see your bets.
            </div>
            <button className="w-[20%] mt-4 bg-green-500 text-white px-6 py-2 rounded-xl text-sm hover:bg-green-700 transition">
              Login
            </button>
            <div className="mt-2 text-sm">
              <span className="text-gray-600">Don t have an account?</span>
              <span className="text-green-500 cursor-pointer ml-1 hover:underline">
                Join Now!
              </span>
            </div>
          </div>
        </div>
        {/* Last section in the page */}
        <div className="w-3/5 mx-auto p-4 rounded-lg flex flex-col items-center justify-center mt-5 ">
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
                        className="p-2  cursor-pointer text-sm"
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
            Although every effort is made to ensure data displayed on our site
            is accurate, this data is for information purposes and should be
            used as a guide only. In the event of any particular information
            being incorrect, we assume no liability for it.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SoccerCopy;
