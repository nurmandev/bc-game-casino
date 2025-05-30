import { useState } from "react";
import {
  FaAngleDown,
  FaClock,
  FaGlobe,
  FaHeart,
  FaPlay,
  FaRegCalendarMinus,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { IoEye, IoReloadOutline } from "react-icons/io5";
import {
  MdFullscreen,
  MdOutlineCurrencyExchange,
  MdPersonalInjury,
} from "react-icons/md";
import icon1 from "../../../public/Poker_Image/card1.png";
import icon2 from "../../../public/Poker_Image/card2.png";
import icon3 from "../../../public/Poker_Image/card3.png";
import icon4 from "../../../public/Poker_Image/card4.png";
import icon5 from "../../../public/Poker_Image/AOF.png";
import Mtt from "./Mtt";
import Nlhe from "./Nlhe";
import Plo from "./Plo";
import ShortDeck from "./ShortDeck";
import Aof from "./Aof";
import { TfiSharethis } from "react-icons/tfi";
import Navbar from "../LatestBetAndRace/Navbar";
import Footer from "../../components/Footer";
import { BCOrigin } from "../HomePage/HomeData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const PokerGame = () => {
  const [selectedFormat, setSelectedFormat] = useState("En");
  const [showDropdown, setShowDropdown] = useState(false);
  const [pokerGame, setPokerGame] = useState("MTT");
  const [Toggle, SetToggle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Review, SetReview] = useState("");
  const [ReviewContent, SetReviewContent] = useState("High Win");
  // const Rating = { rating: 4.1, outOf: 5 };
  // const { rating, outOf } = Rating;

  const languages = [
    "English",
    "German",
    "French",
    "Italian",
    "Spanish",
    "Japanese",
    "Hindi",
  ];

  const itemsToShow = 7;
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

  const [tags] = useState([
    { name: "Poker", link: "/tagname/Poker" },
    { name: "BC Originals", link: "/tagname/BC%20Originals" },
    { name: "Customized", link: "/tagname/Customized" },
    { name: "Table games", link: "/tagname/Table%20games" },
    {
      name: "Provably fair technology",
      link: "/tagname/Provably%20fair%20technology",
    },
    { name: "Blockchain", link: "/tagname/Blockchain" },
    { name: "Texas holdem", link: "/tagname/Texas%20holdem" },
    { name: "MTT", link: "/tagname/MTT" },
  ]);

  const bcPokerFeatures = [
    "Texas Hold 'em, Omaha, and Short Deck variants",
    "Flexible game customization (blinds, bet limits, time controls)",
    "Multiplayer Tournaments (MTT) with global participation",
    "Unique insurance feature to reduce financial risk",
    "Private Clubs with custom rules and themes",
    "Blockchain integration for security and transparency",
    "Rewards and loyalty programs with cryptocurrency benefits",
    "User-friendly design with advanced features",
    "Community engagement through customizable rooms and events",
    "Provably fair technology ensuring game integrity",
    "High-quality visuals and seamless performance across devices",
  ];

  const bcPokerLimitations = [
    "Requires internet connection for gameplay",
    "Blockchain transactions may have associated fees",
    "Learning curve for new poker variants",
    "Some features may be restricted based on regional regulations",
    "Private Club access may require invitations",
    "Multiplayer tournaments can have long durations",
    "Crypto-based rewards may fluctuate in value",
  ];

  return (
    <div className="w-full mt-20 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="w-full h-auto p-2 bg-[#292d2e] rounded-t-2xl">
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-400 font-semibold">
                <FaClock /> <span className="text-xs">10:44 AM</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 font-semibold">
                <MdPersonalInjury className="text-green-500" />{" "}
                <span className="text-xs">66</span>
              </div>
            </div>

            {/* User Info & Notification Icons */}
            <ul className="flex items-center space-x-2">
              <li>
                <div className="flex items-center cursor-pointer">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <img
                      alt="avatar"
                      loading="lazy"
                      decoding="async"
                      src="https://d2lp3u0utdplk5.cloudfront.net/sysavatar/head_7.png"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <p className="ml-2 text-white font-normal text-sm">
                    Krcdnemqmuac
                  </p>
                </div>
              </li>

              {/* Currency & View Icon */}
              <li className="relative">
                <div className="bg-gray-700 rounded-lg border-2 border-gray-600/60 px-1 flex items-center">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                      <MdOutlineCurrencyExchange className="text-yellow-500" />
                      <span className="text-gray-300 ">0</span>
                    </div>
                    <IoEye className="text-gray-300" />
                  </div>
                </div>
              </li>

              {/* Language Selector */}
              <li>
                <div className="rounded-lg flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="relative w-14">
                      <div
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="bg-gray-600 p-1 rounded-md shadow-md flex justify-between items-center cursor-pointer text-white"
                      >
                        <FaGlobe className="text-gray-300" />
                        <span>{selectedFormat}</span>
                      </div>

                      {showDropdown && (
                        <div className="absolute bg-[#292d2e] shadow-md rounded-md mt-1 w-[150px] right-0 max-h-40 overflow-y-auto custom-scrollbar hide-scrollbar">
                          {languages.map((lang, index) => (
                            <div
                              key={index}
                              className="p-2 cursor-pointer text-sm hover:bg-gray-700 text-white"
                              onClick={() => {
                                setSelectedFormat(lang);
                                setShowDropdown(false);
                              }}
                            >
                              {lang}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Lower Section */}
          <div className="mt- flex items-center gap-10">
            {/* Logo */}
            <div className="relative">
              <button onClick={() => SetToggle((prev) => !prev)}>
                <img
                  src="/Poker_Image/logo.png"
                  alt="Poker Logo"
                  className="w-[150px]"
                />
              </button>
              {Toggle && (
                <>
                  <div className="fixed inset-20 ml-52 -mr-5  h-[900px] bg-black bg-opacity-40 transition-opacity duration-500 z-30 rounded-2xl"></div>
                  <div className="absolute -top-[55px] -left-3 w-[230px] h-[900px] bg-[#1d2020] rounded-tl-2xl z-50">
                    <div
                      onClick={() => SetToggle(false)}
                      className="w-full bg-[#323738] rounded-tl-xl flex items-center gap-3"
                    >
                      <img
                        src="/public/Poker_Image/menu.9c523979.svg"
                        alt=""
                        className="w-[30px] h-12 ml-3"
                      />
                      <strong>Menu</strong>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Game Type Selection */}
            <div>
              {/* Game Selection */}
              <div className="flex gap-4">
                {[
                  { name: "MTT", image: icon1 },
                  { name: "NLHE", image: icon2 },
                  { name: "PLO", image: icon3 },
                  { name: "Short Deck", image: icon4 },
                  { name: "AOF", image: icon5 },
                ].map(({ name, image }) => (
                  <div
                    key={name}
                    onClick={() => setPokerGame(name)}
                    className={`cursor-pointer ${
                      pokerGame === name
                        ? "text-white font-bold px-2"
                        : "text-gray-500"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-start text-center my-1 px-1">
                      <img src={image} alt={name} className="w-7" />
                      <button className="text-xs font-bold">{name}</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Game Content Display */}
              <div className="mt-4">
                {pokerGame === "MTT" && (
                  <div className="absolute left-[300px]">
                    <Mtt />
                  </div>
                )}
                {pokerGame === "NLHE" && (
                  <div className="absolute left-[300px]">
                    <Nlhe />
                  </div>
                )}
                {pokerGame === "PLO" && (
                  <div className="absolute left-[300px]">
                    <Plo />
                  </div>
                )}
                {pokerGame === "Short Deck" && (
                  <div className="absolute left-[300px]">
                    <ShortDeck />
                  </div>
                )}
                {pokerGame === "AOF" && (
                  <div className="absolute left-[300px]">
                    <Aof />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full h-[700px] bg-[#1d2020] overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar"></div>

        {/* Bottom Content */}
        <div className="w-full bg-[#292d2e] p-2 rounded-b-xl">
          <div className="w-[95%] mx-auto flex items-center gap-7 text-2xl py-2">
            <FaStar /> <FaHeart /> <TfiSharethis /> | <IoReloadOutline />{" "}
            <FaRegCalendarMinus /> <MdFullscreen />
          </div>
        </div>
        {/* Bc Poker Links */}
        <div className="bg-[#323738] p-5 mt-5 rounded-xl ">
          <div className=" flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-extrabold text-lg">BC Poker</span>
              <div className="flex items-center gap-1">
                <span className="text-secondary text-sm">By</span>
                <div className="text-green-500 text-sm inactive">
                  BC Originals
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2 z-10">
                <div className="flex flex-wrap gap-2">
                  {tags.map(({ name, link }) => (
                    <a
                      key={name}
                      href={link}
                      className="flex items-center text-right bg-layer5 h-6 rounded-md inactive"
                    >
                      <span className="text-xs text-green-400 font-semibold bg-[#3a4142] px-2 py-1 rounded-md">
                        # {name}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {/* Toggle Button */}
                  <button
                    onClick={() => SetReview((prev) => !prev)}
                    className="inline-flex items-center justify-center w-full h-auto bg-[#3a4142] font-extrabold py-2 transition-all disabled:pointer-events-none disabled:opacity-40 text-primary size-8 px-2 rounded-lg hover:bg-layer5"
                  >
                    <div
                      className={`transition-transform duration-500 ${
                        Review ? "rotate-180" : ""
                      }`}
                    >
                      <FaAngleDown />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Dropdown Content */}
          <hr className="border-1 border-gray-600 my-3" />
          <div
            className={`overflow-hidden transition-all duration-300 ${
              Review ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {Review && (
              <div className="flex flex-col gap-2 p-2 bg-layer5 rounded-lg h-96 ">
                {/* Game Selection */}
                <div className="w-96 flex gap-4 justify-start bg-[#272b2c] p-2 rounded-lg">
                  {["High Win", "Lucky win", "Discription", "Review"].map(
                    (name) => (
                      <button
                        key={name}
                        onClick={() => SetReviewContent(name)}
                        className={`cursor-pointer text-sm font-bold px-2 ${
                          ReviewContent === name
                            ? "bg-[#3a4142] p-2 rounded"
                            : "text-gray-500"
                        }`}
                      >
                        {name}
                      </button>
                    )
                  )}
                </div>
                <div className="overflow-y-scroll custom-scrollbar hide-scrollbar">
                  {ReviewContent === "High Win" && (
                    <div className="flex items-center justify-center">
                      <div className="py-10 text-center center flex-col">
                        <img
                          className="w-48 h-48"
                          src="/public/Weekly_Raffle_Image/Active-images/empty.webp"
                        />
                        <div className="leading-5 mt-4">
                          Oops! There is no data yet!
                        </div>
                      </div>
                    </div>
                  )}
                  {ReviewContent === "Lucky win" && (
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="py-10 text-center center flex-col">
                          <img
                            className="w-48 h-48"
                            src="/public/Weekly_Raffle_Image/Active-images/empty.webp"
                          />
                          <div className="leading-5 mt-4">
                            Oops! There is no data yet!
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {ReviewContent === "Discription" && (
                    <div className="">
                      <div className="flex flex-col items-center min-h-screen #323738 p-6 text-white">
                        <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
                          BC Poker: A Gateway to Thrilling Poker Adventures
                        </h1>

                        <p className="text-lg text-gray-300 text-center max-w-3xl mb-6">
                          We are excited to introduce BC Poker, a stellar Texas
                          Hold em poker game that opens the doors to a world of
                          infinite possibilities, thrilling challenges, and
                          immersive experiences. Whether youre a seasoned poker
                          pro or a casual player, BC Poker promises a gameplay
                          experience like no other.
                        </p>

                        {/* Features Section */}
                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6 ">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Rich and Diverse Gameplay
                          </h2>
                          <p className="text-gray-300 mb-4">
                            BC Poker offers more than just Texas Hold em. While
                            it s the centerpiece, other exciting variants
                            include:
                          </p>
                          <ul className="space-y-3">
                            {bcPokerFeatures.map((feature, index) => (
                              <li
                                key={index}
                                className="bg-gray-40 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Additional Features */}
                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Flexible Game Customization
                          </h2>
                          <p className="text-gray-300">
                            Players can modify game settings such as blinds, bet
                            limits, and time controls to suit their preferences.
                            Private poker rooms can also be created for a
                            personalized gaming experience.
                          </p>
                        </div>

                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Multiplayer Tournaments (MTT)
                          </h2>
                          <p className="text-gray-300">
                            Compete in Multi-Table Tournaments with global
                            players for bigger prize pools and an enhanced
                            competitive experience.
                          </p>
                        </div>

                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Insurance Feature
                          </h2>
                          <p className="text-gray-300">
                            A unique offering in online poker, BC Poker
                            introduces an insurance system for high-risk
                            situations, helping players mitigate potential
                            losses.
                          </p>
                        </div>

                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Private Clubs
                          </h2>
                          <p className="text-gray-300">
                            Players can create and manage Private Clubs with
                            custom rules and themes for an exclusive poker
                            experience.
                          </p>
                        </div>

                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mb-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Blockchain Integration
                          </h2>
                          <p className="text-gray-300">
                            BC Poker leverages blockchain technology for
                            enhanced security, fairness, and transparency.
                          </p>
                        </div>

                        {/* Limitations Section */}
                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Limitations
                          </h2>
                          <ul className="space-y-3">
                            {bcPokerLimitations.map((limitation, index) => (
                              <li
                                key={index}
                                className="bg-gray-40 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                              >
                                {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Final Verdict */}
                        <div className="bg-[#3a4142] rounded-2xl p-6 shadow-lg w-full max-w-2xl mt-6">
                          <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Overall Verdict: A Must-Try Poker Adventure
                          </h2>
                          <p className="text-gray-300">
                            BC Poker is more than just a game—it s a journey
                            into the heart of poker, combining strategy,
                            competition, and entertainment. Whether you re
                            aiming to compete globally or just enjoy a few
                            hands, BC Poker has it all.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {ReviewContent === "Review" && (
                    <div>
                      <div className="bg-[#292d2e] p-4 rounded-xl">
                        <div>
                          {/* <div className="flex gap-2 items-center">
                            <p className="text-3xl text-primary font-extrabold">
                              {rating}
                            </p>
                            <div className="flex flex-col justify-start">
                              <div className="flex gap-1">
                                {Array.from({ length: outOf }, (_, index) => (
                                  <svg
                                    key={index}
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="size-5"
                                    fill={
                                      index < Math.round(rating)
                                        ? "#2cd97d"
                                        : "#d1d5db"
                                    } // Corrected star fill logic
                                  >
                                    <path d="M15.184 26l-5.445 2.99c-.856.47-1.915.127-2.365-.767a1.9 1.9 0 01-.177-1.16l1.04-6.333a1.88 1.88 0 00-.504-1.62L3.33 14.626a1.89 1.89 0 01-.031-2.587c.269-.289.621-.476 1.002-.534l6.087-.923a1.76 1.76 0 001.32-1.001l2.722-5.76c.428-.906 1.478-1.28 2.346-.832.346.178.626.47.796.831l2.723 5.761c.255.54.748.915 1.319 1l6.087.925c.957.145 1.62 1.074 1.482 2.074a1.86 1.86 0 01-.51 1.047l-4.405 4.484a1.88 1.88 0 00-.504 1.62l1.04 6.332c.163.996-.478 1.941-1.431 2.113-.38.068-.77.003-1.111-.184l-5.445-2.99c-.51-.28-1.12-.28-1.63 0z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-secondary">
                                Out of {outOf}
                              </span>
                            </div>
                          </div> */}
                          <div className="p-4">
                            <h1 className="text-2xl font-bold mb-4">4.1</h1>
                            <div className="mb-4">
                              <button className="bg-[#3a4142] text-white px-4 py-2 rounded">
                                Rate this Game
                              </button>
                            </div>
                            <div className="mb-4">
                              <h2 className="text-xl font-semibold mb-2">
                                Comments
                              </h2>
                              <textarea
                                className="w-full p-2 border-gray-900 rounded bg-[#3a4142]"
                                placeholder="Leave your Comment"
                              ></textarea>
                            </div>
                            <div className="space-y-4">
                              <div className="border-b pb-4">
                                <p className="text-sm text-gray-600">
                                  LKINje 3d
                                </p>
                                <p className="text-gray-300">Swetoah! 7d</p>
                              </div>
                              <div className="border-b pb-4">
                                <p className="text-sm text-gray-600">
                                  On Dec 18, 2024
                                </p>
                                <p className="text-gray-300">
                                  My money ebt total of $260 usdt disappeared
                                  from my balance while playing Bepoker after I
                                  relocated the page due to a network error.
                                  I ve been trying to contact both became
                                  support and Bepoker support but none helped me
                                  to retrieve it. My money is still missing till
                                  this day. I am highly disappointed in their
                                  poor customer care services.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* bc original */}
        <div className="flex justify-between mt-5">
          <h4 className="font-semibold text-base text-primary  ">
            {" "}
            Recommended Games
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
                transform: `translateX(-${currentIndex * (150 + 8)}px)`,
              }}
            >
              {BCOrigin.map((item, i) => (
                <div key={i} className="m-1 relative cursor-pointer after-box">
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

        {/* Latest Bet And Race */}
        <div>
          <Navbar />
        </div>
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default PokerGame;
