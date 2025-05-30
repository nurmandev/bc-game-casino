import { useState } from "react";
import { MdWindow } from "react-icons/md";
import {
  FaBasketballBall,
  FaRegWindowMaximize,
  FaVolleyballBall,
} from "react-icons/fa";
import { MdLineStyle } from "react-icons/md";
import bg243857 from "../../../../public/Sports/2438574097458925572.jpeg";
import bg2238011 from "../../../../public/Sports/2238011734688407561.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import winnerimage from "../../../../public/Sports/winner-tickets-fb6bd542 (1).webp";
import { PiBoxingGloveFill, PiCricketLight } from "react-icons/pi";
import { IoFootball } from "react-icons/io5";
import { GiHockey, GiTennisRacket } from "react-icons/gi";
import { SiFifa } from "react-icons/si";
import Nba2k from "./Nba2k";
import PopularTab from "./PopularTab";
import { FaCaretDown } from "react-icons/fa";
import LiveCardSoccer from "./LiveCardSoccer";
import GunMan from "./GunMan";
import DotaIcon from "./DotaIcon";
import FifaIcon from "./FifaIcon";
import { LiaHorseHeadSolid } from "react-icons/lia";
import BeetsFeed from "./BeetsFeed";
import Footer from "../../../components/Footer";

const SoccerHome = () => {
  const [deposit, SetDeposit] = useState("HIGHLIGHTS");
  const [popular, SetPopular] = useState("Cricket");

  const matches = [
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
    {
      id: 1,
      league: "Serie A",
      country: "Italy",
      date: "Feb 22, 01:15",
      teams: [
        {
          name: "US Lecce",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2689.png",
        },
        {
          name: "Udinese Calcio",
          logo: "https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/2695.png",
        },
      ],
      odds: [
        { label: "1", value: 2.9 },
        { label: "Draw", value: 3.1 },
        { label: "2", value: 2.55 },
      ],
      bannerImage: bg2238011,
    },
  ];

  const settings = {
    dots: false,
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2500,
    cssEase: "linear", 
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  

  //Bet feeds
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [eventBuilder, setEventBuilder] = useState("143");
  const [allSports, setAllSports] = useState(" All Sports");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [allBetsFeed, setAllBetsFeed] = useState("All");

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
    <div className="w-full overflow-hidden">
      <div className="w-[100%] lg:mt-20 sm:mt-36">
        <div className="lg:w-[40%] md:w-full h-[40px] pl-5 rounded-lg flex items-center justify-around gap-4 font-bold text-gray-400 text-[14px]  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
          <div
            onClick={() => SetDeposit("HIGHLIGHTS")}
            className={`w-[50%] h-[40px] rounded-xl px-3 ${
              deposit === "HIGHLIGHTS"
                ? "bg-[#3a4142] text-yellow-600 font-bold px-2"
                : " hover:text-white bg-[#282c2c] "
            }`}
          >
            <div className="flex items-center justify-start gap-2 text-center my-3 ">
              <MdWindow className="" />
              <button className="">HIGHLIGHTS</button>
            </div>
          </div>
          <div
            onClick={() => SetDeposit("EVENT BUILDER")}
            className={`w-[60%] h-[40px] rounded-xl px-3 ${
              deposit === "EVENT BUILDER"
                ? "bg-[#3a4142] px-2 text-purple-500 font-bold"
                : " hover:text-white  bg-[#282c2c]"
            }`}
          >
            <div className="flex items-center justify-start gap-2 text-center my-3 ">
              <FaRegWindowMaximize />
              <button>EVENT BUILDER</button>
            </div>
          </div>
          <div
            onClick={() => SetDeposit("BETS FEED")}
            className={`w-[50%] h-[40px] rounded-xl px-3 ${
              deposit === "BETS FEED"
                ? "bg-[#3a4142] px-2 text-blue-500 font-bold"
                : " hover:text-white  bg-[#282c2c]"
            }`}
          >
            <div className="flex items-center justify-start gap-2 text-center my-3 ">
              <MdLineStyle />
              <button>BETS FEED</button>
            </div>
          </div>
        </div>
        <div>
          {deposit === "HIGHLIGHTS" && (
            <div className="w-[97%] mx-auto mt-5">
              {/* hero section */}
              <div className="flex justify-center">
                <div className="w-full  text-white rounded-lg">
                  <div
                    className="flex flex-col md:flex-row items-center md:items-start rounded-lg p-4"
                    style={{
                      backgroundImage: `url(${bg243857})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "auto",
                    }}
                  >
                    <div className="md:ml-8 w-full md:w-1/2 mt-10">
                      {/* League Title */}
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-2">⚽</span>
                          Premier League
                        </div>
                        <span className="text-sm text-gray-500">
                          Feb 22, 01:30
                        </span>
                      </div>

                      {/* Teams Section */}
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex flex-col items-center">
                          <img
                            src="https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/31.png"
                            alt="Leicester City"
                            className="w-14 h-14 object-contain"
                          />
                          <span className="text-sm mt-2">Leicester City</span>
                        </div>
                        <div className="text-2xl font-bold">vs</div>
                        <div className="flex flex-col items-center">
                          <img
                            src="https://d1bvoel1nv172p.cloudfront.net/competitors/images/normal/medium/50.png"
                            alt="Brentford FC"
                            className="w-14 h-14 object-contain"
                          />
                          <span className="text-sm mt-2">Brentford FC</span>
                        </div>
                      </div>

                      {/* Betting Odds */}
                      <div className="w-full mt-4 flex items-center gap-3 justify-around">
                        <div className="w-[33.33%] flex items-center justify-between bg-gray-800 px-2 py-1  rounded text-center">
                          <span className="block font-bold">1</span>
                          <span className="text-yellow-400">3.5</span>
                        </div>
                        <div className="w-[33.33%] flex items-center justify-between bg-gray-800 px-2 py-1  rounded text-center">
                          <span className="block font-bold">Draw</span>
                          <span className="text-yellow-400">3.65</span>
                        </div>
                        <div className="w-[33.33%] flex items-center justify-between bg-gray-800 px-2 py-1  rounded text-center">
                          <span className="block font-bold">2</span>
                          <span className="text-yellow-400">2.01</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* slide card */}
              <div className="slider-container w-[100%] mt-5 ">
                <Slider {...settings}>
                  {matches.map((match, index) => (
                    <div key={index} className=" ">
                      <div
                        className=" p-4 rounded-lg shadow-lg bg-cover  bg-center"
                        style={{
                          backgroundImage: `url(${bg2238011})`,
                          backgroundPosition: "center",
                          width: "400px",
                        }}
                      >
                        <div className="flex items-center justify-between text-white font-semibold">
                          <div className="flex items-center justify-start gap-1">
                            <span className="block text-sm">
                              {match.country}
                            </span>
                            <span className="block text-sm">
                              {match.league}
                            </span>
                          </div>
                          <div className="match-details mt-2 text-gray-200">
                            <span className="text-sm">{match.date}</span>
                          </div>
                        </div>

                        <div className="teams flex justify-between items-center mt-3">
                          {match.teams.map((team, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center gap-2"
                            >
                              <img
                                src={team.logo}
                                alt={team.name}
                                className="w-8 h-8 object-contain"
                              />
                              <span className="text-white text-sm">
                                {team.name}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="w-full odds flex items-center gap-2 justify-around mt-4 text-white">
                          {match.odds.map((odd, idx) => (
                            <div
                              key={idx}
                              className="odd flex items-center justify-between w-[33.33%] bg-gray-400 px-2 rounded-lg "
                            >
                              <span className="outcome text-sm font-bold">
                                {odd.label}
                              </span>
                              <span className="value text-lg">{odd.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Popular Card */}
              <div className="">
                <div className="flex items-center justify-start gap-3 my-3">
                  <img
                    src={winnerimage}
                    alt=""
                    className="w-[38px] h-[50px] "
                  />
                  <strong className="text-[20px]  ">Popular</strong>
                </div>
                {/* popular card ka optional section */}
                <div className="w-[75%] left-0 h-[30px] px-5 rounded-lg flex items-center justify-start gap-2 font-bold text-gray-400 text-[14px]  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
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
                    onClick={() => SetPopular("E-Cricket")}
                    className={`w-[60%] rounded-xl ${
                      popular === "E-Cricket"
                        ? "bg-green-500 text-black font-bold px-2"
                        : "text-white  bg-[#3a4142]"
                    }`}
                  >
                    <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                      <PiCricketLight className="w-[20px] h-[20px] " />
                      <button className="">E-Cricket</button>
                    </div>
                  </div>

                  <div
                    onClick={() => SetPopular("Soccer")}
                    className={`w-[50%] rounded-xl ${
                      popular === "Soccer"
                        ? "bg-green-500 text-black font-bold px-2"
                        : "text-white  bg-[#3a4142]"
                    }`}
                  >
                    <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                      <IoFootball className="w-[16px] h-[16px] " />
                      <button className="">Soccer</button>
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
                    onClick={() => SetPopular("Super Over Cricket")}
                    className={`w-[85%] rounded-xl ${
                      popular === "Super Over Cricket"
                        ? "bg-green-500 text-black font-bold px-2"
                        : "text-white  bg-[#3a4142]"
                    }`}
                  >
                    <div className="flex items-center justify-start gap-2 text-center my-1 px-2">
                      <PiCricketLight className="w-[20px] h-[20px] " />
                      <button className="">Super Over Cricket</button>
                    </div>
                  </div>

                  <div
                    onClick={() => SetPopular("FIFA:Volta")}
                    className={`w-[50%] rounded-xl ${
                      popular === "FIFA:Volta"
                        ? "bg-green-500 text-black font-bold px-2"
                        : "text-white  bg-[#3a4142]"
                    }`}
                  >
                    <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                      <div>
                        <SiFifa className="w-[16px] h-[16px] " />
                      </div>
                      <button className="">FIFA:Volta</button>
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
                </div>
                <div>
                  {popular === "Cricket" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "E-Cricket" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "Soccer" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "Tennis" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "Super Over Cricket" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "FIFA:Volta" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "Basketball" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                  {popular === "NBA2K" && (
                    <div>
                      <PopularTab />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {deposit === "EVENT BUILDER" && (
            <div>
              {" "}
              <div className="flex items-center justify-start gap-2">
                <div className="w-52 mt-3 p-4 rounded">
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex justify-between items-center bg-green-500 p-2 rounded-md shadow-md w-full text-white"
                    >
                      <span className="text-black font-semibold">
                        All Sports
                      </span>

                      <FaCaretDown
                        className={`w-4 h-4 text-black transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="absolute bg-[#292d2e] h-80 shadow-md rounded-md mt-1 w-[400px] px-4 py-3 overflow-y-scroll custom-scrollbar hide-scrollbar">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            onClick={() => setAllSports(" All Sports")}
                            className={`w-full p-1 rounded-2xl cursor-pointer ${
                              allSports === " All Sports"
                                ? "bg-green-500 text-black font-bold px-2"
                                : "text-white bg-[#3a4142]"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 text-center my-1 px-2">
                              <div>All Sports</div>
                              <div className="">
                                <input
                                  type="checkbox"
                                  id="customCheckbox"
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                  className="w-5 h-5 cursor-pointer accent-green-500"
                                />
                                <label
                                  htmlFor="customCheckbox"
                                  className="text-white cursor-pointer"
                                >
                                  {isChecked ? "" : ""}
                                </label>
                              </div>
                            </div>
                          </div>

                          <div
                            onClick={() => setAllSports("Soccer")}
                            className={`w-full p-1 rounded-2xl cursor-pointer ${
                              allSports === "Soccer"
                                ? "bg-green-500 text-black font-bold px-2"
                                : "text-white bg-[#3a4142]"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 text-center my-1 px-2">
                              <div className="flex items-center justify-start gap-2">
                                <IoFootball />
                                <div>Soccer</div>
                              </div>
                              <div className="">
                                <input
                                  type="checkbox"
                                  id="customCheckbox"
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                  className="w-5 h-5 cursor-pointer accent-green-500"
                                />
                                <label
                                  htmlFor="customCheckbox"
                                  className="text-white cursor-pointer"
                                >
                                  {isChecked ? "" : ""}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* 2nd */}
                <div className="w-52 mt-3 p-4 rounded">
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen1(!isOpen1)}
                      className="flex justify-between items-center bg-green-500 p-2 rounded-md shadow-md w-full text-white"
                    >
                      <span className="text-black font-semibold flex items-center gap-2 ">
                        <div className="  text-black font-semibold text-sm">
                          3h
                        </div>
                        <div className="text-black font-semibold  bg-slate-400 px-2 pt-1 rounded-full text-sm">
                          143
                        </div>
                      </span>
                      <FaCaretDown
                        className={`w-4 h-4 text-black transition-transform ${
                          isOpen1 ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen1 && (
                      <div className="absolute bg-[#292d2e] h-40 shadow-md rounded-md mt-1 w-[400px] px-4 py-3 overflow-y-scroll custom-scrollbar hide-scrollbar">
                        <div className="flex flex-col items-center gap-5">
                          {/* First Row */}
                          <div className="flex items-center justify-between gap-10">
                            {[
                              { id: "143", label: "3h" },
                              { id: "873", label: "24h" },
                            ].map((item) => (
                              <div
                                key={item.id}
                                onClick={() => setEventBuilder(item.id)}
                                className={`w-[150px] p-1 rounded-2xl ${
                                  eventBuilder === item.id
                                    ? "bg-green-500 text-black font-bold px-2"
                                    : "text-white bg-[#3a4142]"
                                } cursor-pointer`}
                              >
                                <div className="flex items-center gap-2 text-center my-1 px-2">
                                  <div className="text-black font-semibold text-sm">
                                    {item.label}
                                  </div>
                                  <div className="text-black font-semibold bg-slate-400 px-2 pt-1 rounded-full text-sm">
                                    {item.id}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Second Row (Avoid Duplicates) */}
                          <div className="flex items-center justify-between gap-10">
                            {[
                              { id: "256", label: "12h" },
                              { id: "512", label: "48h" },
                            ].map((item) => (
                              <div
                                key={item.id}
                                onClick={() => setEventBuilder(item.id)}
                                className={`w-[150px] p-1 rounded-2xl ${
                                  eventBuilder === item.id
                                    ? "bg-green-500 text-black font-bold px-2"
                                    : "text-white bg-[#3a4142]"
                                } cursor-pointer`}
                              >
                                <div className="flex items-center gap-2 text-center my-1 px-2">
                                  <div className="text-black font-semibold text-sm">
                                    {item.label}
                                  </div>
                                  <div className="text-black font-semibold bg-slate-400 px-2 pt-1 rounded-full text-sm">
                                    {item.id}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*Event Builder Card */}
              <div className="w-[98%] mx-auto">
                <LiveCardSoccer />
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
                  Although every effort is made to ensure data displayed on our
                  site is accurate, this data is for information purposes and
                  should be used as a guide only. In the event of any particular
                  information being incorrect, we assume no liability for it.
                </p>
              </div>
            </div>
          )}
          {deposit === "BETS FEED" && (
            <div>
              <>
                <div className="mt-5">
                  <div className="mx-auto">
                    <div className="w-full left-0 h-[30px] px-5 rounded-lg flex items-center justify-start gap-2 font-bold text-gray-400 text-[14px]  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
                      <div
                        onClick={() => setAllBetsFeed("All")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "All"
                            ? "bg-green-500 text-black font-bold px-2"
                            : "text-white  bg-[#3a4142]"
                        }`}
                      >
                        <div className="flex items-center justify-start gap-2 text-center my-1 px-2 ">
                          <IoFootball className="w-[20px] h-[20px] " />
                          <button className="">All</button>
                        </div>
                      </div>

                      <div
                        onClick={() => setAllBetsFeed("Soccer")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Soccer"
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
                        onClick={() => setAllBetsFeed("FIFA")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "FIFA"
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
                        onClick={() => setAllBetsFeed("Tennis")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Tennis"
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
                        onClick={() => setAllBetsFeed("Basketball")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Basketball"
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
                        onClick={() => setAllBetsFeed("Counter-Strick")}
                        className={`w-[70%] rounded-2xl ${
                          allBetsFeed === "Counter-Strick"
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
                        onClick={() => setAllBetsFeed("Dota2")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Dota2"
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
                        onClick={() => setAllBetsFeed("Cricket")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Cricket"
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
                        onClick={() => setAllBetsFeed("Volleyball")}
                        className={`w-[60%] rounded-xl ${
                          allBetsFeed === "Volleyball"
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
                        onClick={() => setAllBetsFeed("Ice-Hockey")}
                        className={`w-[85%] rounded-xl ${
                          allBetsFeed === "Ice-Hockey"
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
                        onClick={() => setAllBetsFeed("NBA2K")}
                        className={`w-[40%] rounded-xl px-3 ${
                          allBetsFeed === "NBA2K"
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
                        onClick={() => setAllBetsFeed("FIFA:Volt")}
                        className={`w-[40%] rounded-xl px-3 ${
                          allBetsFeed === "FIFA:Volt"
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
                        onClick={() => setAllBetsFeed("E-Horse Racing")}
                        className={`w-[40%] rounded-xl px-3 ${
                          allBetsFeed === "E-Horse Racing"
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
                        onClick={() => setAllBetsFeed("Penalty Shootout")}
                        className={`w-[40%] rounded-xl px-3 ${
                          allBetsFeed === "Penalty Shootout"
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
                        onClick={() => setAllBetsFeed("eFighting")}
                        className={`w-[40%] rounded-xl px-3 ${
                          allBetsFeed === "eFighting"
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
                        onClick={() => setAllBetsFeed("e-Cricket")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "e-Cricket"
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
                        onClick={() => setAllBetsFeed("Super-Over-Cricket")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "Super-Over-Cricket"
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
                        onClick={() => setAllBetsFeed("e-Basketball")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "e-Basketball"
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
                        onClick={() => setAllBetsFeed("eSoccer")}
                        className={`w-[50%] rounded-xl ${
                          allBetsFeed === "eSoccer"
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
                        onClick={() => setAllBetsFeed("e Ice Hockey")}
                        className={`w-[85%] rounded-xl ${
                          allBetsFeed === "e Ice Hockey"
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
                    {allBetsFeed === "All" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Soccer" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "FIFA" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Tennis" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Basketball" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Counter-Strick" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Dota2" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Cricket" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Volleyball" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Ice-Hockey" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "NBA2K" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "FIFA:Volt" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "E-Horse Racing" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Penalty Shootout" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "eFighting" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "e-Cricket" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "Super-Over-Cricket" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "e-Basketball" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "eSoccer" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
                    {allBetsFeed === "e Ice Hockey" && (
                      <div>
                        <BeetsFeed />
                      </div>
                    )}
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
                      Although every effort is made to ensure data displayed on
                      our site is accurate, this data is for information
                      purposes and should be used as a guide only. In the event
                      of any particular information being incorrect, we assume
                      no liability for it.
                    </p>
                  </div>
                </div>
              </>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SoccerHome;
