import bgdashbord from "../../../public/AffiliateImage/invite_bg-f5a39697.png";
import share3 from "../../../public/AffiliateImage/share_3.webp";
import share8 from "../../../public/AffiliateImage/share_8.webp";
import share7 from "../../../public/AffiliateImage/share_7.webp";
import share11 from "../../../public/AffiliateImage/share_11.webp";
import share12 from "../../../public/AffiliateImage/share_12.webp";
import share13 from "../../../public/AffiliateImage/share_13.webp";
import share14 from "../../../public/AffiliateImage/share_14.webp";
import share16 from "../../../public/AffiliateImage/share_16.webp";
import share17 from "../../../public/AffiliateImage/share_17.webp";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Dashboard = () => {
  const [information, setInfomation] = useState("");
  const [questionDropdown, SetQuestionDropdown] = useState(null);

  const toggle = (index) => {
    SetQuestionDropdown((prev) => (prev === index ? null : index));
  };

  const QuestionData = [
    {
      title: "How does the referral system work?",
      subtitle:
        "When you share your referral link with any of your friends, family or advertise the link and a player signs up at our site that player becomes your referral and they will earn you commission & extra rewards by playing at BC.CO.",
    },
    {
      title: "How much can I earn from my referral?",
      subtitle: "You can earn 25% of their wager + ₹87,484.51 per referral.",
    },
    {
      title: "What is USD reward and how does it work?",
      subtitle:
        "There is ₹87,484.51 USD reward for each referral you bring to BC.CO This USD reward is given in 10 parts when your referral level up from VIP4 til VIP 70.",
    },
    {
      title: "Are there any banners I can use to advertise?",
      subtitle:
        "Yes, we offer multiple banner sizes for your convenience.Click here",
    },
    {
      title: "I have big audience, how I can get special deals?",
      subtitle:
        "If you have a website with good traffic or social media account with big audience you can connect with us atsupport@bc.gamefor special deals.",
    },
    {
      title:
        "How many affiliate links can I create if I have different websites/accounts?",
      subtitle:
        "You can create up to 20 unique codes for different source of traffic.",
    },
    {
      title: "Can I see the data of my referral?",
      subtitle:
        "Yes, BC.CO believes in total transparency and offers all data to the users like username, total wager and commission earned, date of registration and referral link applied. You can see all of this information in yourAffiliate Dashboard.",
    },
    {
      title: "Can I send tip or reward to my referrals?",
      subtitle:
        "Yes, you can send your referrals tips in any supported coins.Click here",
    },
  ];

  const rewardsData = [
    {
      name: "Luckyssuhen",
      amount: "₹0.87",
      currency: "INR",
      imgSrc: "/coin/INR.rect.png",
    },
    {
      name: "X World",
      amount: "0.03",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Vldrjdmdesac",
      amount: "2.5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Kssingh10",
      amount: "50",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Pmausbxrgpac",
      amount: "₹1.24",
      currency: "INR",
      imgSrc: "/coin/INR.rect.png",
    },
    {
      name: "Amit sharma2614",
      amount: "₹3.78",
      currency: "INR",
      imgSrc: "/coin/INR.rect.png",
    },
    {
      name: "👿👿pp👿👿",
      amount: "5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Luizao73",
      amount: "5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Khetsinghraj",
      amount: "₹1.40",
      currency: "INR",
      imgSrc: "/coin/INR.rect.png",
    },
    {
      name: "Ehtxvbamipac",
      amount: "2.5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "福福福福福福",
      amount: "0.1",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Wifwjedlkuac",
      amount: "25",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Dimzlo1",
      amount: "0.02",
      currency: "BCD",
      imgSrc: "/coin/BCD.black.png",
    },
    {
      name: "Alcassr",
      amount: "5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "ASiF ALOM-PRANTO",
      amount: "0.5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
    {
      name: "Jztkqeohbtcc",
      amount: "5",
      currency: "USDT",
      imgSrc: "/coin/USDT.black.png",
    },
  ];

  return (
    <div className="">
      <div className="w-full flex items-center justify-between ">
        <div className="w-[68%] ">
          <div
            className=" mt-5"
            style={{
              backgroundImage: `url(${bgdashbord})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="bg-[#323738] w-[100%] relative flex flex-col gap-3 rounded-xl bg-layer4 px-4 py-6 ">
              <div className=" invite-top">
                <div className="top-inner">
                  <p className=" mb-2 text-xl font-extrabold">
                    Invite a Friend to Get
                  </p>
                  <div className="top-6 left-2/3 sm:absolute">
                    <button
                      onClick={() => setInfomation((prev) => !prev)}
                      className="button button-m font-extrabold text-brand text-[#24ee89]"
                      type="button"
                    >
                      Referral Terms & Conditions
                    </button>
                    {information && (
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
                              Referral Terms & Conditions
                            </strong>
                            <button
                              className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                              onClick={() => setInfomation(false)}
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
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="text-xl font-extrabold text-brand text-[#24ee89]">
                        ₹87,482.62
                      </span>
                      <span>Referral Rewards</span>
                    </p>
                    <div className="h-[30px] w-[1px] bg-secondary/10"></div>
                    <p className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="text-xl font-extrabold text-brand text-[#24ee89]">
                        25%
                      </span>
                      <span>Commission Rewards</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-secondary">
                Get $1,000.00 for each friend you invite, plus up to 25%
                commission on their wagers. Enjoy consistent commission, whether
                they win or lose, in our Casino and Sportsbook. Start earning
                now!
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <p className="mb-1 text-[14px] text-secondary font-semibold">
                    Referral Link
                  </p>
                  <div className="flex items-center justify-between rounded-xl bg-[#3a4142] px-3 py-1">
                    <p className="ellipsis whitespace-nowrap">
                      https://bc.co/i-2wuv64xig-n/
                    </p>
                    <button
                      className="button button-s bg-layer6 bg-[#4a5354] px-5 py-1 rounded-xl"
                      type="button"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-[14px] text-secondary font-semibold">
                    Referral Code
                  </p>
                  <div className="flex items-center justify-between rounded-xl bg-[#3a4142] px-3 py-1">
                    <p>2wuv64xig</p>
                    <button
                      className="button button-s bg-layer6 bg-[#4a5354] px-5 py-1 rounded-xl"
                      type="button"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <span>Share via socials</span>
                <div className="center gap-3 flex items-center justify-start">
                  <img
                    src={share3}
                    alt="Facebook"
                    className="w-[32px] h-[32px]"
                  />
                  <img
                    src={share8}
                    alt="Twitter"
                    className="w-[32px] h-[32px]"
                  />
                  <img
                    src={share7}
                    alt="Telegram"
                    className="w-[32px] h-[32px]"
                  />
                  <img src={share11} alt="VK" className="w-[32px] h-[32px]" />
                  <img src={share12} alt="Line" className="w-[32px] h-[32px]" />
                  <img
                    src={share13}
                    alt="Skype"
                    className="w-[32px] h-[32px]"
                  />
                  <img src={share14} alt="OK" className="w-[32px] h-[32px]" />
                  <img
                    src={share16}
                    alt="Linkdin"
                    className="w-[32px] h-[32px]"
                  />
                  <img
                    src={share17}
                    alt="WhatsApp"
                    className="w-[32px] h-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] ">
          {" "}
          <div className="flex flex-col gap-3 md:w-full ">
            <div className="flex items-center justify-between bg-layer4 px-4 py-5 bg-[#323738] rounded-xl ">
              <div className="center flex-1 flex-col gap-2 border-r border-third lg:ml-14 ">
                <img
                  className="mb-2 h-auto w-10 "
                  src="../../../public/AffiliateImage/trophy-a688fc3f.png"
                  alt="Total Reward"
                />
                <p className="text-xs text-secondary">Total Reward</p>
                <p className="text-xl font-extrabold">₹0.00</p>
              </div>
              <div className="center flex-1 flex-col gap-2 lg:ml-20">
                <img
                  className="mb-2 h-auto w-10"
                  src="../../../public/AffiliateImage/usehead-ea19ed48.png"
                  alt="Total Friends"
                />
                <p className="text-xs text-secondary">Total Friends</p>
                <p className="text-xl font-extrabold">0</p>
              </div>
            </div>

            <div className="flex flex-1 gap-2 rounded-xl bg-layer4 md:bg-transparent mt-2 ">
              <div className="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4 bg-[#323738]">
                <img
                  className="mb-2 w-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEUAAAAl7ook7ook74kk74oo74cj7Ygl7ogg74Al7okk7Ykk7Ygm8okk7ook74kj7Ikg748k7olWkP/+AAAAEXRSTlMAn7+vQCCQYBDfj4Bfz39QEOuVG+cAAACQSURBVCjPrVFJDsQgDMteaDuL///ZQQg1ohzmUl8SY4FNQs+i7OzJnLmMlgFtJVlkKykIwNdlwUm2i7DRBtF8uFFFh2KjCQpocRluCQNgRJ9eOtIfB9EbV6SMAmj3kUWI4sciBFCp4QXw3VyHl93jVmt6zbjLB888dRVsZCwSfSTs/4YYUxRN9uV5UVHoUfwAMFkG5VKTGL0AAAAASUVORK5CYII="
                  alt="Referral Rewards"
                />
                <p className="text-xs text-secondary">Referral Rewards</p>
                <span className="text-xl font-extrabold">₹0.00</span>
              </div>

              <div className="flex h-full w-full flex-1 flex-col px-4 py-6 md:rounded-xl md:bg-layer4 bg-[#323738]">
                <img
                  className="mb-2 w-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAOVBMVEUAAAC0v8K0vsGzvsKyvsGzv8Kvv7+vv7+3v7+zvsGzvsG0vcKzvsGzvsK0v7+yvsCzv7+1v7+zvsGFcux/AAAAEnRSTlMAn9+/YH8QICCQ73DPsHBQQDC7HTtpAAAAkUlEQVQoz7WPSw7FIAhFBbFV+7/7X+wD2zRBp69noObcgBC+Ia2oUQY9rWikPiCzpOfi/QxwQo5A9cGiQaEZSvY/mzqpnX0FeOZdr8sPpUakWsfgKQAxLA5jYuzDgkG2lcvV2Whr5Ps9vVrOAw1msbnpXZoED4d6FB9sOefJPIWugpnr7cdWzutI+xEfthT+zg/u+gnq0ekBWwAAAABJRU5ErkJggg=="
                  alt="Commission Rewards"
                />
                <p className="text-xs text-secondary">Commission Rewards</p>
                <span className="text-xl font-extrabold">₹0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* oops */}
      <div className="bg-[#323738] p-2 pl-5 rounded-xl mt-5 ">
        <div className="flex items-center justify-between my-5">
          <strong className="text-white text-[18px] ">
            Rewards Activities
          </strong>
        </div>
        {/* No Data Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <img
            src="/Bonus-images/empty.webp"
            alt="No data"
            className="mb-4 w-60 h-60"
          />
          <p className="text-white text-lg">Oops! There is no data yet!</p>
        </div>
      </div>

      {/* livechat */}
      <div className="flex flex-col gap-3 rounded-xl bg-layer4 p-6 md:flex-row md:items-center md:gap-10 bg-[#323738] mt-5">
        <div className="flex flex-none flex-col gap-3 sm:w-96">
          <div className="flex items-center">
            <b className="live-dot"></b>
            <p className="font-extrabold">Live Rewards</p>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-layer5 p-3">
            <p className="whitespace-nowrap text-sm font-semibold text-white ">
              Total Rewards Sent To-Date
            </p>
            <div className="text-lg font-extrabold text-brand">
              ₹2,162,283.75K
            </div>
          </div>
        </div>
        <Marquee>
          <div className="mx-3 h-12 w-full overflow-hidden">
            <div
              className="live-container grid grid-rows-2 gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(9rem, 1fr))",
              }}
            >
              {rewardsData.map((reward, index) => (
                <div
                  key={index}
                  className="mx-3 flex items-center justify-start gap-3"
                >
                  <p>{reward.name}</p>
                  <div className="center flex items-center gap-2">
                    <p className="text-nowrap font-extrabold text-brand">
                      +{reward.amount}
                    </p>
                    <img
                      className="h-4 w-4"
                      src={reward.imgSrc}
                      alt={reward.currency}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>

      {/* affilited programme */}
      <div
        className="relative justify-end rounded-xl bg-layer4 bg-[#323738] font-semibold sm:flex mt-5"
        style={{
          backgroundImage: `url(${bgdashbord})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex flex-col items-center justify-end p-6 sm:w-3/5">
          <p className="gap-3 text-center text-2xl font-extrabold sm:mb-3 sm:flex">
            Learn more about our{" "}
            <span className="text-brand text-[#24ee89] ">Affiliate program</span>
          </p>
          <img
            alt="program"
            className="left-20 h-full sm:absolute sm:bottom-0"
            src="../../../public/AffiliateImage/program-ce2bab2b.webp"
          />
          <div className="text-secondary">
            If you have a large audience and followers. We have special
            conditions for you to customize your referral program!
          </div>
          <div className="text-secondary">
            If you can invite players and their wager amount reaches a billion
            dollars and above, you will get your own customized casino! You can
            set up a casino website with your domain and design style.
          </div>
          <div className="w-full">
            <div className="text-secondary">
              <span>For more details, please contact us</span>
            </div>
            <div className="mt-2 flex w-full items-center justify-between rounded-xl border border-input bg-layer3 px-3 py-2">
              <p className="l">business@bc.game</p>
              <a
                className="contacts-link-item"
                target="_self"
                href="mailto:business@bc.game"
              >
                <button
                  className="button button-second button-m h-10 p-2"
                  type="button"
                >
                  Send Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* dropdown Raffle Rules Data */}
      <div className="bg-[#323738] py-3 lg:px-7 sm:px-2 rounded-2xl mt-6 ">
        <div className=" h-auto rounded-xl mt-2">
          <div className="content">
            <h1 className="text-[25px] font-bold ">
              Frequently Asked Questions
            </h1>
            {QuestionData.map((item, index) => (
              <div key={index} className="cursor-pointer">
                <div
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between gap-2 p-1  text-[16px] my-1 font-semibold py-2"
                >
                  <div className="flex items-center justify-start gap-2 font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-center rounded w-[30px] h-[30px] bg-[#464f50] ">
                    <button className="relative">
                      {questionDropdown === index ? (
                        <FaChevronDown className="text-white" />
                      ) : (
                        <FaChevronRight className="text-white" />
                      )}
                    </button>
                  </div>
                </div>
                {questionDropdown === index && (
                  <div className="pl-3 text-[#9aa3a6] font-medium  ">
                    {item.subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
