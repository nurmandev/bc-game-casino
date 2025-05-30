import { useEffect, useState } from "react";

const Time = () => {
  // Set initial time and total time
  const initialTime = Number() * 24 * 60 * 60 + 5 * 60 * 60 + 46 * 60 + 18;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to days, hours, minutes, and seconds

  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      {/* timeout */}
      <hr className=" border-[#616161] " />
      <div className=" font-bold text-white flex flex-col items-center justify-center leading-7">
        <h3 className="text-[13px] font-medium ">Next Draw Starts in</h3>
        <div className="flex items-center justify-start gap-2 pb-2 rounded-xl">
          <div className="">
            <span className="text-[36px] ">
              {hours}h<span className="ml-1">:</span>
            </span>
          </div>
          <div className="">
            <span className="text-[36px] ">
              {minutes}m<span className="ml-1">:</span>
            </span>
          </div>
          <div className="">
            <span className="text-[36px] ">{seconds}s</span>
          </div>
        </div>
      </div>
      <hr className=" border-[#616161] pb-2 " />
    </div>
  );
};

export default Time;
