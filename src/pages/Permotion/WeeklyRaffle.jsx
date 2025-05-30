import bgRaffle from "../../../public/Weekly_Raffle_Image/All_Image/raffle-bg.webp";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import WinningPrizeDetails from "./WinningPrizeDetails";
import Time from "./Time";
import MyTicket from "./MyTicket";
import Result from "./Result";
import Footer from "../../components/Footer";

const WeeklyRaffle = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [questionDropdown, SetQuestionDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const toggle = (index) => {
    SetQuestionDropdown((prev) => (prev === index ? null : index));
  };

  const RaffleData = [
    {
      title: "How to Enter:",
      subtitle:
        "“Daily login and wager $100” to earn 1 ticket and a maximum up to 7 tickets per week under this condition. For every $1000 USD you wager, you will receive one extra ticket. The number of tickets you will get increases with your wager amount. Every entry will correlate to an entry number. Your entry numbers can be found on the same page. Maximum tickets accumulated per user can be up to 100 tickets per week.",
    },
    {
      title: "Weekly Raffle Draw:",
      subtitle:
        "Weekly raffle draws every Monday at 12:00:00 UTC; the winners will be announced on the same page.",
    },
    {
      title: "Terms and Conditions:",
      subtitle:
        "You must have an account in BC.CO. The weekly raffle includes all types of wager in “Casino” and “Sports”, except the usage of BCL & JB. BC.CO reserves the right to hold void, suspend, cancel, or amend this promotion where it deems necessary to do so. Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking, or exploitation. BC.CO reserves the right to perform additional KYC/AML checks as a condition of receiving the weekly raffle reward.",
    },
    {
      title: "Winning Prize Details:",
      subtitle: <WinningPrizeDetails />,
    },
  ];

  const QuestionData = [
    {
      title: "How to earn the “ticket”? How many tickets can I collect?",
      subtitle:
        "Log in daily and wager $100 to in the same day to earn 1 ticket and maximum 7 tickets per week.By every wager of $1,000, you will earn 1 extra ticket. The more wagers, the more tickets.Maximum number of tickets collected per user can be up to 100 tickets per week.Ticket refresh every 10 mins, please check in 'My Tickets' section.",
    },
    {
      title: "When the winner be announced?",
      subtitle:
        "Winner will be announced every Monday at 12:00:00 UTC. The winner list can be found on the same page.Raffle reward will credit to BC.GAME account within 48 hours.",
    },
    {
      title: "Can I win multiple rewards in a round of weekly raffle?",
      subtitle:
        "Unfortunately, no. One(1) user can win one(1) time per week. Collect more tickets to increase the winning chances.",
    },
    {
      title: "Can I join the next raffle with “Old Ticket”?",
      subtitle:
        "Unfortunately, no. Users have to re-accumulate the new ticket(s) in order to join the new weekly raffle.",
    },
    {
      title: "Can I know more about the time period?",
      subtitle:
        "For “Daily login and wager $100”, users must complete the requirement between 00:00 UTC ~ 23:59 UTC in order to earn the ticket.For “Every wager of $1,000 to earn extra tickets”, there is no time limitation.The weekly raffle starts every Monday at 12:00:00 UTC to Sunday at 11:59:59 UTC. (All tickets accumulated in one week will not count in the next week.)The lucky winner list will be updated on the same page by every Monday at 12:00:00 UTC, and rewards will be distributed within 48 hours.",
    },
  ];

  const [active, SetActive] = useState("MyTicket");
  return (
    <>
      <div className="w-full mt-14">
        <div className="lg:w-[100%] md:w-[80%] sm:w-[90%] sm:max-w-full m-auto my-5 ">
          <div className=" text-white flex items-center gap-32 mb-5">
            <div>
              <strong className="text-[18px] font-bold ">Weekly Raffle</strong>
            </div>
            <div className="flex items-center justify-start gap-10">
              <h3>
                {" "}
                <span className="text-gray-500 font-bold ">Game ID:</span>{" "}
                20250120120000{" "}
              </h3>
              <h2 className="text-[14px] font-semibold text-[#24e47d] sm:hidden md:block ">
                How To Play?
              </h2>
            </div>
          </div>

          <div
            className="rounded-xl mb-5 "
            style={{
              backgroundImage: `url(${bgRaffle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "270px",
              width: "100%",
            }}
          >
            {/* Content inside the image */}
            <div className="lg:w-[400px] md:w-[400px] sm:w-[] sm:px-5  h-auto pt-8 relative">
              <div className="bg-gradient-to-r from-[#22523e] to-[#254236] backdrop-blur-lg  py-3 rounded-xl lg:ml-10 md:ml-10 sm:ml-0 flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center">
                  <strong className="absolute text-[28px] whitespace-nowrap -top-6 text-white ">
                    SUPER LUCKY DRAW
                  </strong>
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ebefa4] to-[#b7923a] text-[28px] font-extrabold ">
                    ₹1,728,351.95
                  </h1>
                </div>
                <div className="">
                  <Time day={1} />
                </div>
                <button className="bg-gradient-to-r from-[#2bed87] to-[#95e872] px-8 py-2 rounded-lg text-[20px] font-bold ">
                  Earn ticket
                </button>
                <p className="whitespace-nowrap px-5 text-[12px] font-semibold text-white">
                  [512632] tickets have been sent this round!
                </p>
              </div>
            </div>
          </div>

          <div className="pb-5 w-full">
            <strong className="text-white ">How to Earn Ticket</strong>
            <div className="lg:w-full lg:flex lg:items-center lg:justify-start md:flex md:items-center md:justify-start gap-3 mt-5 ">
              <div className="lg:w-[50%] bg-[#323738] flex items-center justify-start gap-5 text-white font-semibold rounded-xl ">
                <img
                  src="../../public/ticket-Alr8X3L5.webp"
                  alt=""
                  className="w-[150px]  "
                />
                <div>
                  <p>
                    Log in & Wager <span>₹8,641.64</span> Daily:
                  </p>
                  <p>+ 1 Ticket</p>
                </div>
              </div>
              <div className="lg:w-[50%] lg:mt-0  md:mt-0  sm:mt-5   bg-[#323738] flex items-center justify-start gap-5 text-white font-semibold rounded-xl ">
                <img
                  src="../../public/ticket-2.webp"
                  alt=""
                  className="w-[150px]  "
                />
                <div>
                  <p>
                    Every wager <span>₹86,416.47</span> :
                  </p>
                  <p>+ 1 Ticket</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Function */}
          <div className="w-[220px] bg-[#323738] flex items-center justify-around gap-3 py-2 rounded-lg text-[#aeb0a8] text-[16px] ">
            <div
              onClick={() => SetActive("MyTicket")}
              className={`${
                active === "MyTicket"
                  ? "bg-[#3a4142] text-white font-bold px-5 py-2 rounded-lg"
                  : "hover:text-white "
              }`}
            >
              <button className="">MyTicket</button>
            </div>
            <div
              onClick={() => SetActive("Result")}
              className={`${
                active === "Result"
                  ? "bg-[#3a4142] text-white font-bold px-5 py-2 rounded-lg"
                  : "hover:text-white"
              }`}
            >
              <button className="">Result</button>
            </div>
          </div>
          <div>
            {active === "MyTicket" && <MyTicket />}
            {active === "Result" && <Result />}
          </div>

          {/* dropdown Raffle Rules Data */}
          <div className="font-extrabold text-white mb-5">
            Raffle Rules
            <div className="bg-[#323738] py-3 lg:px-7 sm:px-2 rounded-2xl mt-6 ">
              <div className=" h-auto rounded-xl mt-2">
                <div className="content">
                  {RaffleData.map((item, index) => (
                    <div key={index}>
                      <div
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-1 font-semibold py-2"
                      >
                        <div className="flex items-center justify-start gap-2 font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="flex items-center justify-center rounded w-[30px] h-[30px] bg-[#464f50] ">
                          <button className="relative">
                            {openDropdown === index ? (
                              <FaChevronDown className="text-white" />
                            ) : (
                              <FaChevronRight className="text-white" />
                            )}
                          </button>
                        </div>
                      </div>
                      {openDropdown === index && (
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
          {/* dropdown Raffle Rules Data */}
          <div className="font-extrabold text-white">
            Frequently Asked Questions
            <div className="bg-[#323738] py-3 lg:px-7 sm:px-2 rounded-2xl mt-6 ">
              <div className=" h-auto rounded-xl mt-2">
                <div className="content">
                  {QuestionData.map((item, index) => (
                    <div key={index}>
                      <div
                        onClick={() => toggle(index)}
                        className="flex items-center justify-between gap-2 p-1 px-4 text-[16px] my-1 font-semibold py-2"
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
          <div className="mt-10">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyRaffle;
