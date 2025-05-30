import Slider from "react-slick";
import bg2238011 from "../../../../public/Sports/2238011734688407561.jpeg";
import LiveCardSoccer from "./LiveCardSoccer";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const EarthPopular = () => {
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
    <div>
      {/* slide card */}
      <div className="slider-container w-[100%] mt-5 ">
        <Slider {...settings}>
          {matches.map((match, index) => (
            <div key={index} className=" ">
              <div
                className=" p-4 rounded-lg shadow-lg bg-cover  bg-center"
                style={{
                  backgroundImage: `url(${bg2238011})`,
                  backgroundPosition: "center",
                  width: "410px",
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
      {/* popular */}
      <div>
        <div
          className="flex items-center justify-start gap-2 mt-5 "
          data-editor-id="blockTitle"
        >
          <svg
            className="bt11989"
            data-cy="ic-top"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "rgb(255, 152, 32)",
              color: "inherit",
              width: "auto",
              height: 48,
            }}
          >
            <path d="M18.8 9.73684C18.8 10.7537 18.2326 11.641 17.3904 12.1129L20.1822 15.8272C20.5377 16.3001 21.2239 16.3627 21.6591 15.9619L26.2786 11.707C25.9151 11.3301 25.6923 10.8221 25.6923 10.2632C25.6923 9.10052 26.6566 8.15796 27.8461 8.15796C29.0356 8.15796 30 9.10052 30 10.2632C30 11.4259 29.0356 12.3685 27.8461 12.3685C27.7679 12.3685 27.6907 12.3644 27.6147 12.3565L26.8677 19.1099C26.8117 19.6166 26.3835 20 25.8738 20H6.12146C5.61379 20 5.18667 19.6196 5.12813 19.1153L4.34403 12.3604C4.28136 12.3657 4.21793 12.3685 4.15385 12.3685C2.96431 12.3685 2 11.4259 2 10.2632C2 9.10052 2.96431 8.15796 4.15385 8.15796C5.34338 8.15796 6.30769 9.10052 6.30769 10.2632C6.30769 10.832 6.07693 11.3481 5.70192 11.7269L10.3413 15.9678C10.7769 16.3659 11.4608 16.3023 11.8154 15.8305L14.6096 12.113C13.7674 11.6411 13.2 10.7538 13.2 9.73684C13.2 8.22533 14.4536 7 16 7C17.5463 7 18.8 8.22533 18.8 9.73684Z" />
            <path d="M6.5 23C5.67157 23 5 23.6716 5 24.5C5 25.3284 5.67157 26 6.5 26H25.5C26.3284 26 27 25.3284 27 24.5C27 23.6716 26.3284 23 25.5 23H6.5Z" />
          </svg>
          <strong>Popular</strong>
        </div>
        <div>
          <LiveCardSoccer />
        </div>
      </div>
      {/* live */}
      <div>
        <div
          className="flex items-center justify-start gap-2 mt-5"
          data-editor-id="blockTitle"
        >
          <svg
            className="bt48613"
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
        <div>
          <LiveCardSoccer />
        </div>
      </div>
      {/* Upcoming */}
      <div>
        <div>
          <div
            className="flex items-center justify-start gap-2 mt-5"
            data-editor-id="blockTitle"
          >
            <svg
              className="bt397"
              data-cy="ic-upcoming"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "rgb(33, 168, 247)",
                color: "inherit",
                width: "auto",
                height: 32,
              }}
            >
              <g id="Property 1=upcoming">
                <g id="Union">
                  <path d="M21.9177 16.9959C21.4434 19.8356 18.9745 22 16 22C12.6863 22 10 19.3137 10 16C10 13.0256 12.1644 10.5566 15.0042 10.0823C15.5489 9.9913 16 10.4478 16 11V16H21C21.5523 16 22.0087 16.4511 21.9177 16.9959Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z"
                  />
                </g>
              </g>
            </svg>
            Upcoming
          </div>
          <LiveCardSoccer />
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
    </div>
  );
};

export default EarthPopular;
