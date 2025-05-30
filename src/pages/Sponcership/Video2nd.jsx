import { FaExpand, FaCompress, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { IoIosShareAlt } from "react-icons/io";


const Video2nd = ({ video, img, logo, text }) => {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [useNativeControls, setUseNativeControls] = useState(
    window.innerWidth < 767
  );

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

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative mt-4 px-10">
      <div className="relative">
        <div
          className={`${
            isExpanded ? "w-[500px] h-auto" : "lg:w-[270px] md:w-[270px] h-auto"
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
            <div className="absolute top-0 left-0 w-full h-[568px] ">
              <div className="absolute bottom-24 left-0 mx-3 w-[90%] rounded bg-black/70 text-white py-2 flex items-center justify-between">
                <button onClick={togglePlayPause}>{isPlaying ? "" : ""}</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleseek}
                  className="mx-2 w-full"
                />
                <button onClick={toggleMuted}>
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button onClick={toggleSize}>
                  {isExpanded ? <FaCompress /> : <FaExpand />}
                </button>
              </div>
              <div
                className="absolute flex items-center justify-center w-[270px] h-[568px] "
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  onClick={togglePlayPause}
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="115"
                    viewBox="0 0 87 115"
                    aria-label="Play/Pause"
                  >
                    <path
                      clipRule="evenodd"
                      d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                      fill="#f00"
                      fillRule="evenodd"
                    />
                    <path
                      clipRule="evenodd"
                      d="M33 74L33 41L61 57.5L33 74Z"
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Video Details and Options */}
        <div className="w-full ">
          <div className="absolute top-0 flex items-start gap-10 w-[90%] mx-3 mt-4  ">
            <div className="flex-wrap flex-col items-start justify-start">
              <h3 className="bg-black lg:w-[150px] md:w-[150px] h-auto hover:bg-blue-400 text-white p-2 leading-5 rounded-lg">
                {text}
              </h3>
            </div>
            <IoIosShareAlt className="text-[30px] text-slate-900 " />
          </div>
          <div className="absolute lg:top-32 md:top-32 sm:top-24 left-3 flex items-center gap-2  ">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full hover:border hover:border-[#0000FF] w-[36px] h-[36px]"
            />
            <h1 className="uppercase font-semibold text-black">bc games</h1>
            <button className="bg-[#eeecee] px-4 font-semibold rounded ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video2nd;
