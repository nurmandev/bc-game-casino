import TransferIn from "./TransferIn";
import TransferOut from "./TransferOut";
import { useState } from "react";

const Valuitpro1 = () => {
  const [deposit, SetDeposit] = useState("TransferIn");
  return (
    <div>
      <div className="w-full bg-[#232626] h-[40px] rounded-xl flex items-center justify-around font-bold text-gray-400 text-[14px] ">
        <div
          onClick={() => SetDeposit("TransferIn")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "TransferIn"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white hover:bg-gray-600"
          }`}
        >
          <div className="text-center my-3">
            <button className=""> Transfer In</button>
          </div>
        </div>
        <div
          onClick={() => SetDeposit("TransferOut")}
          className={`w-[50%] h-[40px] rounded-xl ${
            deposit === "TransferOut"
              ? "bg-[#3a4142] text-white font-bold"
              : " hover:text-white hover:bg-gray-600"
          }`}
        >
          <div className="text-center my-3">
            <button>Transfer Out</button>
          </div>
        </div>
      </div>
      <div>
        {deposit === "TransferIn" && <TransferIn />}
        {deposit === "TransferOut" && <TransferOut />}
      </div>
    </div>
  );
};

export default Valuitpro1;
