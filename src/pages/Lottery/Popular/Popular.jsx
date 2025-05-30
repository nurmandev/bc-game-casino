import { useState } from "react";
import { BsExclamationSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import Footer from "../../../components/Footer";

const Popular = () => {
  const [isopen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const lotteryData = [
    {
      title: "Greece KENO 20/80",
      topPrize: "₹3,300,055.10",
      timeRemaining: "00h 00m 00s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "EKlub Keno 20/80",
      topPrize: "₹868,435.55",
      timeRemaining: "00h 02m 04s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Poland Keno 20/70",
      topPrize: "₹130,265.33",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Greece KENO 20/80",
      topPrize: "₹3,300,055.10",
      timeRemaining: "00h 00m 00s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "EKlub Keno 20/80",
      topPrize: "₹868,435.55",
      timeRemaining: "00h 02m 04s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Poland Keno 20/70",
      topPrize: "₹130,265.33",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Greece KENO 20/80",
      topPrize: "₹3,300,055.10",
      timeRemaining: "00h 00m 00s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "EKlub Keno 20/80",
      topPrize: "₹868,435.55",
      timeRemaining: "00h 02m 04s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Poland Keno 20/70",
      topPrize: "₹130,265.33",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Greece KENO 20/80",
      topPrize: "₹3,300,055.10",
      timeRemaining: "00h 00m 00s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "EKlub Keno 20/80",
      topPrize: "₹868,435.55",
      timeRemaining: "00h 02m 04s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Poland Keno 20/70",
      topPrize: "₹130,265.33",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
    {
      title: "Ireland Daily Million Plus 6/39",
      topPrize: "₹17,368.71",
      timeRemaining: "02h 04m 05s",
      countryImageSrc: "/modules/lottery2/assets/countries-58e8ccb8.png",
    },
  ];

  return (
    <div className="w-[100%] mt-14 ">
      <div className="text-[14px] text-[#bcb3c1] font-semibold tracking-wider mt-5  ">
        <strong>Popular</strong>
        <div className="flex items center gap-3">
          <div onClick={() => setIsOpen((prev) => !prev)} className="w-[50%]  ">
            <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
              <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                All Regions
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded">
                <button className="relative">
                  <IoChevronDownSharp />
                </button>
                {isopen && (
                  <div className="absolute lg:w-[615px] lg:h-[350px] sm:w-[350px] sm:h-[350px] bg-[#292d2e] lg:top-[155px] sm:bottom-0 sm:left-4  lg:left-[260px]  rounded-xl ">
                    <form className="max-w-[100%] mx-auto mt-3">
                      <div className="relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <IoSearch className="text-[#b3bec1] text-[20px] ml-3 " />
                        </div>
                        <input
                          type="search"
                          className="block w-[95%] m-auto p-3 ps-10 text-sm border border-[#414141] rounded-xl font-medium  bg-[#292d2e] hover:border-[#24ee89]  text-white  "
                          placeholder="Search "
                        />
                      </div>
                    </form>
                    <div className="w-[95%] m-auto  h-[50px] bg-[#3a4142] rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-5 m-auto py-3">
                        <div className="flex items-center gap-2 ">
                          <img
                            src="/public/Lottery_Image/BCD.webp"
                            alt=""
                            className="h-[24px] w-[24px] rounded "
                          />
                          <h1 className="text-white font-extrabold text-[16px] ">
                            BCD
                          </h1>
                          <div className=" w-[16px] h-[16px]">
                            <BsExclamationSquare className="text-[#25dc68] " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div onClick={() => setOpen((prev) => !prev)} className="w-[50%]  ">
            <div className="bg-[#292d2e] border border-[#656565] rounded-md flex items-center justify-between gap-2 p-1 px-2 text-[16px] my-3 font-semibold  ">
              <div className="flex items-center justify-start gap-2 text-white text-[14px] ">
                SortBy: Popular
              </div>
              <div className="w-[25px] h-[25px] bg-[#3a4142] flex items-center justify-center rounded ">
                <button className="relative">
                  <IoChevronDownSharp />
                </button>
                {open && (
                  <div className="absolute lg:w-[615px] lg:h-[200px] bg-[#292d2e] lg:top-[155px] lg:left-[900px] sm:bottom-0 sm:w-[350px] sm:h-[350px] sm:mr-72   rounded-xl ">
                    <form className="max-w-[100%] mx-auto mt-3"></form>
                    <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                        <h1 className="text-white font-bold text-[16px] ">
                          A-z
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full border-[#24ee89] border-[5px] cursor-pointer "></div>
                      </div>
                    </div>
                    <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                        <h1 className="text-white font-bold text-[16px] ">
                          Z-A
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                      </div>
                    </div>
                    <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                        <h1 className="text-white font-bold text-[16px] ">
                          Picks For You
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                      </div>
                    </div>
                    <div className="w-[95%] m-auto h-[30px]  rounded-lg mt-3  ">
                      <div className=" flex items-center justify-between gap-5 px-1 m-auto py-">
                        <h1 className="text-white font-bold text-[16px] ">
                          Popular
                        </h1>
                        <div className="w-[20px] h-[20px] rounded-full  border-[3px] cursor-pointer border-[#3b4041] hover:border-[5px] "></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <section className="relative grid gap-2 grid-cols-[repeat(5,minmax(0,1fr))]">
        {lotteryData.map((lottery, index) => (
          <section
            key={index}
            className="bg-[#292d2e] h-52 p-3 rounded-xl bg-layer4 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex justify-between">
              <span className="inline-flex items-center justify-center w-6 h-6 cursor-pointer rounded-lg like_layer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path>
                </svg>
              </span>
              <div className="flex items-center">
                <section className="relative min-w-[24px] min-h-[24px] w-[24px] h-[24px] overflow-hidden border border-solid border-third rounded-full">
                  <img
                    className="w-[24px] min-w-[24px] absolute"
                    alt=""
                    src={lottery.countryImageSrc}
                    style={{ left: "-1px", top: "-313px" }}
                  />
                </section>
              </div>
            </div>
            <div className="draw-time text-xs font-semibold text-secondary mt-2 flex justify-start break-keep truncate">
              Next Draw in
              <span className="ml-0.5">
                <span>{lottery.timeRemaining.split(" ")[0]}</span>
                <span>{lottery.timeRemaining.split(" ")[1]}</span>
                <span>{lottery.timeRemaining.split(" ")[2]}</span>
              </span>
            </div>
            <div className="draw-title text-primary text-sm font-extrabold my-2 flex justify-start">
              <label className="line-clamp-2">{lottery.title}</label>
            </div>
            <div className="prize-box flex justify-between">
              <label className="prize-desc font-semibold text-secondary text-xs">
                Top prize
              </label>
              <label className="text-primary text-sm italic font-extrabold">
                {lottery.topPrize}
              </label>
            </div>
            <div className="btn-box mt-2 flex gap-2">
              <button
                className="button button-m min-h-8 h-fit w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0"
                type="button"
              >
                Bet 2 balls
              </button>
              <button
                className="button button-m min-h-8 h-fit w-1/2 bg-black_alpha5 dark:bg-layer6 text-primary text-sm font-extrabold py-1 px-0"
                type="button"
              >
                Bet 3 balls
              </button>
            </div>
          </section>
        ))}
      </section>
      {/* Footer */}
      <div className="mt-10">
            <Footer/>
        </div>
    </div>
  );
};

export default Popular;
