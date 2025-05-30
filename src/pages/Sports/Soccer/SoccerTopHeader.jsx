import { ImHome } from "react-icons/im";
import LiveIcon from "./LiveIcon";
import { IoStarOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";
import { IoFootball } from "react-icons/io5";
import FifaIcon from "./FifaIcon";
import TenisIcon from "./TenisIcon";
import { FaBasketballBall, FaCaretDown } from "react-icons/fa";
import GunMan from "./GunMan";
import DotaIcon from "./DotaIcon";
import AmericanFootballIcon from "./AmericanFootballIcon";
import BaseBallIcon from "./BaseBallIcon";
import { PiCricketLight } from "react-icons/pi";
import { FaVolleyballBall } from "react-icons/fa";
import { GiHockey } from "react-icons/gi";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { PiBoxingGloveFill } from "react-icons/pi";
import { LiaTableTennisSolid } from "react-icons/lia";
import Nba2k from "./Nba2k";
import EhorseIcon from "./EhorseIcon";
import { VscSearch } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CareSoccerDown from "./CareSoccerDown";

const SoccerTopHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const Soccer = queryParams.get("bt-path") || "ImHome";

  const [informationIcon, setInformationIcon] = useState(false);

  const handlePath = (path) => {
    navigate(`?bt-path=${path}`);
  };

  const navigationItems = [
    { path: "ImHome", icon: <ImHome className="w-[28px] h-[28px]" /> },
    { path: "LiveIcon", icon: <LiveIcon /> },
    {
      path: "IoStarOutline",
      icon: <IoStarOutline className="w-[28px] h-[28px]" />,
    },
    { path: "CgCopy", icon: <CgCopy className="w-[28px] h-[28px]" /> },
    {
      path: "Earth",
      icon: (
        <img
          src="/public/Sports/international.svg"
          alt="International"
          className="w-[28px] h-[28px]"
        />
      ),
    },
    { path: "IoFootball", icon: <IoFootball className="w-[32px] h-[32px]" /> },
    { path: "FifaIcon", icon: <FifaIcon /> },
    { path: "TenisIcon", icon: <TenisIcon /> },
    {
      path: "FaBasketballBall",
      icon: <FaBasketballBall className="w-[22px] h-[22px]" />,
    },
    { path: "GunMan", icon: <GunMan /> },
    { path: "DotaIcon", icon: <DotaIcon /> },
    { path: "AmericanFootballIcon", icon: <AmericanFootballIcon /> },
    { path: "BaseBallIcon", icon: <BaseBallIcon /> },
    {
      path: "PiCricketLight",
      icon: <PiCricketLight className="w-[32px] h-[32px]" />,
    },
    {
      path: "FaVolleyballBall",
      icon: <FaVolleyballBall className="w-[25px] h-[25px]" />,
    },
    { path: "GiHockey", icon: <GiHockey className="w-[30px] h-[30px]" /> },
    {
      path: "LiaHorseHeadSolid",
      icon: <LiaHorseHeadSolid className="w-[30px] h-[30px]" />,
    },
    {
      path: "PiBoxingGloveFill",
      icon: <PiBoxingGloveFill className="w-[30px] h-[30px]" />,
    },
    {
      path: "LiaTableTennisSolid",
      icon: <LiaTableTennisSolid className="w-[30px] h-[30px]" />,
    },
    { path: "Nba2k", icon: <Nba2k /> },
    { path: "EhorseIcon", icon: <EhorseIcon /> },
    { path: "VscSearch", icon: <VscSearch className="w-[25px] h-[25px]" /> },
  ];

  return (
    <div className="overflow-auto">
      <div className="w-full lg:mt-16 overflow-hidden">
        <div className="w-full flex items-center justify-start gap-6 bg-[#323738] lg:mt-2 md:mt-2 sm:mt-3  py-4 px-5 fixed top-[60px] z-10 overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePath(item.path)}
              className={`${
                Soccer === item.path ? "text-green-600" : "text-[#b0bbbe]"
              }`}
            >
              {item.icon}
            </div>
          ))}

          <div>
            <button
              onClick={() => setInformationIcon((prev) => !prev)}
              className=""
              type="button"
            >
              <FaCaretDown
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  informationIcon ? "rotate-180" : ""
                }`}
              />
            </button>
            {informationIcon && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30"></div>
                <div
                  className="sm:w-[350px] lg:w-[1200px] md:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl overflow-y-scroll custom-scrollbar whitespace-nowrap hide-scrollbar"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <button
                    className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg"
                    onClick={() => setInformationIcon(false)}
                  >
                    <IoMdClose className="text-[#a4aeb1]" />
                  </button>

                  <div className="p-10">
                    <CareSoccerDown />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerTopHeader;
