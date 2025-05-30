import { useState } from "react";

import Marquee from "react-fast-marquee";
import {
  BCExclusive,
  BCOrigin,
  BingoGame,
  HoteGame,
  LiveCasino,
  LiveSports,
  RecentAllImg,
  Sports,
} from "../HomePage/HomeData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaPlay, FaUser } from "react-icons/fa6";
import { GiBeachBall, GiCardRandom, GiHorseHead } from "react-icons/gi";
import { ImTicket } from "react-icons/im";
import { BsSuitClub } from "react-icons/bs";
import { MdCandlestickChart } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import UpcomingLottery from "../HomePage/UpcomingLottery ";
import BetSlip from "../HomePage/BetSlip";
import { RxCross2 } from "react-icons/rx";
import Footer from "../../components/Footer";
import HighRoller from "../LatestBetAndRace/HighRoller";
import WagerContest from "../LatestBetAndRace/WagerContest";
import LatestBets from "./LatestBets";
import HomeSlideCards from "./HomeSlideCards";

const Home = () => {
  const [active, setActive] = useState("All");
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [latestGameRace, setLatestGameRace] = useState("Latest Bets");

  const handleItemClick = (item) => {
    setSelectedData(item);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedData(null);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexBCExclusive, setCurrentIndexBCExclusive] = useState(0);
  const [currentIndexSports, setCurrentIndexSports] = useState(0);

  const itemsToShowBCExclusive = 7;
  const itemsToShowSports = 7;

  // Calculate the range of data to show (7 items)
  const itemsToShow = 7;
  // Next and Prev functions
  const nextSlide = () => {
    if (currentIndex < BCOrigin.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  // Next and Prev functions
  const nextSlideBCExclusive = () => {
    if (currentIndexBCExclusive < BCExclusive.length - itemsToShowBCExclusive) {
      setCurrentIndexBCExclusive((prevIndex) => prevIndex + 1);
    }
  };
  const prevSlideBCExclusive = () => {
    if (currentIndexBCExclusive > 0) {
      setCurrentIndexBCExclusive((prevIndex) => prevIndex - 1);
    }
  };

  // Next and Prev functions
  const nextSlideSports = () => {
    if (currentIndexSports < Sports.length - itemsToShowSports) {
      setCurrentIndexSports((prevIndex) => prevIndex + 1);
    }
  };
  const prevSlideSports = () => {
    if (currentIndexSports > 0) {
      setCurrentIndexSports((prevIndex) => prevIndex - 1);
    }
  };

  // sport
  const [currentIndexsport, setCurrentIndexsport] = useState(0);
  const itemsToShowSport = 3;

  const nextSlideSport = () => {
    if (currentIndexsport < Sports.length - itemsToShowSport) {
      setCurrentIndexsport((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlideSport = () => {
    if (currentIndexsport > 0) {
      setCurrentIndexsport((prevIndex) => prevIndex - 1);
    }
  };

  // live casino
  const [currentIndexcasino, setCurrentIndexcasino] = useState(0);
  const itemsToShowcasino = 7;

  const nextSlidecasino = () => {
    if (currentIndexcasino < LiveCasino.length - itemsToShowcasino) {
      setCurrentIndexcasino((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlidecasino = () => {
    if (currentIndexcasino > 0) {
      setCurrentIndexcasino((prevIndex) => prevIndex - 1);
    }
  };

  // live casino
  const [currentIndexbingo, setCurrentIndexbingo] = useState(0);
  const itemsToShowbingo = 7;

  const nextSlidebingo = () => {
    if (currentIndexbingo < BingoGame.length - itemsToShowbingo) {
      setCurrentIndexbingo((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlidebingo = () => {
    if (currentIndexbingo > 0) {
      setCurrentIndexbingo((prevIndex) => prevIndex - 1);
    }
  };

  // live casino
  const [currentIndexhotgame, setCurrentIndexhotgame] = useState(0);
  const itemsToShowhotgame = 7;

  const nextSlidehotgame = () => {
    if (currentIndexhotgame < HoteGame.length - itemsToShowhotgame) {
      setCurrentIndexhotgame((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlidehotgame = () => {
    if (currentIndexhotgame > 0) {
      setCurrentIndexhotgame((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="w-[98%] mx-auto  mt-20 ">
          {/* slide card */}
          <div className="">
            <HomeSlideCards />
          </div>
          <div className="mt-5 ">
            <div className="flex items-center">
              <span className="pulse mr-2"></span>
              <h4 className="text-md font-bold text-primary sm:hidden md:block">
                Recent Big Wins
              </h4>
              <p
                className={`ms-2 cursor-pointer text-sm font-semibold  ${
                  active === "All"
                    ? "text-white border-b-[3px] border-green-400"
                    : "text-secondary"
                }`}
                onClick={() => setActive("All")}
              >
                All
              </p>
              <p
                className={`ms-3 cursor-pointer text-sm font-semibold whitespace-nowrap ${
                  active === "BC Originals"
                    ? "text-white border-b-[3px] border-green-400"
                    : "text-secondary"
                }`}
                onClick={() => setActive("BC Originals")}
              >
                BC Originals
              </p>
              <p
                className={`ms-3 cursor-pointer text-sm font-semibold ${
                  active === "Slots"
                    ? "text-white border-b-[3px] border-green-400"
                    : "text-secondary"
                }`}
                onClick={() => setActive("Slots")}
              >
                Slots
              </p>
              <p
                className={`ms-3 cursor-pointer text-sm font-semibold ${
                  active === "Live"
                    ? "text-white border-b-[3px] border-green-400"
                    : "text-secondary"
                }`}
                onClick={() => setActive("Live")}
              >
                Live
              </p>
              <p
                className={`ms-3 cursor-pointer text-sm font-semibold ${
                  active === "Casino"
                    ? "text-white border-b-[3px] border-green-400"
                    : "text-secondary"
                }`}
                onClick={() => setActive("Casino")}
              >
                Casino
              </p>
            </div>
            <div className="bg-gray-dark rounded-lg p-2 mt-2">
              <div className="flex justify-center items-center">
                {active === "All" && (
                  <Marquee pauseOnHover>
                    {RecentAllImg?.map((item, i) => (
                      <div
                        className="m-1  flex flex-col justify-center items-center"
                        key={i}
                        onClick={() => handleItemClick(item)}
                      >
                        <img
                          className=" w-[50px] rounded-lg"
                          src={item.img}
                          alt="Next.js logo"
                          width={100}
                          height={30}
                        />

                        <div className="flex items-center">
                          <img
                            className=" w-[20px] rounded-lg"
                            src={item.icons}
                            alt="Next.js logo"
                            width={100}
                            height={10}
                          />
                          <span className="text-secondary text-xs font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </span>
                        </div>
                        <p className="text-green-400 text-xs font-bold flex items-center">
                          {" "}
                          ₹{item.price + i}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
                {active === "BC Originals" && (
                  <Marquee>
                    {RecentAllImg?.map((item, i) => (
                      <div
                        className="m-1  flex flex-col justify-center items-center"
                        key={i}
                      >
                        <img
                          className=" w-[50px] rounded-lg"
                          src={item.img}
                          alt="Next.js logo"
                          width={100}
                          height={30}
                        />

                        <div className="flex items-center">
                          <img
                            className=" w-[20px] rounded-lg"
                            src={item.icons}
                            alt="Next.js logo"
                            width={100}
                            height={10}
                          />
                          <span className="text-secondary text-xs font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </span>
                        </div>
                        <p className="text-green-400 text-xs font-bold flex items-center">
                          {" "}
                          ₹{item.price + i}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
                {active === "Slots" && (
                  <Marquee>
                    {RecentAllImg?.map((item, i) => (
                      <div
                        className="m-1  flex flex-col justify-center items-center"
                        key={i}
                      >
                        <img
                          className=" w-[50px] rounded-lg"
                          src={item.img}
                          alt="Next.js logo"
                          width={100}
                          height={30}
                        />

                        <div className="flex items-center">
                          <img
                            className=" w-[20px] rounded-lg"
                            src={item.icons}
                            alt="Next.js logo"
                            width={100}
                            height={10}
                          />
                          <span className="text-secondary text-xs font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </span>
                        </div>
                        <p className="text-green-400 text-xs font-bold flex items-center">
                          {" "}
                          ₹{item.price + i}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
                {active === "Live" && (
                  <Marquee>
                    {RecentAllImg?.map((item, i) => (
                      <div
                        className="m-1  flex flex-col justify-center items-center"
                        key={i}
                      >
                        <img
                          className=" w-[50px] rounded-lg"
                          src={item.img}
                          alt="Next.js logo"
                          width={100}
                          height={30}
                        />

                        <div className="flex items-center">
                          <img
                            className=" w-[20px] rounded-lg"
                            src={item.icons}
                            alt="Next.js logo"
                            width={100}
                            height={10}
                          />
                          <span className="text-secondary text-xs font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </span>
                        </div>
                        <p className="text-green-400 text-xs font-bold flex items-center">
                          {" "}
                          ₹{item.price + i}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
                {active === "Casino" && (
                  <Marquee>
                    {RecentAllImg?.map((item, i) => (
                      <div
                        className="m-1  flex flex-col justify-center items-center"
                        key={i}
                      >
                        <img
                          className=" w-[50px] rounded-lg"
                          src={item.img}
                          alt="Next.js logo"
                          width={100}
                          height={30}
                        />

                        <div className="flex items-center">
                          <img
                            className=" w-[20px] rounded-lg"
                            src={item.icons}
                            alt="Next.js logo"
                            width={100}
                            height={10}
                          />
                          <span className="text-secondary text-xs font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </span>
                        </div>
                        <p className="text-green-400 text-xs font-bold flex items-center">
                          {" "}
                          ₹{item.price + i}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                )}
              </div>
            </div>

            <div
              className={popupVisible ? "overlay-section block" : "hidden"}
            ></div>
            {/* Popup Component */}
            {popupVisible && (
              <div className="fixed inset-0  flex justify-center items-center z-10">
                <div className="bg-gray-dark rounded-lg md:w-[600px] xs:w-[350px]    relative ">
                  <button
                    className="bg-gray-light-2 rounded-lg p-1 absolute right-[10px] top-[10px]"
                    onClick={closePopup}
                  >
                    <RxCross2 />
                  </button>
                  <BetSlip data={selectedData} open={open} />
                </div>
              </div>
            )}
            {/* casino 2 */}

            <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-2 mt-5">
              <div className="sm:col-span-12 md:col-span-12 lg:col-span-7 w-full">
                <div className="flex lg:flex-row md:flex-row items-center gap-2">
                  <div className="bg-gray-dark sm:col-span-12 md:col-span-6 casino-box rounded-lg relative  w-full">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <GiCardRandom className="text-green-dark mr-2" /> CASINO
                    </h4>
                    <div className="ps-8">
                      <img
                        className=" w-[80%] float-right  rounded-lg"
                        src="/assets/all/casino-bg.webp"
                        alt="Next.js logo"
                        width={200}
                        height={10}
                      />
                    </div>

                    <p className="text-sm text-secondary absolute bottom-2 m-3 sm:hidden md:block">
                      Dive into our in-house games, live <br /> casino and slots
                    </p>
                  </div>
                  <div className="bg-gray-dark  xs:col-span-12 md:col-span-6 sports-box rounded-lg relative w-full">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <GiBeachBall className="text-green-dark mr-2" /> Sports
                    </h4>
                    <div className="ps-8">
                      <img
                        className=" w-[80%]  float-right  rounded-lg"
                        src="/assets/all/sports-bg.webp"
                        alt="Next.js logo"
                        width={200}
                        height={10}
                      />
                    </div>

                    <p className="text-sm text-secondary absolute bottom-2 m-3 sm:hidden md:block">
                      Bet on Football, Cricket, NFL, <br /> eSports & over 80
                      sports!
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-12 lg:col-span-5">
                <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-3 relative h-full">
                  <div className="bg-gray-dark sm:col-span-6 md:col-span-6 lottery-box rounded-lg relative">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <ImTicket className="text-green-dark mr-2" /> LOTTERY
                    </h4>
                    <div className="ps-8">
                      <img
                        className=" w-[110px]  float-right  rounded-lg"
                        src="/assets/all/lottery-Bg.webp"
                        alt="Next.js logo"
                        width={100}
                        height={10}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-dark  sm:col-span-6 md:col-span-6 racing-box rounded-lg relative ">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <GiHorseHead className="text-green-dark mr-2" /> RACING
                    </h4>
                    <div className="ps-8">
                      <img
                        className=" w-[110px]]  float-right   rounded-lg"
                        src="/assets/all/racing-bg.webp"
                        alt="Next.js logo"
                        width={100}
                        height={10}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-dark  sm:col-span-6 md:col-span-6 updown-box rounded-lg relative ">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <MdCandlestickChart className="text-green-dark mr-2" />{" "}
                      UPDOWN
                    </h4>
                    <div className="ps-8">
                      <img
                        className="w-[110px]   float-right  rounded-lg"
                        src="/assets/all/updown-bg.webp"
                        alt="Next.js logo"
                        width={100}
                        height={10}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-dark  sm:col-span-6 md:col-span-6 bingo-box rounded-lg relative ">
                    <h4 className="absolute flex items-center m-3 text-primary font-bold text-lg">
                      <BsSuitClub className="text-green-dark mr-2" /> BINGO
                    </h4>
                    <div className="ps-8">
                      <img
                        className=" w-[110px] float-right  rounded-lg"
                        src="/assets/all/bingo-bg.webp"
                        alt="Next.js logo"
                        width={100}
                        height={10}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bc original */}
            <div className="flex justify-between mt-5">
              <h4 className="font-semibold text-base text-primary  ">
                {" "}
                BC Originals
              </h4>
              <div className="flex items-center">
                <button
                  onClick={prevSlide}
                  className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                >
                  All
                  <RiArrowRightSLine />
                </button>
                <button
                  onClick={prevSlide}
                  className={`${
                    currentIndex > 0
                      ? "bg-gray-light text-primary"
                      : "bg-gray-dark text-secondary"
                  } mr-2 font-bold p-2 rounded-lg`}
                  disabled={currentIndex > 0 ? false : true}
                >
                  <RiArrowLeftSLine />
                </button>

                <button
                  onClick={nextSlide}
                  className={` ${
                    currentIndex < BCOrigin.length - itemsToShow
                      ? "bg-gray-light text-primary"
                      : "bg-gray-dark text-secondary"
                  } font-bold p-2 rounded-lg`}
                  disabled={
                    currentIndex < BCOrigin.length - itemsToShow ? false : true
                  }
                >
                  <RiArrowRightSLine />
                </button>
              </div>
            </div>
            {/* bc*/}
            <div className="relative w-full">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * (150 + 8)}px)`, // Adjust based on your item size and margin
                  }}
                >
                  {BCOrigin.map((item, i) => (
                    <div
                      key={i}
                      className="m-1 relative cursor-pointer after-box"
                    >
                      <div className="w-[150px] ">
                        <img
                          className="w-full rounded-lg"
                          src={item.img}
                          alt={`img ${i}`}
                          width={300}
                          height={200}
                        />
                      </div>
                      <button className="rounded-xl bg-gray-trans flex items-center text-xs font-bold justify-center p-1 px-2 absolute top-1 right-1 text-primary ">
                        <FaUser className="mr-1" /> {item.num}
                      </button>
                      <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                        <p className="text-sm font-bold mb-3 mt-[-10px]">
                          {item.name}
                        </p>
                        <div className="bg-white-trans rounded-full p-3 text-3xl">
                          <FaPlay />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* live sports */}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-semibold text-base text-primary  ">
                  Live Sports
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlideSport}
                    className={`${
                      currentIndexsport > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexsport > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlideSport}
                    className={` ${
                      currentIndexsport < LiveSports.length - itemsToShowSport
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexsport < LiveSports.length - itemsToShowSport
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* sport */}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300"
                    style={{
                      transform: `translateX(-${
                        currentIndexsport * (100 / itemsToShowSport)
                      }%)`,
                    }}
                  >
                    {LiveSports.map((item, i) => (
                      <div
                        key={i}
                        className="lg:w-1/2 lg:h-1/2 flex-shrink-0  p-1"
                      >
                        {/* Individual slide */}
                        <div
                          className={`bg-gray-light rounded-lg p-4 cursor-pointer `}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center text-[13px] font-semibold text-primary">
                              {item.name} <GoDotFill /> {item.title}
                            </div>
                            <span className="flex items-center bg-green-trans px-2 text-green-dark text-xs rounded-md">
                              <FaPlay /> Live
                            </span>
                          </div>

                          {/* Center Content */}
                          <div className="py-4 flex justify-around items-center">
                            <div className="flex flex-col items-center">
                              <span className="text-4xl text-secondary">
                                {item.icons1}
                              </span>
                              <h4 className="text-sm font-semibold text-primary">
                                {item.subTitle1}
                              </h4>
                            </div>
                            <div className="flex flex-col items-center">
                              <h2 className="text-3xl font-semibold text-primary">
                                {item.time}
                              </h2>
                              <h4 className="text-sm font-semibold text-secondary">
                                {item.startWay}
                              </h4>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-4xl text-secondary">
                                {item.icons2}
                              </span>
                              <h4 className="text-sm font-semibold text-primary">
                                {item.subTitle2}
                              </h4>
                            </div>
                          </div>

                          {/* Bottom Buttons */}
                          <div className="flex justify-between mt-4">
                            <button className="bg-red-trans py-2 text-primary rounded-lg mx-1 w-full">
                              1 <span className="text-red-500">{item.one}</span>
                            </button>
                            <button className="bg-red-trans py-2 text-primary rounded-lg mx-1 w-full">
                              draw{" "}
                              <span className="text-red-500">{item.draw}</span>
                            </button>
                            <button className="bg-red-trans py-2 text-primary rounded-lg mx-1 w-full">
                              2 <span className="text-red-500">{item.two}</span>
                            </button>
                            <button className="bg-gray-light-2 py-2 text-primary rounded-lg mx-1 w-full">
                              + <span className="">{item.three}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BC Exclusive */}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-semibold text-base text-primary  ">
                  {" "}
                  BC Exclusive
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlideBCExclusive}
                    className={`${
                      currentIndexBCExclusive > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexBCExclusive > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlideBCExclusive}
                    className={` ${
                      currentIndexBCExclusive <
                      BCExclusive.length - itemsToShowBCExclusive
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexBCExclusive <
                      BCExclusive.length - itemsToShowBCExclusive
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* bc*/}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${
                        currentIndexBCExclusive * (150 + 8)
                      }px)`, // Adjust based on your item size and margin
                    }}
                  >
                    {BCExclusive.map((item, i) => (
                      <div
                        key={i}
                        className="m-1 relative cursor-pointer after-box"
                      >
                        <div className="w-[150px]">
                          <img
                            className="w-full rounded-lg"
                            src={item.img}
                            alt={`img ${i}`}
                            width={300}
                            height={200}
                          />
                        </div>
                        <button className="rounded-xl bg-gray-trans flex items-center text-xs font-bold justify-center p-1 px-2 absolute top-1 right-1 text-primary ">
                          <FaUser className="mr-1" /> {item.num}
                        </button>
                        <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                          <p className="text-sm font-bold mb-3 mt-[-10px]">
                            {item.name}
                          </p>
                          <div className="bg-white-trans rounded-full p-3 text-3xl">
                            <FaPlay />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Slots */}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-semibold text-base text-primary  ">
                  {" "}
                  Sports
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlideSports}
                    className={`${
                      currentIndexSports > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexSports > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlideSports}
                    className={` ${
                      currentIndexSports < Sports.length - itemsToShowSports
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexSports < Sports.length - itemsToShowSports
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* SLots*/}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${
                        currentIndexSports * (150 + 8)
                      }px)`, // Adjust based on your item size and margin
                    }}
                  >
                    {Sports.map((item, i) => (
                      <div
                        key={i}
                        className="m-1 relative cursor-pointer after-box"
                      >
                        <div className="w-[150px]">
                          <img
                            className="w-full rounded-lg"
                            src={item.img}
                            alt={`img ${i}`}
                            width={300}
                            height={200}
                          />
                        </div>
                        <button className="rounded-xl bg-gray-trans flex items-center text-xs font-bold justify-center p-1 px-2 absolute top-1 right-1 text-primary ">
                          <FaUser className="mr-1" /> {item.num}
                        </button>
                        <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                          <p className="text-sm font-bold mb-3 mt-[-10px]">
                            {item.name}
                          </p>
                          <div className="bg-white-trans rounded-full p-3 text-3xl">
                            <FaPlay />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Lottery Draw */}
            <div>
              <UpcomingLottery />
            </div>

            {/* Live Casino */}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-bold text-base text-primary  ">
                  Live Casino
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlidecasino}
                    className={`${
                      currentIndexcasino > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexcasino > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlidecasino}
                    className={` ${
                      currentIndexcasino < LiveCasino.length - itemsToShowcasino
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexcasino < LiveCasino.length - itemsToShowcasino
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* SLots*/}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${
                        currentIndexcasino * (150 + 8)
                      }px)`, // Adjust based on your item size and margin
                    }}
                  >
                    {LiveCasino.map((item, i) => (
                      <div
                        key={i}
                        className="m-1 relative cursor-pointer after-box"
                      >
                        <div className="w-[150px]">
                          <img
                            className="w-full rounded-lg"
                            src={item.img}
                            alt={`img ${i}`}
                            width={300}
                            height={200}
                          />
                        </div>

                        <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                          <p className="text-sm font-bold mb-3 mt-[-10px]">
                            {item.name}
                          </p>
                          <div className="bg-white-trans rounded-full p-3 text-3xl">
                            <FaPlay />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* deposit bonus section */}

            <div className=" lg:flex lg:flex-row sm:flex-col  justify-around items-center mt-5 relative p-5 py-8 rounded-lg mb-5 bg-black-trans opacity-[0.7]">
              <div className="absolute  left-0 flex right-0">
                <img
                  className="dark:invert w-[50px] rounded-lg absolute  -top-6 left-20"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />

                <img
                  className="dark:invert w-[50px] rounded-lg "
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute left-14 -bottom-10 "
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute left-36 -bottom-10 "
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute left-64 -bottom-10 "
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -top-6 left-72"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -top-6 right-0"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -top-0 right-28"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -top-6 right-52"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -bottom-10 right-0"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -bottom-10 right-20"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -bottom-10 right-64"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
                <img
                  className="dark:invert w-[50px] rounded-lg absolute -bottom-10 right-80"
                  src="/assets/icons/dot.png"
                  alt="pay"
                  width={50}
                  height={50}
                />
              </div>

              <div className="flex items-center">
                <h2 className="text-green-dark text-2xl font-bold">300%</h2>

                <h2 className="text-2xl font-bold">Deposit Bonus</h2>
              </div>
              <div className="flex justify-between items-center">
                <img
                  className="dark:invert w-[60px] rounded-lg  mx-3"
                  src="/assets/icons/apple_pay.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[30px] rounded-lg mx-3"
                  src="/assets/icons/mastercard.webp"
                  alt="pay"
                  width={100}
                  height={40}
                />
                <img
                  className="dark:invert w-[60px] rounded-lg mx-3"
                  src="/assets/icons/visa.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[60px] rounded-lg  mx-3"
                  src="/assets/icons/google_pay.webp"
                  alt="pay"
                  width={100}
                  height={40}
                />
                <img
                  className="dark:invert w-[60px] rounded-lg mx-3"
                  src="/assets/icons/pic_pay.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex items-center">
                <img
                  className="dark:invert w-[25px] rounded-lg"
                  src="/assets/icons/BTC.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] ms-[-3px] rounded-lg"
                  src="/assets/icons/USDC.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/TRX.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert  w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/POL.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/SOL.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/XRP.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/ETH.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/ADA.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/USDT.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
                <img
                  className="dark:invert w-[25px] rounded-lg ms-[-3px]"
                  src="/assets/icons/DOGE.webp"
                  alt="pay"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* All wingo game */}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-semibold text-base text-primary  ">
                  {" "}
                  All Bingo Game
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlidebingo}
                    className={`${
                      currentIndexbingo > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexbingo > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlidebingo}
                    className={` ${
                      currentIndexbingo < BingoGame.length - itemsToShowbingo
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexbingo < BingoGame.length - itemsToShowbingo
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* SLots*/}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${
                        currentIndexbingo * (150 + 8)
                      }px)`, // Adjust based on your item size and margin
                    }}
                  >
                    {BingoGame.map((item, i) => (
                      <div
                        key={i}
                        className="m-1 relative cursor-pointer after-box"
                      >
                        <div className="w-[150px]">
                          <img
                            className="w-full rounded-lg"
                            src={item.img}
                            alt={`img ${i}`}
                            width={300}
                            height={200}
                          />
                        </div>
                        <button className="rounded-xl bg-gray-trans flex items-center text-xs font-bold justify-center p-1 px-2 absolute top-1 right-1 text-primary ">
                          <FaUser className="mr-1" /> {item.num}
                        </button>
                        <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                          <p className="text-sm font-bold mb-3 mt-[-10px]">
                            {item.name}
                          </p>
                          <div className="bg-white-trans rounded-full p-3 text-3xl">
                            <FaPlay />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hot games*/}
            <div>
              <div className="flex justify-between mt-5">
                <h4 className="font-semibold text-base text-primary  ">
                  {" "}
                  Hot Games
                </h4>
                <div className="flex items-center">
                  <button
                    className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
                  >
                    All
                    <RiArrowRightSLine />
                  </button>
                  <button
                    onClick={prevSlidehotgame}
                    className={`${
                      currentIndexhotgame > 0
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } mr-2 font-bold p-2 rounded-lg`}
                    disabled={currentIndexhotgame > 0 ? false : true}
                  >
                    <RiArrowLeftSLine />
                  </button>

                  <button
                    onClick={nextSlidehotgame}
                    className={` ${
                      currentIndexhotgame < HoteGame.length - itemsToShowhotgame
                        ? "bg-gray-light text-primary"
                        : "bg-gray-dark text-secondary"
                    } font-bold p-2 rounded-lg`}
                    disabled={
                      currentIndexhotgame < HoteGame.length - itemsToShowhotgame
                        ? false
                        : true
                    }
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
              {/* SLots*/}
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${
                        currentIndexhotgame * (150 + 8)
                      }px)`, // Adjust based on your item size and margin
                    }}
                  >
                    {HoteGame.map((item, i) => (
                      <div
                        key={i}
                        className="m-1 relative cursor-pointer after-box"
                      >
                        <div className="w-[150px]">
                          <img
                            className="w-full rounded-lg"
                            src={item.img}
                            alt={`img ${i}`}
                            width={300}
                            height={200}
                          />
                        </div>
                        <button className="rounded-xl bg-gray-trans flex items-center text-xs font-bold justify-center p-1 px-2 absolute top-1 right-1 text-primary ">
                          <FaUser className="mr-1" /> {item.num}
                        </button>
                        <div className="absolute flex flex-col transition-transform duration-500 ease-in opacity-0 hover:opacity-100 justify-center items-center z-10 top-0 bottom-0 left-0 right-0 text-primary">
                          <p className="text-sm font-bold mb-3 mt-[-10px]">
                            {item.name}
                          </p>
                          <div className="bg-white-trans rounded-full p-3 text-3xl">
                            <FaPlay />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Round And Race */}
            <nav className="bg-[#232626] pt-4">
              <div className="lg:flex items-center justify-between w-full">
                <div className="text-white font-bold py-2">
                  Latest Bet & Race
                </div>
                <div className="bg-[#323738] rounded p-2 flex flex-col w-full max-w-md">
                  {/* Game Selection */}
                  <div className="flex gap-4 justify-center">
                    {["Latest Bets", "High Roller", "Wager Contest"].map(
                      (name) => (
                        <button
                          key={name}
                          onClick={() => setLatestGameRace(name)}
                          className={`cursor-pointer text-sm font-bold px-2 ${
                            latestGameRace === name
                              ? "text-white"
                              : "text-gray-500"
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
                {latestGameRace === "Latest Bets" && <LatestBets />}
                {latestGameRace === "High Roller" && <HighRoller />}
                {latestGameRace === "Wager Contest" && (
                  <div className="-mt-5">
                    <WagerContest />
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

       

        <div className="mt-10 ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
