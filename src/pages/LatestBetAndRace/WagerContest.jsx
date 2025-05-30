import { useState, useEffect } from "react";

import tropy from "../../../public/Daily_contest_image/daily_contest_image/trophy-B3u8sNrg.webp";

// leave
import left from "../../../public/Daily_contest_image/daily_contest_image/grass-CpiRLZv-.webp";
import right from "../../../public/Daily_contest_image/daily_contest_image/grass-CpiRLZv-.webp";

//active
import active from "../../../public/Daily_contest_image/daily_contest_image/tag-01-01.png";
import spinner from "../../../public/Daily_contest_image/daily_contest_image/spinner.png";

// last champion
import winner from "../../../public/Daily_contest_image/daily_contest_image/winner-2Gw-m0Lk-01-01.png";
import crown from "../../../public/Daily_contest_image/daily_contest_image/crown-B_dBh7X7.webp";
import frog from "../../../public/Daily_contest_image/daily_contest_image/head3_l.png";

// medal img
import medal1 from "../../../public/Daily_contest_image/daily_contest_image/gold-CfQ8SjyD.webp";
import medal2 from "../../../public/Daily_contest_image/daily_contest_image/silver-DTgn4-xw.webp";
import medal3 from "../../../public/Daily_contest_image/daily_contest_image/copper-DgadfozE.webp";
// import Spinner from '../components/Spinner';

// arrow icon
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const WagerContest = () => {
  const [contestData, setContestData] = useState([]);
  const [prizePool] = useState(1374809.25); 
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 7,
    minutes: 17,
    seconds: 15,
  });
  const [information, setInformation] = useState("");

  // Fetch data and initialize state
  useEffect(() => {
    const mockData = [
      {
        rank: 1,
        player: "Hidden",
        wager: "₹2,35,596.75K",
        prize: "₹6,41,818.73 ",
        percent: "(50%)",
      },
      {
        rank: 2,
        player: "Jiuvndbirsac",
        wager: "₹1,46,844.84K",
        prize: "₹3,20,909.36 ",
        percent: "(25%)",
      },
      {
        rank: 3,
        player: "SalsaKing",
        wager: "₹1,19,314.64K",
        prize: "₹1,54,036.49 ",
        percent: "(12%)",
      },
      {
        rank: 4,
        player: "Hidden",
        wager: "₹8,82,12,176.35",
        prize: "₹77,018.24 ",
        percent: "(6%)",
      },
      {
        rank: 5,
        player: "Fwwnicmhkqac",
        wager: "₹7,75,65,660.66",
        prize: "₹38,509.12 ",
        percent: "(3%)",
      },
      {
        rank: 6,
        player: "Fpoaqdyftsac",
        wager: "₹6,46,95,790.86",
        prize: "₹19,254.56 ",
        percent: "(1.5%)",
      },
      {
        rank: 7,
        player: "Zxqvbnm",
        wager: "₹5,00,00,000.00",
        prize: "₹10,000.00 ",
        percent: "(1%)",
      },
    ];
    setContestData(mockData);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0
      ) {
        clearInterval(intervalId);
      } else {
        const seconds = timeRemaining.seconds - 1;
        const minutes = timeRemaining.minutes - (seconds < 0 ? 1 : 0);
        const hours = timeRemaining.hours - (minutes < 0 ? 1 : 0);
        setTimeRemaining({
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

  //information content
  const contestDetails = {
    title: "Rules - Daily Wagering Contest",
    date: "2/13/2025 ~ 2/14/2025",
    description:
      "The contest prize pool closely depends on the bankroll, the more players bet, the bigger it grows. The current prize pool will be shown on the Contest page. 10 most wagering players carve up the prize pool.",
    supportedCurrencies: [
      "POL",
      "COP",
      "APT",
      "UAH",
      "PLN",
      "IOTX",
      "SHIB",
      "KES",
      "XOF",
      "NEAR",
      "WLD",
      "HNT",
      "FDUSD",
      "FLOOR",
      "NGN",
      "UNI",
      "MDL",
      "NOK",
      "MAGIC",
      "CAD",
      "XLM",
      "PHP",
      "CZK",
      "WCK",
      "PKR",
    ],
    prizeDistribution: [
      { place: "1st", percentage: "50%" },
      { place: "2nd", percentage: "25%" },
      { place: "3rd", percentage: "12%" },
      { place: "4th", percentage: "6%" },
      { place: "5th", percentage: "3%" },
      { place: "6th", percentage: "1.5%" },
      { place: "7th", percentage: "0.9%" },
      { place: "8th", percentage: "0.7%" },
      { place: "9th", percentage: "0.5%" },
      { place: "10th", percentage: "0.4%" },
    ],
  };

  return (
    <>
      <div className="w-full">
        <div className="w-[100%] mx-auto bg-[#232626] m-10 lg:flex gap-4 items-stretch">
          {/* Daily Contest Section */}
          <div className="flex items-center lg:w-[50%] rounded p-5 bg-[linear-gradient(to_right,_rgba(36,_238,_137,_0.2)_0%,_rgb(50,_55,_56)_60%)]">
            <div className="flex items-center justify-center w-full p-4">
              {/* Trophy on the left side */}
              <img src={tropy} alt="Trophy" className="w-32 h-32 mr-4" />

              {/* Content on the right side */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center  md:pr-2">
                  <img src={left} alt="Left Decoration" className="mr-2" />
                  <h2 className="text-2xl font-bold text-[#24EE89]">
                    Daily Contest
                  </h2>
                  <img
                    src={right}
                    alt="Right Decoration"
                    className="transform -scale-x-100 lg:ml-2 "
                  />
                </div>
                <p className="text-lg text-gray-400 mt-2">Contest Prize Pool</p>
                <p className="text-xl font-bold text-green-400 mt-1 bg-[#232626] p-3 rounded-lg ">
                  ₹{prizePool.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          {/* Time Remaining Section */}
          <div className="bg-[#323738] p-2 rounded-md lg:w-[25%] sm:my-5 lg:my-0 flex flex-col items-center">
            <div className="flex flex-col items-center mt-5">
              <div>
                <h2 className="text-xl font-bold text-[#24EE89] mt-4">
                  Time Remaining
                </h2>
              </div>
              <div className="flex items-center text-white mt-4">
                {/* Hours */}
                <div className="bg-[#232626] flex flex-col items-center p-1 w-[40px] rounded-lg">
                  <p className="text-xl font-bold">{timeRemaining.hours}</p>
                  <p className="lg:text-sm md:text-xs text-[#AEB9BC]">H</p>
                </div>

                <span className="font-bold text-xl mx-2 flex items-center text-[#ABB6B9]">
                  :
                </span>

                {/* Minutes */}
                <div className="bg-[#232626] flex flex-col items-center p-1 w-[40px] rounded-lg">
                  <p className="text-xl font-bold">{timeRemaining.minutes}</p>
                  <p className="lg:text-sm md:text-xs text-[#AEB9BC]">M</p>
                </div>

                <span className="font-bold text-xl mx-2 flex items-center text-[#ABB6B9]">
                  :
                </span>

                {/* Seconds */}
                <div className="bg-[#232626] flex flex-col items-center p-1 w-[40px] rounded-lg">
                  <p className="text-xl font-bold">{timeRemaining.seconds}</p>
                  <p className="lg:text-sm md:text-xs text-[#AEB9BC]">S</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last Champion Section */}
          <div className="bg-[#323738] lg:w-[25%] p-5 rounded-md relative flex flex-col justify-between">
            {/* Winner Image - Top Left */}
            <img
              src={winner}
              alt="Winner"
              className="absolute top-0 left-0 w-12 h-12 border-[#24EE89]"
            />

            {/* Question Mark Circle - Top Right */}
            <div>
              <div
                onClick={() => setInformation((prev) => !prev)}
                className="absolute cursor-pointer top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#232626] text-white font-bold"
              >
                ?
              </div>
              {information && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500  z-30 "></div>
                  <div
                    className="sm:w-[350px] md:w-[500px] lg:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl snap-y overflow-y-auto scroll-smooth "
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-full h-[70px] bg-[#232626] rounded-t-3xl flex items-center justify-center ">
                      <strong className="text-[#ffffff] text-[16px] font-medium ">
                        Deposit Bonus Rules
                      </strong>
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => setInformation(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1]" />
                      </button>
                    </div>
                    <div className=" text-white px-6 rounded-lg max-w-4xl mx-auto mt-5 shadow-lg">
                      <h2 className="text-2xl font-bold mb-2 text-yellow-400">
                        {contestDetails.title}
                      </h2>
                      <p className="text-gray-300 text-sm mb-4">
                        {contestDetails.date}
                      </p>
                      <p className="mb-4">{contestDetails.description}</p>

                      <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                        Supported Cryptocurrencies
                      </h3>
                      <div className="grid grid-cols-4 gap-2 text-gray-400 text-sm mb-4">
                        {contestDetails.supportedCurrencies.map(
                          (currency, index) => (
                            <span
                              key={index}
                              className="bg-gray-800 px-2 py-1 rounded-md"
                            >
                              {currency}
                            </span>
                          )
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                        Prize Distribution
                      </h3>
                      <ul className="list-disc pl-5 text-gray-300">
                        {contestDetails.prizeDistribution.map(
                          (prize, index) => (
                            <li key={index} className="mb-1">
                              {prize.place} place -{" "}
                              <span className="text-yellow-400">
                                {prize.percentage}
                              </span>{" "}
                              of the Daily Contest prize pool
                            </li>
                          )
                        )}
                      </ul>

                      <p className="mt-6 text-gray-400 text-sm italic">
                        All prizes will be sent in BCD. Prizes will be sent on
                        the Notice page as the Contest ends.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Last Champion Content */}
            <div className="flex flex-col items-center mt-8">
              <h2 className="text-xl font-bold text-[#24EE89]">
                Last Champion
              </h2>
              <div className="flex items-center">
                <div>
                  <img src={crown} alt="Crown" className="w-16 h-6" />
                  <img
                    src={frog}
                    alt="Champion"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#24EE89]"
                  />
                </div>
                <div className="ml-2 mt-4">
                  <p className="text-sm font-bold text-white">Hidden</p>
                  <p className="text-sm text-gray-400">Profit (50%)</p>
                  <p className="text-sm font-bold text-green-400">
                    ₹1,24,685.12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* asdfghjk */}
        <div className="w-[100%] mx-auto lg:flex lg:flex-row bg-[#323738] p-4 rounded-xl">
          <div className="flex-1 flex items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full"
              src="//img2.distributedresourcestorage.com/avatar/64812696/s?t=0"
              alt="Avatar"
            />
            <div className="font-extrabold text-sm">Krcdnemqmuac</div>
          </div>

          <div className="flex-1 border-solid border-l border-third flex flex-col items-center">
            <div>My Position</div>
            <div className="text-base font-extrabold mt-1 text-brand">
              50th+
            </div>
          </div>

          <div className="flex-1 border-solid border-l border-third flex flex-col items-center">
            <div>Wager</div>
            <div className="text-base font-extrabold mt-1 text-brand">
              ₹0.00
            </div>
          </div>

          <div className="flex-1 border-solid border-l border-third flex flex-col items-center">
            <div className="text-xs text-center">
              Wager <span className="mx-1 text-primary">₹64,821,217.21</span> to
              reach
              <span className="mx-1 rounded-xl font-semibold bg-[#F6519666]/40 px-1.5 text-alw_white">
                Top 10
              </span>
            </div>
          </div>
        </div>

        {/* Contest Table */}
        <div className=" mt-5 rounded ">
          <div className="overflow-x-scroll custom-scrollbar hide-scrollbar bg-[#323738] rounded">
            <div className="flex items-center justify-between mt-4 relative">
              <div className="relative">
                <img src={active} alt="Active" className="w-full h-9" />
                <div className="absolute left-1 top-1  flex items-center justify-center gap-1 text-black font-bold">
                  {/* <Spinner /> */}
                  <img
                    src={spinner}
                    alt="Loading..."
                    className="w-3 h-3 animate-spin"
                  />
                  <div>Active</div>
                </div>
              </div>

              <p className="text-sm text-white font-bold">
                03/12/2024 - 04/12/2024
              </p>
              <button className="bg-[#495354] font-bold text-white px-4 py-2 rounded-md mr-4 flex items-center ">
                History
                <span className="font-bold text-xl  ml-1  text-[#ABB6B9]">
                  <RiArrowRightSLine />
                </span>
              </button>
            </div>
            <hr className="border-gray-600 mt-2" />
            <table className="min-w-full bg-[#323738] ">
              <thead>
                <tr className="bg-[#323738] text-[#ABB6B9] ">
                  <th className="py-2 px-4 ">#</th>
                  <th className="py-2 px-4 ">Player</th>
                  <th className="py-2 px-4 ">Wager</th>
                  <th className="py-2 px-4 ">Prize</th>
                </tr>
              </thead>
              <tbody>
                {contestData.map((contestant, index) => (
                  <tr
                    key={contestant.rank}
                    className={`border-b border-gray-700 ${
                      index % 2 === 0
                        ? "bg-[#3A4142] text-[#ABB6B9]"
                        : "bg-[#323738] text-white"
                    }`}
                  >
                    <td className="py-2 px-4 text-center text-[#ABB6B9]">
                      {contestant.rank <= 3 ? (
                        <img
                          src={
                            contestant.rank === 1
                              ? medal1
                              : contestant.rank === 2
                              ? medal2
                              : medal3
                          }
                          alt="Medal"
                          className="w-6 h-6 inline-block"
                        />
                      ) : (
                        contestant.rank 
                      )}
                      {/* Display rank with a space after image */}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {contestant.player}
                    </td>
                    <td className="py-2 px-4 text-center text-green-500">
                      {contestant.wager}
                    </td>
                    <td className="py-2 px-4 text-center text-green-500">
                      {contestant.prize}
                      <span className="text-[#ABB6B9]">
                        {contestant.percent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WagerContest;
