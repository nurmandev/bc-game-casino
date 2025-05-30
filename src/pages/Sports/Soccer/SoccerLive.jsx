import { useState } from "react";
import Nba2k from "./Nba2k";
import { FaBasketballBall, FaVolleyballBall } from "react-icons/fa";
import { SiFifa } from "react-icons/si";
import { PiBoxingGloveFill, PiCricketLight } from "react-icons/pi";
import { GiHockey, GiTennisRacket } from "react-icons/gi";
import { IoFootball } from "react-icons/io5";
import LiveCardSoccer from "./LiveCardSoccer";
import GunMan from "./GunMan";
import DotaIcon from "./DotaIcon";
import FifaIcon from "./FifaIcon";
import { LiaHorseHeadSolid } from "react-icons/lia";

const SoccerLive = () => {
  const [popular, SetPopular] = useState("Soccer");
  return (
    <>
      <div className="mt-5">
        <div className="mx-auto">
          <div className="w-full left-0 h-[30px] rounded-lg flex items-center justify-start gap-2 font-bold text-gray-400 text-[14px]  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
            <div
              onClick={() => SetPopular("Soccer")}
              className={`w-[50%] rounded-xl ${
                popular === "Soccer"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <IoFootball className="w-[20px] h-[20px] " />
                <button className="">Soccer</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("FIFA")}
              className={`w-[50%] rounded-xl ${
                popular === "FIFA"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <div>
                  <SiFifa className="w-[16px] h-[16px] " />
                </div>
                <button className="">FIFA</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Tennis")}
              className={`w-[50%] rounded-xl ${
                popular === "Tennis"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2">
                <div>
                  <GiTennisRacket className="w-[16px] h-[16px] " />
                </div>
                <button className="">Tennis</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Basketball")}
              className={`w-[50%] rounded-xl ${
                popular === "Basketball"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <FaBasketballBall className="w-[16px] h-[16px] " />
                <button className="">Basketball</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Counter-Strick")}
              className={`w-[70%] rounded-2xl ${
                popular === "Counter-Strick"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <GunMan />
                <button className="">Counter-Strick</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Dota2")}
              className={`w-[50%] rounded-xl ${
                popular === "Dota2"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <DotaIcon />
                <button className="">Dota 2</button>
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
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <PiCricketLight className="w-[20px] h-[20px] " />
                <button className="">Cricket</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Volleyball")}
              className={`w-[60%] rounded-xl ${
                popular === "Volleyball"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <FaVolleyballBall className="w-[25px] h-[25px] " />
                <button className="">Volleyball</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Ice-Hockey")}
              className={`w-[85%] rounded-xl ${
                popular === "Ice-Hockey"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2">
                <GiHockey className="w-[30px] h-[30px] " />
                <button className="">Ice-Hockey</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("NBA2K")}
              className={`w-[40%] rounded-xl px-3 ${
                popular === "NBA2K"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 ">
                <div>
                  <Nba2k className="w-[px] h-[0px] " />
                </div>
                <button className="">NBA2K</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("FIFA:Volt")}
              className={`w-[40%] rounded-xl px-3 ${
                popular === "FIFA:Volt"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 ">
                <div>
                  <FifaIcon />
                </div>
                <button className="">FIFA:Volta</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("E-Horse Racing")}
              className={`w-[40%] rounded-xl px-3 ${
                popular === "E-Horse Racing"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 ">
                <div>
                  <LiaHorseHeadSolid className="w-[30px] h-[30px] " />
                </div>
                <button className="">E-Horse Racing</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Penalty Shootout")}
              className={`w-[40%] rounded-xl px-3 ${
                popular === "Penalty Shootout"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 ">
                <div>
                  <FifaIcon />
                </div>
                <button className="">Penalty Shootout</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("eFighting")}
              className={`w-[40%] rounded-xl px-3 ${
                popular === "eFighting"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 ">
                <div>
                  <PiBoxingGloveFill className="w-[30px] h-[30px] " />
                </div>
                <button className="">eFighting</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("e-Cricket")}
              className={`w-[50%] rounded-xl ${
                popular === "e-Cricket"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <PiCricketLight className="w-[20px] h-[20px] " />
                <button className="">e-Cricket</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("Super-Over-Cricket")}
              className={`w-[50%] rounded-xl ${
                popular === "Super-Over-Cricket"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <PiCricketLight className="w-[20px] h-[20px] " />
                <button className="">Super Over Cricket</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("e-Basketball")}
              className={`w-[50%] rounded-xl ${
                popular === "e-Basketball"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <FaBasketballBall className="w-[16px] h-[16px] " />
                <button className="">eBasketball</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("eSoccer")}
              className={`w-[50%] rounded-xl ${
                popular === "eSoccer"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                <div>
                  <SiFifa className="w-[16px] h-[16px] " />
                </div>
                <button className="">eSoccer</button>
              </div>
            </div>

            <div
              onClick={() => SetPopular("e Ice Hockey")}
              className={`w-[85%] rounded-xl ${
                popular === "e Ice Hockey"
                  ? "bg-green-500 text-black font-bold px-2"
                  : "text-white  bg-[#3a4142]"
              }`}
            >
              <div className="flex items-center justify-start gap-2 text-center my-1 px-2">
                <GiHockey className="w-[30px] h-[30px] " />
                <button className="">e Ice Hockey</button>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}{" "}
        <div>
          {popular === "Soccer" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "FIFA" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Tennis" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Basketball" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Counter-Strick" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Dota2" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Cricket" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Volleyball" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Ice-Hockey" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "NBA2K" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "FIFA:Volt" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "E-Horse Racing" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Penalty Shootout" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "eFighting" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "e-Cricket" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "Super-Over-Cricket" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "e-Basketball" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "eSoccer" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
          {popular === "e Ice Hockey" && (
            <div>
              {" "}
              <LiveCardSoccer />{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SoccerLive;
