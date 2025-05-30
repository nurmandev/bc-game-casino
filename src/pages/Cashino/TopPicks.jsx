import { useState } from "react";
import HomeSlideCards from "../HomePage/HomeSlideCards";
// import CashinoLineHeading from "./CashinoLineHeading";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { BCOrigin } from "../HomePage/HomeData";
import { FaPlay, FaUser } from "react-icons/fa6";

import { TbChartGridDotsFilled, TbStarOff } from "react-icons/tb";
import { FaDiceD20, FaFireFlameCurved, FaRocket } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
// import CashinoLineBottomData from "./CashinoLineBottomData";
import { BsPalette2, BsSuitClub } from "react-icons/bs";
import { LiaCodiepie } from "react-icons/lia";
import { IoAddCircle } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

const categories = [
  {
    key: "TopPicks",
    label: "Top Picks",
    path: "TopPicks",
    icon: <TbChartGridDotsFilled />,
  },
  { key: "Slots", label: "Slots", path: "slots", icon: <FaDiceD20 /> },
  {
    key: "LiveCashino",
    label: "Live Cashino",
    path: "Live-Casino",
    icon: <SlCalender />,
  },
  {
    key: "HotGames",
    label: "Hot Games",
    path: "HotGame",
    icon: <FaFireFlameCurved />,
  },
  {
    key: "FeatureBy-in",
    label: "Feature By-in",
    path: "signin",
    icon: <TbStarOff />,
  },
  {
    key: "NewReleases",
    label: "New Releases",
    path: "signup",
    icon: <FaRocket />,
  },
  { key: "Bingo", label: "Bingo", path: "bingo", icon: <BsSuitClub /> },
  {
    key: "TableGames",
    label: "Table Games",
    path: "tableGames",
    icon: <BsPalette2 />,
  },
  {
    key: "GameShows",
    label: "Game Shows",
    path: "gameShows",
    icon: <LiaCodiepie />,
  },
  {
    key: "Providers",
    label: "Providers",
    path: "Providers",
    icon: <IoAddCircle />,
  },
  {
    key: "Themes",
    label: "Themes",
    path: "themes",
    icon: <IoIosColorPalette />,
  },
];

const TopPicks = () => {
  const [query, setQuery] = useState("");
  const { slug } = useParams();

  const filteredData = BCOrigin.find((item) => item.slug === slug);

  return (
    <div className="overflow-x-hidden">
      <div className="w-[98%] mx-auto mt-20">
        <div>
          <HomeSlideCards />
        </div>

        <div>
          <div className="flex justify-center items-center mt-5 w-[100%]">
            <input
              type="text"
              placeholder="Search games"
              className="w-full bg-[#292d2e]  px-4 py-3 border border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-scroll whitespace-nowrap hide-scrollbar my-5">
          <div className="w-full flex items-center justify-start gap-5">
            {categories.map((category) => (
              <div key={""}>
                <Link
                  to={`/detaile/${category.path}`}
                  className="flex items-center justify-start gap-2"
                >
                  {category.icon}
                  <button className="text-sm font-semibold">
                    {category.label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {filteredData ? (
            filteredData.data.map((item, i) => (
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
            ))
          ) : (
            <p className="text-red-500 text-lg font-bold">
              No data found for {slug}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default TopPicks;
