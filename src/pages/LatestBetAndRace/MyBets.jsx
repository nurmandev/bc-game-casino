import img from "../../../public/Daily_contest_image/daily_contest_image/empty.webp";

const MyBets = () => {
  return (
    <>
      <div className="container mx-auto py-6 rounded">
        <nav className="bg-[#323738] text-white py-4 px-6 rounded-t-lg ">
          <ul className="flex space-x-4  justify-between items-center font-bold">
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Bet ID
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Bet
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Payout
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B3BEC1]">
                Profit
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center justify-center py-12 bg-[#3A4142] rounded">
          <img src={img} alt="No data" className="mb-4 w-60 h-60" />
          <p className="text-white text-lg">Oops! There is no data yet!</p>
        </div>
      </div>
    </>
  );
};

export default MyBets;

// //if data is present code run otherwives

// import React from "react";

// import img from "./../../public/empty.webp";

// const MyBets = () => {
//   // Sample data for bets (empty for testing no-data behavior)
//   const bets = []; // Replace with API or actual data

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4 text-white">All Bets</h1>
//       <div className="overflow-x-auto bg-[#3A4142] text-white rounded-lg p-4">
//         {bets.length > 0 ? (
//           <table className="min-w-full">
//             <thead>
//               <tr className="bg-[#3A4142]">
//                 <th className="text-left py-3 px-4">Bet ID</th>
//                 <th className="text-left py-3 px-4">Bet</th>
//                 <th className="text-left py-3 px-4">Payout</th>
//                 <th className="text-left py-3 px-4">Profit</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bets.map((bet, index) => (
//                 <tr key={index} className="border-t border-gray-700">
//                   <td className="py-3 px-4">{bet.id}</td>
//                   <td className="py-3 px-4">{bet.bet}</td>
//                   <td className="py-3 px-4">{bet.payout}</td>
//                   <td className="py-3 px-4">{bet.profit}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="flex flex-col items-center justify-center py-12">
//             <img
//               src={img} // Replace with your placeholder image URL
//               alt="No data"
//               className="mb-4 w-40 h-40"
//             />
//             <p className="text-white text-lg">Oops! There is no data yet!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyBets;

// import React from "react";
// import img from "./../../public/empty.webp";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#3A4142] text-white py-4 px-6">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="/" className="text-xl font-bold">
//           MyApp
//         </a>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="/home" className="hover:text-gray-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="hover:text-gray-300">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="hover:text-gray-300">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const MyBets = () => {
//   const bets = []; // Replace with actual data

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navbar */}
//       <Navbar />

//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-2xl font-bold mb-4">All Bets</h1>

//         {bets.length > 0 ? (
//           <div className="overflow-x-auto bg-[#3A4142] text-white rounded-lg p-4">
//             <table className="min-w-full">
//               <thead>
//                 <tr className="bg-[#3A4142]">
//                   <th className="text-left py-3 px-4">Bet ID</th>
//                   <th className="text-left py-3 px-4">Bet</th>
//                   <th className="text-left py-3 px-4">Payout</th>
//                   <th className="text-left py-3 px-4">Profit</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bets.map((bet, index) => (
//                   <tr key={index} className="border-t border-gray-700">
//                     <td className="py-3 px-4">{bet.id}</td>
//                     <td className="py-3 px-4">{bet.bet}</td>
//                     <td className="py-3 px-4">{bet.payout}</td>
//                     <td className="py-3 px-4">{bet.profit}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center py-12">
//             <img
//               src={img}
//               alt="No data"
//               className="mb-4 w-40 h-40"
//             />
//             <p className="text-white text-lg">Oops! There is no data yet!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyBets;
