const betsData = [
  {
    id: 1,
    event: "Ribecai, Michele - Binda, Alexandr",
    outcome: "Binda, Alexandr, Winner",
    odds: "2.550",
    stake: "340.00 $",
    potentialWin: "867.00 $",
    user: "****rac",
    sportIcon: "sport-tennis",
    live: true,
  },
  {
    id: 2,
    event: "MongolZ - Astralis",
    outcome: "Astralis, Winner",
    odds: "2.620",
    stake: "186.00 ✕",
    potentialWin: "487.32 ✕",
    user: "****tac",
    sportIcon: "sport-counterstrike",
    live: false,
  },
  {
    id: 3,
    event: "Armenia - Liechtenstein",
    outcome: "Armenia (-3.5), Handicap",
    odds: "2.070",
    stake: "100.00 USDT",
    potentialWin: "207.00 USDT",
    user: "****tac",
    sportIcon: "sport-soccer",
    live: true,
  },
];

const BeetsFeed = () => {
  return (
    <>
      <div className="p-4  overflow-x-scroll custom-scrollbar whitespace-nowrap hide-scrollbar">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-[#292d2e]">
              <th className="border p-2 text-left">Event</th>
              <th className="border p-2 text-left">Outcome</th>
              <th className="border p-2 text-left">Odds</th>
              <th className="border p-2 text-left">Stake</th>
              <th className="border p-2 text-left">Potential Win</th>
              <th className="border p-2 text-left">User</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {betsData.map((bet) => (
              <tr key={bet.id} className="">
                <td className="border p-2 flex items-center space-x-2">
                  <svg className="w-4 h-4" data-cy={bet.sportIcon}>
                    <path d="M21.8897 15.3026L23.9308 13.2615L21.8897 11.2204L19.8485 13.2615L21.8897 15.3026Z" />
                  </svg>
                  {bet.live && (
                    <svg className="w-4 h-4" fill="#FF4E4E">
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  )}
                  <span>{bet.event}</span>
                </td>
                <td className="border p-2">{bet.outcome}</td>
                <td className="border p-2">{bet.odds}</td>
                <td className="border p-2">{bet.stake}</td>
                <td className="border p-2">{bet.potentialWin}</td>
                <td className="border p-2 flex items-center space-x-2">
                  <svg className="w-4 h-4" data-cy="ic-user">
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <span>{bet.user}</span>
                </td>
                <td className="border p-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center space-x-1">
                    <svg className="w-3 h-3" viewBox="0 0 10 10">
                      <path d="M6 1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1L4 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H4L4 9C4 9.55228 4.44771 10 5 10C5.55228 10 6 9.55228 6 9V6H9C9.55229 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4H6V1Z" />
                    </svg>
                    <span>Add to betslip</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BeetsFeed;
