import { useState } from "react";

const Mtt = () => {
  const [Mtt, SetMtt] = useState("All");
  return (
    <div className="w-full  ">
      <div className=" ">
        <div className="mt-5 bg-[rgb(41,45,46)] w-[100%] h-[40px] px-5 rounded-lg flex items-center gap-4 font-bold text-gray-400 text-[14px] overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
          <div
            onClick={() => SetMtt("All")}
            className={`w-[50%] p-1 rounded-lg px-3 text-center ${
              Mtt === "All"
                ? "bg-[#3a4142] text-white font-bold px-2"
                : " bg-[#282c2c] "
            }`}
          >
            <button className="">All</button>
          </div>
          <div
            onClick={() => SetMtt("NLHE")}
            className={`w-[50%] p-1 rounded-lg px-3 text-center ${
              Mtt === "NLHE"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "  bg-[#282c2c]"
            }`}
          >
            <button>NLHE</button>
          </div>
          <div
            onClick={() => SetMtt("PLO")}
            className={`w-[50%] p-1 rounded-lg px-3 text-center ${
              Mtt === "PLO"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "   bg-[#282c2c]"
            }`}
          >
            <button>PLO</button>
          </div>
          <div
            onClick={() => SetMtt("Short Deck")}
            className={`w-[50%] p-1 rounded-lg px-3 text-center ${
              Mtt === "Short Deck"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "   bg-[#282c2c]"
            }`}
          >
            <button>Short Deck</button>
          </div>
          <div
            onClick={() => SetMtt("Satellite")}
            className={`w-[50%] p-1 rounded-lg px-3 text-center ${
              Mtt === "Satellite"
                ? "bg-[#3a4142] px-2 text-white font-bold"
                : "   bg-[#282c2c]"
            }`}
          >
            <button>Satellite</button>
          </div>
        </div>
        <div>
          {Mtt === "All" && (
           <div>content</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mtt;
