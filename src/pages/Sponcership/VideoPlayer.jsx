import { BsThreeDotsVertical } from "react-icons/bs";
import { FaExpand, FaCompress, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineScreenShare } from "react-icons/md";



const VideoPlayer = ({ video, img, logo, text }) => {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [useNativeControls, setUseNativeControls] = useState(
    window.innerWidth < 767
  );
  const [isShow, setIsShow] = useState(false);
  const [isButton, setIsButton] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setUseNativeControls(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateProgress = () => {
    if (videoRef.current) {
      const value =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };

  const startProgressLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateProgress, 1000);
  };

  const stopProgressLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        startProgressLoop();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        stopProgressLoop();
      }
    }
  };

  const handleseek = (event) => {
    if (videoRef.current) {
      const seekTo = (event.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTo;
      setProgress(event.target.value);
    }
  };

  const toggleMuted = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative mt-6 px-10">
      <div className="relative">
        <div
          className={`${
            isExpanded
              ? "w-[500px] h-auto"
              : "lg:w-[270px] md:w-[270px] sm:w-[auto] sm:h-[auto] "
          } transition-all duration-300 relative`}
        >
          {/* Video Player */}
          <video
            ref={videoRef}
            src={video}
            poster={img}
            onClick={togglePlayPause}
            controls={useNativeControls}
            className="w-full rounded"
          />
          {/* Custom Controls */}
          {!useNativeControls && (
            <div className="absolute top-0 left-0 w-full h-[568px] cursor-pointer">
              {/* Bottom Controls */}
              <div className="absolute bottom-24 left-0 mx-3 w-[90%] rounded bg-black/70 text-white py-2 flex items-center justify-between">
                {/* Play/Pause Button */}
                <button onClick={togglePlayPause} aria-label="Play or Pause">
                  {isPlaying ? "" : ""}
                </button>

                {/* Progress Bar */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleseek}
                  className=" w-[60%] "
                  aria-label="Seek video"
                />

                <div>
                  <div className="   ">
                    <div className="h-[20px] w-[70px] flex  ">
                      <div>
                        <div
                          onClick={() => {
                            setIsButton((prevState) => !prevState);
                          }}
                        >
                          {!isButton && <FaChevronLeft />}
                        </div>
                        {isButton && (
                          <div
                            className="absolute w-[243px]  h-full rounded bg-black bottom-0 flex items-center   transition-all ease-linear duration-75 bg-red z-50"
                            style={{ right: isButton ? "0%" : "100%" }}
                          >
                            <button
                              className="pt-2 pl-2 pb-1"
                              onClick={() => setIsButton(false)}
                            >
                              <FaChevronRight className="" />
                            </button>
                            <div className="flex items-center text-[20px] ">
                              {/* Mute/Unmute Button */}
                              <button
                                className="ml-10 "
                                onClick={toggleMuted}
                                aria-label={isMuted ? "Unmute" : "Mute"}
                              >
                                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                              </button>
                            </div>

                            <IoSettings className="mx-10 text-[20px]" />
                            <MdOutlineScreenShare className=" text-[20px]" />
                          </div>
                        )}
                      </div>
                      <div className=" flex ml-5  ">
                        <svg
                          viewBox="0 0 60 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          data-vimeo-small-icon="true"
                          role="img"
                        >
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={togglePlayPause}
                  className="group flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all"
                  aria-label="Play"
                >
                  <FaYoutube className="text-[24px] group-hover:opacity-0 transition-opacity duration-200" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-semibold">
                    Play
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Video Details and Options */}
        <div className="w-full ">
          <div className="absolute top-0 flex items-start gap-3 w-[90%] ml-3 mt-4  ">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full hover:border hover:border-[#0000FF] w-[36px] h-[36px]"
            />
            <div className="flex flex-col items-start justify-start">
              <h3 className="bg-black lg:w-[150px] md:w-[150px] sm:w-[150px] hover:bg-blue-400 text-white p-2 leading-5 rounded-lg">
                {text}
              </h3>
              <p className="bg-black hover:bg-blue-400 text-white mt-2 px-3 rounded-lg">
                BCGames
              </p>
            </div>
            <div
              onClick={() => setIsShow((prevState) => !prevState)}
              className="bg-black hover:bg-blue-400 text-white p-2 text-[20px] rounded"
            >
              <button>{!isShow && <BsThreeDotsVertical className="" />}</button>
              {isShow && (
                <div className="absolute lg:w-[280px] lg:h-[520px] md:w-[280px] md:h-[515px] sm:w-[270px] sm:h-[520px] -top-4 -left-3 bg-gradient-to-b from-[#0f160e] via-[#303030] to-[#211717] rounded transition-all ease-linear duration-75">
                  <div className="flex items-center justify-between px-4 pt-5 text-white cursor-pointer">
                    <h1 className="font-semibold text-[16px]">More Option</h1>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsShow(false);
                      }}
                      className="cursor-pointer"
                    >
                      <IoMdClose className="text-[24px]" />
                    </div>
                  </div>
                  <div>
                    <hr className="border-[1] border-[#666666] my-5 " />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-2">
                      <CiHeart className="text-[20px] text-white font-semibold " />
                      <h3 className="text-[15px] ">Like</h3>
                    </div>
                    <div className="flex items-center gap-2 py-3">
                      <FaRegClock className="text-[20px] text-white font-semibold " />
                      <h3 className="text-[15px] ">Add to Watch Later</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegShareSquare className="text-[20px] text-white font-semibold " />
                      <h3 className="text-[15px] ">Share</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
