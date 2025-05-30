import ticketbg from "../../../public/Weekly_Raffle_Image/Active-images/ticket-bg.webp";
import gudda from "../../../public/Weekly_Raffle_Image/Active-images/gudda.png";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const WinnerList = () => {
  const winners = [
    { img: gudda, name: "Gudda", ticket: "00000001", prize: "₹500,000.00" },
    { img: gudda, name: "Wytascmnzqac", ticket: "41004023", prize: "₹432,758.71" },
    { img: gudda, name: "Vincente1111", ticket: "15926267", prize: "₹302,931.09" },
    { img: gudda, name: "mmnnnnncccccnnnb", ticket: "38002996", prize: "₹173,103.48" },
    { img: gudda, name: "Takjkdcpesac", ticket: "70004100", prize: "₹129,827.61" },
    { img: gudda, name: "Rg Fg", ticket: "27004451", prize: "₹86,551.74" },
    { img: gudda, name: "zalak Vaghasiya", ticket: "27002675", prize: "₹43,275.87" },
    { img: gudda, name: "Fodkybclupac", ticket: "70004263", prize: "₹43,275.87" },
    { img: gudda, name: "Soon5488", ticket: "75003570", prize: "₹43,275.87" },
    { img: gudda, name: "Rtrlretectcc", ticket: "78002712", prize: "₹43,275.87" },
    { img: gudda, name: "Mzgdybtyjpac", ticket: "81000542", prize: "₹43,275.87" },
    { img: gudda, name: "Ronjleglluac", ticket: "56000670", prize: "₹8,655.17" },
    { img: gudda, name: "Xrskhexxiuac", ticket: "21004483", prize: "₹8,655.17" },
    { img: gudda, name: "Ojhbkdblesac", ticket: "24000566", prize: "₹8,655.17" },
    { img: gudda, name: "Vadym777", ticket: "66423550", prize: "₹8,655.17" },
    { img: gudda, name: "winwin333", ticket: "32000155", prize: "₹8,655.17" },
    { img: gudda, name: "Secco2717", ticket: "72004642", prize: "₹8,655.17" },
    { img: gudda, name: "Vikash Dsejpr", ticket: "66001815", prize: "₹8,655.17" },
    { img: gudda, name: "Aonzwbjfjpac", ticket: "91004797", prize: "₹8,655.17" },
    { img: gudda, name: "EDDIE2HONG", ticket: "80000523", prize: "₹8,655.17" },
    { img: gudda, name: "Chummajaj", ticket: "93002896", prize: "₹8,655.17" },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWinners = winners.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(winners.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="px-2">
        <table className="min-w-full text-left snap-x scroll-smooth border-collapse">
          <thead>
            <tr className="text-[#afbbc0] border-b">
              <th className="p-2">No.</th>
              <th className="p-2">Winner Name</th>
              <th className="p-2">Ticket Number</th>
              <th className="p-2">Prize</th>
            </tr>
          </thead>
          <tbody>
            {currentWinners.map((winner, index) => (
              <tr key={index} className="text-white border-b">
                <td className="p-2">{index + 1}</td>

                {/* Winner Name with Image */}
                <td className="p-2 flex items-center gap-2">
                  {winner.img && (
                    <img
                      src={winner.img}
                      alt={winner.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  {winner.name}
                </td>

                {/* Ticket Number with Background */}
                <td className="p-2">
                  <div
                    className="flex items-center justify-center text-[20px] font-semibold"
                    style={{
                      backgroundImage: `url(${ticketbg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: 150,
                      height: 38,
                    }}
                  >
                    {winner.ticket}
                  </div>
                </td>

                {/* Prize */}
                <td className="text-[#24ee89] p-2">{winner.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-start mt-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
          >
           <FaChevronLeft />
          </button>
          <span className="mx-4 text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnerList;
