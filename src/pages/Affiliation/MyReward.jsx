import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";

const MyReward = () => {
  const [Commission, setCommission] = useState("");
  const [ReffleReward, SetReffleReward] = useState("");
  const referralRewards = [
    {
      title: "Available Referral Rewards",
      description: "The rewards you can withdraw to your wallet.",
    },
    {
      title: "Total Received",
      description:
        "All unlocked rewards received so far, including withdrawn and available for withdrawal.",
    },
    {
      title: "Locked Rewards",
      description:
        "The rewards that you will receive in the future when your friends’ VIP level increases.",
    },
  ];
  const commission = [
    {
      title: "Available Commission Rewards",
      decription: "The rewards you can withdraw to your wallet.",
    },
    {
      title: "Total received",
      decription:
        "The rewards you have received up to now. It includes the rewards already withdrawn and the available commission rewards.",
    },
  ];

  // const [myRewards, setMyRewards] = useState("Commission");
  return (
    <div>
      <section className="mt-5 bg-[#323738] mb-4 flex flex-col gap-3 rounded-xl bg-layer4 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        {/* Commission Rewards */}
        <div className="flex flex-col border-b border-third pb-3 sm:flex-1 sm:border-none sm:pb-0">
          <div className="flex items-center justify-between">
            <span className="text-secondary">Available Commission Rewards</span>
            <div
              onClick={() => setCommission((prev) => !prev)}
              className="icon w-5 text-white"
            >
              <BsFillInfoSquareFill />
            </div>
            {Commission && (
              <div>
                <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
                <div
                  className="sm:w-[350px] lg:w-[350px] md:w-[500px] h-[300px] bg-[#232626] z-50 fixed rounded-3xl"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-full h-[70px]  rounded-t-3xl flex items-center justify-center ">
                    <h1 className="text-[#ffffff] text-[16px] font-medium ">
                      Commission Rewards
                    </h1>
                    <button
                      className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                      onClick={() => setCommission(false)}
                    >
                      <IoMdClose className="text-[#a4aeb1]" />
                    </button>
                  </div>
                  <div>
                    <div>
                      {commission.map((item, index) => (
                        <div key={index} className="px-3">
                          <div className="text-white font-bold">
                            {" "}
                            {item.title}{" "}
                          </div>
                          <div className="text-gray-400">
                            {" "}
                            {item.decription}{" "}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="mb-3 text-2xl font-extrabold text-brand text-[#28e989]">
            $0.00
          </span>
          <div>
            <span className="mr-1 text-nowrap">Total Received</span>
            <span className=" ">$0.00</span>
          </div>
        </div>

        {/* Referral Rewards */}
        <div className="flex flex-col md:flex-1">
          <div className="flex items-center justify-between">
            <span className="text-secondary">Available Referral Rewards</span>
            <div
              onClick={() => SetReffleReward((prev) => !prev)}
              className="icon w-5 text-white"
            >
              <BsFillInfoSquareFill />
            </div>
            {ReffleReward && (
              <div>
                <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
                <div
                  className="sm:w-[350px] lg:w-[350px] md:w-[500px] h-[300px] bg-[#232626] z-50 fixed rounded-3xl"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-full h-[70px]  rounded-t-3xl flex items-center justify-center ">
                    <h1 className="text-[#ffffff] text-[16px] font-medium ">
                      Reffle Rewards
                    </h1>
                    <button
                      className="absolute top-2 right-2 text-white w-[30px] h-[30px] bg-[#464f50] flex items-center justify-center rounded-lg  "
                      onClick={() => SetReffleReward(false)}
                    >
                      <IoMdClose className="text-[#a4aeb1]" />
                    </button>
                  </div>
                  <div>
                    <div>
                      {referralRewards.map((item, index) => (
                        <div key={index} className="px-3">
                          <div className="text-white font-bold">
                            {" "}
                            {item.title}{" "}
                          </div>
                          <div className="text-gray-400">
                            {" "}
                            {item.description}{" "}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="mb-3 text-2xl font-extrabold text-brand text-[#28e989]">
            $0.00
          </span>
          <div className="flex items-center gap-3">
            <div>
              <span className="mr-1 text-nowrap text-secondary">
                Total Received
              </span>
              <span className="sub-num">$0.00</span>
            </div>
            <div>
              <span className="mr-1 text-nowrap text-secondary">
                Locked Rewards
              </span>
              <span className="sub-num">$0.00</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 border-third sm:h-20 sm:border-l sm:pl-4 lg:pl-10 ">
          <button
            disabled
            className="button button-second button-m h-10 flex-1 sm:px-8 bg-[#353b3c] rounded-xl "
            type="button"
          >
            Swap
          </button>
          <button
            disabled
            className="button button-brand button-m h-10 flex-1 sm:flex-auto sm:px-8 bg-gradient-to-r from-green-dark to-yellow-dark rounded-xl text-black font-bold"
            type="button"
          >
            Withdraw to Wallet
          </button>
        </div>
      </section>

      <section className=" rounded-xl bg-[#323738] pt-3 ">
        <div className=" flex items-center justify-between px-20">
          <div className="">
            <button>Commission</button>
            <button className="ml-20">Referral</button>
          </div>
          <div className="">
            <button className="mr-20">Rules</button>
            <button>History</button>
          </div>
        </div>
        <div>
          <hr className="border-1 mt-3 border-gray-500" />
        </div>

        <div className="rounded-lg p-3">
          <div className="py-10 text-center flex flex-col items-center">
            <img
              className="w-48 h-48"
              src="/Bonus-images/empty.webp"
              alt="No rewards"
            />
            <div className="leading-5 mt-4">
              No rewards yet, invite friends to join you now!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReward;
