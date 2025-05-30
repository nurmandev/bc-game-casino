//cashino
import { GiCardRandom } from "react-icons/gi";
import { TbChartGridDotsFilled } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { FaDiceD20, FaFireFlameCurved, FaTags } from "react-icons/fa6";
import { TbStarOff } from "react-icons/tb";
import { FaRocket, FaTicketAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { BsPalette2, BsSuitClub } from "react-icons/bs";
//sports
import { GiBeachBall } from "react-icons/gi";
import { GiTennisBall } from "react-icons/gi";
import { PiCalendarStarFill, PiSoccerBallDuotone } from "react-icons/pi";
import { PiBasketballLight } from "react-icons/pi";
// import { IoFootball } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { TbBallFootball } from "react-icons/tb";
import { IoAmericanFootball } from "react-icons/io5";
import { FaHockeyPuck } from "react-icons/fa6";
import { CiBaseball } from "react-icons/ci";
import { MdSportsVolleyball } from "react-icons/md";
import { GiHorseHead } from "react-icons/gi";
//lottery
import { ImTicket } from "react-icons/im";
import { SiTicktick } from "react-icons/si";
import { HiTicket } from "react-icons/hi2";
import { WiNightCloudyHigh, WiStars } from "react-icons/wi";
//crypto trading
// import { MdCandlestickChart } from "react-icons/md";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { AiFillThunderbolt } from "react-icons/ai";
// import { IoPulseOutline } from "react-icons/io5";
//promotion
import { RiShareBoxLine, RiVipCrown2Fill } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";
import { GiWizardFace } from "react-icons/gi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
//sponcerships
import { FaHandshake } from "react-icons/fa";
import { LiaCodiepie, LiaStumbleuponCircle } from "react-icons/lia";
import { LiaJsfiddle } from "react-icons/lia";
import { TbEaseInControlPoint } from "react-icons/tb";
import Icon from "../Sponcership/Icon";
import IconJd from "../Sponcership/IconJd";
import { TbBrandWindowsFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";


const menuData = [
  {
    id: 1,
    title: "Casino",
    path: "Casino",
    icons: <GiCardRandom />,
    newTab: true,
    submenu: [
      {
        id: 12,
        title: "Top Picks",
        path: "TopPicks",
        icons: <TbChartGridDotsFilled />,
        newTab: false,
      },
      {
        id: 13,
        title: "Slots",
        path: "slots",
        icons: <FaDiceD20 />,
        newTab: false,
      },
      {
        id: 14,
        title: "Live Casino",
        path: "Live-Casino",
        icons: <SlCalender />,
        newTab: false,
      },
      {
        id: 15,
        title: "Hot Game",
        path: "HotGame",
        icons: <FaFireFlameCurved />,
        newTab: false,
      },
      {
        id: 16,
        title: "Feature Buy-in",
        path: "signin",
        icons: <TbStarOff />,
        newTab: false,
      },
      {
        id: 17,
        title: "New Releases",
        path: "signup",
        icons: <FaRocket />,
        newTab: false,
      },
      {
        id: 18,
        title: "Bingo",
        path: "bingo",
        newTab: false,
        icons: <BsSuitClub />,
      },
      {
        id: 19,
        title: "Table Games",
        path: "tableGames",
        newTab: false,
        icons: <BsPalette2 />,
      },
      {
        id: 110,
        title: "Game Shows",
        path: "gameShows",
        newTab: false,
        icons: <LiaCodiepie />,
      },
      {
        id: 111,
        title: "Providers",
        path: "Providers",
        newTab: false,
        icons: <IoAddCircle />,
      },
      {
        id: 112,
        title: "Themes",
        path: "themes",
        newTab: false,
        icons: <IoIosColorPalette />,
      },
    ],
  },
  {
    id: 2,
    title: "Sports",
    icons: <GiBeachBall />,
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "Soccer",
        path: "soccer",
        icons: <PiSoccerBallDuotone />,
        newTab: false,
      },
      {
        id: 12,
        title: "Tennis",
        path: "tennis",
        icons: <GiTennisBall />,
        newTab: false,
      },
      {
        id: 13,
        title: "Basketball",
        path: "basketball",
        icons: <PiBasketballLight />,
        newTab: false,
      },
      {
        id: 14,
        title: "Cricket",
        path: "cricket",
        icons: <MdOutlineSportsCricket />,
        newTab: false,
      },
      {
        id: 15,
        title: "FIFA",
        path: "fifa",
        icons: <TbBallFootball />,
        newTab: false,
      },
      {
        id: 16,
        title: "American Football",
        path: "american-football",
        icons: <IoAmericanFootball />,
        newTab: false,
      },
      {
        id: 17,
        title: "Ice_Hockey",
        path: "ice-hockey",
        icons: <FaHockeyPuck />,
        newTab: false,
      },
      {
        id: 18,
        title: "Baseball",
        path: "baseball",
        newTab: false,
        icons: <CiBaseball />,
      },
      {
        id: 19,
        title: "Handball",
        path: "handball",
        newTab: false,
        icons: <MdSportsVolleyball />,
      },
      {
        id: 110,
        title: "Racing",
        path: "racing",
        newTab: false,
        icons: <GiHorseHead />,
      },
    ],
  },
  {
    id: 3,
    title: "Lottery",
    icons: <ImTicket />,
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "My bets",
        path: "Mybets",
        icons: <CgNotes />,
        newTab: false,
      },
      {
        id: 12,
        title: "All lotteries",
        path: "all-lotteries",
        icons: <SiTicktick />,
        newTab: false,
      },
      {
        id: 13,
        title: "Picks for you",
        path: "Pick",
        icons: <TbBrandWindowsFilled />,
        newTab: false,
      },
      {
        id: 14,
        title: "Favorites",
        path: "Favorites",
        icons: <FaStar />,
        newTab: false,
      },
      {
        id: 15,
        title: "BC Lottery",
        path: "bc-lottery",
        icons: <HiTicket />,
        newTab: false,
      },
      {
        id: 16,
        title: "Popular",
        path: "Popular",
        icons: <WiStars />,
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Promotions",
    icons: <FaTags />,
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "$BC Airdrop",
        path: "BCAirdrop",
        icons: <WiNightCloudyHigh />,
        newTab: false,
      },
      {
        id: 12,
        title: "Refer and Earn",
        path: "ReferandEarn",
        icons: <FaTicketAlt />,
        newTab: false,
      },
      {
        id: 13,
        title: "Daily Contest",
        path: "dailycontest",
        icons: <PiCalendarStarFill />,
        newTab: false,
      },

      {
        id: 14,
        title: "Weekly Raffle",
        path: "WeeklyRaffle",
        icons: <FaTicketAlt />,
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Sponsorships",
    icons: <FaHandshake />,
    newTab: true,
    submenu: [
      {
        id: 11,
        title: "LCFC",
        path: "lcfc",
        icons: <LiaStumbleuponCircle />,
        newTab: false,
      },
      {
        id: 12,
        title: "Jason Derulo",
        path: "jasonderulo",
        icons: <IconJd />,
        newTab: false,
      },
      {
        id: 13,
        title: "Lil Pump",
        path: "lilpump",
        icons: <Icon />,
        newTab: false,
      },
      {
        id: 14,
        title: "Colby Covington",
        path: "colbycovington",
        icons: <LiaJsfiddle />,
        newTab: false,
      },
      {
        id: 15,
        title: "Miami Club",
        path: "miamiclub",
        icons: <TbEaseInControlPoint />,
        newTab: false,
      },
    ],
  },
];
export default menuData;

export const VIPData = [
  {
    id: 1,
    name: "VIP",
    title: "Club",
    path: "/vipClub",
    icons: <RiVipCrown2Fill />,
    newTab: false,
  },
  {
    id: 1,
    name: "",
    title: "Bonus",
    path: "/bonus",
    icons: <CiGift />,
    newTab: false,
  },
  {
    id: 1,
    name: "",
    title: "Affiliate",
    path: "/affiliate",
    icons: <BiLoaderCircle />,
    newTab: false,
  },
  {
    id: 1,
    name: "",
    title: "Forum",
    path: "forum",
    icons: <GiWizardFace />,
    newTab: false,
    icnos2: <RiShareBoxLine />,
  },
  {
    id: 1,
    name: "",
    title: "Provably Fair",
    path: "provably-fair",
    icons: <FaBalanceScaleLeft />,
    newTab: false,
  },
  {
    id: 1,
    name: "",
    title: "Blog",
    path: "blog",
    icons: <RiMessage2Fill />,
    newTab: false,
    icnos2: <RiShareBoxLine />,
  },
  {
    id: 1,
    name: "",
    title: "Sport Betting Insights",
    path: "sport-betting-insights",
    icons: <VscGraphLine />,
    newTab: false,
  },
];
