import { useState } from "react";
import Active from "./Active";
import Past from "./Past";
import MyWinning from "./MyWinning";

const MyTicket = () => {
  const [show, setShow] = useState("Active");

  return (
    <div>
      <div className="w-full h-auto bg-[#323738] mt-3 mb-5 rounded-xl pb-10 pt-5 ">
        {/* ticket */}
        <div className="w-[97%] m-auto relative">
          {/* ticket */}
          <div className="w-full h-[110px] bg-[#314940] transparent  flex  rounded-xl  border border-[#414141]   ">
            <div className="w-[50%] p-5  pl-10 flex flex-col items-start gap-3">
              <div className="flex items-center justify-start gap-3 ">
                <img
                  src="../../public/ticket-money.webp"
                  alt=""
                  className="w-[28px] "
                />
                <p className="text-[#9a9796] ">
                  Total tickets:{" "}
                  <span className="text-[18px] font-bold text-white ml-2 ">
                    0
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 ">
                <img
                  src="../../public/hatofking.webp"
                  alt=""
                  className="w-[28px] "
                />
                <p className="text-[#9a9796]  ">
                  Total winning tickets:{" "}
                  <span className="text-[18px] font-bold text-white ml-2 ">
                    0
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="absolute w-[30px] h-[30px] bg-[#323738] rounded-full mt-[110px] border-t-2 border-[#414141]  "></div>
              <div className="absolute w-[30px] h-[30px] bg-[#323738] rounded-full  mb-[110px] border-b-2 border-[#414141]    "></div>
            </div>
            <div className="w-[50%] border-l-2 border-dashed flex items-center justify-evenly">
              <div className="flex items-center justify-start gap-3 text-white">
                <img src="../../public/coin-D7vizJGk.webp" alt="" className="sm:hidden md:block" />
                <p className="flex items-center justify-normal text-[#9a9796] ">
                  Total Prize won:
                  <span className="text-[30px] font-bold ml-3 text-[#2cc77d] sm:hidden md:block ">
                    ₹0.00
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Active Function */}
          <div className="flex items-center justify-between mt-5 text-[#b3bec1]">
            <div
              className={`w-[250px] cursor-pointer ${
                show === "Active" ? "text-white font-bold" : "hover:text-white"
              }`}
              onClick={() => setShow("Active")}
            >
              <div className="flex flex-col items-center justify-center">
                <h3>Active</h3>
                {show === "Active" && (
                  <div className="lg:w-[250px] md:w-[250px] bg-green-500 h-[3px] mt-2 transition-all duration-[2000ms] ease-in-out"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setShow("Past")}
              className={`w-[250px] cursor-pointer ${
                show === "Past" ? "text-white font-bold" : "hover:text-white"
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <h3>Past</h3>
                {show === "Past" && (
                  <div className="lg:w-[250px] md:w-[250px] bg-green-500 h-[3px] mt-2 transition-all duration-[2000ms] ease-in-out"></div>
                )}
              </div>
            </div>
            <div
              onClick={() => setShow("MyWinning")}
              className={`w-[250px] cursor-pointer ${
                show === "MyWinning"
                  ? "text-white font-bold"
                  : "hover:text-white"
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <h3>My Winning</h3>
                {show === "MyWinning" && (
                  <div className="lg:w-[250px] md:w-[250px] bg-green-500 h-[3px] mt-2 transition-all duration-[2000ms] ease-in-out"></div>
                )}
              </div>
            </div>
          </div>

          {show === "Active" && <Active />}
          {show === "Past" && <Past />}
          {show === "MyWinning" && <MyWinning />}
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
