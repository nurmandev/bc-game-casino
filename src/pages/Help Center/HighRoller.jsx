import React from "react";

// Game Icon
import fireball from './../../public/Crash-CeU4S73_.png';
import card from './../../public/BlackJack-eZoANKaD.png';
import rokect from './../../public/Limbo-ijXB8ZlP.webp';



// currency
import inr from './../../public/INR.rect.png';
import Ticon from './../../public/t_icon.webp';
import crypto from './../../public/c-icon.webp';
import doge from './../../public/DOGE.webp';



const HighRoller = () => {
  // Sample data for high rollers
  const highRollers = [
    {
      game: "Tower legened",
      GameIcon: rokect,
      player: "Rdrmwdiitac",
      betAmount: "₹33,928.21",
      multiplier: "1.28x",
      profit: "+₹9,737.39",
      currency: inr,
    },
    {
      game: "Crash",
      GameIcon: card,
      player: "Raj991984",
      betAmount: "₹32,000.00",
      multiplier: "2.00x",
      profit: "+₹32,000.00",
      currency: Ticon,
    },
    {
      game: "CoinFlip",
      GameIcon: fireball,
      player: "Voxify",
      betAmount: "₹43,221.82",
      multiplier: "7.92x",
      profit: "+₹2,99,095.04",
      currency: crypto,
    },
    {
      game: "Super Speed Baccarat",
      GameIcon: rokect,
      player: "Mike Dvash",
      betAmount: "₹9,940.71",
      multiplier: "1.95x",
      profit: "+₹9,443.67",
      currency: doge,
    },
    {
      game: "Crash",
      GameIcon: card,
      player: "Vcljgkfsmyb",
      betAmount: "₹18,391.73",
      multiplier: "2.99x",
      profit: "+₹36,599.55",
      currency: inr,
    },
    {
      game: "Crash",
      GameIcon: fireball,
      player: "Hidden",
      betAmount: "₹10,875.69",
      multiplier: "2.00x",
      profit: "+₹10,875.69",
      currency: Ticon,
    },
    {
      game: "VIP Blackjack ",
      GameIcon: rokect,
      player: "Hidden",
      betAmount: "₹8,475.45",
      multiplier: "2.00x",
      profit: "+₹8,475.45",
      currency: crypto,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      
      <div className="overflow-x-auto bg-gray-800 text-[#B3BEC1] rounded-lg">
        {highRollers.length > 0 ? (
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#323738] mr-3">
                <th className="text-left py-3 px-4 ">Game</th>
                <th className="text-left py-3 px-4 ">Player</th>
                <th className="text-left py-3 px-4 ">Bet Amount</th>
                <th className="text-left py-3 px-4 ">Multiplier</th>
                <th className="text-left py-3 px-4 ">Profit</th>
              </tr>
            </thead>
            <tbody>
              {highRollers.map((roller, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700  ${
                    index % 2 === 0 ? " bg-[#3A4142]" : "bg-[#323738]"
                  }`}
                >
                  <td className="py-3 px-4 flex items-center gap-1 cursor-pointer">
                  <img src={roller.GameIcon} alt="Coin" className="w-6 h-6 ml-2" />
                    <span>{roller.game}</span>
                    
                  </td>
                  <td className="py-3 px-4">{roller.player}</td>
                  <td className="py-3 px-4 flex">{roller.betAmount}
                  <img src={roller.currency} alt="Coin" className="w-6 h-6 ml-2" />
                  </td>
                  <td className="py-3 px-4">{roller.multiplier}</td>
                  <td
                    className={`py-3 px-4 flex ${
                      roller.profit.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {roller.profit}  
                    <img src={roller.currency} alt="Coin" className="w-6 h-6 ml-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="No data"
              className="mb-4 w-40 h-40"
            />
            <p className="text-gray-400 text-lg">Oops! No High Rollers yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighRoller;
