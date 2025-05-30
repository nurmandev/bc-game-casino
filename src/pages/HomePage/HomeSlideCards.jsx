import Slider from "react-slick";
import { useState, useRef } from "react";

// Importing Images
import sliderimg1 from "../../../public/Homeimages/1fb178e159.png";
import sliderimg2 from "../../../public/Homeimages/5c0a16bf1d.png";
import sliderimg3 from "../../../public/Homeimages/98cfc1e5e0.png";
import sliderimg4 from "../../../public/Homeimages/a0f4001852.png";
import sliderimg5 from "../../../public/Homeimages/b98211b5b1.png";
import sliderimg6 from "../../../public/Homeimages/c579a042eb.png";
import sliderimg7 from "../../../public/Homeimages/d8c339f7d0.png";
import sliderimg8 from "../../../public/Homeimages/edc76797ab.png";
import sliderimg9 from "../../../public/Homeimages/f6afa840f7.png";
import sliderimg10 from "../../../public/Homeimages/639872aba8.png";

const HomeSlideCards = () => {
  // Slider Data
  const match = [
    { img: sliderimg1 },
    { img: sliderimg2 },
    { img: sliderimg3 },
    { img: sliderimg4 },
    { img: sliderimg5 },
    { img: sliderimg6 },
    { img: sliderimg7 },
    { img: sliderimg8 },
    { img: sliderimg9 },
    { img: sliderimg1 },
    { img: sliderimg2 },
    { img: sliderimg10 },
    { img: sliderimg3 },
    { img: sliderimg4 },
    { img: sliderimg5 },
    { img: sliderimg6 },
    { img: sliderimg7 },
    { img: sliderimg8 },
    { img: sliderimg9 },
    { img: sliderimg5 },
    { img: sliderimg6 },
  ];

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Slider Settings
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    beforeChange: (_, next) => setActiveIndex(next), // Update activeIndex on slide change
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2, autoplaySpeed: 2500 } },
      { breakpoint: 550, settings: { slidesToShow: 1, autoplaySpeed: 2500 } },
    ],
  };

  return (
    <div className="w-full lg:mt-5 sm:pt-7">
      {/* Slider */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {match.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={item.img}
                alt={`slide-${index}`}
                className="w-[97%] h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dots Navigation */}
      <div className="flex h-6 w-full justify-center py-2">
        <ul className="flex gap-x-1.5">
          {match.map((_, index) => (
            <li
              key={index}
              className={`relative rounded-full overflow-hidden bg-gray-900 ${
                index === activeIndex ? "w-11" : "w-1.5"
              }`}
              onClick={() => {
                setActiveIndex(index);
                sliderRef.current.slickGoTo(index);
              }}
            >
              {/* Progress Fill */}
              <span
                className={`absolute h-full w-full rounded-full  ${
                  index === activeIndex
                    ? "animate-progress bg-green-500"
                    : "w-0"
                }`}
                style={{
                  transformOrigin: "left center",
                  transform: "translateX(-9.3%)",
                }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      {/* Tailwind CSS Animation */}
      <style>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progressFill 3s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default HomeSlideCards;
