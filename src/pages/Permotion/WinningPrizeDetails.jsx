const WinningPrizeDetails = () => {
  const prizeData = [
    { result: "No. 1", prize: "₹432,121.65" },
    { result: "No. 2", prize: "₹302,485.15" },
    { result: "No. 3", prize: "₹172,848.66" },
    { result: "No. 4", prize: "₹129,636.49" },
    { result: "No. 5", prize: "₹86,424.33" },
    { result: "No. 6", prize: "₹43,212.16" },
    { result: "No. 7", prize: "₹43,212.16" },
    { result: "No. 8", prize: "₹43,212.16" },
    { result: "No. 9", prize: "₹43,212.16" },
    { result: "No. 10", prize: "₹43,212.16" },
    { result: "No. 11 ~ No. 20", prize: "₹8,642.43" },
    { result: "No. 21 ~ No. 50", prize: "₹4,321.21" },
    { result: "No. 51 ~ No. 150", prize: "₹1,728.48" },
  ];

  return (
    <div>
      <div className="bg-[#292d2e] p-3 py-10 px-10 rounded-xl mt-2">
        {prizeData.map((items, index) => (
          <div key={index} className=" ">
            <div className="flex items-center justify-between p-2 ">
              <div
                className={`text-white ${index === 0 ? "text-[#25c75c]" : ""}`}
              >
                {items.result}{" "}
              </div>
              <div className="text-[#25c75c] "> {items.prize} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinningPrizeDetails;
