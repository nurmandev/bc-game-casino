import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { IoBarChartOutline } from "react-icons/io5";
import EhorseIcon from "./EhorseIcon";
import {
  GiAbstract062,
  GiConfrontation,
  GiHorseHead,
  GiRunningNinja,
} from "react-icons/gi";
import {
  FaBasketballBall,
  FaDiceD20,
  FaHandRock,
  FaHeadset,
} from "react-icons/fa";
import FifaIcon from "./FifaIcon";
import GunMan from "./GunMan";
import DotaIcon from "./DotaIcon";
import Nba2k from "./Nba2k";
import { FaHorse } from "react-icons/fa6";
import TenisIcon from "./TenisIcon";
import { SiMajorleaguehacking } from "react-icons/si";
import { TbCricket } from "react-icons/tb";
import { MdOutlineSportsHockey } from "react-icons/md";
import { PiCricketBold } from "react-icons/pi";
import { IoFootball } from "react-icons/io5";

const CareSoccerDown = () => {
  const [deposit, SetDeposit] = useState("Sports");
  // const [InformationIcon, SetInformationIcon] = useState("");
  const [Earth, setEarth] = useState("Horese Racing");
  const [eSportsServices, setESportsServices] = useState("Esports Hub");
  return (
    <div>
      <div className="w-[80%] mx-auto flex items-center justify-center gap-3">
        <div className="bg-[rgb(41,45,46)] w-[50%]  h-[40px] px-5 rounded-lg flex items-center justify-center gap-4 font-bold text-gray-400 text-[14px]  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
          <div
            onClick={() => SetDeposit("Sports")}
            className={`w-[50%] p-2 rounded-xl px-3 text-center ${
              deposit === "Sports"
                ? "bg-[#3a4142] text-white font-bold px-2"
                : " bg-[#282c2c] "
            }`}
          >
            <button className="">Sports</button>
          </div>
          <div
            onClick={() => SetDeposit("Esports")}
            className={`w-[50%] p-2 rounded-xl px-3 text-center ${
              deposit === "Esports"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "  bg-[#282c2c]"
            }`}
          >
            <button>Esports</button>
          </div>
          <div
            onClick={() => SetDeposit("Racing")}
            className={`w-[50%] p-2 rounded-xl px-3 text-center ${
              deposit === "Racing"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "   bg-[#282c2c]"
            }`}
          >
            <button>Racing</button>
          </div>
        </div>

        {/* <div className="w-[40px] h-[40px] bg-[rgb(41,45,46)] rounded-lg flex items center justify-center ">
          <button
            onClick={() => SetInformationIcon((prev) => !prev)}
            className=""
            type="button"
          >
            <IoBarChartOutline
              className={`w-4 h-4 text-gray-500 transition-transform ${
                SetInformationIcon ? "rotate-180" : ""
              }`}
            />
          </button>
          {InformationIcon && (
            <>
              <div
                className="sm:w-[350px] lg:w-[1200px] md:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                  onClick={() => SetInformationIcon(false)}
                >
                  <IoMdClose className="text-[#a4aeb1]" />
                </button>

                <div className="p-10">
                  <CareSoccerDown />
                </div>
              </div>
            </>
          )}
        </div> */}
      </div>

      <div>
        {/* sports */}
        {deposit === "Sports" && (
          <div>
            {" "}
            <div className="w-[80%] mx-auto flex flex-wrap items-center justify-start mt-10 gap-10 text-xl overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
              <div
                onClick={() => setESportsServices("UEFA Champions League")}
                className={`rounded-xl p-1 px-2 flex items-center justify-center  ${
                  eSportsServices === "UEFA Champions League"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-2 text-sm hover:text-green-500">
                  <img src="/Sports/international.svg" alt="" />
                  <button className="">UEFA Champions League</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Soccer")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Soccer"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <IoFootball/>
                  <button className="">Soccer</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("FIFA")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "FIFA"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FifaIcon />
                  <button>FIFA</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Tennis")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Tennis"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <TenisIcon/>
                  <button>Tennis</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Counter Strick")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Counter Strick"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>NBA 2K</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("FIFA:Volta")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "FIFA:Volta"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FifaIcon />
                  <button className="">FIFA:Volta</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eHorseRuning")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eHorseRuning"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FaHorse />
                  <button className="">eHorseRuning</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Penalty Shootout")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Penalty Shootout"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FifaIcon />
                  <button className="">Penalty Shootout</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eFighting")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eFighting"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FaHandRock />
                  <button className="">eFighting</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>BlitzBasketball</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <TenisIcon />
                  <button>eTennis</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <SiMajorleaguehacking />
                  <button>League of Legends</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FaBasketballBall />
                  <button>eBasketball</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Valorant")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Valorant"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <GiAbstract062 />
                  <button>Valorant</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Mobile Legends")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Mobile Legends"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <GiConfrontation />
                  <button>Mobile Legends</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eCricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eCricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <TbCricket />
                  <button>eCricket</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eSoccer")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eSoccer"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FifaIcon />
                  <button>eSoccer</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eBasketBall")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eBasketBall"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>eBasketBall</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Counter Strick")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Counter Strick"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <MdOutlineSportsHockey />
                  <button>e-IceHockey</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eCricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eCricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FaDiceD20 />
                  <button>eCricket</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Super Over Cricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Super Over Cricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <PiCricketBold />
                  <button>Super Over Cricket</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* esports */}
        {deposit === "Esports" && (
          <div>
            <div className="w-[80%] mx-auto flex flex-wrap items-center justify-start mt-10 gap-10 text-xl overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
              <div
                onClick={() => setESportsServices("Esports Hub")}
                className={`rounded-xl p-1 px-2 flex items-center justify-center  ${
                  eSportsServices === "Esports Hub"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FaHeadset />
                  <button className="">Esports Hub</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("FIFA")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "FIFA"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FifaIcon />
                  <button className="">FIFA</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Counter Strick")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Counter Strick"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <GunMan />
                  <button>Counter Strick</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Dota 2")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Dota 2"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <DotaIcon />
                  <button>Dota 2</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Counter Strick")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Counter Strick"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>NBA 2K</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("FIFA:Volta")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "FIFA:Volta"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FifaIcon />
                  <button className="">FIFA:Volta</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eHorseRuning")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eHorseRuning"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FaHorse />
                  <button className="">eHorseRuning</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Penalty Shootout")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Penalty Shootout"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FifaIcon />
                  <button className="">Penalty Shootout</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eFighting")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eFighting"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 hover:text-green-500">
                  <FaHandRock />
                  <button className="">eFighting</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>BlitzBasketball</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <TenisIcon />
                  <button>eTennis</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("BlitzBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "BlitzBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <SiMajorleaguehacking />
                  <button>League of Legends</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eBasketball")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eBasketball"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FaBasketballBall />
                  <button>eBasketball</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Valorant")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Valorant"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <GiAbstract062 />
                  <button>Valorant</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Mobile Legends")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Mobile Legends"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <GiConfrontation />
                  <button>Mobile Legends</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eCricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eCricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <TbCricket />
                  <button>eCricket</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eSoccer")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eSoccer"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FifaIcon />
                  <button>eSoccer</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eBasketBall")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eBasketBall"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <Nba2k />
                  <button>eBasketBall</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Counter Strick")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Counter Strick"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <MdOutlineSportsHockey />
                  <button>e-IceHockey</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("eCricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "eCricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <FaDiceD20 />
                  <button>eCricket</button>
                </div>
              </div>

              <div
                onClick={() => setESportsServices("Super Over Cricket")}
                className={`rounded-xl p-2 px-2 flex items-center justify-center ${
                  eSportsServices === "Super Over Cricket"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm hover:text-green-500">
                  <PiCricketBold />
                  <button>Super Over Cricket</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* racing */}
        {deposit === "Racing" && (
          <div>
            {" "}
            <div className="flex items-center justify-start mt-10 gap-20 overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
              <div
                onClick={() => setEarth("Horese Racing")}
                className={`rounded-xl p-1 px-2 flex items-center justify-center ${
                  Earth === "Horese Racing"
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
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
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
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
                    ? "text-green-500 font-bold px-2"
                    : " text-gray-400"
                }`}
              >
                <div className="flex items-center justify-start gap-1 text-sm">
                  <GiHorseHead />
                  <button>Harness</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareSoccerDown;
