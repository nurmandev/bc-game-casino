import { FaGift, FaHeart, FaQuestionCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaMedal, FaChevronLeft } from "react-icons/fa";
import {
  FaChartLine,
  FaTrophy,
  FaCoins,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";
import tag from "../../../public/signIn_Images/logo.webp";

const MyProfile = () => {
  const [isSlideActive, setIsSlideActive] = useState(false);
  const handleSlide = () => {
    setIsSlideActive(!isSlideActive);
  };

  const achievements = [
    {
      id: 1,
      icon: FaTrophy,
      title: "Talkative",
      value: "11282",
      image: tag,
    },
    {
      id: 2,
      icon: FaCoins,
      title: "Fearless One",
      value: "6",
      image: tag,
    },
    {
      id: 3,
      icon: FaHandHoldingUsd,
      title: "The Loaded King",
      value: "1",
      image: tag,
    },
    {
      id: 4,
      icon: FaTrophy,
      title: "Highest Contributor",
      value: "10",
      image: tag,
    },
    {
      id: 5,
      icon: FaCoins,
      title: "The Top Gun",
      value: "26",
      image: tag,
    },
    {
      id: 6,
      icon: FaHandHoldingUsd,
      title: "The Rain Master",
      value: "14554",
      image: tag,
    },
    {
      id: 7,
      icon: FaTrophy,
      title: "COCO Lover",
      value: "10740",
      image: tag,
    },
    {
      id: 8,
      icon: FaCoins,
      title: "Invincible Lucky Dog",
      value: "8617",
      image: tag,
    },
    {
      id: 9,
      icon: FaHandHoldingUsd,
      title: "Contest Master",
      value: "86",
      image: tag,
    },
    {
      id: 10,
      icon: FaTrophy,
      title: "Roll King",
      value: "1801",
      image: tag,
    },
    {
      id: 11,
      icon: FaCoins,
      title: "The Rain Stormer",
      value: "2739",
      image: tag,
    },
    {
      id: 12,
      icon: FaHandHoldingUsd,
      title: "Chicken Dinner",
      value: "19444",
      image: tag,
    },
    {
      id: 13,
      icon: FaTrophy,
      title: "Loyal Player",
      value: "2591",
      image: tag,
    },
    {
      id: 14,
      icon: FaCoins,
      title: "Call Me ‘Richman’",
      value: "10424",
      image: tag,
    },
    {
      id: 15,
      icon: FaHandHoldingUsd,
      title: "The Old-Timer",
      value: "32112495",
      image: tag,
    },
    {
      id: 16,
      icon: FaTrophy,
      title: "The Boss",
      value: "5366",
      image: tag,
    },
    {
      id: 17,
      icon: FaCoins,
      title: "ETHTOP 1",
      value: "2",
      image: tag,
    },
    {
      id: 18,
      icon: FaHandHoldingUsd,
      title: "BTCTOP 1",
      value: "9",
      image: tag,
    },
    {
      id: 19,
      icon: FaTrophy,
      title: "DOGETOP 1",
      value: "3",
      image: tag,
    },
    {
      id: 20,
      icon: FaCoins,
      title: "EOSTOP 1",
      value: "11",
      image: tag,
    },
  ];

  return (
    <>
      <div className="relative w-full h-[600px] overflow-hidden overflow-y-scroll custom-scrollbar hide-scrollbar py-6">
        {/* Left Content */}
        <div
          className={`absolute w-full h-full  transition-transform duration-500 ${
            isSlideActive ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className=" w-full h-full text-white">
            <div className="px-3 ">
              <div className="w-full flex items-start justify-between pb-5">
                <button className="p-1 bg-[#292d2e] rounded-lg flex items-center cursor-pointer">
                  <FaHeart className="w-5 h-5 text-red-600" />{" "}
                  {/* Heart icon */}
                  <span className="ml-1 text-lg font-semibold">0</span>
                </button>
                <div className="flex flex-col items-center justify-center">
                  {/* Avatar Section */}
                  <div className="w-16 h-16 rounded-full flex justify-center items-center border-2 border-solid border-secondary">
                    <img
                      alt="User Avatar"
                      className="sm:cursor-pointer rounded-full"
                      src="//img2.distributedresourcestorage.com/avatar/64812696/s?t=0"
                    />
                  </div>

                  {/* Username */}
                  <div className="flex justify-center w-full mt-1">
                    <p className="text-xl font-extrabold">Krcdnemqmuac</p>
                  </div>

                  {/* User ID */}
                  <p className="text-secondary flex items-center cursor-pointer">
                    <span>User ID:</span>
                    <span>64812696</span>
                  </p>
                </div>

                {/* Right Button (Edit Icon) */}
                <button className="right-0 top-6 w-8 h-8 bg-layer3 rounded-lg flex justify-center items-center">
                  <FiEdit className="w-5 h-5" /> {/* Edit icon */}
                </button>
              </div>

              {/* Medals Section */}
              <div>
                <div className="w-full bg-[#323738] rounded-lg p-3">
                  {/* Header Section */}
                  <div className="w-full h-8 flex items-center justify-between mb-3 border-b border-[#42494b]">
                    <div className="flex items-center gap-1">
                      <FaMedal className="w-5 h-5" /> {/* Medal Icon */}
                      <p className="font-extrabold ml-1">
                        <span>Medals</span>
                        <span className="ml-1">0</span>
                      </p>
                    </div>
                    <button
                      onClick={handleSlide}
                      className="flex items-center text-green-500 transform -translate-x-1/2  py-2"
                    >
                      <span className=" text-sm font-extrabold">Details</span>
                      <FaChevronLeft className="w-4 h-4 text-brand rotate-180 ml-1" />{" "}
                    </button>
                  </div>

                  {/* Medals Grid */}
                  <div className="w-full mt-3 flex items-center overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
                    {[...Array(20)].map((_, index) => (
                      <div
                        key={index}
                        className="w-11 h-15 flex-none relative flex justify-center items-center"
                      >
                        <img
                          className="w-full h-full opacity-50"
                          src={`/tag_${index + 1}-uniqueHashHere.webp`} 
                          alt={`Medal ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Statistics Section */}
              <div>
                <div className="w-full bg-[#323738] rounded-lg p-3 mt-3">
                  {/* Header Section */}
                  <div className="w-full h-8 flex items-center mb-3 border-b border-[#42494b]">
                    <FaChartLine className="w-5 h-5" /> {/* Statistics Icon */}
                    <p className="text-base font-extrabold ml-1">Statistics</p>
                    <button className="flex items-center px-1 ml-auto text-green-500">
                      <span className="text-brand text-sm font-bold">
                        Details
                      </span>
                      <FaChevronLeft className="w-4 h-4 ml-1 text-brand rotate-180" />{" "}
                      {/* Chevron Icon */}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-tertiary opacity-20"></div>

                  {/* Statistics Cards */}
                  <div className="w-full mt-3 flex items-center justify-between flex-wrap">
                    {/* Total Wins Card */}
                    <div className="flex-none bg-[#3a4142] rounded-lg h-[4.375rem] flex flex-col items-center justify-center pt-1 overflow-hidden w-[49%]">
                      <div className="flex w-full items-center justify-center">
                        <FaTrophy className="w-4 h-4 text-secondary mr-1 flex-none" />
                        <span className="text-xs">Total Wins</span>
                      </div>
                      <p className="text-center font-semibold text-lg mt-0.5">
                        0
                      </p>
                    </div>

                    {/* Total Bets Card */}
                    <div className="flex-none bg-[#3a4142] rounded-lg h-[4.375rem] flex flex-col items-center justify-center pt-1 overflow-hidden w-[49%]">
                      <div className="flex w-full items-center justify-center">
                        <FaCoins className="w-4 h-4 text-secondary mr-1 flex-none" />
                        <span className="text-xs">Total Bets</span>
                      </div>
                      <p className="text-center font-semibold text-lg mt-0.5">
                        0
                      </p>
                    </div>

                    {/* Total Wagered Card */}
                    <div className="flex-none bg-[#3a4142] rounded-lg h-[4.375rem] flex flex-col items-center justify-center pt-1 overflow-hidden w-full mt-2">
                      <div className="flex w-full items-center justify-center">
                        <FaHandHoldingUsd className="w-4 h-4 text-secondary mr-1 flex-none" />
                        <span className="text-xs">Total Wagered</span>
                      </div>
                      <p className="text-center font-semibold text-lg mt-0.5">
                        ₹0.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite Games Section */}
              <div>
                <div className="w-full bg-layer4 rounded-lg p-3 mt-3">
                  <div className="w-full h-8 flex items-center text-base font-extrabold border-b border-[#42494b] ">
                    Top 3 Favorite Games
                  </div>
                  <div className="w-full h-[1px] bg-tertiary opacity-20 my-3"></div>
                  <div className="w-full h-80 ">
                    <div className="py-10 flex flex-col items-center w-full h-full">
                      <img
                        className="w-48 h-48"
                        src="../../../public/Wallet_images/flate-img/empty.webp"
                        alt="No data"
                      />
                      <div className="leading-5 mt-4">
                        <FaExclamationTriangle className="inline-block mr-2 text-yellow-500" />
                        Oops! There is no data yet!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className={`absolute px-3 w-full h-full transition-transform duration-500 ${
            isSlideActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" w-full h-full text-white">
            <div className="w-full p-3 bg-[#323738] rounded-lg">
              {/* Header Section */}
              <div className="w-full h-8 flex items-center mb-3 relative">
                {/* Rewards Icon */}
                <FaGift className="w-5 h-5" /> {/* Replaced SVG with FaGift */}
                <p className="text-base font-extrabold ml-1">
                  <span>Rewards</span>
                </p>
                {/* Info Icon */}
                <FaQuestionCircle className="w-5 h-5 text-secondary ml-1 mt-0.5 sm:cursor-pointer" />{" "}
                {/* Replaced SVG with FaQuestionCircle */}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-tertiary opacity-20"></div>

              {/* Rewards Content */}
              <div className="w-full mt-3">
                {/* Reward Boxes */}
                <div className="w-full flex items-center justify-between gap-3">
                  {/* Box 1 */}
                  <div className="flex-1 h-20 rounded bg-[#3a4142] flex flex-col items-center justify-center pt-1">
                    <img
                      alt="star"
                      className="w-8 h-9"
                      src="/modules/account2/assets/start-8a2b06ab.png"
                    />
                    <span className="mt-1 text-secondary font-semibold">0</span>
                  </div>
                  {/* Box 2 */}
                  <div className="flex-1 h-20 rounded bg-[#3a4142] flex flex-col items-center justify-center pt-1 sm:cursor-pointer">
                    <img
                      alt="box"
                      className="w-8 h-9"
                      src="/modules/account2/assets/box-24e5e087.png"
                    />
                    <span className="mt-1 text-secondary font-semibold">5</span>
                  </div>
                  {/* Box 3 */}
                  <div className="flex-1 h-20 rounded bg-[#3a4142] flex flex-col items-center justify-center pt-1 sm:cursor-pointer">
                    <img
                      alt="box"
                      className="w-8 h-9"
                      src="/modules/account2/assets/box-24e5e087.png"
                    />
                    <span className="mt-1 text-secondary font-semibold">
                      10
                    </span>
                  </div>
                  {/* Box 4 */}
                  <div className="flex-1 h-20 rounded bg-[#3a4142] flex flex-col items-center justify-center pt-1 sm:cursor-pointer">
                    <img
                      alt="box"
                      className="w-8 h-9"
                      src="/modules/account2/assets/box-24e5e087.png"
                    />
                    <span className="mt-1 text-secondary font-semibold">
                      15
                    </span>
                  </div>
                  {/* Box 5 */}
                  <div className="flex-1 h-20 rounded bg-[#3a4142] flex flex-col items-center justify-center pt-1 sm:cursor-pointer">
                    <img
                      alt="box"
                      className="w-8 h-9"
                      src="/modules/account2/assets/box-24e5e087.png"
                    />
                    <span className="mt-1 text-secondary font-semibold">
                      max
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full mt-3 h-7 flex items-center">
                  <div className="relative h-1.5 w-full bg-[#3a4142]">
                    <div
                      className="h-1.5 bg-green-500 rounded-md"
                      style={{ width: "10%" }}
                    ></div>
                    <div
                      className="triangle-bg-green-500 absolute -top-1.5"
                      style={{ left: "8%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-3 bg-[#323738] rounded-lg p-3">
              {/* Header Section */}
              <div className="w-full flex items-center h-8">
                <p className="text-base font-extrabold">Your achievements</p>
                <p className="text-secondary ml-auto">
                  <span className="mx-1">0/20</span>
                  <span>Completed</span>
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-tertiary opacity-20 mt-3 mb-2"></div>

              {/* Achievements Icons or Cards */}
              <div className="flex items-center flex-wrap gap-[2%]">
                {/* Example of Achievement Icon with React Icon */}
                <div className="w-16 h-16 bg-[#232626] rounded-lg flex justify-center items-center">
                  <FaTrophy className="text-yellow-500 text-4xl" />{" "}
                  {/* Trophy icon */}
                </div>

                {/* Repeat the above block for other achievements as needed */}
                <div className="w-16 h-16 bg-[#232626] rounded-lg flex justify-center items-center">
                  <FaTrophy className="text-yellow-500 text-4xl" />
                </div>

                {/* More achievements can go here */}
              </div>
            </div>

            <div className="w-full mt-3 bg-[#323738] rounded-lg p-3">
              {/* Header */}
              <div className="w-full flex items-center h-8">
                <p className="text-base font-extrabold">Awaiting unlocking</p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-tertiary opacity-20 mt-3 mb-2"></div>

              {/* Achievements Grid */}
              <div className="flex items-center flex-wrap gap-[2%]">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="w-[32%] h-36 rounded-lg bg-[#3a4142] flex flex-col items-center justify-center font-semibold mt-2 cursor-pointer"
                  >
                    {/* Achievement Image */}
                    <img
                      className="w-11 h-15"
                      src={achievement.image}
                      alt={achievement.title}
                      style={{ opacity: 0.5 }}
                    />
                    {/* Achievement Title */}
                    <div className="text-xs mt-2 text-center">
                      {achievement.title}
                    </div>
                    {/* Achievement Value */}
                    <div className="h-5 px-2 bg-[#323738] rounded flex items-center mt-1.5">
                      <achievement.icon className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 ml-1 text-xs">
                        {achievement.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="w-full text-center text-green-500 text-xs font-semibold mt-3 mb-6 px-6">
                TIP JB is not included in medal calculation. Stats Updated every
                24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
