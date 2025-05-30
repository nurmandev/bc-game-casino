import { useState } from "react";
import AllBets from "../LatestBetAndRace/AllBets";
import MyBets from "../LatestBetAndRace/MyBets";
import HighRoller from "../LatestBetAndRace/HighRoller";
import WagerContest from "./WagerContest";

const Navbar = () => {
  const [latestGameRace, setLatestGameRace] = useState("All bets");

  return (
    <nav className="bg-[#232626] pt-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-bold">Latest Bet & Race</div>
        <div className="bg-[#323738] rounded p-2 flex flex-col w-full max-w-md">
          {/* Game Selection */}
          <div className="flex gap-4 justify-center">
            {["All bets", "My bets", "High Roller", "Wager Contest"].map(
              (name) => (
                <button
                  key={name}
                  onClick={() => setLatestGameRace(name)}
                  className={`cursor-pointer text-sm font-bold px-2 ${
                    latestGameRace === name ? "text-white" : "text-gray-500"
                  }`}
                >
                  {name}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      {/* Content Display */}
      <div>
        {latestGameRace === "All bets" && <AllBets />}
        {latestGameRace === "My bets" && <MyBets />}
        {latestGameRace === "High Roller" && <HighRoller />}
        {latestGameRace === "Wager Contest" && <div className="-mt-5"><WagerContest/></div>}
      </div>
    </nav>
  );
};

export default Navbar;
