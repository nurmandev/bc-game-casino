import { useState } from "react";
import Footer from "../../../components/Footer";
import Graphchart from "./Graphchart";

const HighLowSpreed = () => {
  const [activeTab, setActiveTab] = useState("Public Bets");
  const tabs = ["Active Bets", "Closed Bets", "Public Bets", "Leader Board"];
  return (
    <div className="mt-20">
      {/* top */}
      <div className="flex gap-3">
        <div className="flex flex-col gap-1.5 flex-1 relative detrade-card overflow-hidden">
          <div className="">
            <Graphchart />
          </div>
        </div>

        {/* Right side content */}
        <div className="bg-[#323738] w-[420px] lg:w-[458px] detrade-card bg-layer4 shrink-0 space-y-3 sticky sm:relative sm:bottom-0 bottom-0 p-4 rounded-lg">
          <div>
            <label
              className="inline-flex mb-2 leading-5 text-secondary text-14 font-500"
              htmlFor=":r3o:"
            >
              Wager
            </label>
            <div className="space-y-3">
              <div className="detrade-input relative flex flex-nowrap items-center rounded-2 px-3 border shadow-sm font-700 transition-all border-input h-12 text-16 py-[3px] pr-[3px] min-w-20 text-primary bg-layer8">
                <label
                  htmlFor=":r3o:"
                  className="shrink-0 flex-center size-5 mr-2 rounded-full overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://currency-trade.s3.ap-east-1.amazonaws.com/icons/USDT@3x.png")',
                    backgroundSize: "contain",
                  }}
                ></label>
                <input
                  className="h-full flex-1 w-0 basis-0 placeholder:text-quarterary placeholder:font-500 bg-transparent outline-none caret-brand"
                  autoComplete="off"
                  type="text"
                  inputMode="decimal"
                  id=":r3o:"
                  value="1.00003"
                />
                <div className="h-full space-x-1">
                  <button className="detrade-button inline-flex items-center justify-center max-w-full rounded-2 shadow active:translate-y-px outline-none transition-all whitespace-nowrap font-700 capitalize disabled:pointer-events-none disabled:opacity-50 hoverable text-secondary hover:text-primary text-12 sm:h-10 sm:px-3 sm:text-14 h-full px-3 bg-layer4">
                    1/2
                  </button>
                  <button className="detrade-button inline-flex items-center justify-center max-w-full rounded-2 shadow active:translate-y-px outline-none transition-all whitespace-nowrap font-700 capitalize disabled:pointer-events-none disabled:opacity-50 hoverable text-secondary hover:text-primary text-12 sm:h-10 sm:px-3 sm:text-14 h-full px-3 bg-layer4">
                    x2
                  </button>
                </div>
              </div>
              <div>
                <label className="inline-flex mb-2 leading-5 text-secondary text-14 font-500">
                  Time
                </label>
                <div dir="ltr" data-orientation="horizontal">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="relative text-12 sm:text-14 leading-4 text-secondary font-500 min-h-12 gap-1 p-1 rounded-2 bg-layer8 flex"
                    tabIndex="0"
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r3q:-content-0"
                      data-state="active"
                      id="radix-:r3q:-trigger-0"
                      className="relative outline-none transition-colors duration-300 px-3 py-3 z-10 text-primary font-700 flex-1"
                      tabIndex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <div className="absolute inset-0 z-0 rounded-1.5 bg-tab_selected"></div>
                      <div className="relative z-10">
                        <div className="flex flex-center gap-2">
                          <div className="text-14">15s</div>
                          <div className="text-12 text-secondary flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="13"
                              viewBox="0 0 12 13"
                              fill="none"
                            >
                              <path
                                d="M5.97344 8.98594L5.26644 8.27894L3.99844 9.54694V2.96094H2.99844V9.54694L1.73094 8.27894L1.02344 8.98594L3.49844 11.4609L5.97344 8.98594ZM10.9734 4.93594L8.49844 2.46094L6.02344 4.93594L6.73044 5.64294L7.99894 4.37494L7.99844 10.9609H8.99844V4.37494L10.2664 5.64294L10.9734 4.93594Z"
                                fill="#B3BEC1"
                              ></path>
                            </svg>
                            <span>2.7</span>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r3q:-content-1"
                      data-state="inactive"
                      id="radix-:r3q:-trigger-1"
                      className="relative outline-none transition-colors duration-300 px-3 py-3 z-20 flex-1"
                      tabIndex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <div className="relative z-10">
                        <div className="flex flex-center gap-2">
                          <div className="text-14">30s</div>
                          <div className="text-12 text-secondary flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="13"
                              viewBox="0 0 12 13"
                              fill="none"
                            >
                              <path
                                d="M5.97344 8.98594L5.26644 8.27894L3.99844 9.54694V2.96094H2.99844V9.54694L1.73094 8.27894L1.02344 8.98594L3.49844 11.4609L5.97344 8.98594ZM10.9734 4.93594L8.49844 2.46094L6.02344 4.93594L6.73044 5.64294L7.99894 4.37494L7.99844 10.9609H8.99844V4.37494L10.2664 5.64294L10.9734 4.93594Z"
                                fill="#B3BEC1"
                              ></path>
                            </svg>
                            <span>7</span>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r3q:-content-2"
                      data-state="inactive"
                      id="radix-:r3q:-trigger-2"
                      className="relative outline-none transition-colors duration-300 px-3 py-3 z-20 flex-1"
                      tabIndex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <div className="relative z-10">
                        <div className="flex flex-center gap-2">
                          <div className="text-14">1m</div>
                          <div className="text-12 text-secondary flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="13"
                              viewBox="0 0 12 13"
                              fill="none"
                            >
                              <path
                                d="M5.97344 8.98594L5.26644 8.27894L3.99844 9.54694V2.96094H2.99844V9.54694L1.73094 8.27894L1.02344 8.98594L3.49844 11.4609L5.97344 8.98594ZM10.9734 4.93594L8.49844 2.46094L6.02344 4.93594L6.73044 5.64294L7.99894 4.37494L7.99844 10.9609H8.99844V4.37494L10.2664 5.64294L10.9734 4.93594Z"
                                fill="#B3BEC1"
                              ></path>
                            </svg>
                            <span>7.5</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  className="accordion accordion-collapse"
                  data-orientation="vertical"
                >
                  <div data-state="closed" data-orientation="vertical">
                    <div
                      data-state="closed"
                      id="radix-:r44:"
                      hidden=""
                      role="region"
                      aria-labelledby="radix-:r43:"
                      data-orientation="vertical"
                      className="accordion-content overflow-hidden"
                      style={{
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <button className="detrade-button items-center justify-center max-w-full rounded-2 shadow active:translate-y-px outline-none transition-all whitespace-nowrap font-700 capitalize disabled:pointer-events-none disabled:opacity-50 hoverable bg-layer5 text-secondary hover:text-primary h-8 px-2 text-12 sm:h-10 sm:px-3 sm:text-14 flex gap-2 ml-auto">
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>How It Works</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex-1 detrade-card mt-10">
        <div className="mb-2">
          <div className="relative text-sm leading-4 text-secondary font-medium min-h-12 inline-flex gap-1 p-1 rounded-2 bg-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative outline-none transition-colors duration-300 px-3 py-3 z-20 ${
                  activeTab === tab ? " text-green-600" : "text-[#b0bbbe]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {activeTab === "Public Bets" && (
          <div className="relative overflow-auto">
            <table className="w-full text-primary font-medium text-sm leading-6">
              <thead>
                <tr className="text-secondary font-medium capitalize">
                  <th className="pl-3 py-2">Player</th>
                  <th className="pl-3 py-2">Pair</th>
                  <th className="pr-3 py-2">Currency</th>
                  <th className="pr-3 py-2">Wager</th>
                  <th className="pr-3 py-2">Spread</th>
                  <th className="pr-3 py-2">Entry</th>
                  <th className="pr-3 py-2">Exit</th>
                  <th className="pr-3 py-2">Yield</th>
                  <th className="pr-3 py-2">Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="pl-3 pr-0 py-2">BTC</td>
                  <td className="pr-3 py-2">USDT</td>
                  <td className="pr-3 py-2">0.99991</td>
                  <td className="pr-3 py-2">2.7</td>
                  <td className="pr-3 py-2">97,036.31</td>
                  <td className="pr-3 py-2">97,059.27</td>
                  <td className="pr-3 py-2">105%</td>
                  <td className="pr-3 py-2 text-green-500">1.0499055</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HighLowSpreed;
