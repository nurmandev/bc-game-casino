import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Footer from "../../../components/Footer";
import { BsExclamationSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Mybets = ({ hours = 13, minutes = 26, seconds = 10, onSearch }) => {
  const lotterySteps = ["Lottery X 1", "Lottery X 9", "Lottery X 99"];
  const [chalange, setChalange] = useState("");
  const [deposit, SetDeposit] = useState("Active");

  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isopen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <div className="w-full mt-20">
      <strong>My bets</strong>
      <div className="mt-5">
        <div className="tickets-item-box flex gap-3 mb-3">
          {/* Total Tickets */}
          <div className="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-[#323738] relative h-20">
            <p className="tickets-desc text-sm text-secondary font-semibold m-0">
              Total tickets
            </p>
            <div className="tickets-num-box">
              <h2 className="tickets-num text-xl font-extrabold m-0 text-primary leading-10">
                0
              </h2>
              <img
                className="w-16 h-16 absolute right-0 bottom-0"
                loading="lazy"
                src="/public/Lottery_Image/mybets-imahes/total-tickets-2ab2a127 (1).webp"
                alt="Total Tickets"
              />
            </div>
          </div>

          {/* Total Winning Tickets */}
          <div className="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-[#323738] relative h-20">
            <p className="tickets-desc text-sm text-secondary font-semibold m-0">
              Total winning tickets
            </p>
            <div className="tickets-num-box flex items-center justify-between">
              <h2 className="tickets-num text-xl font-extrabold m-0 text-primary leading-10">
                0
              </h2>
              <img
                className="w-16 h-16 absolute right-0 bottom-0"
                loading="lazy"
                src="/public/Lottery_Image/mybets-imahes/winner-tickets-fb6bd542 (1).webp"
                alt="Winning Tickets"
              />
            </div>
          </div>
        </div>

        {/* Total Prize Won */}
        <div className="tickets-item-mobile w-full py-3 px-4 rounded-xl bg-[#323738] relative h-20">
          <p className="tickets-desc text-sm text-secondary font-semibold m-0">
            Total Prize Won
          </p>
          <div className="tickets-num-box flex items-center justify-between">
            <h2 className="tickets-num text-xl font-extrabold m-0 text-green-500 leading-10">
              ₹0.00
            </h2>
            <img
              className="tickets-icon w-16 h-16 absolute right-0 bottom-0 rounded-tr-xl rounded-br-xl"
              loading="lazy"
              src="/public/Lottery_Image/mybets-imahes/total-price-2bdcfacb.webp"
              alt="Total Prize"
            />
          </div>
        </div>
      </div>

      <div className=" mt-3 p-4 rounded-xl bg-[#323738]">
        {/* Title Section */}
        <section className="inform-title-box flex items-center justify-between">
          <div className="inform-title-wrapper flex items-center justify-between w-full">
            <h1 className="inform-title text-sm font-extrabold my-0 mr-2 ml-0 text-primary">
              Daily Free Lottery Challenge
            </h1>
            <section className="center rounded-md bg-layer5 w-6 h-6">
              <div onClick={() => setChalange((prev) => !prev)}>
                <svg
                  fill="currentColor"
                  className="w-4 h-4 cursor-pointer"
                  viewBox="0 0 32 32"
                >
                  <path d="M12.926 30c-6.034 0-10.925-4.892-10.925-10.925v-6.149c0-6.034 4.892-10.925 10.925-10.925h6.149c6.033 0 10.925 4.892 10.925 10.925v6.149c0 6.034-4.892 10.925-10.925 10.925h-6.149zM12.926 27.62h6.149c4.721 0 8.546-3.827 8.546-8.546v-6.149c0-4.721-3.827-8.546-8.546-8.546h-6.149c-4.721 0-8.546 3.827-8.546 8.546v6.149c0 4.721 3.827 8.546 8.546 8.546zM16.001 12.841c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-0.090c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v0.090c0 0.778-0.631 1.409-1.409 1.409zM16.001 22.874c-0.713 0-1.303-0.53-1.396-1.217l-0.012-0.191v-6.047c0-0.778 0.631-1.409 1.409-1.409 0.713 0 1.303 0.53 1.396 1.217l0.012 0.191v6.047c0 0.779-0.631 1.409-1.409 1.409z"></path>
                </svg>
              </div>
              {chalange && (
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
                        Lottery Daily Challenge
                      </h1>
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => setChalange(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1]" />
                      </button>
                    </div>
                    <div className="px-5"></div>
                  </div>
                </>
              )}
            </section>
          </div>
        </section>

        {/* Spending Amount */}
        <section className="spending-amount-box flex items-center justify-between mt-4 mx-0">
          <label className="text-sm font-semibold text-secondary">
            Today’s spending:
          </label>
          <label className="text-primary text-sm font-semibold">₹0.00</label>
        </section>

        {/* Countdown Timer */}
        <section className="award-count-box-mobile flex items-center justify-between mt-2">
          <label className="inform-countdown-title-mobile text-sm font-semibold text-secondary">
            Ends in
          </label>
          <div className="flex justify-center items-center gap-2 text-white text-sm font-semibold">
            <span className="bg-[#232626] px-2 py-1 rounded-lg">
              {timeLeft.hours}h
            </span>
            <span>:</span>
            <span className="bg-[#232626] px-2 py-1 rounded-lg">
              {timeLeft.minutes}m
            </span>
            <span>:</span>
            <span className="bg-[#232626] px-2 py-1 rounded-lg">
              {timeLeft.seconds}s
            </span>
          </div>
        </section>

        {/* Award Info Box */}
        <section className="award-infor-box flex mt-4 overflow-x-auto">
          {/* Step 1 */}
          <div className="award-step1-wrapper flex min-w-[50px] w-[50px]">
            <div className="award-step-box flex flex-1 items-center justify-center rounded relative">
              <img
                className="h-full"
                src="/public/Lottery_Image/mybets-imahes/mybets-step1-391209d2.webp"
                alt="Step 1"
              />
            </div>
          </div>
          {/* Steps 2, 3, 4 */}
          <div className="award-step234-wrapper w-[calc(100%-50px)] overflow-x-auto grid grid-cols-3">
            {lotterySteps.map((lottery, index) => (
              <div
                key={index}
                className="award-step-box relative h-full min-h-[50px] flex items-center overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="368"
                  height="71"
                  viewBox="0 0 368 71"
                  className="w-full h-full fill-[#3a4142]"
                >
                  <path d="M0.679821 2.98168C-0.0712903 1.64846 0.892074 0 2.42232 0H345.662C347.107 0 348.439 0.778424 349.147 2.03663L366.894 33.5366C367.581 34.7555 367.581 36.2445 366.894 37.4634L349.147 68.9634C348.439 70.2216 347.107 71 345.662 71H2.42233C0.892082 71 -0.0712873 69.3515 0.679824 68.0183L17.8939 37.4634C18.5806 36.2445 18.5806 34.7555 17.8939 33.5366L0.679821 2.98168Z"></path>
                </svg>
                <div className="award-step-box-mobile flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full">
                  <div className="award-step-logo-box-mobile h-7">
                    <img
                      className="award-step-logo h-7"
                      loading="lazy"
                      src="/public/Lottery_Image/mybets-imahes/gift-box-black-closed-526975f0.png"
                      alt="Lottery Icon"
                    />
                  </div>
                  <label className="flex items-baseline justify-center whitespace-nowrap overflow-x-auto w-full text-xs font-semibold text-white">
                    {lottery}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className=" mt-3 p-4 rounded-xl bg-[#323738]">
        {" "}
        <div className="w-[100%] bg-[#292d2e] h-[40px] px-3 rounded-lg flex items-center justify-around font-bold text-gray-400 text-[14px] ">
          <div
            onClick={() => SetDeposit("Active")}
            className={`w-[50%] h-[40px] rounded-lg ${
              deposit === "Active"
                ? "bg-[#3a4142] text-white font-bold"
                : " hover:text-white"
            }`}
          >
            <div className="text-center my-3">
              <button className="">Active</button>
            </div>
          </div>
          <div
            onClick={() => SetDeposit("Past")}
            className={`w-[50%] h-[40px] rounded-lg ${
              deposit === "Past"
                ? "bg-[#3a4142] text-white font-bold"
                : " hover:text-white"
            }`}
          >
            <div className="text-center my-3">
              <button>Past</button>
            </div>
          </div>
          <div
            onClick={() => SetDeposit("My Winning")}
            className={`w-[50%] h-[40px] rounded-lg ${
              deposit === "My Winning"
                ? "bg-[#3a4142] text-white font-bold"
                : " hover:text-white"
            }`}
          >
            <div className="text-center my-3">
              <button>My Winning</button>
            </div>
          </div>
        </div>
        {deposit === "Active" && (
          <div>
            {" "}
            <div className="flex items-center gap-5 border border-gray-500 hover:border-green-500 rounded-lg p-2 bg-[#1e2121] my-3">
              <button onClick={handleSearch} className="">
                <FaMagnifyingGlass />
              </button>
              <input
                type="text"
                placeholder="Search lottery name"
                className="flex-1 p- outline-none text-white bg-[#1e2121] "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex items center gap-3">
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-[50%]  "
              >
                <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                  <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                    All Regions
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                    <button className="relative">
                      <IoChevronDownSharp />
                    </button>
                    {isopen && (
                      <div className="absolute lg:w-[615px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[715px] sm:bottom-0 sm:left-4  lg:left-[270px]  rounded-xl ">
                        <form className="max-w-[100%] mx-auto mt-3">
                          <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                            </div>
                            <input
                              type="search"
                              className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                              placeholder="Search "
                            />
                          </div>
                        </form>
                        <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                            <div className="flex items-center gap-2 ">
                              <img
                                src="/public/Lottery_Image/BCD.webp"
                                alt=""
                                className="h-[24px] w-[24px] rounded "
                              />
                              <h1 className="text-white font-extrabold text-[16px] ">
                                BCD
                              </h1>
                              <div className=" w-[16px] h-[16px]">
                                <BsExclamationSquare className="text-[#25dc68] " />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-[50%]  "
              >
                <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                  <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                    SortBy: Added Date
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                    <button className="relative">
                      <IoChevronDownSharp />
                    </button>
                    {open && (
                      <div className="absolute lg:w-[615px] lg:h-[200px] bg-[#292d2e] lg:top-[715px] lg:left-[900px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                        <form className="max-w-[100%] mx-auto mt-3"></form>
                        <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                            <h1 className="text-white font-bold text-[16px] ">
                              A-z
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                          </div>
                        </div>
                        <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                            <h1 className="text-white font-bold text-[16px] ">
                              Z-A
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                          </div>
                        </div>
                        <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                            <h1 className="text-white font-bold text-[16px] ">
                              Picks For You
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                          </div>
                        </div>
                        <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                          <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                            <h1 className="text-white font-bold text-[16px] ">
                              Popular
                            </h1>
                            <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 w-full ">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b border-solid border-gray-400">
                    <th className="max-w-40 text-left text-xs text-gray-500 font-semibold py-2">
                      Lottery Name
                    </th>
                    <th className="text-xs text-gray-500 font-semibold py-2">
                      Results
                    </th>
                    <th className="w-[90px] sm:w-auto text-xs text-gray-500 font-semibold text-right py-2">
                      Total Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <div className="py-10 flex flex-col items-center">
                        <img
                          className="w-48 h-48"
                          src="/public/Lottery_Image/mybets-imahes/empty.webp"
                          alt="No Data"
                        />
                        <div className="leading-5 mt-4 text-white">
                          Oops! There is no data yet!
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {deposit === "Past" && (
          <div>
            {" "}
            <div>
              {" "}
              <div className="flex items-center gap-5 border border-gray-500 hover:border-green-500 rounded-lg p-2 bg-[#1e2121] my-3">
                <button onClick={handleSearch} className="">
                  <FaMagnifyingGlass />
                </button>
                <input
                  type="text"
                  placeholder="Search lottery name"
                  className="flex-1 p- outline-none text-white bg-[#1e2121] "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="flex items center gap-3">
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="w-[50%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      All Regions
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {isopen && (
                        <div className="absolute lg:w-[615px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[715px] sm:bottom-0 sm:left-4  lg:left-[270px]  rounded-xl ">
                          <form className="max-w-[100%] mx-auto mt-3">
                            <div className="relative ">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                              </div>
                              <input
                                type="search"
                                className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                                placeholder="Search "
                              />
                            </div>
                          </form>
                          <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                              <div className="flex items-center gap-2 ">
                                <img
                                  src="/public/Lottery_Image/BCD.webp"
                                  alt=""
                                  className="h-[24px] w-[24px] rounded "
                                />
                                <h1 className="text-white font-extrabold text-[16px] ">
                                  BCD
                                </h1>
                                <div className=" w-[16px] h-[16px]">
                                  <BsExclamationSquare className="text-[#25dc68] " />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  className="w-[50%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      SortBy: Added Date
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {open && (
                        <div className="absolute lg:w-[615px] lg:h-[200px] bg-[#292d2e] lg:top-[715px] lg:left-[900px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                          <form className="max-w-[100%] mx-auto mt-3"></form>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                A-z
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Z-A
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Picks For You
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Popular
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setOpen1((prev) => !prev)}
                  className="w-[100%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      SortBy: Added Date
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {open1 && (
                        <div className="absolute lg:w-[81%] lg:h-[200px] bg-[#292d2e] lg:top-[770px] lg:left-[270px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl z-30">
                          <form className="max-w-[100%] mx-auto mt-3"></form>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                A-z
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Z-A
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Picks For You
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Popular
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 w-full ">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="border-b border-solid border-gray-400">
                      <th className="max-w-40 text-left text-xs text-gray-500 font-semibold py-2">
                        Lottery Name
                      </th>
                      <th className="text-xs text-gray-500 font-semibold py-2">
                        Results
                      </th>
                      <th className="w-[90px] sm:w-auto text-xs text-gray-500 font-semibold text-right py-2">
                        Total Return
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="3">
                        <div className="py-10 flex flex-col items-center">
                          <img
                            className="w-48 h-48"
                            src="/public/Lottery_Image/mybets-imahes/empty.webp"
                            alt="No Data"
                          />
                          <div className="leading-5 mt-4 text-white">
                            Oops! There is no data yet!
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {deposit === "My Winning" && (
          <div>
            {" "}
            <div>
              {" "}
              <div className="flex items-center gap-5 border border-gray-500 hover:border-green-500 rounded-lg p-2 bg-[#1e2121] my-3">
                <button onClick={handleSearch} className="">
                  <FaMagnifyingGlass />
                </button>
                <input
                  type="text"
                  placeholder="Search lottery name"
                  className="flex-1 p- outline-none text-white bg-[#1e2121] "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="flex items center gap-3">
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="w-[50%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      All Regions
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {isopen && (
                        <div className="absolute lg:w-[615px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[715px] sm:bottom-0 sm:left-4  lg:left-[270px]  rounded-xl ">
                          <form className="max-w-[100%] mx-auto mt-3">
                            <div className="relative ">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                              </div>
                              <input
                                type="search"
                                className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                                placeholder="Search "
                              />
                            </div>
                          </form>
                          <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                              <div className="flex items-center gap-2 ">
                                <img
                                  src="/public/Lottery_Image/BCD.webp"
                                  alt=""
                                  className="h-[24px] w-[24px] rounded "
                                />
                                <h1 className="text-white font-extrabold text-[16px] ">
                                  BCD
                                </h1>
                                <div className=" w-[16px] h-[16px]">
                                  <BsExclamationSquare className="text-[#25dc68] " />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  className="w-[50%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      SortBy: Added Date
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {open && (
                        <div className="absolute lg:w-[615px] lg:h-[200px] bg-[#292d2e] lg:top-[715px] lg:left-[900px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                          <form className="max-w-[100%] mx-auto mt-3"></form>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                A-z
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Z-A
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Picks For You
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Popular
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setOpen2((prev) => !prev)}
                  className="w-[100%]  "
                >
                  <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
                    <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                      SortBy: Added Date
                    </div>
                    <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                      <button className="relative">
                        <IoChevronDownSharp />
                      </button>
                      {open2 && (
                        <div className="absolute lg:w-[81%] lg:h-[200px] bg-[#292d2e] lg:top-[770px] lg:left-[270px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl z-30">
                          <form className="max-w-[100%] mx-auto mt-3"></form>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                A-z
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Z-A
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Picks For You
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                          <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                            <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                              <h1 className="text-white font-bold text-[16px] ">
                                Popular
                              </h1>
                              <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 w-full ">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="border-b border-solid border-gray-400">
                      <th className="max-w-40 text-left text-xs text-gray-500 font-semibold py-2">
                        Lottery Name
                      </th>
                      <th className="text-xs text-gray-500 font-semibold py-2">
                        Results
                      </th>
                      <th className="w-[90px] sm:w-auto text-xs text-gray-500 font-semibold text-right py-2">
                        Total Return
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="3">
                        <div className="py-10 flex flex-col items-center">
                          <img
                            className="w-48 h-48"
                            src="/public/Lottery_Image/mybets-imahes/empty.webp"
                            alt="No Data"
                          />
                          <div className="leading-5 mt-4 text-white">
                            Oops! There is no data yet!
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Mybets;
