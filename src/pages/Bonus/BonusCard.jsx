import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const BonusCard = () => {
  const [informationIcon, setInformationIcon] = useState(null);

  const cardData = [
    {
      heading: "Lucky Spin",
      button: "Claim Spin",
      dailyProgress: 1,
      dailyTotal: 5,
      weeklyProgress: 2,
      weeklyTotal: 7,
      rules: [
        "You will receive 1 free spin every day once you reach a specific wager amount.",
        "Starting from VIP level 8, you will receive one free spin each time you level up, and there is no limit to the number of spins you can earn.",
      ],
    },
    {
      heading: "Daily Bonus",
      button: "Claim Bonus",
      dailyProgress: 3,
      dailyTotal: 3,
      weeklyProgress: 1,
      weeklyTotal: 5,
      rules: [
        "Complete daily tasks to earn bonus rewards.",
        "Bonuses are reset every 24 hours.",
      ],
    },
    {
      heading: "Weekly Challenge",
      button: "Claim Reward",
      dailyProgress: 2,
      dailyTotal: 5,
      weeklyProgress: 4,
      weeklyTotal: 10,
      rules: [
        "Complete weekly challenges for exclusive rewards.",
        "Each week offers new challenges and bonuses.",
      ],
    },
    {
      heading: "Daily Bonus",
      button: "Claim Bonus",
      dailyProgress: 3,
      dailyTotal: 3,
      weeklyProgress: 1,
      weeklyTotal: 5,
      rules: [
        "Complete daily tasks to earn bonus rewards.",
        "Bonuses are reset every 24 hours.",
      ],
    },
    {
      heading: "Weekly Challenge",
      button: "Claim Reward",
      dailyProgress: 2,
      dailyTotal: 5,
      weeklyProgress: 4,
      weeklyTotal: 10,
      rules: [
        "Complete weekly challenges for exclusive rewards.",
        "Each week offers new challenges and bonuses.",
      ],
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2  gap-4 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative bg-[#323738] mt-14 lg:w-[290px] min-h-[18.5rem] flex flex-col gap-x-4 overflow-hidden rounded-xl p-3 leading-4"
        >
          {/* <div className="absolute left-0 right-0 top-0 -z-10 h-full sm:-top-8 bg-gradient-to-b from-purple-600/50 to-transparent"></div> */}

          {/* Info Button */}
          <div
            onClick={() => setInformationIcon(index)}
            className="flex items-end justify-end text-[20px] text-white cursor-pointer"
          >
            <GrCircleInformation />
          </div>

          {/* Info Modal */}
          {informationIcon === index && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
              <div
                className="fixed w-[300px] h-[200px] bg-[#232626] rounded-xl shadow-lg z-50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full h-[50px] bg-[#323738] rounded-t-xl flex items-center justify-center">
                  <h1 className="text-[#ffffff] text-[16px] font-medium">
                    Bonus Rules
                  </h1>
                  <button
                    className="absolute top-2 right-2 w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg"
                    onClick={() => setInformationIcon(null)}
                  >
                    <IoMdClose className="text-[#a4aeb1]" />
                  </button>
                </div>

                {/* Rules List */}
                <div className="p-5 text-white space-y-3">
                  {card.rules.map((rule, ruleIndex) => (
                    <p key={ruleIndex} className="text-sm">
                      {rule}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Bonus Image */}
          <div className="flex items-center justify-center">
            <img
              className="w-24 sm:h-[7.5rem] sm:w-auto"
              src="/Bonus-img/bonus-quests.webp"
              alt="Quest Icon"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg font-extrabold text-white sm:flex sm:justify-center">
            {card.heading}
          </h2>

          {/* Quest Progress */}
          <div className="mt-4 flex flex-grow flex-col justify-between gap-y-1 rounded-lg bg-gray-800 p-2 brightness-95">
            <div>
              {/* Daily Quest Progress */}
              <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-gray-300 sm:justify-between">
                <span>Daily Quests:</span>
                <span>
                  <span className="font-extrabold text-white">
                    {card.dailyProgress}
                  </span>{" "}
                  / {card.dailyTotal}
                </span>
              </div>

              {/* Weekly Quest Progress */}
              <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-gray-300 sm:justify-between">
                <span>Weekly Quests:</span>
                <span>
                  <span className="font-extrabold text-white">
                    {card.weeklyProgress}
                  </span>{" "}
                  / {card.weeklyTotal}
                </span>
              </div>
            </div>

            {/* Claim Button */}
            <div className="flex flex-grow flex-col justify-end gap-y-2">
              <div className="w-full">
                <button className="w-full text-base font-extrabold bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BonusCard;
