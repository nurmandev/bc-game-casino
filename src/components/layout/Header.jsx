// import { FaBars } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import { GrAtm, GrSearchAdvanced } from "react-icons/gr";
import { BiShapePolygon, BiSolidMessageSquare } from "react-icons/bi";
import {
  IoGlobeOutline,
  IoNotifications,
  IoPersonSharp,
} from "react-icons/io5";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosGift, IoMdClose } from "react-icons/io";
import SignInPage from "../../pages/SignUp pages/SignInPage";
import SignUpPages from "../../pages/SignUp pages/SignUpPages";
import { FaBitcoin, FaChessKing, FaChevronDown, FaTv } from "react-icons/fa";
import { BsClockFill, BsInfoSquare } from "react-icons/bs";
import BcChat from "../../pages/SignUp pages/BcChat";
import exitimage from "../../../public/Homeimages/head4_l.png";
import { GiProgression, GiWallet } from "react-icons/gi";
import { CgShapeHexagon } from "react-icons/cg";
import { SiRundeck } from "react-icons/si";
import MyProfile from "../../pages/SignUp pages/MyProfile";

const Header = () => {
  // const [userInfo, setUserInfo] = useState(false);
  const [searchgames, setSearchGames] = useState(false);
  const [signin, setSignin] = useState("");
  const [signup, setSignup] = useState("");
  const [bcChat, SetBcChat] = useState("");
  const [GlobalChat, SetGlobalChat] = useState("");
  const [information, SetInformation] = useState("");
  const [topWinners, SetTopWinners] = useState("");
  const [currency, SetCurrency] = useState("");
  const [innerCurrency, SetInnerCurrency] = useState("Language");
  const [exit, SetExit] = useState("");
  const [searchInput, SetSearchInput] = useState("");
  const [notification, SetNotification] = useState("");
  const [notePage, SetNotePage] = useState("Permotions");
  //Dropdown
  const [selectedOption, setSelectedOption] = useState("Global");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [profilePopup, SetProfilePopup] = useState("");
  const [profileLogOut, SetProfileLogOut] = useState("");
  const [isSlideOut, setIsSlideOut] = useState(false);

  const handleClosePopup = () => {
    // Start the sliding animation before closing the popup
    setIsSlideOut(true);

    // Delay the profilePopup state change until after the sliding animation
    setTimeout(() => {
      SetProfilePopup(false);
    }, 300); // Matches the transition duration
  };

  const currencies = [
    { name: "None", value: "", icon: null },
    { name: "USD", value: "USD", icon: "/coin/USD.rect.png" },
    { name: "BRL", value: "BRL", icon: "/coin/BRL.rect.png" },
    { name: "INR", value: "INR", icon: "/coin/INR.rect.png" },
    { name: "EUR", value: "EUR", icon: "/coin/EUR.rect.png" },
    { name: "RUB", value: "RUB", icon: "/coin/RUB.rect.png" },
    { name: "NGN", value: "NGN", icon: "/coin/NGN.rect.png" },
    { name: "IDR", value: "IDR", icon: "/coin/IDR.rect.png" },
    { name: "BDT", value: "BDT", icon: "/coin/BDT.rect.png" },
    { name: "PHP", value: "PHP", icon: "/coin/PHP.rect.png" },
    { name: "VND", value: "VND", icon: "/coin/VND.rect.png" },
    { name: "INR", value: "INR", icon: "/coin/INR.rect.png" },
    { name: "EUR", value: "EUR", icon: "/coin/EUR.rect.png" },
    { name: "RUB", value: "RUB", icon: "/coin/RUB.rect.png" },
    { name: "NGN", value: "NGN", icon: "/coin/NGN.rect.png" },
    { name: "IDR", value: "IDR", icon: "/coin/IDR.rect.png" },
    { name: "BDT", value: "BDT", icon: "/coin/BDT.rect.png" },
    { name: "PHP", value: "PHP", icon: "/coin/PHP.rect.png" },
    { name: "VND", value: "VND", icon: "/coin/VND.rect.png" },
  ];

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const options = [
    "Global",
    "Sports",
    "English",
    "繁體中文",
    "Português",
    "Indonesian",
    "বাংলা",
    "Руccкий",
    "فارسی",
    "Español",
    "Tiếng việt",
    "Filipino",
    "Deutsch",
    "हिन्दी",
    "မြန်မာ",
    "Français",
    "한국어",
    "ภาษาไทย",
    "اردو",
    "日本語",
  ];
  const rules = [
    "Don't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!",
    "Don't beg or ask for loans, rains, tips and doubling coins.",
    "No suspicious behavior that can be seen as potential scams.",
    "Don't engage in any forms of advertising/ trading/ selling/ buying or offering services.",
    "Don't use URL shortener. Always submit the original link.",
    "Use the designated language chatrooms accordingly.",
    "List of our full rules can be found on our forum.",
  ];

  const bhasha = [
    "English",
    "Indian English",
    "Tiếng việt",
    "Indonesian",
    "日本語",
    "한국어",
    "Français",
    "Español",
    "Filipino",
    "عربى",
    "हिन्दी",
    "Türkçe",
    "فارسی",
    "Português",
    "Руccкий",
    "Deutsch",
    "ภาษาไทย",
    "Suomi",
    "Polski",
    "Italiano",
    "မြန်မာ",
    "اردو",
    "Українська",
    "Melayu",
    "বাংলা",
    "Marathi",
    "Tamil",
    "Telugu",
    "繁體中文",
  ];

  const suggestedGames = [
    "Crash",
    "Limbo",
    "Plinko",
    "Mines",
    "Twist",
    "Tower Legend",
    "Wheel",
    "Stellar Rush",
    "Classic Dice",
    "Money Coming",
    "Keno",
    "Wild Bounty Showdown",
    "CoinFlip",
    "Hash Dice",
    "Fast Parity",
    "Mahjong Ways 2",
    "WUKONG",
    "Money Coming Expand Bets",
    "Lucky Neko",
    "Ultimate Dice",
    "Hilo",
    "Cave Of Plunder",
    "Triple Money Jackpot",
    "Wild Bandito",
    "Fortune Gems 2",
    "Mahjong Ways",
    "Ultra Wheel",
    "Fortune Gems 3",
    "Double",
    "Treasures of Aztec",
    "Ring of Fortune",
    "BC Cash",
    "Crazy Time",
    "Fortune Gems",
    "Hounds of Hell",
    "Video Poker",
    "Lucky Wheel Deluxe",
    "Roulette Multiplayer",
    "Lightning Storm",
    "Fortune Rabbit",
  ];

  const buttons = [
    { icon: <GiWallet />, label: "Balance", Link: "/Wallet?wallet=Balance" },
    { icon: <GrAtm />, label: "Withdraw", Link: "/Wallet?wallet=Withdraw" },
    {
      icon: <FaBitcoin />,
      label: "Transaction",
      Link: "/Wallet?wallet=Transaction",
    },
    {
      icon: <BsClockFill />,
      label: "Bet History",
      Link: "/Wallet?wallet=Bet History",
    },
    {
      icon: <GiProgression />,
      label: "Rollover",
      Link: "/Wallet?wallet=Rollover",
    },
    { icon: <FaChessKing />, label: "VipClub", Link: "/VipClub" },
    { icon: <FaTv />, label: "Vault Pro", Link: "/Wallet?wallet=Vault Pro" },
    { icon: <BiShapePolygon />, label: "Affiliate", Link: "/affiliate" },
    {
      icon: <IoPersonSharp />,
      label: "My Profile",
    },
    {
      icon: <CgShapeHexagon />,
      label: "Global Setting",
      Link: "/GlobalSetting",
    },
    { icon: <SiRundeck />, label: "Log Out", Link: "/" },
  ];
  return (
    <header className=" bg-[#292d2e] fixed w-full py-3  top-0 z-20 ">
      <div className="px-5 py-1">
        {/* {userInfo ? (
          <div>
            <p>Lorem, ipsum.</p>
          </div>
        ) : ( */}
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center gap-2" href={"/"}>
            {/* <div className="bg-gray-light p-2 mr-2 rounded-lg ">
              <FaBars className="text-white sm:hidden md:block"  />
            </div> */}
            <Link href={"/wallet/bc"}>
              {" "}
              <div>
                <img
                  src="../../../public/logo.webp"
                  alt=""
                  className="w-[144px] h-[32px] "
                />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            {/* Searcch games */}
            <div>
              <div
                onClick={() => setSearchGames((prev) => !prev)}
                className="bg-gray-light p-2 rounded-lg "
              >
                <GrSearchAdvanced className="text-secondary font-semibold text-xl" />
              </div>
              {searchgames && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[90%] md:w-[900px] h-[600px] bg-opacity-70  z-50 fixed rounded-xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="  flex items-center justify-center ">
                      <h1 className="text-[#ffffff] text-[16px] font-medium ">
                        Explore
                      </h1>
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => setSearchGames(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1]" />
                      </button>
                    </div>
                    <div className="p-3 mt-3">
                      <div className="relative flex w-full bg-[#323738] rounded-lg items-center gap-2">
                        <div className="input flex-1 bg-layer4 px-2 py-1.5 rounded-lg flex items-center">
                          <div className="order-first">
                            <button
                              className="button button-s select bg-layer4 -my-1.5 -ml-2 h-11 border-none bg-transparent px-0"
                              type="button"
                            >
                              <div className="flex h-8 items-center border-solid px-2 border-r border-third">
                                <span className="mr-1 font-extrabold">
                                  Casino
                                </span>
                                <svg
                                  className="icon -rotate-90 size-4"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z"></path>
                                </svg>
                              </div>
                            </button>
                          </div>

                          {/* Search Icon */}
                          <div className="flex items-center gap-2 ml-2">
                            <svg
                              className="icon order-first text-secondary size-6"
                              viewBox="0 0 32 32"
                            >
                              <path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></path>
                            </svg>
                            <input
                              onClick={() => SetSearchInput((prev) => !prev)}
                              type="text"
                              placeholder="Search games"
                              className="w-full bg-transparent outline-none text-primary pl-2"
                            />
                          </div>
                          {searchInput && (
                            <>
                              {/* Dropdown with Suggested Games */}
                              <div
                                className="absolute left-0 right-0 z-10 w-full rounded-lg border border-input p-4 top-full bg-[#292d2e]"
                                style={{
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px",
                                  transform: "translateY(0.5rem)",
                                }}
                              >
                                {/* Search Requirement Message */}
                                <p className="text-center text-secondary">
                                  Search requires at least 3 characters.
                                </p>

                                {/* Suggested Games Section */}
                                <p className="mt-4 font-extrabold">Suggested</p>
                                <div className="flex items-center mt-3 flex-wrap gap-2">
                                  {suggestedGames.map((game, index) => (
                                    <div
                                      key={index}
                                      className="flex h-5 items-center rounded-md bg-layer5 px-2 sm:cursor-pointer"
                                    >
                                      <span className="text-secondary text-xs">
                                        {game}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>{" "}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* sign in */}
            <div>
              <button
                onClick={() => setSignin((prev) => !prev)}
                className="border-2 border-gray-light text-white p-1 ms-3 whitespace-nowrap rounded-lg px-4"
              >
                Sign In
              </button>
              {signin && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[50%] md:w-[500px] h-[600px] bg-[#232626]  z-50 fixed rounded-xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="">
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => setSignin(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1] z-50" />
                      </button>
                    </div>
                    <div className="p-3 mt-3">
                      {" "}
                      <SignInPage />{" "}
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* SignUp */}
            <div>
              <button
                onClick={() => setSignup((prev) => !prev)}
                className="border-2 whitespace-nowrap border-gray-light text-black font-semibold p-1 bg-gradient-to-r from-green-dark to-yellow-dark  mr-3 ms-1 rounded-lg px-4"
              >
                Sign Up
              </button>
              {signup && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[50%] md:w-[500px] h-[600px] bg-[#232626]  z-50 fixed rounded-xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="">
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => setSignup(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1] z-50" />
                      </button>
                    </div>
                    <div className="p-3 mt-3">
                      {" "}
                      <SignUpPages />{" "}
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* gift */}
            <div>
              <Link to={"/bonus"}>
                <div className="bg-gray-light p-2 rounded-lg mr-2 text-xl">
                  <IoIosGift />
                </div>
              </Link>
            </div>
            {/* chat main */}
            <div>
              <div
                onClick={() => SetBcChat((prev) => !prev)}
                className="bg-gray-light p-2 rounded-lg"
              >
                <BiSolidMessageSquare className="text-secondary font-semibold text-xl" />
              </div>
              {bcChat && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[25%] md:w-[500px] h-screen bg-[#292d2e]  z-50 fixed "
                    style={{
                      top: "50%",
                      right: "-12.5%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>
                      <div className="w-full h-[70px] bg-[#323738] flex items-center justify-between ">
                        {/* globallanguages */}
                        <div className="flex items-center pl-2">
                          <h1 className="text-[#ffffff] text-[16px] font-medium ">
                            Global
                          </h1>
                          <div onClick={() => SetGlobalChat((prev) => !prev)}>
                            <FaChevronDown />
                          </div>
                          {GlobalChat && (
                            <div className="absolute w-60 h-96 bg-[#292d2e] top-[67px] left-5 rounded-xl px-4 py-3 overflow-y-scroll custom-scrollbar hide-scrollbar z-50">
                              {" "}
                              <div className=" select-options">
                                <div className="">
                                  <div>
                                    {options.map((option, index) => (
                                      <button
                                        key={index}
                                        className={`w-full rounded-lg select-item flex flex-col items-center py-2 ${
                                          selectedOption === option
                                            ? "bg-green-500"
                                            : ""
                                        }`}
                                        aria-selected={
                                          selectedOption === option
                                        }
                                        onClick={() =>
                                          setSelectedOption(option)
                                        }
                                      >
                                        <div className="w-full flex items-center justify-between px-2 ">
                                          <span className="">{option}</span>
                                          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className=" flex gap-2">
                          {/* Information Icon */}
                          <button
                            onClick={() => SetInformation((prev) => !prev)}
                            className=" right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                          >
                            <BsInfoSquare />
                            {information && (
                              <>
                                <div className="absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                                <div
                                  className="sm:w-[350px] lg:w-[90%] md:w-[500px] h-[400px] bg-[#232626]  z-50 fixed rounded-xl overflow-y-scroll custom-scrollbar hide-scrollbar"
                                  style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                >
                                  <div className=" mt-2 ">
                                    <strong>ChatRule</strong>
                                    <button
                                      className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                                      onClick={() => setSignin(false)}
                                    >
                                      <IoMdClose className="text-[#a4aeb1] z-50" />
                                    </button>
                                  </div>
                                  <div className="p-3 mt-3">
                                    {" "}
                                    <div>
                                      <h1>Community Rules</h1>
                                      <ol>
                                        {" "}
                                        {/* Use ordered list <ol> to number items */}
                                        {rules.map((rule, index) => (
                                          <li key={index}>{`${
                                            index + 1
                                          }. ${rule}`}</li> // Add number before rule
                                        ))}
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                          {/* Rich */}
                          <button
                            onClick={() => SetTopWinners((prev) => !prev)}
                            className=" right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                          >
                            <img
                              src="../../../public/Help-Center-Images/rich-.webp"
                              alt="rich"
                              className="w-5"
                            />
                            {topWinners && (
                              <div className="absolute top-14 w-full left-0 h-52 bg-[#232626] overflow-y-scroll custom-scrollbar hide-scrollbar z-50">
                                {" "}
                                <div className="w-full mt-3 ">
                                  {/* Header Section */}
                                  <div className="flex items-center justify-center text-secondary font-extrabold gap-2">
                                    <img
                                      className="w-4 h-4"
                                      alt="star"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA3hJREFUSA29VltLVUEUXjN7eyvCEhN7CR+ioh4Seg3K7CExswgOpRmEt78Q9B96jaMGYSpxIkrNLCjooZ4qsILo9tRDhYiXIPDk2bNa35wzx63ufTqSuWEzs9f61vfN7LmspaiIJzk4vlspU08e7SFDO4hUZTaMF0jTHAX0hVlP9V5q+fo3OlUI0D9877Ah3aqYFLGZUiUl78kEs356dgFxmbKqStJeFS8tHSCl61lQmsxod/vZ13G8kYLJkfFqIe6SIE8I7/a2tXyIIwjbJW6/xJ0TWyBxAxI3E/ajv0aw7/bEXs5kesQz0dN2+plSMr91PMys+kbGjhFTs/L9vp7zzZ/C4SsEIaZETHNpf2dH08cwcL39G7cm9xn1u5tXiWpHhN+ImW2EGDgxYHCB0y5RTigvaNdMfmMxMxscfLwVrxtsXGu5hDO3HyzMCmI3ypeHNYsLDtvTXvoE3rAtrp/j9HIacorkwdbHbixmgyTHx7cYpuNM3IB+nJCzW07hthpi1DjUcBa79XkuaCTmcjZUYfuOuUALbpxlaGncIMqYNwXweRdmJAGNzoB+MbO0eFwcouXjulK6ZNKRuDaVSnnzmfIjMptdinSNtDVmPqiWgeaPkhzQCpoPrvUPjc2IeZrJTEv7fbu/+DyRSASOCy1uKTZBk9xEcjfKdRV2oo8AT/EvOcBHjTEHDfNOCcuLLeNl3OIDBljErBazWGiIlmwaVenuxmWSbK/zQusrUn5SvlaMdjUu9x0Aa2MiAFkNVZk7h3URkKypp715qlT512W3ZeJA8AEDbByGqE5csleJeCFT9jOXbqLhly82vxNcATKeymKi42HNaqgFbfOZpJh4aNYj27o2DlPIl4+BhuRObZMn8lmBRzKAZqXygvIL03hdCHzAuO+o1uZMSdQamZq1PhQFcrabdx7WCKGPtVKknnrb+Cpe9GGDDxiHj2yRoEXLR1mQHB4lJM+422ZpiWo18QtVWvagK3EyfIRSA6lHTzi9eAoYEfoRJQZuZsPQsr8BZQEytYw04pwRffv88m13x5nBVWKWGzb4gIkSs5zCbTXCgOTQ/Ssy04awbSP64AS341peaKlBUBYgUzvnv7aWSzhR3ziuvCAKHtQgKAs2QtSVGOAEtxNcs2abWkS5UdgaZLPKRCeK1hXC6CNn/rdCGALhZyNL/T/qV+Xauim0PgAAAABJRU5ErkJggg=="
                                    />
                                    BIGGEST WINNER TODAY
                                    <img
                                      className="w-4 h-4"
                                      alt="star"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA3hJREFUSA29VltLVUEUXjN7eyvCEhN7CR+ioh4Seg3K7CExswgOpRmEt78Q9B96jaMGYSpxIkrNLCjooZ4qsILo9tRDhYiXIPDk2bNa35wzx63ufTqSuWEzs9f61vfN7LmspaiIJzk4vlspU08e7SFDO4hUZTaMF0jTHAX0hVlP9V5q+fo3OlUI0D9877Ah3aqYFLGZUiUl78kEs356dgFxmbKqStJeFS8tHSCl61lQmsxod/vZ13G8kYLJkfFqIe6SIE8I7/a2tXyIIwjbJW6/xJ0TWyBxAxI3E/ajv0aw7/bEXs5kesQz0dN2+plSMr91PMys+kbGjhFTs/L9vp7zzZ/C4SsEIaZETHNpf2dH08cwcL39G7cm9xn1u5tXiWpHhN+ImW2EGDgxYHCB0y5RTigvaNdMfmMxMxscfLwVrxtsXGu5hDO3HyzMCmI3ypeHNYsLDtvTXvoE3rAtrp/j9HIacorkwdbHbixmgyTHx7cYpuNM3IB+nJCzW07hthpi1DjUcBa79XkuaCTmcjZUYfuOuUALbpxlaGncIMqYNwXweRdmJAGNzoB+MbO0eFwcouXjulK6ZNKRuDaVSnnzmfIjMptdinSNtDVmPqiWgeaPkhzQCpoPrvUPjc2IeZrJTEv7fbu/+DyRSASOCy1uKTZBk9xEcjfKdRV2oo8AT/EvOcBHjTEHDfNOCcuLLeNl3OIDBljErBazWGiIlmwaVenuxmWSbK/zQusrUn5SvlaMdjUu9x0Aa2MiAFkNVZk7h3URkKypp715qlT512W3ZeJA8AEDbByGqE5csleJeCFT9jOXbqLhly82vxNcATKeymKi42HNaqgFbfOZpJh4aNYj27o2DlPIl4+BhuRObZMn8lmBRzKAZqXygvIL03hdCHzAuO+o1uZMSdQamZq1PhQFcrabdx7WCKGPtVKknnrb+Cpe9GGDDxiHj2yRoEXLR1mQHB4lJM+422ZpiWo18QtVWvagK3EyfIRSA6lHTzi9eAoYEfoRJQZuZsPQsr8BZQEytYw04pwRffv88m13x5nBVWKWGzb4gIkSs5zCbTXCgOTQ/Ssy04awbSP64AS341peaKlBUBYgUzvnv7aWSzhR3ziuvCAKHtQgKAs2QtSVGOAEtxNcs2abWkS5UdgaZLPKRCeK1hXC6CNn/rdCGALhZyNL/T/qV+Xauim0PgAAAABJRU5ErkJggg=="
                                    />
                                  </div>

                                  {/* Winner List */}
                                  <div className="rich-item-wrap">
                                    {/* First winner */}
                                    <div className="flex items-center justify-between m-4">
                                      <div className="flex items-center  gap-2.5">
                                        <img
                                          className="w-4"
                                          src="../../../public/signIn_Images/top1-brand.webp"
                                          alt="Top 1"
                                        />
                                        <img
                                          className="w-6 h-6 rounded-full"
                                          src="//img2.distributedresourcestorage.com/avatar/45071824/s"
                                          alt="winner 1"
                                        />
                                        <span className="font-semibold">
                                          Opcbbdpeprac
                                        </span>
                                      </div>
                                      <div className="center w-36 p-1 bg-[#1e2121] rounded-lg text-brand font-semibold">
                                        ₹20,866,740.30
                                      </div>
                                    </div>

                                    {/* Second winner */}
                                    <div className="flex items-center justify-between m-4">
                                      <div className="flex items-center  gap-2.5">
                                        <img
                                          className="w-4"
                                          src="../../../public/signIn_Images/top2-c64bf40a.webp"
                                          alt="Top 2"
                                        />
                                        <img
                                          className="w-6 h-6 rounded-full"
                                          src="//img2.distributedresourcestorage.com/avatar/8834740730623/s"
                                          alt="winner 2"
                                        />
                                        <span className="font-semibold">
                                          ****
                                        </span>
                                      </div>
                                      <div className="center w-36 p-1 bg-[#1e2121] rounded-lg text-brand font-semibold">
                                        ₹10,008,458.80
                                      </div>
                                    </div>

                                    {/* Third winner */}
                                    <div className="flex items-center justify-between m-4">
                                      <div className="flex items-center  gap-2.5">
                                        <img
                                          className="w-4"
                                          src="../../../public/signIn_Images/top3-01ab7585.webp"
                                          alt="Top 3"
                                        />
                                        <img
                                          className="w-6 h-6 rounded-full"
                                          src="//img2.distributedresourcestorage.com/avatar/69194112/s"
                                          alt="winner 3"
                                        />
                                        <span className="font-semibold">
                                          OMARRR1
                                        </span>
                                      </div>
                                      <div className="center w-36 p-1 bg-[#1e2121] rounded-lg text-brand font-semibold">
                                        ₹8,647,685.21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </button>
                          <button
                            className=" right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                            onClick={() => SetBcChat(false)}
                          >
                            <IoMdClose className="text-[#a4aeb1]" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="py-3 mt-3 ">
                      {" "}
                      <BcChat />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* satate and currency details */}
            <div>
              <div
                onClick={() => SetCurrency((prev) => !prev)}
                className="bg-gray-light p-2 rounded-lg  flex items-center ms-2"
              >
                <IoGlobeOutline className="text-secondary font-semibold text-xl" />
                <span>
                  <PiLineVertical className="text-secondary font-semibold text-xl" />
                </span>
                <h3 className="text-secondary  text-sm font-semibold">INR</h3>
              </div>
              {currency && (
                <>
                  {" "}
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[25%] md:w-[500px] h-[600px] bg-[#232626]  z-50 fixed rounded-xl overflow-y-scroll custom-scrollbar whitespace-nowrap hide-scrollbar"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="">
                      <button
                        className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => SetCurrency(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1] z-50" />
                      </button>
                    </div>
                    <div className="p-3 mt-3">
                      <div>
                        <div className="p-3 text-black text-2xl flex items-center gap-20 justify-center">
                          {[
                            {
                              id: "Language",
                              label: "Language",
                            },
                            {
                              id: "View in Currency",
                              label: "View in Currency",
                            },
                          ].map((item) => (
                            <div
                              key={item.id}
                              onClick={() => SetInnerCurrency(item.id)}
                              className={`flex flex-col items-center gap-1 cursor-pointer ${
                                innerCurrency === item.id
                                  ? "text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              <strong className="text-sm  ">
                                {item.label}
                              </strong>
                            </div>
                          ))}
                        </div>
                        {innerCurrency === "Language" && (
                          <div>
                            <div className="tabs-content">
                              {/* Search Input */}
                              <div className="w-full pb-3 sticky top-0 z-10">
                                <div className="input h-11 flex items-center bg-[#292d2e] border border-[] rounded-lg px-3">
                                  <svg
                                    className="icon w-6 h-6 order-first mr-2 text-tertiary"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></path>
                                  </svg>
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-transparent outline-none text-primary"
                                  />
                                </div>
                              </div>

                              {/* Language List */}
                              <div className="pb-4 -ml-4 -mr-4 px-4">
                                {bhasha.map((language, index) => (
                                  <div
                                    key={index}
                                    className="radio btn-like select-item p-3 hover:bg-[#323738] rounded-lg cursor-pointer"
                                    aria-selected={index === 0}
                                  >
                                    <span className="text-base font-semibold text-secondary">
                                      {language}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>{" "}
                          </div>
                        )}
                        {innerCurrency === "View in Currency" && (
                          <div>
                            <div className="tabs-content">
                              <p className="whitespace-pre-wrap">
                                Select the desired currency to display. The
                                Currencies will be shown in approximated values.
                              </p>

                              <div className="w-full pb-2 mt-3 bg-[#292d2e] border border-gray-400 sticky top-0 z-10 rounded-lg">
                                <div className="flex items-center gap-2 h-11 px-3 ">
                                  <input
                                    placeholder="Search"
                                    className="bg-[#292d2e] border border-none"
                                  />
                                  <svg
                                    className="icon w-6 h-6 order-first text-tertiary"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></path>
                                  </svg>
                                </div>
                              </div>

                              <div className="pb-4 -ml-4 -mr-4 px-4">
                                {currencies.map((currency) => (
                                  <div
                                    key={currency.value}
                                    className={`flex items-center gap-2 p-2 rounded-lg mt-1 ${
                                      selectedCurrency === currency.value
                                        ? "bg-[#292d2e]"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handleCurrencySelect(currency.value)
                                    }
                                  >
                                    {currency.icon ? (
                                      <img
                                        alt="coin"
                                        className="size-6"
                                        src={currency.icon}
                                      />
                                    ) : null}
                                    <span className="text-base font-semibold ml-2">
                                      {currency.name}
                                    </span>

                                    <div className="w-5 h-5  text-green-500 rounded-full"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Notification */}
            <div>
              <div
                onClick={() => SetNotification((prev) => !prev)}
                className="bg-gray-light p-2 rounded-lg  flex items-center ms-2 text-lg"
              >
                <IoNotifications />
              </div>
              {notification && (
                <>
                  <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[25%] md:w-[500px] h-screen bg-[#292d2e]  z-50 fixed "
                    style={{
                      top: "50%",
                      right: "-12.5%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="flex items-center justify-between bg-[#323738] p-3">
                      <div className="w-3"></div>
                      <strong>Notification</strong>
                      <button
                        className=" right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                        onClick={() => SetNotification(false)}
                      >
                        <IoMdClose className="text-[#a4aeb1]" />
                      </button>
                    </div>
                    <div className=" px-5 rounded-xl bg-[#323738] drop-shadow-md my-4 w-[90%] mx-auto ">
                      <div className="p-3 flex items-center justify-between text-black text-2xl">
                        {[
                          { id: "Permotions", label: "Permotions" },
                          { id: "Transactions", label: "Transactions" },
                          {
                            id: "System",
                            label: "System",
                          },
                        ].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => SetNotePage(item.id)}
                            className={`w-[30%] flex items-center justify-center py-1 rounded cursor-pointer overflow-y-scroll custom-scrollbar hide-scrollbar ${
                              notePage === item.id
                                ? "bg-[#3a4142] text-white"
                                : "text-[#8e989a]"
                            }`}
                          >
                            <strong className="text-sm">{item.label}</strong>
                          </div>
                        ))}
                      </div>
                      <div>
                        {notePage === "Permotions" && (
                          <>
                            {" "}
                            <div className="absolute top-16">
                              {" "}
                              <div className="relative mb-3 rounded-lg bg-[#323738] px-3 py-2">
                                {/* Date and Time */}
                                <div className="flex items-center text-secondary">
                                  <div>3/8/2025, 10:19:47 AM</div>
                                </div>

                                {/* Title */}
                                <div className="mt-2 text-base font-semibold flex items-center  ">
                                  <span className="text-sm">
                                    🏀Its Weekly Sports Bonus Time!
                                  </span>{" "}
                                  <div>⚽️</div>
                                </div>

                                {/* Content with Image and Text */}
                                <div
                                  className="relative overflow-hidden"
                                  style={{ maxHeight: "6rem" }}
                                >
                                  <img
                                    className="my-2 min-h-8 rounded-lg"
                                    src="https://bc.imgix.net/notice/be46a18d77.png"
                                    alt="Weekly Sports Bonus"
                                  />

                                  {/* Show All Button */}
                                  <button
                                    className="button button-m absolute right-0 ml-auto h-8 rounded-md center bottom-1"
                                    type="button"
                                    style={{
                                      background: "rgba(58, 65, 66, 0.8)",
                                    }}
                                  >
                                    <span>Show all</span>
                                    <svg
                                      className="icon h-4 w-4 ml-1 -rotate-90"
                                      viewBox="0 0 32 32"
                                    >
                                      <path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z"></path>
                                    </svg>
                                  </button>
                                </div>

                                {/* Buttons Section */}
                                <div className="h-13 mt-2 flex items-center justify-between">
                                  {/* Click to Know More Button */}

                                  <button
                                    className=" rounded-lg h-10 bg-[#f2f2f2] px-5 text-brand dark:bg-[#464f50]"
                                    type="button"
                                  >
                                    Click to know more.
                                  </button>

                                  {/* Icon Button */}
                                  <button
                                    className="button button-m ml-auto text-secondary"
                                    type="button"
                                  >
                                    <svg
                                      className="icon h-6 w-6"
                                      viewBox="0 0 32 32"
                                    >
                                      <path d="M23.4576 12.8027C24.2971 12.8027 24.9774 13.4831 24.9774 14.3226C24.9774 14.4305 24.9661 14.5375 24.9435 14.6419L22.8712 24.2744C22.404 26.4467 20.4831 27.9988 18.2603 27.9988H12.6628C10.4399 27.9988 8.51988 26.4476 8.05183 24.2744L5.97952 14.6419C5.80292 13.8215 6.32491 13.0133 7.14531 12.8367C7.25057 12.814 7.35758 12.8027 7.46459 12.8027H23.4567H23.4576ZM17.9044 4.11679C20.825 4.63182 22.3257 6.46488 22.2517 9.28364L26.5486 10.0414C27.1898 10.1545 27.6178 10.7661 27.5047 11.4073L27.3864 12.078C27.2733 12.7192 26.6617 13.1472 26.0205 13.0341L5.89514 9.48548C5.25396 9.37238 4.82592 8.76078 4.93902 8.1196L5.05734 7.44884C5.17044 6.80766 5.78204 6.37962 6.42322 6.49272L12.0538 7.48451C12.9481 4.81104 14.9848 3.60176 17.9053 4.11592L17.9044 4.11679ZM14.3236 7.88557L19.9793 8.88258C19.928 7.40708 19.1433 6.64932 17.5077 6.36135C15.8721 6.07339 14.876 6.51621 14.3227 7.88557H14.3236Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {notePage === "Transactions" && (
                          <div className="absolute top-16">
                            {" "}
                            <div className="w-full p-3 ml-7 rounded-lg sm:py-4 sm:px-6 sm:mt-4">
                              <div className="py-3 sm:py-4">
                                <div className="w-full h-60 flex items-center justify-center">
                                  <div className="py-10 text-center flex flex-col items-center justify-center w-full">
                                    <img
                                      className="w-48 h-48"
                                      src="../../../public/Wallet_images/flate-img/empty.webp"
                                      alt="No Data"
                                    />
                                    <div className="leading-5 mt-4">
                                      Oops! There is no data yet!
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {notePage === "System" && (
                          <div className="absolute top-16 ">
                            {[
                              {
                                id: 1,
                                date: "3/10/2025, 9:10:00 AM",
                                title: "🔧 Sportsbook Maintenance Alert 🔧",
                                description:
                                  "In order to enhance your betting experience, we're conducting routine maintenance on our Sportsbook.\n\nDuring this period, the Sportsbook feature won't be accessible.\n\nWe're working swiftly to complete the maintenance and get you back to your betting fun as soon as possible.\n\nTime: 10th of March 2025, 6:00 am UTC+0\nDuration: Approximately 120 mins\n\nWe appreciate your patience and apologize for any inconvenience caused.\n\nStay tuned for further updates!\n\nThank you,\nBC.GAME",
                              },
                            ].map((alert) => (
                              <div
                                key={alert.id}
                                className="alert-item bg-[#323738] rounded-lg"
                              >
                                <div className="px-3 py-3 my-3 ">
                                  <h3 className="text-xl font-semibold">
                                    {alert.title}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    {alert.date}
                                  </p>
                                  <p className="mt-2 text-base">
                                    {alert.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Exit Icons */}
            <div className="relative">
              <div onClick={() => SetExit(!exit)}>
                <img
                  src={exitimage}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full ml-3"
                />
              </div>
              {exit && (
                <div
                  className="absolute w-[250px] h-[520px] top-14 right-1 bg-[#292d2e] rounded-lg"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 24px 0px" }}
                >
                  <div className="w-60 rounded-lg p-2 text-secondary bg-layer3 h-[500px]">
                    {buttons.map((button, index) => (
                      <Link
                        to={button.Link}
                        key={index}
                        className={`w-full h-11 flex items-center gap-3 px-3 hover:text-primary `}
                        type="button"
                        onClick={() => {
                          index === 8 && SetProfilePopup((prev) => !prev);
                          index === 10 && SetProfileLogOut((prev) => !prev);
                        }}
                      >
                        <div className="text-2xl">{button.icon}</div>
                        <span className="ml-2 text-sm font-semibold">
                          {button.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  {profilePopup && (
                    <div>
                      <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500"></div>
                      <div
                        className={`sm:w-[350px] lg:w-[30%] md:w-[500px] h-[600px] bg-[#232626] fixed rounded-xl overflow-y-scroll custom-scrollbar hide-scrollbar transition-transform duration-500 ease-out ${
                          isSlideOut ? "translate-x-full" : "translate-x-0"
                        }`}
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="flex items-center justify-between p-2 px-5 bg-[#323738] rounded-t-xl">
                          {/* Close Button */}
                          <button
                            className="text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg"
                            onClick={handleClosePopup}
                          >
                            <IoMdClose className="text-[#a4aeb1] z-50" />
                          </button>
                          <strong className="">My Profile</strong>
                          <div className="bg-[#232626] w-4"></div>
                        </div>
                        <div className="mt-4">
                          <MyProfile />
                        </div>
                      </div>
                    </div>
                  )}
                  {profileLogOut && (
                    <div>
                      <>
                        <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-500 z-30 "></div>
                        <div
                          className="sm:w-[350px] lg:w-[30%] md:w-[500px] h-[250px] bg-[#232626]  z-50 fixed rounded-xl"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="flex items-center justify-between p-2">
                            <div className="bg-[#232626] w-4"></div>
                            <strong className=" text-center">
                              Signing Out
                            </strong>
                            <button
                              className="top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                              onClick={() => SetProfileLogOut(false)}
                            >
                              <IoMdClose className="text-[#a4aeb1] z-50" />
                            </button>
                          </div>
                          <div className="p-3 mt-3">
                            {" "}
                            <div className="scroll-y pop-content">
                              <div className="scroll-container">
                                <p className="text-center text-gray-300 font-semibold my-3">
                                  Are you sure you want to log out? Check our
                                  great promotions and bonuses before you leave!
                                </p>
                                <div className="w-full flex items-center justify-between gap-4 my-5 sm:mb-0">
                                  <button
                                    className="bg-[#3a4142] text-white py-2 px-4 rounded-lg flex-1 font-semibold"
                                    type="button"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className=" bg-gradient-to-r from-green-dark to-yellow-dark text-black font-semibold py-2 px-4 rounded-lg flex-1"
                                    type="button"
                                  >
                                    Sign Out
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
