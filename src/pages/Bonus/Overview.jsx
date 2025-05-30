import gudda from "../../../public/Active-images/gudda.png";

const Overview = () => {
  const bonuses = [
    { type: "Quest Bonus", amount: "₹0.00" },
    { type: "Lucky Spin", amount: "₹0.00" },
    { type: "Roll Competition", amount: "₹0.00" },
    { type: "Recharge", amount: "₹0.00" },
    { type: "Weekly Bonus", amount: "₹0.00" },
    { type: "Monthly Bonus", amount: "₹0.00" },
    { type: "Sports Weekly Bonus", amount: "₹0.00" },
    { type: "Level-up Bonus", amount: "₹0.00" },
    { type: "Free Spin", amount: "₹0.00" },
    { type: "Deposit Bonus", amount: "₹0.00" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 text-white rounded-lg shadow-lg">
      <div className="max-h-[400px] overflow-y-auto scroll-smooth snap-y">
        {/* Table Header */}
        <div className="flex justify-between font-bold border-b pb-2 text-lg">
          <span className="text-gray-300">Bonus Type</span>
          <span className="text-gray-300">Total Claimed</span>
        </div>

        {/* Bonus List */}
        <div className="space-y-3 mt-2">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex justify-between border-b pb-2 snap-start">
              <div className="flex items-center gap-2">
                <img src={gudda} alt="" className="w-8 h-8 rounded-full" />
                <span className="text-gray-300">{bonus.type}</span>
              </div>
              <span className="text-green-400 font-semibold">
                {bonus.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
