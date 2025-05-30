import { useState } from "react";
import Crypto from "./Crypto";
import Flate from "./Flate";

const Deposite = () => {
  const [deposit, SetDeposit] = useState("Crypto");
  return (
    <>
      <div className="w-full bg-[#323738] h-[40px] rounded-lg flex items-center justify-around font-bold text-gray-400 text-[14px] ">
        <div
          onClick={() => SetDeposit("Crypto")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "Crypto"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white hover:bg-gray-600"
          }`}
        >
          <div className="text-center my-3">
            <button className=""> Crypto</button>
          </div>
          
        </div>
        <div
          onClick={() => SetDeposit("flate")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "flate"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white hover:bg-gray-600"
          }`}
        >
          <div className="text-center my-3">
            <button>Fait</button>
          </div>
        </div>
      </div>
      <div>
        {deposit === "Crypto" && <Crypto />}
        {deposit === "flate" && <Flate />}
      </div>
    </>
  );
};

export default Deposite;
