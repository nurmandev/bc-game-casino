import { useState } from "react";
import Slider from "react-slick";
import SoccerLive from "./SoccerLive";
import bg2238011 from "../../../../public/Sports/2238011734688407561.jpeg";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import Footer from "../../../components/Footer";
<MdArrowLeft />;

const SoccerLiveIcon = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 35;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //slide data
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
    <div className="w-[97%] mx-auto lg:mt-20 md:mt-36 sm:mt-36 ">
      {/* Live Section */}
      <div
        className="flex items-center justify-start gap-3"
        data-editor-id="blockTitle"
      >
        <svg
          className="bt15789"
          data-cy="ic-live-simple"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="#FF4E4E"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "rgb(252, 60, 60)",
            color: "inherit",
            width: "auto",
            height: 32,
          }}
        >
          <path d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z" />
          <path d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z" />
          <path d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z" />
          <path d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z" />
          <path d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z" />
        </svg>
        Live
      </div>
      {/* slide card */}
      <div className="slider-container w-[100%] mt-5 ">
        <Slider {...settings}>
          {matches.map((match, index) => (
            <div key={index} className=" ">
              <div
                className=" p-4 rounded-lg shadow-lg bg-cover  bg-center lg:w-[410px] "
                style={{
                  backgroundImage: `url(${bg2238011})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-center justify-between text-white font-semibold">
                  <div className="flex items-center justify-start gap-1">
                    <span className="block text-sm">{match.country}</span>
                    <span className="block text-sm">{match.league}</span>
                  </div>
                  <div className="match-details mt-2 text-gray-200">
                    <span className="text-sm">{match.date}</span>
                  </div>
                </div>

                <div className="teams flex justify-between items-center mt-3">
                  {match.teams.map((team, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <img
                        src={team.logo}
                        alt={team.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-white text-sm">{team.name}</span>
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
      <div className=" mt-10">
        <div>
          <SoccerLive />
        </div>

        <div className="flex justify-center mt-6 space-x-2 ">
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#323738] rounded disabled:opacity-50"
          >
            <MdArrowRight />
          </button>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#323738] rounded disabled:opacity-50"
          >
            <MdArrowLeft />
          </button>
        </div>
      </div>

      {/* Last section in the page */}
      <div className="w-3/5 mx-auto p-4 rounded-lg flex flex-col items-center justify-center mt-5">
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
                      className="p-2 cursor-pointer text-sm"
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
          Although every effort is made to ensure data displayed on our site is
          accurate, this data is for information purposes and should be used as
          a guide only. In the event of any particular information being
          incorrect, we assume no liability for it.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default SoccerLiveIcon;
