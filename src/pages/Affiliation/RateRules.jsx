import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const RateRules = () => {
  const [Commission, setCommission] = useState("");
  const commissionRules = [
    "Only one commission can be paid to each user, IP address, electronic device, home, phone number, billing method, email address, and shared computer and IP address in public environments (e.g., universities, schools, libraries, and office spaces).",
    "Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed.",
    "We support the majority of currencies on the market.",
    "Commissions can be withdrawn into our internal BCgame wallet at any time.",
    "View your commission extraction in the dashboard and view the balance in the wallet.",
    "The system calculates the commission every 24 hours.",
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row mt-5">
        <section className="relative rounded-xl bg-layer4 px-4 py-3 md:w-3/5  bg-[#323738]">
          <h2 className="mb-4 border-b border-input pb-2 text-base font-extrabold text-secondary">
            Commission Reward Rate
          </h2>
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-extrabold">Casino</h2>
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex-1">
                <p className="mb-2 text-secondary">The Original Games</p>
                <div className="center gap-1 rounded-lg border border-input bg-[#3a4142] p-3 text-xs">
                  <span className="text-secondary">Wager</span>
                  <span className="text-secondary">× 1% ×</span>
                  <span>Commission Rate</span>
                  <span className="text-secondary">×</span>
                  <span>28%</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-2 text-secondary">
                  3rd Party Slots, Live Casino
                </p>
                <div className="center gap-1 rounded-lg border border-input  bg-[#3a4142] p-3 text-xs">
                  <span className="text-secondary">Wager</span>
                  <span className="text-secondary">× 1% ×</span>
                  <span className="w">Commission Rate</span>
                  <span className="text-secondary">×</span>
                  <span className="w">60%</span>
                </div>
              </div>
            </div>
            <div className="data">
              <p className="text-base font-extrabold">All Sports</p>
              <div className="center gap-1 rounded-lg border border-input  bg-[#3a4142] p-3 text-xs">
                <span className="text-secondary">Wager</span>
                <span className="text-secondary">× 1% ×</span>
                <span>Commission Rate</span>
                <span className="text-secondary">×</span>
                <span className="w">100%</span>
              </div>
            </div>
          </div>
          <div className="center mt-4 w-full flex-col text-secondary  ">
            <button className="button button-second button-m right-4 top-2 h-8 sm:absolute bg-[#3a4142] px-5 py-1 rounded-lg">
              <span
                onClick={() => setCommission((prev) => !prev)}
                className="font-extrabold flex items-center gap-2"
              >
                View Rules <FaChevronDown />
              </span>
              {Commission && (
                <div>
                  <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 z-30 "></div>
                  <div
                    className="sm:w-[350px] lg:w-[350px] md:w-[500px] h-[500px] bg-[#232626] z-50 fixed rounded-3xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-full h-[70px]  rounded-t-3xl flex items-center justify-center ">
                      <h1 className="text-[#ffffff] text-[16px] font-medium ">
                        Rules
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
                        {commissionRules.map((item, index) => (
                          <div key={index} className="px-3">
                            <div> {item} </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </section>

        <section className="relative rounded-xl bg-layer4 px-4 py-3 md:w-2/5  bg-[#323738]">
          <div className="mb-4 flex items-center justify-between border-b border-input pb-2">
            <div className="center gap-2 text-base font-extrabold text-secondary">
              <svg
                width="12"
                height="16"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.4369 0H13.5663C14.25 0.0639844 14.7785 0.369492 15.1519 0.916523C15.2927 1.12254 15.3916 1.35117 15.4486 1.60242C15.4837 1.75805 15.5012 1.96617 15.501 2.2268C15.4972 6.71625 15.4973 11.2311 15.5013 15.7714C15.5015 16.0253 15.4843 16.2302 15.4496 16.3863C15.2485 17.287 14.4849 17.9251 13.5603 18H2.43444C1.9017 17.9536 1.45615 17.7495 1.0978 17.3876C0.699358 16.9854 0.500256 16.4825 0.500491 15.879C0.501194 11.3474 0.500725 6.81293 0.499084 2.27566C0.499084 1.98059 0.516428 1.75605 0.551116 1.60207C0.608069 1.35059 0.706975 1.12195 0.847835 0.916172C1.2226 0.368906 1.75229 0.0635156 2.4369 0Z" />
              </svg>
              <p>Commission Calculator</p>
            </div>
            <div className="flex gap-2">
              <img className="h-4 w-4" src="/coin/USDT.black.png" alt="USDT" />
              <span className="w">USDT</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex w-10 flex-auto flex-col gap-1">
                <span className="text-secondary">Wager (USDT)</span>
                <div className="input ">
                  <input inputMode="decimal" className="bg-[#292d2e] " />
                </div>
              </div>
              <span className="mt-5 flex-none text-nowrap text-secondary">
                × 1% ×
              </span>
              <div className="flex w-10 flex-auto flex-col gap-1">
                <span className="text-secondary">Commission Rate</span>
                <div className="input bg-layer3">
                  <input inputMode="decimal" className="bg-[#292d2e] " />
                </div>
              </div>
            </div>
            <div className="w-full">
              <span className="text-secondary">Game</span>
              <button
                className="button button-m select bg-layer4 w-full !bg-layer3"
                type="button"
              >
                Original Games (28%)
                <div className="p-1 w-6 h-6 ml-auto bg-layerx center rounded-md"></div>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">=</span>
              <span className="text-xl font-extrabold">0.70 USDT</span>
            </div>
          </div>
        </section>
      </div>

      <section className="relative rounded-xl bg-layer4 px-4 py-3  bg-[#323738] mt-5">
        <h2 className="mb-4 border-b border-input pb-2 text-base font-extrabold text-secondary">
          How to Get your Referral Reward
        </h2>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-1 gap-4 rounded-lg bg-layer5 p-4 bg-[#3a4142] ">
            <div className="text-5xl text-brand text-[#24ee89] ">1</div>
            <div className="text">
              <span className="mr-1 text-xl font-extrabold text-brand text-[#24ee89]">
                Share
              </span>
              <span className="text-xl font-extrabold">to friends</span>
              <br />
              <p className="text-secondary">
                Share your referral link or code to your friends
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-lg bg-layer5 p-4 bg-[#3a4142]">
            <div className="text-5xl text-brand text-[#24ee89]">2</div>
            <div className="text">
              <span className="mr-1 text-xl font-extrabold">Get</span>
              <span className="text-xl font-extrabold text-brand text-[#24ee89]">$1000</span>
              <br />
              <p className="text-secondary">
                Your awards will be locked for now
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-lg bg-layer5 p-4 bg-[#3a4142]">
            <div className="text-5xl text-brand text-[#24ee89]">3</div>
            <div className="text">
              <span className="mr-1 text-xl font-extrabold">
                Level Up &amp;
              </span>
              <span className="text-xl font-extrabold text-brand text-[#24ee89]">Receive</span>
              <br />
              <p className="text-secondary">
                Your friend’s VIP level will unlock your awards (see rules
                below)
              </p>
            </div>
          </div>
        </div>
        <table className="mt-4 w-full rounded-lg bg-layer3 text-center">
          <thead className="text-secondary">
            <tr>
              <th className="px-3 py-2 text-left">Friend’s Level</th>
              <th className="px-3 py-2">Total Wager</th>
              <th className="px-3 py-2 text-right">Unlock Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center justify-start gap-1 p-3">
                <img
                  className="h-5 w-4"
                  src="../../../public/AffiliateImage/download (2).png"
                  alt="Level Icon"
                />
                <td className="px-3 py-2">vip4</td>
              </td>
              
              <td className="px-3 py-2">Level 1</td>
              <td className="px-3 py-2 text-[#24ee89]">$100</td>
            </tr>
            <tr>
              <td className="flex items-center justify-start gap-1 p-3">
                <img
                  className="h-5 w-4"
                  src="../../../public/AffiliateImage/download (2).png"
                  alt="Level Icon"
                />
                <td className="px-3 py-2">vip8</td>
              </td>
              <td className="px-3 py-2">Level 2</td>
              <td className="px-3 py-2 text-[#24ee89] ">$500</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RateRules;
