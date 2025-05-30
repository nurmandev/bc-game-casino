import { useState, useEffect } from "react";
import { Upcoming } from "../HomePage/HomeData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const UpcomingLottery = () => {
  // sport
  const [currentIndexsport, setCurrentIndexsport] = useState(0);
  const [itemsToShowSport, setItemsToShowSport] = useState(5);

  // Convert seconds back to "hh:mm:ss" format

  const timeStringToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // Convert seconds to an object with hours, minutes, and seconds
  const secondsToTimeComponents = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(remainingSeconds).padStart(2, "0"),
    };
  };

  // Initialize the state with seconds from item.time
  const [timers, setTimers] = useState(
    Upcoming.map((item) => ({
      ...item,
      timeInSeconds: timeStringToSeconds(item.time),
    }))
  );

  useEffect(() => {
    const updateItemsToShowSport = () => {
      const width = window.innerWidth;
      if (width >= 1026) {
        setItemsToShowSport(5);
      } else if (width >= 1024) {
        setItemsToShowSport(4);
      } else if (width >= 768) {
        setItemsToShowSport(3);
      } else if (width >= 540) {
        setItemsToShowSport(3);
      } else if (width >= 480) {
        setItemsToShowSport(2);
      } else {
        setItemsToShowSport(2);
      }
    };

    updateItemsToShowSport();
    window.addEventListener("resize", updateItemsToShowSport);
    return () => window.removeEventListener("resize", updateItemsToShowSport);
  }, []);

  // Countdown Timer Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => ({
          ...timer,
          timeInSeconds: Math.max(timer.timeInSeconds - 1, 0),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide Function
  const nextSlideSport = () => {
    if (currentIndexsport < Upcoming.length - itemsToShowSport) {
      setCurrentIndexsport((prevIndex) => prevIndex + 1);
    }
  };

  // Previous Slide Function
  const prevSlideSport = () => {
    if (currentIndexsport > 0) {
      setCurrentIndexsport((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between mt-5">
        <h4 className="font-bold text-base text-primary  ">
          {" "}
          Upcoming Lottery Draw
        </h4>
        <div className="flex items-center">
          <button
            className={`bg-gray-light text-primary mr-2 font-bold p-1 px-2 rounded-lg flex items-center`}
          >
            All
            <RiArrowRightSLine />
          </button>
          <button
            onClick={prevSlideSport}
            className={`${
              currentIndexsport > 0
                ? "bg-gray-light text-primary"
                : "bg-gray-dark text-secondary"
            } mr-2 font-bold p-2 rounded-lg`}
            disabled={currentIndexsport > 0 ? false : true}
          >
            <RiArrowLeftSLine />
          </button>

          <button
            onClick={nextSlideSport}
            className={` ${
              currentIndexsport < Upcoming.length - itemsToShowSport
                ? "bg-gray-light text-primary"
                : "bg-gray-dark text-secondary"
            } font-bold p-2 rounded-lg`}
            disabled={
              currentIndexsport < Upcoming.length - itemsToShowSport
                ? false
                : true
            }
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                currentIndexsport * (100 / itemsToShowSport)
              }%)`,
              width: `${(100 * Upcoming.length) / itemsToShowSport}%`,
            }}
          >
            <div className={`flex w-full justify-between `}>
              {timers.map((item, i) => {
                const { hours, minutes, seconds } = secondsToTimeComponents(
                  item.timeInSeconds
                );
                const colors = [
                  "pink-box",
                  "orange-box",
                  "yellow-box",
                  "green-box",
                  "blue-box",
                ];
                const colorClass = colors[i % colors.length];
                return (
                  <div
                    key={i}
                    className={`md:w-[220px] sm:w-[px] bg-gray-light overflow-hidden relative z-10 rounded-lg p-4 ${colorClass} cursor-pointer m-1`}
                  >
                    {/* Individual slide */}

                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center text-[13px] font-semibold text-primary">
                        {item.name}
                      </h3>
                      <div className=" absolute top-[-20px] z-0 right-[-20px] border-4 rounded-full border-black">
                        <img
                          className="dark:invert w-[70px] rounded-lg"
                          src={item.img}
                          alt={item.name}
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <h2 className="italic text-lg font-semibold mt-5">
                      ₹{item.price}
                    </h2>
                    <hr className="border-gray-500" />
                    <p className="text-secondary text-xs">{item.startWay}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="bg-gray-trans w-full text-center px-2 py-1 rounded mr-1 text-sm font-semibold">
                        {hours}h
                      </span>
                      :
                      <span className="bg-gray-trans  w-full text-center px-2 py-1  rounded text-sm font-semibold mx-1">
                        {minutes}m
                      </span>
                      :
                      <span className="bg-gray-trans py-1  px-2  w-full text-center rounded text-sm font-semibold ms-1">
                        {seconds}s
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-green-dark to-yellow-dark w-full mt-3 text-black rounded-lg p-2 font-bold text-sm">
                      Bet Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLottery;
