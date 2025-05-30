import { useState, useEffect } from "react";
import TenisIcon from "./TenisIcon";
import SoccerLive from "./SoccerLive";
import LiveCardSoccer from "./LiveCardSoccer";
import Upcoming from "./Upcoming";
// import { BiSolidChevronDownSquare } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const PopularTab = ({ initialTime }) => {
  const teams = [
    {
      name: "Mohammedan SC",
      logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/118660.png",
    },
    {
      name: "Jamshedpur FC",
      logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/379404.png",
    },
  ];

  const odds = [
    { label: "1", value: "3.1" },
    { label: "Draw", value: "3.45" },
    { label: "2", value: "2.22" },
  ];

  const [stake, setStake] = useState("50");
  const oddds = {
    player1: 3.1,
    player2: 1.35,
  };

  const handleStakeChange = (e) => {
    setStake(e.target.value);
  };

  const potentialWin = (parseFloat(stake) * odds.player1).toFixed(2);

  // Combine teams and odds arrays into one
  const combinedData = teams.map((team, index) => ({
    team,
    odd: odds[index],
  }));

  //Time
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  //Top OutRights
  const [popular, SetPopular] = useState("Cricket");

  const tarun = [
    { name: "Manchester City", odds: "4.6" },
    { name: "Real Madrid", odds: "5.1" },
    { name: "Bayern Munchen", odds: "6.2" },
    { name: "Inter Milano", odds: "11.0" },
    { name: "Chelsea FC", odds: "12.0" },
    { name: "Paris Saint-Germain", odds: "14.0" },
    { name: "Atletico Madrid", odds: "19.0" },
    { name: "Juventus Turin", odds: "22.0" },
    { name: "Borussia Dortmund", odds: "27.0" },
  ];

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
    <div className="w-full">
      {" "}
      <LiveCardSoccer />
      {/* Hot Combos */}
      <div className=" w-[100%] lg:flex lg:flex-row lg:items-start lg:justify-start  md:flex md:flex-col md:items-start md:justify-start md:gap-5 gap-5">
        <div className="lg:w-[33.33%] md:w-full ">
          <div>
            <div
              className="mt-6"
              style={{ height: "608px", width: "100%", minWidth: "396px" }}
            >
              <div className="mb-5" data-editor-id="blockTitle">
                <svg
                  className="bt31 bt2609"
                  data-cy="ic-hot-combo"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: "rgb(252, 60, 60)",
                    color: "inherit",
                    width: "auto",
                    height: "32px",
                  }}
                >
                  <path d="M16 29C10.4444 29 6 24.6667 6 19.25C6 14.9167 8.66667 10.3667 9.77778 8.63333L9.83505 8.54942C10.6067 7.41785 13.6195 3 16 3C16.6667 3 17.1111 3.43333 17.1111 4.08333C17.1111 6.56173 17.9088 8.96235 19.3015 10.9557C19.7375 10.3368 20.076 9.67095 20.2222 8.95825C20.2827 8.6633 20.508 8.43259 20.7903 8.30111C21.3433 7.98498 22.0025 8.09572 22.3333 8.63333C23.8889 11.0167 25 13.6167 25.6667 15.8917C25.8889 17.0833 26 18.275 26 19.25C26 24.6667 21.5556 29 16 29ZM16 26.8333C17.8889 26.8333 19.3333 25.425 19.3333 23.5833C19.3333 23.3262 19.2638 23.0012 19.1797 22.6083C19.1575 22.5047 19.1343 22.3964 19.1111 22.2833C19.0069 21.8259 18.8292 21.3446 18.6012 20.8507C18.5166 20.9348 18.4276 21.0149 18.3343 21.0908L18.3333 21.0917C18.2222 21.3083 17.8889 21.4167 17.6667 21.4167C17.3333 21.4167 17 21.3083 16.7778 21.0917C16.0126 20.1421 15.4651 19.1076 15.1627 18.0148C14.0922 19.3181 12.6667 21.6824 12.6667 23.5833C12.6667 25.425 14.1111 26.8333 16 26.8333Z"></path>
                </svg>
                Hot Combos
              </div>
              <div className="bg-[#292d2e] shadow-lg rounded-2xl p-4 w-full ">
                {/* Matches List */}
                <div className="mt-4 space-y-4 overflow-y-auto max-h-96">
                  {[
                    {
                      team: "Philadelphia 76ers",
                      time: "Tomorrow, 05:30",
                      match: "Philadelphia 76ers vs Boston Celtics",
                      odds: "3.2",
                    },
                    {
                      team: "Orlando Magic",
                      time: "Tomorrow, 06:00",
                      match: "Atlanta Hawks vs Orlando Magic",
                      odds: "1.83",
                    },
                    {
                      team: "Canada",
                      time: "Tomorrow, 06:30",
                      match: "USA vs Canada",
                      odds: "1.88",
                    },
                    {
                      team: "Memphis Grizzlies",
                      time: "Tomorrow, 05:30",
                      match: "Indiana Pacers vs Memphis Grizzlies",
                      odds: "1.7",
                    },
                    {
                      team: "Canada",
                      time: "Tomorrow, 06:30",
                      match: "USA vs Canada",
                      odds: "1.88",
                    },
                    {
                      team: "Memphis Grizzlies",
                      time: "Tomorrow, 05:30",
                      match: "Indiana Pacers vs Memphis Grizzlies",
                      odds: "1.7",
                    },
                  ].map((game, index) => (
                    <div
                      key={index}
                      className="bg-[#3a4142] px-2 py-1 pt- rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-semibold text-gray-700">
                          {game.team}
                        </div>
                        <div className="text-xs text-gray-500">{game.time}</div>
                        <div className="text-sm font-medium mt-1">
                          {game.match}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-500 mt-1">
                        {game.odds}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Betting Controls */}
                <div className="mt-4 p-3 rounded-lg">
                  <div className="bg-[#3a4142] border border-green-500 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="flex items-end ">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        comboboost
                      </span>
                      <div className="text-gray-700 text-sm font-medium">
                        x1.15 Comboboost
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      type="number"
                      value={stake}
                      onChange={handleStakeChange}
                      className="w-full p-2 rounded-lg bg-gray-800 text-white mt-2"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    {[200, 500, 2000, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setStake(amount.toString())}
                        className="bg-gray-700 p-2 rounded-lg text-white"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-gray-600 text-sm">
                    <span>Total Odds</span>
                    <span className="font-bold">21.523</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm mt-1">
                    <span>Potential Win</span>
                    <span className="font-bold">₹107,615</span>
                  </div>
                  <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold">
                    Place Bet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top event */}
        <div className="lg:w-[33.33%] sm:w-[100%] sm:mt-48 lg:mt-0">
          <div>
            <div className="mt-6" data-editor-id="blockTitle">
              <svg
                className
                data-cy="ic-top-events-widget"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "currentcolor",
                  color: "rgb(36, 238, 137)",
                  width: "auto",
                  height: 32,
                }}
              >
                <path d="M12.2726 1L12.9248 3.07791L14.9999 3.73008L12.7272 6.00281L11.3547 5.7283L8.58309 8.50006C8.284 8.79913 7.79908 8.79913 7.5 8.50006C7.20091 8.20099 7.20091 7.7161 7.5 7.41703L10.2735 4.64336L9.99992 3.27554L12.2726 1Z" />
                <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C8.56669 2 9.11503 2.07856 9.63473 2.22539L8.91405 2.94611L9.05484 3.62192L9.05394 3.6241C8.71587 3.54297 8.36295 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 7.63934 12.4576 7.28859 12.3774 6.95247L13.0606 7.09264L13.7763 6.37144C13.9221 6.88931 14 7.43555 14 8Z" />
                <path d="M8 5C8.15907 5 8.31524 5.01238 8.46761 5.03623L6.86728 6.61504C6.48053 6.94101 6.23483 7.42902 6.23483 7.97442C6.23483 8.95585 7.03044 9.75145 8.01186 9.75145C8.52346 9.75145 8.98456 9.53526 9.3088 9.18925L10.964 7.53402C10.9877 7.68588 11 7.8415 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5Z" />
              </svg>
              Top Events
            </div>
            <div className="bg-[#292d2e] mt-5 p-4 rounded-2xl text-[#898b8c] h-[760px] mx-auto ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TenisIcon />
                  <span className="text-sm">WTA Dubai</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">Today, 15:35</div>
              </div>
              <div className="p-3 rounded-lg mt-2 flex flex-col items-center">
                <span className="text-gray-400 mb-2">Starts in</span>
                <div className="text-xl font-semibold flex gap-1">
                  <span>{String(days).padStart(2, "0")}d</span>:
                  <span>{String(hours).padStart(2, "0")}h</span>:
                  <span>{String(minutes).padStart(2, "0")}m</span>:
                  <span>{String(seconds).padStart(2, "0")}s</span>
                </div>
              </div>
              <div className=" w-full mt-4 flex items-center justify-start gap-3">
                <div className="w-[50%]  flex flex-col justify-between items-center bg-[#3a4142] p-3 rounded-lg mb-2">
                  <div className=" flex flex-col items-center gap-2">
                    <img
                      src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/RUS.svg"
                      alt="Russia Flag"
                      width={40}
                      height={40}
                    />
                    <span className="my-5">Andreeva, Mirra</span>
                  </div>
                  <span>{oddds.player1}</span>
                </div>
                <div className="w-[50%] flex flex-col justify-between items-center bg-[#3a4142] p-3 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/POL.svg"
                      alt="Poland Flag"
                      width={40}
                      height={40}
                    />
                    <span className="my-5">Swiatek, Iga</span>
                  </div>
                  <span>{oddds.player2}</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg shadow-md w-full">
                <div className="text-lg font-semibold">Winner</div>
                <div className="flex items-center text-blue-500 mt-2 cursor-pointer hover:underline">
                  Go to Event
                  <div className="w-4 h-4 ml-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-400">Stake</label>
                <input
                  type="number"
                  value={stake}
                  onChange={handleStakeChange}
                  className="w-full p-2 rounded-lg bg-gray-800 text-white mt-2"
                />
              </div>
              <div className="mt-4 flex justify-between">
                {[200, 500, 2000, 5000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setStake(amount.toString())}
                    className="bg-gray-700 p-2 rounded-lg text-white"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <span className="block text-gray-400">Potential Win</span>
                <span className="text-lg font-bold">{potentialWin} ₹</span>
              </div>
              <button className="mt-4 w-full bg-green-500 p-3 rounded-lg text-white">
                Place Bet
              </button>
            </div>
          </div>
        </div>
        {/* Top Outring */}
        <div className="lg:w-[33.33%] md:w-full">
          <div>
            <div className="mt-6" data-editor-id="blockTitle">
              <svg
                className="bt5677 bt7614"
                data-cy="ic-outrights-title"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "rgb(129, 75, 246)",
                  color: "inherit",
                  width: "auto",
                  height: 32,
                }}
              >
                <path d="M11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5V8H18V6.5C18 5.67157 18.6716 5 19.5 5C20.3284 5 21 5.67157 21 6.5V8H23C25.2091 8 27 9.79086 27 12V13V23C27 25.2091 25.2091 27 23 27H9C6.79086 27 5 25.2091 5 23V13V12C5 9.79086 6.79086 8 9 8H11V6.5ZM24 13H8V23C8 23.5523 8.44772 24 9 24H23C23.5523 24 24 23.5523 24 23V13ZM10 16.5C10 17.0523 10.4477 17.5 11 17.5L21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5H11C10.4477 15.5 10 15.9477 10 16.5ZM11 21.5C10.4477 21.5 10 21.0523 10 20.5C10 19.9477 10.4477 19.5 11 19.5H15C15.5523 19.5 16 19.9477 16 20.5C16 21.0523 15.5523 21.5 15 21.5H11Z" />
              </svg>
              Top Outrights
            </div>
            <div className="bg-[#292d2e] mt-5 p-4 rounded-2xl text-[#898b8c] lg:h-[760px] md:h-auto mx-auto ">
              <div className="w-[100%] left-0 h-[30px] rounded-lg flex items-center justify-start gap-2 font-bold text-gray-400 text-[14px] overflow-x-auto hide-scrollbar">
                <div
                  onClick={() => SetPopular("Soccer")}
                  className={`w-[50%] rounded-xl ${
                    popular === "Soccer"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className="  text-center my-1 px-2 ">
                    <button className="">Soccer</button>
                  </div>
                </div>

                <div
                  onClick={() => SetPopular("Tennis")}
                  className={`w-[60%] rounded-xl ${
                    popular === "Tennis"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className="  text-center my-1 px-2 ">
                    <button className="">Tennis</button>
                  </div>
                </div>

                <div
                  onClick={() => SetPopular("Baseball")}
                  className={`w-[50%] rounded-xl ${
                    popular === "Baseball"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className=" text-center my-1 px-2 ">
                    <button className="">Baseball</button>
                  </div>
                </div>

                <div
                  onClick={() => SetPopular("Cricket")}
                  className={`w-[50%] rounded-xl ${
                    popular === "Cricket"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className="text-center my-1 px-2">
                    <button className="">Cricket</button>
                  </div>
                </div>

                <div
                  onClick={() => SetPopular("Ice Hockey")}
                  className={`w-[100%] rounded-xl whitespace-nowrap ${
                    popular === "Ice Hockey"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className="text-center my-1 px-2">
                    <button className="">Ice Hockey </button>
                  </div>
                </div>

                <div
                  onClick={() => SetPopular("Special")}
                  className={`w-[50%] rounded-xl ${
                    popular === "Special"
                      ? "bg-green-500 text-black font-bold px-2"
                      : "text-white  bg-[#3a4142]"
                  }`}
                >
                  <div className="text-center my-1 px-2 ">
                    <button className="">Special</button>
                  </div>
                </div>
              </div>
              <div>
                {popular === "Soccer" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {popular === "Tennis" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {popular === "Baseball" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {popular === "Cricket" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {popular === "Ice Hockey" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {popular === "Special" && (
                  <div>
                    {" "}
                    <div className="text-white rounded-lg max-w-lg mx-auto mt-5">
                      <h2 className="text-lg font-bold text-center mb-2">
                        FIFA Club World Cup Winner 2025
                      </h2>
                      <p className="text-gray-400 text-center mb-4">
                        Jun 15, 23:30
                      </p>
                      <div className="space-y-2">
                        {tarun.map((team, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-[#3a4142] p-1 px-2 rounded-lg"
                          >
                            <span className="text-white font-medium">
                              {team.name}
                            </span>
                            <span className=" text-black font-bold px-3 py-1 rounded">
                              {team.odds}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Live Section */}
      <div className=" mt-10">
        <div
          className="flex items-center justify-start gap-3"
          data-editor-id="blockTitle"
        >
          <svg
            className="bt15789"
            data-cy="ic-live-simple"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="#FF4E4E"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "rgb(252, 60, 60)",
              color: "inherit",
              width: "auto",
              height: 32,
            }}
          >
            <path d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z" />
            <path d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z" />
            <path d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z" />
            <path d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z" />
            <path d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z" />
          </svg>
          Live
        </div>
        <div>
          <SoccerLive />
        </div>
      </div>
      {/* Upcoming */}
      <div>
        <div>
          <div
            className="flex items-center justify-start gap-2 mt-5"
            data-editor-id="blockTitle"
          >
            <svg
              className="bt397"
              data-cy="ic-upcoming"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "rgb(33, 168, 247)",
                color: "inherit",
                width: "auto",
                height: 32,
              }}
            >
              <g id="Property 1=upcoming">
                <g id="Union">
                  <path d="M21.9177 16.9959C21.4434 19.8356 18.9745 22 16 22C12.6863 22 10 19.3137 10 16C10 13.0256 12.1644 10.5566 15.0042 10.0823C15.5489 9.9913 16 10.4478 16 11V16H21C21.5523 16 22.0087 16.4511 21.9177 16.9959Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z"
                  />
                </g>
              </g>
            </svg>
            Upcoming
          </div>
          <Upcoming />
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
                <FaCaretDown  className="w-4 h-4 text-gray-500" />
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
    </div>
  );
};

export default PopularTab;
