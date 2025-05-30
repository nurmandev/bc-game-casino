

// Image import
import crypto from "../../../public/Daily_contest_image/daily_contest_image/c-icon.webp";
import doge from "../../../public/Daily_contest_image/daily_contest_image/DOGE.webp";
import inr from "./../../../public/Daily_contest_image/daily_contest_image/INR.rect.png";

const AllBets = () => {
  // Sample data for bets (replace this with actual data from API or props)
  const bets = [
    { id: "1817483690782020100", bet: "₹0.84", payout: "0x", profit: "-₹0.84", img: crypto },
    { id: "1817483690405580804", bet: "₹0.84", payout: "0x", profit: "-₹0.84", img: doge },
    { id: "1817483690024947204", bet: "₹0.84", payout: "0x", profit: "-₹0.84", img: inr },
    { id: "181748369626487812", bet: "₹0.84", payout: "0x", profit: "-₹0.84", img: crypto },
    { id: "1817483799384086020", bet: "₹67.80", payout: "1x", profit: "₹0.00", img: doge },
    { id: "1817483610369868804", bet: "₹0.84", payout: "0x", profit: "-₹0.84", img: inr },
    { id: "1817483216000433668", bet: "₹16.95", payout: "0x", profit: "-₹16.95", img: crypto },
  ];

  return (
    <div className="container mx-auto py-6 rounded">
      <div className="overflow-x-auto rounded bg-[#323738]">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-[#323738]">
              <th className="text-left py-3 px-4 text-[#B3BEC1]">Bet ID</th>
              <th className="text-left py-3 px-4 text-[#B3BEC1]">Bet</th>
              <th className="text-left py-3 px-4 text-[#B3BEC1]">Payout</th>
              <th className="text-left py-3 px-4 text-[#B3BEC1]">Profit</th>
            </tr>
          </thead>
          <tbody>
            {bets.map((bet, index) => (
              <tr
                key={bet.id}
                className={`border-b border-gray-700 cursor-pointer ${index % 2 === 0 ? "bg-[#3A4142]" : "bg-[#323738]"}`}
              >
                <td className="py-3 px-4 hover:underline font-bold">{bet.id}</td>
                <td className="py-3 px-4 text-[#B3BEC1] font-bold flex items-center">
                  {bet.bet}
                  <img src={bet.img} alt="Coin" className="w-6 h-6 ml-2" /> {/* Displaying the image */}
                </td>
                <td className="py-3 px-4 text-[#B3BEC1] font-bold">{bet.payout}</td>
                <td className={`py-3 px-4 font-bold flex items-center ${bet.profit.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {bet.profit}
                  <img src={bet.img} alt="Coin" className="w-6 h-6 ml-2" /> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button className="bg-[#464F50] text-white font-bold py-2 px-4 rounded mb-4">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBets;
