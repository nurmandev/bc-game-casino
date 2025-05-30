import { useState } from "react";
import banner from "../../../public/Bonus-images/bonus banner.png";
import { FaChevronRight } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Overview from "../Bonus/Overview";
import Transation from "../Bonus/Transation";
import { FaChevronLeft } from "react-icons/fa";
import GeneralBonus from "../Bonus/GeneralBonus";
import VipBonus from "../Bonus/VipBonus";
import { IoPricetags } from "react-icons/io5";
import Footer from "../../components/Footer";

const Bonus = () => {
  const [informationIcon, setInfomationIcon] = useState("");
  const [introicon, setIntroIcon] = useState("");
  const [deposit, SetDeposit] = useState("Crypto");

  const prizeDetails = [
    "The first deposit earns you180%(or300%for new registrations within 7 minutes), up to a maximum of$20,000.00 or an equivalent amount in other currencies.",
    "The second deposit earns you240%, up to a maximum of $40,000.00 or an equivalent amount in other currencies.",
    "The third deposit earns you300%, up to a maximum of $60,000.00 or an equivalent amount in other currencies.",
    "The fourth deposit earns you360%, up to a maximum of $100,000.00 or an equivalent amount in other currencies.",
  ];
  const section = [
    {
      title:
        "BC.CO offers an outstanding bonus for 4 consecutive deposits. Each deposit earns you a higher bonus percentage and a higher maximum limit than the last. Enjoy increasing rewards with every deposit, supporting any currency of your choice. Take advantage of this opportunity to maximize your benefits with BC.CO’s generous bonuses!",
      items: prizeDetails,
    },
  ];
  return (
    <div>
      <div>
        <div>
          <div className="pb-5 w-[100%] mx-auto ">
            <div className="flex items-center justify-between">
              <div className="mt-5 lg:text-[25px] md:text-[25px] text-white font-semibold ">
                <strong className="">How to Earn Ticket</strong>
              </div>

              <div className="relative w-[35%] sm:hidden md:block ">
                <input
                  className="h-10 w-full pr-32 text-sm font-semibold hover:border-[#24ee89] rounded-md px-3 bg-[#292d2e]"
                  placeholder="Redeem your bonus here."
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#545758] text-white px-4 py-1 rounded-md flex items-center justify-satrt gap-2 whitespace-nowrap">
                  <IoPricetags /> Redeem Code
                </button>
              </div>
            </div>
            <div className="lg:w-full lg:flex lg:items-center lg:justify-start md:flex md:items-center md:justify-start gap-3 mt-5 ">
              <div
                className="lg:w-[50%] bg-[#6c402d]  text-white font-semibold rounded-xl "
                style={{
                  backgroundImage: `url(${banner})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="relative flex flex-col justify-center rounded-xl px-4 pb-2 sm:flex-grow sm:basis-[30rem] sm:overflow-hidden sm:py-4">
                  <div className="absolute left-0 right-0 top-0 -z-10 h-screen bg-gradient-bonus sm:h-full sm:bg-layer3"></div>
                  <img
                    className="absolute -bottom-44 left-18 -z-10 w-[33.375rem] opacity-40 sm:left-full sm:top-1/2 sm:-translate-x-3/4 sm:-translate-y-1/2 sm:opacity-100"
                    alt="Banner"
                    src="/modules/bonus2/assets/banner_pc-486801ce.png"
                  />
                  <div className="mt-4 flex w-full justify-between">
                    <div className="flex flex-col items-start justify-start sm:gap-y-3">
                      <div className="flex flex-col sm:gap-y-6 sm:rounded-xl sm:bg-black_alpha5 sm:px-3 sm:py-2 sm:backdrop-blur-sm">
                        <div>
                          <h3 className="text-sm font-semibold text-[#fef6f6] ">
                            Total Bonus Claimed (<span>INR</span>)
                          </h3>
                          <span className="text-2xl font-extrabold text-primary sm:text-xl">
                            ₹0.00
                          </span>
                        </div>
                        <div className="hidden gap-x-3 sm:flex">
                          <span className="text-[#fef6f6] inline-flex flex-col gap-y-1 text-xs font-semibold leading-none ">
                            Total VIP Bonus{" "}
                            <span className="text-white text-sm font-semibold">
                              ₹0.00
                            </span>
                          </span>
                          <span className="text-[#fef6f6] inline-flex flex-col gap-y-1 text-xs font-semibold leading-none">
                            Total Special Bonus{" "}
                            <span className="text-white text-sm font-semibold">
                              ₹0.00
                            </span>
                          </span>
                          <span className="text-[#fef6f6] inline-flex flex-col gap-y-1 text-xs font-semibold leading-none ">
                            Total General Bonus{" "}
                            <span className="text-white text-sm font-semibold ">
                              ₹0.00
                            </span>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setInfomationIcon((prev) => !prev)}
                        className="flex items-center rounded-xl gap-3 border px-5 py-1"
                        type="button"
                      >
                        Details
                        <FaChevronRight />
                      </button>
                      {informationIcon && (
                        <>
                          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
                          <div
                            className="sm:w-[350px] lg:w-[500px] md:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <div className="w-full h-[70px] bg-[#323738] rounded-t-3xl flex items-center justify-center ">
                              <h1 className="text-[#ffffff] text-[16px] font-medium ">
                                Bonus Detail
                              </h1>
                              <button
                                className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                                onClick={() => setInfomationIcon(false)}
                              >
                                <IoMdClose className="text-[#a4aeb1]" />
                              </button>
                            </div>
                            <div className="mx-5">
                              <div className=" mt-3 w-full bg-[#232626] h-[40px] rounded-lg flex items-center justify-around font-bold text-gray-400 text-[14px] ">
                                <div
                                  onClick={() => SetDeposit("Crypto")}
                                  className={`w-[50%] h-[40px] rounded-xl ${
                                    deposit === "Crypto"
                                      ? "bg-[#3a4142] text-white font-bold"
                                      : " hover:text-white "
                                  }`}
                                >
                                  <div className="text-center my-3">
                                    <button className=""> Overview</button>
                                  </div>
                                </div>
                                <div
                                  onClick={() => SetDeposit("flate")}
                                  className={`w-[50%] h-[40px] rounded-xl ${
                                    deposit === "flate"
                                      ? "bg-[#3a4142] text-white font-bold"
                                      : " hover:text-white "
                                  }`}
                                >
                                  <div className="text-center my-3">
                                    <button>Transation</button>
                                  </div>
                                </div>
                              </div>
                              <div>
                                {deposit === "Crypto" && <Overview />}
                                {deposit === "flate" && <Transation />}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] sm:w-[100%] lg:mt-0   sm:mt-5   bg-gradient-to-l from-[#614a2c] via-[#403d35] to-[#504230]  gap-5 text-white font-semibold rounded-xl ">
                <div className="mx-4 flex flex-shrink-0 flex-grow flex-col justify-center gap-y-3 rounded-xl  bg-layer4 p-4  sm:mx-0 sm:basis-[28rem]">
                  <div className="flex justify-between">
                    <div className="flex flex-col flex-wrap sm:flex-row sm:items-center sm:gap-x-2">
                      <h3 className="text-lg font-extrabold text-primary">
                        Deposit Bonus
                      </h3>
                      <p className="text-[#a4abaa] font-semibold ">
                        Get up to:{" "}
                        <span className="text-[#28dc80] font-bold ">
                          20,000 BCD
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => setIntroIcon((prev) => !prev)}
                      className="text-[20px] "
                      type="button"
                    >
                      <GrCircleInformation />
                    </button>
                    {introicon && (
                      <>
                        <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500  z-30 "></div>
                        <div
                          className="sm:w-[350px] md:w-[500px] lg:w-[500px] h-[600px] bg-[#232626] z-50 fixed rounded-3xl snap-y overflow-y-auto scroll-smooth "
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="w-full h-[70px] bg-[#232626] rounded-t-3xl flex items-center justify-center ">
                            <strong className="text-[#ffffff] text-[16px] font-medium ">
                              Deposit Bonus Rules
                            </strong>
                            <button
                              className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                              onClick={() => setIntroIcon(false)}
                            >
                              <IoMdClose className="text-[#a4aeb1]" />
                            </button>
                          </div>
                          <div className="mx-5 flex flex-col items-center justify-start gap-3">
                            <div className="w-full bg-gradient-to-l from-[#614a2c] via-[#403d35] to-[#504230] flex items-center justify-start px-3 rounded-xl">
                              <div className="w-[70%] ">
                                <strong>1st Deposit Bonus</strong>
                                <h1 className="text-[25px] font-bold text-[#28dc80] ">
                                  180%
                                </h1>
                                <p className="text-[#a4abaa] ">
                                  Min. deposit: ₹865.71
                                </p>
                              </div>
                              <div className="w-[30%] ">
                                <img
                                  src="../../../public/Bonus-images/boom.webp"
                                  alt=""
                                  className="w-[120px] "
                                />
                              </div>
                            </div>
                            <div className="w-full bg-gradient-to-l from-[#614a2c] via-[#403d35] to-[#504230] flex items-center justify-start px-3 rounded-xl">
                              <div className="w-[70%] ">
                                <strong>1st Deposit Bonus</strong>
                                <h1 className="text-[25px] font-bold text-[#28dc80] ">
                                  180%
                                </h1>
                                <p className="text-[#a4abaa] ">
                                  Min. deposit: ₹865.71
                                </p>
                              </div>
                              <div className="w-[30%] ">
                                <img
                                  src="../../../public/Bonus-images/boom.webp"
                                  alt=""
                                  className="w-[120px] "
                                />
                              </div>
                            </div>
                            <div className="w-full bg-gradient-to-l from-[#614a2c] via-[#403d35] to-[#504230] flex items-center justify-start px-3 rounded-xl">
                              <div className="w-[70%] ">
                                <strong>1st Deposit Bonus</strong>
                                <h1 className="text-[25px] font-bold text-[#28dc80] ">
                                  180%
                                </h1>
                                <p className="text-[#a4abaa] ">
                                  Min. deposit: ₹865.71
                                </p>
                              </div>
                              <div className="w-[30%] ">
                                <img
                                  src="../../../public/Bonus-images/boom.webp"
                                  alt=""
                                  className="w-[120px] "
                                />
                              </div>
                            </div>
                            <div className="w-full bg-gradient-to-l from-[#614a2c] via-[#403d35] to-[#504230] flex items-center justify-start px-3 rounded-xl">
                              <div className="w-[70%] ">
                                <strong>1st Deposit Bonus</strong>
                                <h1 className="text-[25px] font-bold text-[#28dc80] ">
                                  180%
                                </h1>
                                <p className="text-[#a4abaa] ">
                                  Min. deposit: ₹865.71
                                </p>
                              </div>
                              <div className="w-[30%] ">
                                <img
                                  src="../../../public/Bonus-images/boom.webp"
                                  alt=""
                                  className="w-[120px] "
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-4 ">
                            <div className="snap-normal">
                              {section.map((section, index) => (
                                <div key={index} className="mb-6">
                                  <h1 className="text-lg text-gray-400 font-semibold mb-2">
                                    {section.title}
                                  </h1>
                                  <ul className="list-disc pl-5 text-gray-400">
                                    {section.items.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <img
                      src="../../../public/Bonus-images/bonus tresure box.webp"
                      alt=""
                      className="w-[42px]  "
                    />
                    <img
                      src="../../../public/Bonus-images/bonus tresure box2.webp"
                      alt=""
                      className="w-[42px]  "
                    />
                    <img
                      src="../../../public/Bonus-images/coin2_closed-4758251f.webp"
                      alt=""
                      className="w-[42px]  "
                    />

                    <img
                      src="../../../public/Bonus-images/tresure-box-3.webp"
                      alt=""
                      className="w-[42px]  "
                    />
                  </div>
                  <div className="relative">
                    <div className="w-[93%] m-auto h-[7px] bg-[black]  "></div>
                    <div className="absolute w-4 h-4 bg-[#a2992c] border-2 border-black -top-1 lg:left-3 skew-y-12 rotate-45"></div>
                    <div className="absolute w-4 h-4 bg-black -top-1 lg:left-[190px] skew-y-12 rotate-45"></div>
                    <div className="absolute w-4 h-4 bg-black -top-1 lg:left-[360px] skew-y-12 rotate-45"></div>
                    <div className="absolute w-4 h-4 bg-black -top-1 lg:left-[540px] skew-y-12 rotate-45"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>+180%</p>
                    <p>+240%</p>
                    <p>+300%</p>
                    <p>+360%</p>
                  </div>
                  <div className="relative z-10 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[#a4abaa] font-semibold ">
                      Bonus ends:{" "}
                      <span className="text-white">01d 19h 23m</span>
                    </span>
                    <div className="">
                      <div className="bg-gradient-to-r from-[#3cec84] to-[#8ae975] rounded-lg">
                        <div className="w-[100%] px-10 pb-2 pt-1 rounded-lg  ">
                          <h1 className="text-black font-bold text-center whitespace-nowrap">
                            Deposit Now
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* middle components */}
            <div>
              <GeneralBonus />
              <VipBonus />
            </div>

            {/* oops */}
            <div>
              <div className="flex items-center justify-between my-5">
                <strong className="text-white text-[18px] ">
                  Special Bonus
                </strong>
                <div className="flex items-center justify-start gap-3 text-white">
                  <div className="w-9 h-9 rounded-lg bg-[#2c3131] flex items-center justify-center ">
                    <FaChevronLeft />
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#2c3131] flex items-center justify-center ">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
              {/* No Data Section */}
              <div className="flex flex-col items-center justify-center py-12">
                <img
                  src="/Bonus-images/empty.webp"
                  alt="No data"
                  className="mb-4 w-60 h-60"
                />
                <p className="text-white text-lg">
                  Oops! There is no data yet!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
