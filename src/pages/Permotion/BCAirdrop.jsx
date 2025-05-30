import BcAirdropsInfo from "./BcAirdropsInfo";
import boxbg from "../../../public/promotion/box-bg-c4645376.png";
import { useState } from "react";
import Footer from "../../components/Footer";

const BCAirdrop = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the $BC airdrop event?",
      answer:
        "The $BC airdrop event is a promotional campaign where $BC tokens are distributed for free to eligible participants.",
    },
    {
      question: "When does the airdrop event take place?",
      answer: "The airdrop event is scheduled to take place on [insert date].",
    },
    {
      question: "How can I participate in the airdrop?",
      answer:
        "You can participate by following the steps outlined on the official airdrop page and completing necessary tasks.",
    },
    {
      question: "Who is eligible for the airdrop?",
      answer:
        "Participants who meet the eligibility criteria specified in the airdrop guidelines are eligible to claim the tokens.",
    },
    {
      question: "How many $BC tokens are available?",
      answer:
        "A total of [insert number] $BC tokens will be distributed during the airdrop event.",
    },
    {
      question: "How is the airdrop allocation determined?",
      answer:
        "The allocation is based on the number of tasks completed, referral activity, and other factors specified in the guidelines.",
    },
    {
      question: "Are there any restrictions on claiming?",
      answer:
        "Yes, there are restrictions based on region, activity, and other eligibility criteria.",
    },
    {
      question: "What if I have technical issues while claiming?",
      answer:
        "If you encounter any issues, please contact support or refer to the troubleshooting guide.",
    },
  ];

  return (
    <>
      <div className="bg-black w-full mt-20 overflow-hidden ">
        {/* Hero section */}
        <div className="relative text-center max-sm:h-[37rem] max-sm:pt-0">
          <img
            className="absolute left-3 top-[650px] h-[800px]"
            alt=""
            src="/public/promotion/text-d791edb3.webp"
          />
          <img
            className="absolute right-5 top-100 h-[800px]"
            alt=""
            src="/public/promotion/text-d791edb3 (1).webp"
          />
          <img
            className="absolute left-0 -top-0 z-80"
            alt=""
            src="/public/promotion/bg-left-g-43a1e5f4.webp"
          />
          <img
            className="absolute right-0 -top-16 z-80"
            alt=""
            src="/public/promotion/bg-right-2fb9b71a.png"
          />
          <div className="relative z-100 max-sm:block sm:mx-auto sm:flex sm:h-[826px] sm:max-w-[1760px] sm:px-10">
            <div className="w-full absolute top-0 left-0 text-primary mx-auto h-[748px] items-start justify-end max-sm:block max-sm:h-[37rem] sm:left-1/2 sm:flex sm:h-[826px] sm:w-full sm:max-w-[1440px] sm:-translate-x-1/2 sm:px-10 sm:text-left">
              <div className="relative z-20  max-sm:mt-5 max-sm:max-w-96 max-sm:px-4 max-sm:pb-0 max-sm:pl-8 sm:absolute sm:left-[3%] sm:top-1/2 sm:-mt-15 sm:h-auto sm:max-w-[715px] sm:flex-shrink-0 sm:flex-grow-0 sm:basis-[60%] sm:-translate-y-1/2 sm:p-5 2xl:left-[1%]">
                <div className="max-sm:mt-8">
                  <div className="text-base font-semibold text-left text-second sm:text-left">
                    Event End time
                  </div>
                  <div className="relative max-w-80">
                    <div className="absolute top-1/2 w-full max-w-100 -translate-y-1/2 max-sm:left-0 max-sm:w-56 sm:left-1/2 sm:-translate-x-1/2">
                      <div className="relative top-1 max-sm:-left-1 sm:top-2">
                        <div className="grid rounded-lg grid-cols-4 mx-auto w-[80%] gap-2 sm:w-[85%]">
                          <div className="p-2 rounded-lg relative">
                            <div className="font-extrabold text-xl sm:text-5xl">
                              0
                            </div>
                            <div className="font-semibold text-center max-sm:text-xs">
                              DAYS
                            </div>
                            <div className="absolute text-secondary font-extrabold -right-1.5 top-[35%] -translate-y-1/2 text-xs sm:text-5xl">
                              :
                            </div>
                          </div>
                          <div className="p-2 rounded-lg relative ">
                            <div className="font-extrabold text-xl sm:text-5xl">
                              0
                            </div>
                            <div className="font-semibold text-center max-sm:text-xs">
                              HR
                            </div>
                            <div className="absolute text-secondary font-extrabold -right-1.5 top-[35%] -translate-y-1/2 text-xs sm:text-5xl">
                              :
                            </div>
                          </div>
                          <div className="p-2 rounded-lg relative ">
                            <div className="font-extrabold text-xl sm:text-5xl">
                              0
                            </div>
                            <div className="font-semibold text-center max-sm:text-xs">
                              MIN
                            </div>
                            <div className="absolute text-secondary font-extrabold -right-1.5 top-[35%] -translate-y-1/2 text-xs sm:text-5xl">
                              :
                            </div>
                          </div>
                          <div className="p-2 rounded-lg ">
                            <div className="font-extrabold text-xl sm:text-5xl">
                              0
                            </div>
                            <div className="font-semibold text-center max-sm:text-xs">
                              SEC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[700px] sm:w-100"
                      alt=""
                      src="/public/promotion/time-84fee85a.webp"
                    />
                  </div>
                </div>
                <div className="relative text-5xl font-extrabold text-primary my-2.5 text-left sm:my-5 sm:text-8xl">
                  <div className="relative inline-block sm:max-w-[700px]">
                    BC GAME
                  </div>
                </div>
                <div className="font-extrabold text-5xl my-2.5 bg-[linear-gradient(90deg,#9FE871,#24EE89)] bg-clip-text text-left text-transparent lg:my-5 lg:text-8xl">
                  <p>AIRDROP</p>
                </div>
                <div className="text-xs">
                  <span></span>
                </div>
                <div className="flex mt-10 w-full left-0 max-sm:absolute max-sm:ml-8 max-sm:mt-1 max-sm:flex-col">
                  <button
                    className="bg-gradient-to-r from-green-dark to-yellow-dark text-sm mt-2 font-extrabold mr-4 h-12 w-36 rounded-[40px] text-alw_dark max-sm:h-10 sm:w-48"
                    type="button"
                  >
                    About $BC
                  </button>
                  <button
                    className="text-sm mt-2  text-primary font-extrabold border border-[#45ec83] border-brand h-12 w-36 rounded-[40px] bg-transparent hover:bg-gradient-to-r from-green-dark to-yellow-dark hover:text-alw_dark max-sm:h-10 sm:w-48"
                    type="button"
                  >
                    Tokenomics
                  </button>
                </div>
              </div>
              <div className="-mt-8 right-[150px] max-sm:absolute max-sm:left-1/2 max-sm:top-[10%] max-sm:w-full max-sm:-translate-x-1/2 sm:-mr-52 sm:-mt-8 lg:relative">
                <img
                  className="-mt-100 max-sm:relative max-sm:left-44 max-sm:-mt-24 max-sm:h-[616px] max-sm:max-w-[600px] sm:h-[850px]  "
                  src="/public/promotion/airdrop-af4fa200.webp"
                />
              </div>
            </div>
          </div>
        </div>

        {/* when $ bc */}
        <div>
          <div className="relative z-100 max-sm:px-7">
            <div className="z-100 mx-auto mb-0 max-w-[1440px] pb-10 pt-2.5 max-sm:mt-12 max-sm:px-0 max-sm:py-4 lg:px-12 2xl:p-7">
              <div
                className="rounded-sm flex center mx-auto h-72 max-h-80 justify-around max-sm:flex-col sm:mt-0 sm:h-96 sm:w-[1300px]"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${boxbg})`,
                  width: "80%",
                }}
              >
                <div>
                  <img
                    className="relative max-sm:-mt-18 max-sm:w-64 sm:-top-10 w-96 mt-10 "
                    alt="Gift Box"
                    src="../../../public/promotion/gift-ea0b144a.webp"
                  />
                </div>
                <div className="max-sm:-mt-12 text-center mt-10">
                  <div className="font-extrabold text-4xl sm:text-7xl">
                    <span className="text-primary mr-2">WEN</span>
                    <span className="bg-gradient-to-r from-[#9FE871] to-[#24EE89] bg-clip-text text-transparent">
                      $BC?
                    </span>
                  </div>
                  <div className="text-secondary sm:text-2xl">
                    Ready to check your airdrop eligibility?
                  </div>
                  <div>
                    <button
                      className="button button-second button-m text-primary_brand h-10 font-extrabold rounded-[40px] px-5 max-sm:mx-auto max-sm:mt-5 sm:mt-8 sm:h-16 sm:text-2xl"
                      type="button"
                      disabled
                    >
                      Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="relative max-sm:-mt-18 max-sm:w-64 sm:-top-10  "
              alt="Gift Box"
              src="../../../public/promotion/line-6e358dae.png"
            />
          </div>

          <div className="relative max-w-[1440px] sm:mx-auto">
            <div className="font-extrabold text-primary text-4xl sm:text-7xl text-left">
              <div>AIRDROP</div>
              <div className="bg-gradient-to-r from-[#9FE871] to-[#24EE89] bg-clip-text text-transparent">
                EXPLAINED
              </div>
              <div className="text-secondary text-base font-semibold max-w-100 max-sm:mb-15 max-sm:max-w-72 sm:mt-5">
                FOR ADDITIONAL INFORMATION, PLEASE REFER TO THE
                <br />
                <span className=""> TERMS OF SERVICE </span>
                AND&nbsp;
                <span className="">THE AIRDROP TERMS.</span>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className=" ">
                <BcAirdropsInfo
                  className=""
                  title="Eligibility Criteria"
                  content="As a valued member of our community, you could qualify for the exciting $BC airdrop! We prioritize loyal players like you based on your engagement duration with BC.GAME, total wagering volume, VIP level, and your active participation throughout our platform’s journey. Don’t miss out on this opportunity to be rewarded for your loyalty!"
                  bgImage="/public/promotion/g-box-0450ba66.png"
                />
                <BcAirdropsInfo
                  title="How to Check Your Eligibility"
                  content="The eligibility checker helps users find out if they're eligible for the $BC airdrop. With its intuitive interface, players can log in to their accounts and view their rewards. Once Claim Button is available, users can easily claim their airdrop rewards using the same interface. If you believe your account activity qualifies you for this airdrop, check your eligibility now!"
                  bgImage="/public/promotion/s-box-e78860a4.png"
                />
                <BcAirdropsInfo
                  title="Important Notice"
                  content="All active BC.CO players are eligible to participate with the exception of high-risk accounts or accounts that have their withdrawals disabled. Remember, claims can only be made while the event is live. Any submissions made after the event concludes will not be accepted. Make sure to claim your rewards on time!"
                  bgImage="/public/promotion/g-box-0450ba66.png"
                />
              </div>
              <div>
                <img
                  className="absolute w-72  "
                  alt="Gift Box"
                  src="/public/promotion/bc-icon-e1452158.webp"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="relative overflow-hidden z-100 mx-auto max-w-[1440px] pb-20 max-sm:py-4 sm:px-12">
          <div className="font-extrabold text-primary text-center text-4xl max-sm:mb-4 max-sm:mt-0 sm:text-7xl lg:mb-9">
            FAQ
          </div>
          <div className="max-sm:mx-auto max-sm:w-4/5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden h-full mb-8 ${
                  activeIndex === index
                    ? "border-4 border-green-500 "
                    : ""
                }`}
                style={{
                  background:
                    activeIndex === index
                      ? "linear-gradient(-45deg, transparent 2.5rem, rgba(0, 0, 0, 0) 0px)"
                      : "linear-gradient(-45deg, transparent 2.5rem, rgba(255, 255, 255, 0.5) 0px)",
                }}
              >
                <div className="p-[1px]">
                  <div
                    onClick={() => toggleAnswer(index)}
                    className={`relative cursor-pointer rounded-md items-center justify-between py-4 font-semibold p-6 sm:px-14 sm:py-10 ${
                      activeIndex === index ? "bg-green-200" : ""
                    }`}
                    style={{
                      backgroundImage:
                        "linear-gradient(-45deg, transparent 2.5rem, rgb(0, 0, 0) 0px)",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <img
                      className="absolute right-0 bottom-0 w-7"
                      alt=""
                      src="/public/promotion/download (3).png"
                    />
                    <div>
                      <span className="font-bold leading-5 text-2xl w-full sm:text-3xl">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="p-6 sm:px-14 sm:py-10">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative overflow-hidden bg-black">
          <img
            className="w-full h-[250px] "
            alt="Background Mask"
            src="/public/promotion/b-mask-box-95b147b7.png"
          />
          <img
            alt="Bottom Background"
            src="/public/promotion/bg-bottom-c724a16b.webp"
            className="w-full absolute left-1/2 -translate-x-1/2 mx-auto max-sm:!-bottom-3 sm:-bottom-40 sm:w-[1921px]"
          />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BCAirdrop;
