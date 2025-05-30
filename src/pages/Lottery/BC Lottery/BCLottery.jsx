import { useState, useEffect } from "react";
import coinlogo from "../../../../public/icons/coin-logo-bc338b33.png";
import Footer from "../../../components/Footer";
import sendticket from "../../../../public/Lottery_Image/send-ticket-bg-e1e216f5.png";
import { BsMagic } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import gudda from "../../../../public/Weekly_Raffle_Image/Active-images/gudda.png";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import ballpng from "../../../../public/Lottery_Image/ball-white-752f4d4b.png";
import ballpngjackpot from "../../../../public/Lottery_Image/jackpot_ball-02e27433.webp";
import { FaStar } from "react-icons/fa6";
import background from "../../../../public/Lottery_Image/bclottery_winners_result_pc-e23bb5a1.png";
import { GoLaw } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const BCLottery = () => {
  const [deposit, SetDeposit] = useState("Buy Lottery");
  const [gameId, SetGameId] = useState("");

  // Set the initial time for 3 hours (3 * 60 * 60 * 1000 ms = 10800000 ms)
  const initialTime = 3 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // If timeLeft is 0, stop the interval
    if (timeLeft <= 0) return;

    // Update the time every second (1000 ms)
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Calculate hours, minutes, and seconds left
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //count
  const [ticketCount, setTicketCount] = useState(5);
  const handleaDecrease = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handleIncrease = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleSetTicket = (count) => {
    setTicketCount(count);
  };

  // calender
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectedJackpot, setSelectedJackpot] = useState(null);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleJackpotClick = (number) => {
    setSelectedJackpot(number);
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setSelectedJackpot(null);
  };

  const handleQuickPick = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 36) + 1;
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    setSelectedNumbers(randomNumbers);
    setSelectedJackpot(Math.floor(Math.random() * 10) + 1);
  };

  //jackpot Winner
  const winners = [
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
    {
      img: gudda,
      ball: ballpng,
      Number: "1,2,3,4,5,6,7,8,",
      name: "Gudda",
      topwinners: "Ydnac666",
      GameId: "20250105160000",
      prize: "₹500,000.00",
      matches: "5",
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWinners = winners.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(winners.length / itemsPerPage);

  //game id
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const mapdata = [
    { number: "20250106120000" },
    { number: "202501034520000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
    { number: "20250106120000" },
  ];

  return (
    <div className="w-[100%] mt-14">
      <div className="bg-[#232626] flex justify-between items-center gap-2 w-full sticky py-4 top-0 z-40 bg-layer2 sm:top-[3.75rem] h-[80px]">
        <div className="flex items-center gap-2">
          <section className="relative min-w-[48px] min-h-[48px] w-[48px] h-[48px] overflow-hidden">
            <img
              className="w-[36px] min-w-[36px]"
              alt=""
              src={coinlogo}
              style={{ top: "-1968px" }}
            />
          </section>
          <h1 className="text-primary text-xl font-extrabold">
            BC Lottery Jackpot
          </h1>
          <button
            className="button button-second button-m w-8 h-8 center rounded-md cursor-pointer"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-secondary"
            >
              <path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-2">
          <section className="banner-instruction flex">
            <div className="how-to-play-box flex gap-2">
              <button
                className="bg-[#3a4142] flex items-center gap-2 px-2 cursor-pointer rounded-lg w-8 h-8 sm:w-auto sm:rounded-md"
                type="button"
              >
                <svg
                  fill="currentColor"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.08404 6.9274H13.4745C13.7167 6.9274 13.9136 7.12382 13.9136 7.36654V7.43529C13.9136 7.67754 13.7172 7.87442 13.4745 7.87442H9.08404C8.84179 7.87442 8.64491 7.678 8.64491 7.43529V7.36654C8.64491 7.12429 8.84133 6.9274 9.08404 6.9274ZM9.08404 2.66699H13.4745C13.7167 2.66699 13.9136 2.86341 13.9136 3.10613V3.17487C13.9136 3.41712 13.7172 3.61401 13.4745 3.61401H9.08404C8.84179 3.61401 8.64491 3.41759 8.64491 3.17487V3.10613C8.64491 2.86388 8.84133 2.66699 9.08404 2.66699ZM2.49841 6.9274H6.88883C7.13108 6.9274 7.32797 7.12382 7.32797 7.36654V7.43529C7.32797 7.67754 7.13155 7.87442 6.88883 7.87442H2.49841C2.25616 7.87442 2.05927 7.678 2.05927 7.43529V7.36654C2.05927 7.12429 2.25569 6.9274 2.49841 6.9274ZM9.08404 5.50758H13.4745C13.7167 5.50758 13.9136 5.704 13.9136 5.94671V6.01546C13.9136 6.25771 13.7172 6.4546 13.4745 6.4546H9.08404C8.84179 6.4546 8.64491 6.25818 8.64491 6.01546V5.94671C8.64491 5.70446 8.84133 5.50758 9.08404 5.50758ZM2.49841 5.50758H6.88883C7.13108 5.50758 7.32797 5.704 7.32797 5.94671V6.01546C7.32797 6.25771 7.13155 6.4546 6.88883 6.4546H2.49841C2.25616 6.4546 2.05927 6.25818 2.05927 6.01546V5.94671C2.05927 5.70446 2.25569 5.50758 2.49841 5.50758ZM9.08404 4.08729H13.4745C13.7167 4.08729 13.9136 4.2837 13.9136 4.52642V4.59517C13.9136 4.83742 13.7172 5.0343 13.4745 5.0343H9.08404C8.84179 5.0343 8.64491 4.83788 8.64491 4.59517V4.52642C8.64491 4.28417 8.84133 4.08729 9.08404 4.08729ZM2.49841 4.08729H6.88883C7.13108 4.08729 7.32797 4.2837 7.32797 4.52642V4.59517C7.32797 4.83742 7.13155 5.0343 6.88883 5.0343H2.49841C2.25616 5.0343 2.05927 4.83788 2.05927 4.59517V4.52642C2.05927 4.28417 2.25569 4.08729 2.49841 4.08729ZM1.62061 8.82097H14.3527C14.3527 9.34382 13.929 9.76752 13.4062 9.76752H2.56762C2.04478 9.76752 1.62061 9.34382 1.62061 8.82097ZM8.32923 10.1959L10.2691 12.6189C10.4206 12.8083 10.3902 13.0847 10.2008 13.2362C10.1232 13.2984 10.0264 13.3325 9.9263 13.3325H6.04657C5.80432 13.3325 5.60743 13.1361 5.60743 12.8934C5.60743 12.7938 5.64157 12.697 5.70377 12.6189L7.64364 10.1959C7.79516 10.0065 8.07155 9.9761 8.26095 10.1276C8.28621 10.1477 8.30912 10.1706 8.32923 10.1959Z"></path>
                </svg>
                <label className="text-primary text-sm font-extrabold ml-1">
                  Provably Fair
                </label>
              </button>
              <button
                className="bg-[#3a4142] flex items-center gap-2 px-2 cursor-pointer rounded-lg w-8 h-8 sm:w-auto sm:rounded-md"
                type="button"
              >
                <svg
                  fill="currentColor"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.00024 2C11.3141 2 14.0005 4.6864 14.0005 8.00024C14.0005 11.3141 11.3141 14.0005 8.00024 14.0005C4.6864 14.0005 2 11.3141 2 8.00024C2 4.6864 4.6864 2 8.00024 2ZM7.91967 10.1286C7.72166 10.1286 7.55965 10.1916 7.42465 10.3176C7.28964 10.4436 7.22664 10.6056 7.22664 10.8036C7.22664 11.0017 7.28964 11.1637 7.42465 11.2897C7.55965 11.4157 7.72166 11.4877 7.91967 11.4877C8.11768 11.4877 8.27968 11.4247 8.41469 11.2987C8.54969 11.1727 8.6217 11.0017 8.6217 10.8036C8.6217 10.6056 8.5497 10.4436 8.42369 10.3176C8.28868 10.1916 8.11768 10.1286 7.91967 10.1286ZM7.89995 4.3701C7.88838 4.3701 7.87681 4.37053 7.86567 4.37095C7.41565 4.38981 7.06635 4.76997 7.08564 5.21999L7.25064 9.12529H8.53255L8.7117 5.21956C8.71213 5.20713 8.71256 5.1947 8.71256 5.18227C8.71256 4.73354 8.34869 4.3701 7.90038 4.3701H7.89995Z"></path>
                </svg>
                <label className="text-primary text-sm font-extrabold ml-1">
                  How to play?
                </label>
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* 2nd Line */}
      <div className="flex flex-col gap-2 items-start pb-4 relative">
        <div className="w-full flex gap-2 justify-between mt-3 sm:justify-start">
          <span className="text-sm font-semibold text-secondary">
            Next Draw Time
          </span>
          <span className="text-sm font-semibold text-primary">
            2/17/2025, 9:25:00 PM
          </span>
        </div>
        <div className="w-full flex items-center gap-2 justify-between mt-3 sm:justify-start">
          <span className="text-sm font-semibold text-secondary">
            Next Draw Starts in
          </span>
          <div className="text-sm font-semibold text-primary">
            <div>
              <div>
                <div className="text-xl font-bold">
                  {hours < 10 ? `0${hours}` : hours}:
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
                {timeLeft <= 0 && <p>Time s up!</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3a4142] h-10 px-4 mt-3 rounded-xl w-full flex gap-3 justify-between items-center sm:w-[25rem]">
          <span className="text-sm font-semibold text-secondary">
            Recent winning prize
          </span>
          <span className="text-sm font-extrabold text-brand">
            ₹8,683,539.05
          </span>
        </div>
        <img
          className="h-full absolute z-30 top-8 right-0"
          src="/public/Lottery_Image/detail-banner-912dd1fc.webp"
          alt="Banner"
        />
      </div>
      {/* 3rd Line */}
      <div className="w-[40%] bg-[#323738] h-[40px] px-5 rounded-lg flex items-center justify-around font-bold text-gray-400 text-[14px] ">
        <div
          onClick={() => SetDeposit("Buy Lottery")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "Buy Lottery"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white"
          }`}
        >
          <div className="text-center my-3">
            <button className="">Buy Lottery</button>
          </div>
        </div>
        <div
          onClick={() => SetDeposit("Result")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "Result"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white"
          }`}
        >
          <div className="text-center my-3">
            <button>Result</button>
          </div>
        </div>
        <div
          onClick={() => SetDeposit("Jackpot Winners")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "Jackpot Winners"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white"
          }`}
        >
          <div className="text-center my-3">
            <button>Jackpot Winners</button>
          </div>
        </div>
      </div>
      <div>
        {deposit === "Buy Lottery" && (
          <div className="flex items-start justify-end gap-5">
            <div className="w-[70%] bg-[#323738] h-auto mt-5 px-5 py-5 rounded-xl">
              <div className="bc-lottery">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-secondary font-semibold text-sm">
                    Numbers of Ticket
                  </div>
                  <div className="text-primary font-semibold text-sm">
                    1 Ticket = $0.1
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className=" cursor-pointer h-10 rounded py-0.5 px-1 w-full bg-input_bright">
                    <div className="bg-[#292d2e] flex items-center justify-start rounded-lg w-full h-full min-w-4 p-0 border-0 text-center px-2 text-base font-extrabold bg-input_bright">
                      <button
                        className="bg-[#272b2c] rounded-lg bg-black_alpha5 w-8 h-8"
                        type="button"
                        onClick={handleaDecrease}
                      >
                        -
                      </button>
                      <input
                        inputMode="decimal"
                        value={ticketCount}
                        readOnly
                        className="text-center w-full bg-[#292d2e] text-white"
                      />
                      <button
                        className="bg-[#272b2c] rounded-lg bg-black_alpha5 w-8 h-8"
                        type="button"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[20, 50, 100].map((count) => (
                      <button
                        key={count}
                        className="bg-[#4a5354] rounded-lg w-1/3 h-8 sm:w-24 sm:h-10 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold"
                        type="button"
                        onClick={() => handleSetTicket(count)}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pick-nums-wrap flex items-center justify-between flex-wrap">
                  <div className="picks-head flex flex-col w-full mt-4">
                    <div className="text-primary font-extrabold text-base">
                      Completed {selectedNumbers.length} / 5 Ticket(s)
                    </div>
                    <div className=" flex items-center justify-between">
                      <button
                        className="flex items-center justify-start gap-2 text-secondary font-semibold text-sm px-0"
                        type="button"
                        onClick={handleClear}
                      >
                        <MdDelete />
                        Clear All
                      </button>
                      <button
                        className="flex items-center justify-start gap-2 font-extrabold text-sm px-0"
                        type="button"
                        onClick={handleQuickPick}
                      >
                        <BsMagic className="text-green-500" />
                        Quick Pick
                      </button>
                    </div>
                  </div>
                  <div className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth mt-3 ">
                    <div className="picks-list pb-5 flex justify-start gap-4 sm:grid sm:grid-cols-2 sm:gap-2">
                      <div className="min-w-[320px] bg-layer3 rounded-xl">
                        <div className="bg-[#292d2e] relative flex items-center justify-between px-1 rounded-t-lg bg-layer3 ">
                          <button
                            className="button button-m text-secondary text-sm font-semibold"
                            type="button"
                            onClick={handleClear}
                          >
                            Clear
                          </button>
                          <span>{selectedNumbers.length}/6</span>
                          <button
                            className="bg-[#3a4142] p-2 rounded-lg"
                            type="button"
                          >
                            <span className="w-6 h-6 center  rounded-md">
                              <BsMagic />
                            </span>
                          </button>
                        </div>
                        <div className="bg-[#232626] p-4 bg-layer2 rounded-b-xl">
                          <div className="nums">
                            <div className="mb-3 text-sm font-semibold text-secondary">
                              Choose 5 numbers
                            </div>
                            <div className="box grid grid-cols-7 gap-1.5">
                              {Array.from({ length: 36 }, (_, i) => i + 1).map(
                                (number) => (
                                  <button
                                    key={number}
                                    className={`button button-m w-10 h-10 text-center rounded-full ${
                                      selectedNumbers.includes(number)
                                        ? "bg-brand text-white"
                                        : "bg-layer3"
                                    } text-base font-extrabold`}
                                    type="button"
                                    onClick={() => handleNumberClick(number)}
                                  >
                                    {number}
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                          <div className="jackpot mt-3 pb-3">
                            <div className="mb-3 text-sm font-semibold text-secondary">
                              Choose 1 Jackpot Ball
                            </div>
                            <div className="box grid grid-cols-7 gap-1.5">
                              {Array.from({ length: 10 }, (_, i) => i + 1).map(
                                (number) => (
                                  <button
                                    key={number}
                                    className={`button button-m w-10 h-10 text-center rounded-full ${
                                      selectedJackpot === number
                                        ? "bg-brand text-white"
                                        : "bg-layer3"
                                    } text-base font-extrabold`}
                                    type="button"
                                    onClick={() => handleJackpotClick(number)}
                                  >
                                    {number}
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] mt-5 ">
              {" "}
              <div className="cart-list mb-40 sm:w-96">
                <div className=" bg-[#323738] p-3 mb-2 rounded-xl">
                  <section className="text-lg text-primary font-extrabold border-b border-solid border-input pb-3 pt-2">
                    BC Lottery Jackpot
                  </section>
                  <section className="flex justify-between mt-4">
                    <label className="text-secondary text-sm font-semibold">
                      73 Tickets
                    </label>
                    <span className="text-primary text-sm font-extrabold">
                      $0.1 X 73
                    </span>
                  </section>
                  <section className="flex justify-between mt-4">
                    <label className="text-sm font-semibold text-secondary">
                      Total Bet Amount
                    </label>
                    <span className="text-sm font-extrabold text-primary flex items-center gap-1">
                      7.3
                      <img
                        className="w-3 h-3"
                        src="/coin/USD.rect.png"
                        loading="lazy"
                        alt="USD Coin"
                      />
                    </span>
                  </section>
                  <section className="flex justify-end text-secondary text-sm font-semibold">
                    ≈ ₹634.47
                  </section>
                  <section className="flex items-center w-full mt-2">
                    <button
                      className="bg-gradient-to-r from-green-dark to-yellow-dark py-1 rounded-xl w-full"
                      type="button"
                    >
                      Add Bet
                    </button>
                  </section>
                </div>
                <div className=" rounded-xl">
                  <div
                    className="flex flex-col justify-center rounded p-4 relative h-[150px] bg-[length:100%_100%] bg-no-repeat -z-10 "
                    style={{
                      backgroundImage: `url(${sendticket})`,
                    }}
                  >
                    <div className="text-primary text-base font-extrabold">
                      Send Lottery Ticket as Gift
                    </div>
                    <div className="mt-2.5 text-secondary text-sm font-semibold">
                      Invite your friends to win $100,000
                    </div>
                    <div className="mt-4 flex items-center">
                      <button
                        className="button button-m p-2 text-primary text-sm font-extrabold bg-black_alpha5 rounded-md border border-solid border-third h-8"
                        type="button"
                      >
                        Send Ticket
                      </button>
                      <button
                        className="button button-m text-primary text-sm font-extrabold ml-3 bg-black_alpha5 rounded-md border border-solid border-third h-8"
                        type="button"
                      >
                        View Gift History
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {deposit === "Result" && (
          <div>
            <div className="bg-[#323738]">
              <div className="flex justify-between items-center p-4 border-b border-solid border-input relative gap-3 mt-5">
                <div className="flex items-center justify-start gap-3 text-white ">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#292d2e]">
                    <FaChevronLeft />
                  </div>
                  <div className="w-48 h-10 flex items-center justify-center rounded-lg bg-[#292d2e] gap-3 relative">
                    20250106120000{" "}
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3a4142]"
                      onClick={toggleDropdown}
                    >
                      <FaChevronDown />
                    </button>
                    {/* Dropdown Menu */}
                    {showDropdown && (
                      <div className="z-30 absolute top-12 left-0 bg-[#3a4142] text-white rounded-lg shadow-lg lg:w-[300px] lg:h-[350px] md:w-[300px] md:h-[350px] sm:w-[250px]  overflow-y-auto">
                        <ul className="flex flex-col snap-y scroll-smooth p-2">
                          {mapdata.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between px-4 py-2 hover:bg-[#292d2e] rounded-xl cursor-pointer"
                            >
                              <span>{item.number}</span>
                              <div className="w-5 h-5 rounded-full border-[4px] border-slate-400"></div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#292d2e]">
                    <FaChevronRight />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => SetGameId((prev) => !prev)}
                    className="bg-[#3a4142] w-10 h-10  p-1.5 rounded-md right-4 flex items-center justify-center"
                  >
                    <GoLaw className="text-gray-300" />
                  </button>
                  {gameId && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
                      <div
                        className="sm:w-[350px] lg:w-[500px] md:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl snap-y overflow-y-auto scroll-smooth"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-full h-[70px] bg-[#323738] rounded-t-3xl flex items-center justify-center ">
                          <h1 className="text-[#ffffff] text-[16px] font-medium ">
                            Lottery Fairness
                          </h1>
                          <button
                            className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                            onClick={() => SetGameId(false)}
                          >
                            <IoMdClose className="text-[#a4aeb1]" />
                          </button>
                        </div>
                        <div className="mx-5">
                          <div className="p-4 rounded-xl text-sm text-primary font-normal bg-[rgba(36,238,137,0.10)] mt-5">
                            BC.CO Lottery is provably fair which means you can
                            examine the results using
                            <button
                              className="button button-m inline-flex font-bold underline cursor-pointer text-brand"
                              type="button"
                            >
                              Online verifier
                            </button>
                            and the following data. The whole data, including
                            the file with purchased tickets, is available only
                            when ticket sales stop.
                          </div>

                          {/* <div className="copy-box relative">
                            <section className="my-1 flex justify-between">
                              <h4 className="text-left text-secondary text-sm font-semibold">
                                <div className="flex gap-1 items-center text-secondary text-sm font-semibold">
                                  <span>Server Seed hash</span>
                                  <svg
                                    fill="currentColor"
                                    className="w-4 h-4"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14c-7.732 0-14-6.268-14-14s6.268-14 14-14zM16 5c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.075 0 11-4.925 11-11s-4.925-11-11-11zM15.954 21.916c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM16.218 7.827c1.56 0 2.832 0.408 3.792 1.272 0.96 0.84 1.44 1.992 1.44 3.456 0 1.2-0.312 2.184-0.888 2.952-0.216 0.24-0.912 0.888-2.064 1.896-0.432 0.36-0.744 0.768-0.96 1.2-0.206 0.411-0.323 0.84-0.353 1.317l-0.007 0.243v0.336h-2.76v-0.336c0-0.912 0.144-1.704 0.48-2.352 0.295-0.612 1.146-1.545 2.554-2.82l0.254-0.228 0.288-0.336c0.432-0.528 0.648-1.104 0.648-1.704 0-0.792-0.24-1.416-0.672-1.872-0.456-0.456-1.104-0.672-1.92-0.672-1.056 0-1.8 0.312-2.256 0.984-0.371 0.502-0.563 1.202-0.595 2.082l-0.005 0.27h-2.736c0-1.776 0.504-3.168 1.56-4.176 1.032-1.008 2.424-1.512 4.2-1.512z"></path>
                                  </svg>
                                </div>
                              </h4>
                            </section>
                            <div className="flex items-center bg-[#1e2121]">
                              <div className="input flex-1  text-base font-semibold rounded-xl text-primary pr-16">
                                <input readOnly className="bg-transparent" />
                              </div>
                              <button className=" w-12 h-8 absolute right-2 bg-[#373e3f] rounded-md text-sm font-extrabold ">
                                Copy
                              </button>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <section
                className="m-4 bg-cover bg-center flex "
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <section className="w-1/2">
                  <div className="pt-4 text-center text-primary text-xs font-semibold">
                    Draw time: 2/17/2025, 9:25:00 PM
                  </div>
                  <div className="mview flex flex-col items-center">
                    <div className="center m-4 flex items-center gap-2 text-green-500">
                      <svg
                        fill="currentColor"
                        className="w-4 h-4 fill-brand"
                        viewBox="0 0 13 13"
                      >
                        <path d="M6.8 9.03c-.19-.1-.41-.1-.6 0l-1.2.63c-.47.25-.99-.15-.9-.67l.23-1.33c.04-.21-.03-.42-.18-.57l-.97-.94c-.38-.37-.17-1.02.36-1.09l1.34-.19c.21-.03.4-.14.5-.33l.6-1.21c.24-.47.92-.47 1.16 0l.6 1.21c.1.19.29.3.5.33l1.34.19c.53.08.74.72.36 1.09l-.97.94c-.15.15-.22.36-.18.57l.23 1.33c.09.52-.43.92-.9.67l-1.2-.63z" />
                      </svg>
                      <label className="text-brand text-base font-extrabold">
                        Winner Numbers
                      </label>
                      <svg
                        fill="currentColor"
                        className="w-4 h-4 fill-brand"
                        viewBox="0 0 13 13"
                      >
                        <path d="M6.8 9.03c-.19-.1-.41-.1-.6 0l-1.2.63c-.47.25-.99-.15-.9-.67l.23-1.33c.04-.21-.03-.42-.18-.57l-.97-.94c-.38-.37-.17-1.02.36-1.09l1.34-.19c.21-.03.4-.14.5-.33l.6-1.21c.24-.47.92-.47 1.16 0l.6 1.21c.1.19.29.3.5.33l1.34.19c.53.08.74.72.36 1.09l-.97.94c-.15.15-.22.36-.18.57l.23 1.33c.09.52-.43.92-.9.67l-1.2-.63z" />
                      </svg>
                    </div>
                    <div className="border-t border-dashed border-third sm:mb-4 sm:w-fit sm:border-t sm:border-solid">
                      <div className="center gap-3 p-2 flex">
                        {[14, 6, 31, 19, 4].map((num, index) => (
                          <div key={index} className="relative center">
                            <img
                              className="w-10 h-10"
                              alt=""
                              loading="lazy"
                              src={ballpng}
                            />
                            <label className="absolute top-2 left-3 text-black">
                              {num}
                            </label>
                          </div>
                        ))}
                        <div className="bg-third h-10 w-[1px]"></div>
                        <div className=" w-10 h-10 center relative">
                          <img
                            className="w-10 h-10"
                            loading="lazy"
                            src={ballpngjackpot}
                          />
                          <div className="absolute top-2 left-2">10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex flex-col items-center border-t border-dashed border-third py-4 mx-4 w-1/2 sm:mx-0 sm:justify-center sm:border-0">
                  <div className="center gap-1 flex">
                    <img
                      className="icon w-8 h-8"
                      loading="lazy"
                      src="/public/Lottery_Image/total-tickets-2ab2a127.webp"
                    />
                    <div>
                      <label className="text-secondary text-sm font-semibold">
                        Total tickets sold this round:
                      </label>{" "}
                      <span className="text-primary text-sm font-extrabold">
                        16815
                      </span>
                    </div>
                  </div>
                  <div className="center gap-1 mt-2 flex">
                    <img
                      className="icon w-8 h-8"
                      loading="lazy"
                      src="/public/Lottery_Image/winner-tickets-fb6bd542.webp"
                    />
                    <div>
                      <label className="text-secondary text-sm font-semibold">
                        Total winning tickets in this round:
                      </label>{" "}
                      <span className="text-primary text-sm font-extrabold">
                        145
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* winnerlist */}
              <div className="overflow-x-auto  mt-5">
                <div className="px-5 py-10 ">
                  <h1 className=" mb-3 text-[25px] font-bold flex items-center justify-center ">
                    <FaStar className="mr-2" /> Winner list{" "}
                    <FaStar className="ml-2" />
                  </h1>
                  <table className="min-w-full text-left snap-x scroll-smooth border-collapse rounded-lg">
                    <thead>
                      <tr className="text-[#afbbc0] border-b">
                        <th className="p-2">Player</th>
                        <th className="p-2">Numbers</th>
                        <th className="p-2">Matches</th>
                        <th className="p-2">Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentWinners.map((winner, index) => (
                        <tr key={index} className="text-white border-b">
                          <td className="p-2 flex items-center gap-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src={winner.img}
                              alt="User Avatar"
                            />
                            {winner.topwinners}
                          </td>
                          <td className="p-2">
                            <div className="flex flex-wrap gap-1">
                              {winner.Number.split(",").map(
                                (num, idx) =>
                                  num && (
                                    <div
                                      key={idx}
                                      className="w-6 h-6 text-black text-xs font-semibold rounded-full bg-no-repeat bg-cover flex items-center justify-center"
                                      style={{
                                        backgroundImage: `url(${ballpng})`,
                                      }}
                                    >
                                      {num}
                                    </div>
                                  )
                              )}
                            </div>
                          </td>
                          <td className="p-2">{winner.matches}</td>
                          <td className="p-2">{winner.prize}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  <div className="flex items-center justify-end mt-5">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    >
                      <FaChevronLeft />
                    </button>
                    <span className="mx-4 text-white">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {deposit === "Jackpot Winners" && (
          <div>
            <div className="overflow-x-auto bg-[#323738] mt-5">
              <div className="px-5 py-10 ">
                <table className="min-w-full text-left snap-x scroll-smooth border-collapse rounded-lg">
                  <thead>
                    <tr className="text-[#afbbc0] border-b">
                      <th className="p-2">Game Id</th>
                      <th className="p-2">Top Winner</th>
                      <th className="p-2">Numbers</th>
                      <th className="p-2">Matches</th>
                      <th className="p-2">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentWinners.map((winner, index) => (
                      <tr key={index} className="text-white border-b">
                        <td className="p-2">{winner.GameId}</td>
                        <td className="p-2 flex items-center gap-2">
                          <img
                            className="w-6 h-6 rounded-full"
                            src={winner.img}
                            alt="User Avatar"
                          />
                          {winner.topwinners}
                        </td>
                        <td className="p-2">
                          <div className="flex flex-wrap gap-1">
                            {winner.Number.split(",").map(
                              (num, idx) =>
                                num && (
                                  <div
                                    key={idx}
                                    className="w-6 h-6 text-black text-xs font-semibold rounded-full bg-no-repeat bg-cover flex items-center justify-center"
                                    style={{
                                      backgroundImage: `url(${ballpng})`,
                                    }}
                                  >
                                    {num}
                                  </div>
                                )
                            )}
                          </div>
                        </td>
                        <td className="p-2">{winner.matches}</td>
                        <td className="p-2">{winner.prize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-end mt-5">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="mx-4 text-white">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BCLottery;
